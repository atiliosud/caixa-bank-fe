import React, { useMemo, useCallback } from 'react';
import { List, ListItem, ListItemText, Paper, Typography, CircularProgress } from '@mui/material';
import useAccountData from '../hooks/useAccountData';

const AccountMovements = React.memo(({ accountId }) => {
    const { accountMovements, accountTransfers, loading, error } = useAccountData(accountId);

    // Función para formatear la fecha en formato yyyy-MM-dd
    const formatDate = useCallback((date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }, []);

    // Memoriza los elementos de la lista de movimientos
    const movementItems = useMemo(() => (
        accountMovements.map((movement) => (
            <ListItem key={movement.id}>
                <ListItemText
                    primary={movement.description}
                    secondary={`Amount: ${movement.amount}, Date: ${formatDate(movement.date)}`}
                />
            </ListItem>
        ))
    ), [accountMovements, formatDate]);

    // Memoriza los elementos de la lista de transferencias
    const transferItems = useMemo(() => (
        accountTransfers.map((transfer) => (
            <ListItem key={transfer.id}>
                <ListItemText
                    primary={`From: ${transfer.fromAccount} To: ${transfer.toAccount} Amount: ${transfer.amount}`}
                    secondary={`Date: ${formatDate(transfer.date)}`}
                />
            </ListItem>
        ))
    ), [accountTransfers, formatDate]);

    if (loading) {
        return (
            <Paper sx={{ p: 2, mt: 3, display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Paper>
        );
    }

    if (error) {
        return (
            <Paper sx={{ p: 2, mt: 3 }}>
                <Typography variant="h6">Error loading movements</Typography>
            </Paper>
        );
    }

    if (accountMovements.length === 0 && accountTransfers.length === 0) {
        return (
            <Paper sx={{ p: 2, mt: 3 }}>
                <Typography variant="h6">No movements found</Typography>
            </Paper>
        );
    }

    return (
        <Paper sx={{ p: 2, mt: 3 }}>
            <Typography variant="h6">Movements</Typography>
            <List>
                {movementItems}
            </List>
            <Typography variant="h6" sx={{ mt: 3 }}>Transfers</Typography>
            <List>
                {transferItems}
            </List>
        </Paper>
    );
});

export default AccountMovements;
