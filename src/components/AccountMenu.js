import React from 'react';
import { Menu, MenuItem } from '@mui/material';

const AccountMenu = ({ anchorEl, open, onClose, onDeleteOpen }) => (
    <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={onClose}
        data-testid="account-menu"
    >
        <MenuItem onClick={onDeleteOpen}>Delete Account</MenuItem>
    </Menu>
);

export default AccountMenu;
