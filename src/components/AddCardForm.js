import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import { useStore } from '@nanostores/react';
import { accountsStore } from '../contexts/GlobalState';

const generateCardNumber = () => {
    return Array.from({ length: 16 }, () => Math.floor(Math.random() * 10)).join('');
};

const generateExpiryDate = () => {
    const now = new Date();
    const expiryYear = now.getFullYear() + Math.floor(Math.random() * 5) + 1;
    const expiryMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    return `${expiryMonth}/${String(expiryYear).slice(-2)}`;
};

const generateCVV = () => {
    return String(Math.floor(Math.random() * 900) + 100);
};

const AddCardForm = ({ open, setOpen }) => {
    const [cardholderName, setCardholderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [formErrors, setFormErrors] = useState({});

    const { cards } = useStore(accountsStore);

    useEffect(() => {
        if (open) {
            setCardNumber(generateCardNumber());
            setExpiryDate(generateExpiryDate());
            setCvv(generateCVV());
        }
    }, [open]);

    const addCard = (newCard) => {
        accountsStore.setKey('cards', [...cards, newCard]);
    };

    const validateForm = () => {
        const errors = {};
        if (!cardholderName) errors.cardholderName = 'Cardholder Name is required';
        return errors;
    };

    const handleAddCard = () => {
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            addCard({ id: Date.now(), cardholderName, cardNumber, expiryDate, cvv });
            setOpen(false);
            setCardholderName('');
            setCardNumber('');
            setExpiryDate('');
            setCvv('');
            setFormErrors({});
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <Dialog open={open} onClose={() => setOpen(false)} data-testid="add-card-dialog">
            <DialogTitle>Add New Card</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Cardholder Name"
                    type="text"
                    fullWidth
                    value={cardholderName}
                    onChange={(e) => setCardholderName(e.target.value)}
                    error={!!formErrors.cardholderName}
                    helperText={formErrors.cardholderName}
                    data-testid="cardholder-input"
                />
                <TextField
                    margin="dense"
                    label="Card Number"
                    type="text"
                    fullWidth
                    value={cardNumber}
                    disabled
                    data-testid="number-input"
                />
                <TextField
                    margin="dense"
                    label="Expiry Date"
                    type="text"
                    fullWidth
                    value={expiryDate}
                    disabled
                    data-testid="expiration-input"
                />
                <TextField
                    margin="dense"
                    label="CVV"
                    type="text"
                    fullWidth
                    value={cvv}
                    disabled
                    data-testid="cvv-input"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)} data-testid="cancel-button">Cancel</Button>
                <Button onClick={handleAddCard} data-testid="submit-add-card-button">Add</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddCardForm;