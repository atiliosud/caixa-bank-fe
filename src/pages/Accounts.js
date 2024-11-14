import React, { useState } from 'react';
import { Container, Grid, Box, Button, Typography } from '@mui/material';
import caixabankIcon from '../assets/caixabank-icon-blue.png';
import AccountCard from '../components/AccountCard';
import AddAccountDialog from '../components/AddAccountDialog';
import DeleteAccountDialog from '../components/DeleteAccountDialog';
import AccountMenu from '../components/AccountMenu';
import SnackbarNotification from '../components/SnackbarNotification';
import { useStore } from '@nanostores/react';
import { accountsStore } from '../contexts/GlobalState';
import '../styles/Buttons.css';

const Accounts = () => {
    
    const handleMenuOpen = (event, accountId) => {
    };

    const handleMenuClose = () => {
    };

    const handleDialogOpen = () => {
    };

    const handleDialogClose = () => {
    };

    const handleAddAccount = () => {
    };

    const handleDeleteAccount = () => {
    };

    const handleDeleteDialogOpen = () => {
    };

    const handleDeleteDialogClose = () => {
    };

    const handleSnackbarClose = (event, reason) => {
    };

    const validateForm = () => {
    };

    return (
        <Container sx={{ mt: 10, mb: 4 }}>
            <Box display="flex" alignItems="center" sx={{ mb: 4 }}>
                <img src={caixabankIcon} alt="CaixaBank" style={{ height: '40px', marginRight: '10px' }} />
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h4" component="div">
                        Accounts
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Manage your bank accounts, including adding and deleting accounts.
                    </Typography>
                </Box>
                <Button
                    variant="contained"
                    color="primary"
                    className="button-custom"
                    onClick={handleDialogOpen}
                    data-testid="add-account-button"
                >
                    Add Account
                </Button>
            </Box>
            <Grid container spacing={2}>
                {accounts.map(account => (
                    <Grid item xs={12} sm={6} md={4} key={account.id}>
                        <AccountCard account={account} onMenuOpen={handleMenuOpen} />
                    </Grid>
                ))}
            </Grid>
            <AccountMenu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                onDeleteOpen={handleDeleteDialogOpen}
            />
            <AddAccountDialog
                open={dialogOpen}
                onClose={handleDialogClose}
                onSubmit={handleAddAccount}
                description={description}
                setDescription={setDescription}
                type={type}
                setType={setType}
                currency={currency}
                setCurrency={setCurrency}
                formErrors={formErrors}
            />
            <DeleteAccountDialog
                open={deleteDialogOpen}
                onClose={handleDeleteDialogClose}
                onDelete={handleDeleteAccount}
            />
            <SnackbarNotification
                open={snackbarOpen}
                onClose={handleSnackbarClose}
                severity={snackbarSeverity}
                message={snackbarMessage}
            />
        </Container>
    );
};

export default Accounts;
