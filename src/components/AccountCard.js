import React from 'react';
import {
    Card, CardContent, Typography, Box, IconButton
} from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const AccountCard = ({ account, onMenuOpen }) => (
    <Card sx={{ height: '100%' }}>
        <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                    <AccountBalanceIcon sx={{ mr: 1, color: '#007eae' }} />
                    {account.name}
                </Typography>
                <IconButton
                    edge="end"
                    onClick={(event) => onMenuOpen(event, account.id)}
                    data-testid={`more-vert-icon-${account.id}`}
                >
                    <MoreVertIcon />
                </IconButton>
            </Box>
            <Typography variant="body2">Type: {account.type}</Typography>
            <Typography variant="body2">Currency: {account.currency}</Typography>
        </CardContent>
    </Card>
);

export default AccountCard;
