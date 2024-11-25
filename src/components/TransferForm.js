import React, { useState } from 'react';
import { TextField, Button, Box, MenuItem, Snackbar, Alert } from '@mui/material';
import { useStore } from '@nanostores/react';
import { accountsStore, addTransfer } from '../contexts/GlobalState';

const TransferForm = ({ onClose }) => {
    const [amount, setAmount] = useState('');
    const [fromAccount, setFromAccount] = useState('');
    const [toAccount, setToAccount] = useState('');
    const [errors, setErrors] = useState({});
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const { accounts } = useStore(accountsStore);

    const validate = () => {
        let tempErrors = {};
        tempErrors.amount = amount ? '' : 'Amount is required';
        tempErrors.amount = amount && (!/^[0-9]+$/.test(amount) || amount <= 0) ? 'Amount must be a positive number' : tempErrors.amount;
        tempErrors.fromAccount = fromAccount ? '' : 'From Account is required';
        tempErrors.toAccount = toAccount ? '' : 'To Account is required';
        if (fromAccount && toAccount && fromAccount === toAccount) {
            tempErrors.toAccount = 'Cannot transfer to the same account';
        }
        if (fromAccount && amount) {
            const fromAcc = accounts.find(acc => acc.id === fromAccount);
            if (fromAcc && fromAcc.balance < amount) {
                tempErrors.amount = 'Insufficient balance in the from account';
            }
        }
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === '');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            addTransfer({ amount, fromAccountId: fromAccount, toAccountId: toAccount, date: new Date().toISOString() });
            setAmount('');
            setFromAccount('');
            setToAccount('');
            setSnackbarMessage('Transfer successful');
            setSnackbarOpen(true);
            if (onClose) onClose();
        } else {
            setSnackbarMessage('Transfer failed due to validation errors');
            setSnackbarOpen(true);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    return (
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
                label="From Account"
                variant="outlined"
                select
                value={fromAccount}
                onChange={(e) => setFromAccount(e.target.value)}
                error={!!errors.fromAccount}
                helperText={errors.fromAccount}
                fullWidth
                name="fromAccount"
            >
                {accounts.map(account => (
                    <MenuItem key={account.id} value={account.id}>
                        {account.name}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                label="To Account"
                variant="outlined"
                select
                value={toAccount}
                onChange={(e) => setToAccount(e.target.value)}
                error={!!errors.toAccount}
                helperText={errors.toAccount}
                fullWidth
                name="toAccount"
            >
                {accounts.map(account => (
                    <MenuItem key={account.id} value={account.id}>
                        {account.name}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                label="Amount"
                variant="outlined"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                error={!!errors.amount}
                helperText={errors.amount}
                fullWidth
                name="amount"
            />
            <Button type="submit" variant="contained" color="primary">
                Transfer
            </Button>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
            >
                <Alert onClose={handleCloseSnackbar} severity={Object.values(errors).some(x => x) ? 'error' : 'success'} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default TransferForm;
