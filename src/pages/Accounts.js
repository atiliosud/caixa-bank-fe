import React, { useState } from "react";
import { Container, Grid, Box, Button, Typography } from "@mui/material";
import caixabankIcon from "../assets/caixabank-icon-blue.png";
import AccountCard from "../components/AccountCard";
import AddAccountDialog from "../components/AddAccountDialog";
import DeleteAccountDialog from "../components/DeleteAccountDialog";
import AccountMenu from "../components/AccountMenu";
import SnackbarNotification from "../components/SnackbarNotification";
import { useStore } from "@nanostores/react";
import {
  accountsStore,
  addAccount,
  deleteAccount,
} from "../contexts/GlobalState";
import "../styles/Buttons.css";

const Accounts = () => {
  const { accounts } = useStore(accountsStore);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [open, setOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const handleMenuOpen = (event, accountId) => {
    setAnchorEl(event.currentTarget);
    setSelectedAccount(accountId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleAddAccount = (newAccount) => {
    if (validateForm(newAccount)) {
      addAccount(newAccount);
      setSnackbarMessage("Account added successfully!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      handleDialogClose();
    } else {
      setSnackbarMessage("Failed to add account. Please check the form.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleDeleteAccount = () => {
    if (selectedAccount) {
      deleteAccount(selectedAccount);
      setSnackbarMessage("Account deleted successfully!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      setDeleteDialogOpen(false);
    }
  };

  const handleDeleteDialogOpen = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  const validateForm = (formData) => {
    const { name, type, currency } = formData;

    console.log(formData);
    if (!name || !type || !currency) {
      return false;
    }
    return true;
  };

  return (
    <Container sx={{ mt: 10, mb: 4 }}>
      <Box display="flex" alignItems="center" sx={{ mb: 4 }}>
        <img
          src={caixabankIcon}
          alt="CaixaBank"
          style={{ height: "40px", marginRight: "10px" }}
        />
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
        {accounts.map((account) => (
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
        open={open}
        setOpen={setOpen}
        onAddAccount={handleAddAccount}
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
