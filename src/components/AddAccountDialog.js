import React, { useState } from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Select, MenuItem, InputLabel, FormControl, Typography
} from '@mui/material';

const AddAccountDialog = ({ open, setOpen, setSnackbarOpen, onAddAccount }) => {
    const [accountName, setAccountName] = useState('');
    const [accountBalance, setAccountBalance] = useState('');
    const [type, setType] = useState('');
    const [currency, setCurrency] = useState('');
    const [formErrors, setFormErrors] = useState({});

    const handleAdd = () => {
        onAddAccount({
            accountName,
            accountBalance,
            type,
            currency,
        });
        setOpen(false);
        setAccountName('');
        setAccountBalance('');
        setType('');
        setCurrency('');
    };

    return (
        <Dialog data-testid="add-account-dialog" open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Add New Account</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Account Name"
                    type="text"
                    fullWidth
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                    error={!!formErrors.name}
                    helperText={formErrors.name}
                    data-testid="description-input"
                />
                <TextField
                    margin="dense"
                    label="Account Balance"
                    type="number"
                    fullWidth
                    value={accountBalance}
                    onChange={(e) => setAccountBalance(e.target.value)}
                    error={!!formErrors.balance}
                    helperText={formErrors.balance}
                    data-testid="account-balance-input"
                />
                <FormControl fullWidth sx={{ mt: 2 }} data-testid="type-select">
                    <InputLabel id="type-label">Type</InputLabel>
                    <Select
                        labelId="type-label"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        error={!!formErrors.type}
                        label="Type"
                    >
                        <MenuItem value="Checking">Checking</MenuItem>
                        <MenuItem value="Savings">Savings</MenuItem>
                        <MenuItem value="Business">Business</MenuItem>
                        <MenuItem value="Investment">Investment</MenuItem>
                    </Select>
                    {!!formErrors.type && <Typography color="error">{formErrors.type}</Typography>}
                </FormControl>
                <FormControl fullWidth sx={{ mt: 2 }} data-testid="currency-select">
                    <InputLabel id="currency-label">Currency</InputLabel>
                    <Select
                        labelId="currency-label"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        error={!!formErrors.currency}
                        label="Currency"
                    >
                        <MenuItem value="EUR">EUR</MenuItem>
                        <MenuItem value="USD">USD</MenuItem>
                        <MenuItem value="GBP">GBP</MenuItem>
                        <MenuItem value="JPY">JPY</MenuItem>
                    </Select>
                    {!!formErrors.currency && <Typography color="error">{formErrors.currency}</Typography>}
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)} data-testid="cancel-add-button">Cancel</Button>
                <Button onClick={handleAdd} data-testid="submit-button">Add</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddAccountDialog;