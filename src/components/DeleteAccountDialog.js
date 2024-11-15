import React from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button
} from '@mui/material';

const DeleteAccountDialog = ({ open, onClose, onDelete }) => (
    <Dialog open={open} onClose={onClose} data-testid="delete-account-dialog">
        <DialogTitle>Delete Account</DialogTitle>
        <DialogContent>
            <Typography>Are you sure you want to delete this account?</Typography>
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose} data-testid="cancel-delete-button">Cancel</Button>
            <Button onClick={onDelete} data-testid="delete-button">Delete</Button>
        </DialogActions>
    </Dialog>
);

export default DeleteAccountDialog;
