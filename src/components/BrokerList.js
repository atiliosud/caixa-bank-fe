import React from 'react';
import { CircularProgress, List, ListItem, ListItemText, Paper, Typography, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';


const BrokerList = ({ onSelectBroker }) => {


    // Use data-testid="loading-spinner" for the CircularProgress component
    // Use data-testid="error-message" for the Typography component

    return (
        <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <BusinessCenterIcon sx={{ mr: 1, color: '#007eae' }} />
                Broker List
            </Typography>
            {/*Use data-testid="broker-item"*/ }
            
        </Paper>
    );
};

export default BrokerList;
