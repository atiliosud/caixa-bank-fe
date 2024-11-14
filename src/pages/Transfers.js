import React, { useState } from 'react';
import {
    Container, Grid, Card, CardContent, Typography, List, ListItem, ListItemText, Collapse, Button, Box, Dialog, DialogTitle, DialogContent, DialogActions, IconButton
} from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { useStore } from '@nanostores/react';
import { accountsStore } from '../contexts/GlobalState';
import caixabankIcon from '../assets/caixabank-icon-blue.png';
import TransferForm from '../components/TransferForm';

const Transfers = () => {
    const { transfers, accounts } = useStore(accountsStore);
    const [selectedAccountId, setSelectedAccountId] = useState(null);
    const [showMoreTransfers, setShowMoreTransfers] = useState(false);
    const [transferDialogOpen, setTransferDialogOpen] = useState(false);

    const handleAccountSelect = (accountId) => {
        setSelectedAccountId(accountId === selectedAccountId ? null : accountId);
    };

    const filteredTransfers = transfers.filter(
        transfer => transfer.fromAccountId === selectedAccountId || transfer.toAccountId === selectedAccountId
    );

    const getAccountNameById = (accountId) => {
        const account = accounts.find(account => account.id === accountId);
        return account ? account.name : 'Unknown Account';
    };

    const handleTransferDialogOpen = () => {
        setTransferDialogOpen(true);
    };

    const handleTransferDialogClose = () => {
        setTransferDialogOpen(false);
    };

    return (
        <Container sx={{ mt: 10, mb: 4 }}>
            <Box display="flex" alignItems="center" sx={{ mb: 4 }}>
                <img src={caixabankIcon} alt="CaixaBank" style={{ height: '40px', marginRight: '10px' }} />
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    Transfers
                </Typography>
                <Button variant="contained" color="primary" onClick={handleTransferDialogOpen}>
                    Hacer Transferencia
                </Button>
            </Box>
            <Dialog open={transferDialogOpen} onClose={handleTransferDialogClose} maxWidth="md" fullWidth>
                <DialogTitle>Hacer Transferencia</DialogTitle>
                <DialogContent>
                    <TransferForm onClose={handleTransferDialogClose} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleTransferDialogClose}>Cancelar</Button>
                </DialogActions>
            </Dialog>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <AccountBalanceIcon sx={{ mr: 1, color: '#007eae' }} />
                                Accounts
                            </Typography>
                            <List>
                                {accounts.map((account) => (
                                    <ListItem button key={account.id} onClick={() => handleAccountSelect(account.id)}>
                                        <ListItemText
                                            primary={account.name}
                                            secondary={`Balance: ${account.balance}`}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <SwapHorizIcon sx={{ mr: 1, color: '#007eae' }} />
                                Transfers
                            </Typography>
                            {selectedAccountId && filteredTransfers.length === 0 && (
                                <Typography variant="body1" color="textSecondary">
                                    No transfers found for this account.
                                </Typography>
                            )}
                            <List>
                                {filteredTransfers.slice(0, 2).map((transfer, index) => (
                                    <ListItem key={index}>
                                        <ListItemText
                                            primary={`From: ${getAccountNameById(transfer.fromAccountId)} To: ${getAccountNameById(transfer.toAccountId)} Amount: ${transfer.amount}`}
                                            secondary={`Date: ${new Date(transfer.date).toLocaleString()}`}
                                        />
                                    </ListItem>
                                ))}
                                <Collapse in={showMoreTransfers}>
                                    {filteredTransfers.slice(2).map((transfer, index) => (
                                        <ListItem key={index}>
                                            <ListItemText
                                                primary={`From: ${getAccountNameById(transfer.fromAccountId)} To: ${getAccountNameById(transfer.toAccountId)} Amount: ${transfer.amount}`}
                                                secondary={`Date: ${new Date(transfer.date).toLocaleString()}`}
                                            />
                                        </ListItem>
                                    ))}
                                </Collapse>
                                {filteredTransfers.length > 2 && (
                                    <Button onClick={() => setShowMoreTransfers(!showMoreTransfers)}>
                                        {showMoreTransfers ? 'Show Less' : 'Show More'}
                                    </Button>
                                )}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Transfers;