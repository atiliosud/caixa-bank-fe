import React, { useEffect, useState } from 'react';
import { Typography, List, ListItem, ListItemText, Paper, Box, Divider } from '@mui/material';
import { useStore } from '@nanostores/react';
import { accountsStore } from '../contexts/GlobalState';

// Helper function to format date as MM/DD/YYYY
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1; // Months are zero-based
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
};

const AccountDetails = ({ accountId }) => {
    const { accounts, movements } = useStore(accountsStore);
    const [account, setAccount] = useState(null);
    const [accountMovements, setAccountMovements] = useState([]);

    useEffect(() => {
        const selectedAccount = accounts.find((acc) => acc.id === accountId);
        const selectedMovements = movements.filter((mov) => mov.accountId === accountId);

        setAccount(selectedAccount);
        setAccountMovements(selectedMovements);
    }, [accountId, accounts, movements]);

    if (!account) {
        return (
            <Typography variant="h6" color="error">
                Account not found
            </Typography>
        );
    }

    return (
        <Paper sx={{ p: 2, mt: 2 }}>
            <Box sx={{ mb: 2 }}>
                <Typography variant="h6">{account.name}</Typography>
                <Typography variant="body1">Balance: {account.balance}</Typography>
                <Typography variant="body1">Account Number: {account.accountNumber}</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" sx={{ mt: 2 }}>Recent Transactions</Typography>
            <List>
                {accountMovements.map((movement) => (
                    <ListItem key={movement.id}>
                        <ListItemText
                            primary={movement.description}
                            secondary={`Amount: ${movement.amount} - Date: ${formatDate(movement.date)}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default AccountDetails;