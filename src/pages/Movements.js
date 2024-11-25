import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, List, ListItem, ListItemText, Collapse, Button, Box } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TimelineIcon from '@mui/icons-material/Timeline';

import { useStore } from '@nanostores/react';
import { accountsStore } from '../contexts/GlobalState';
import caixabankIcon from '../assets/caixabank-icon-blue.png';

const Movements = () => {
    const { movements, accounts } = useStore(accountsStore);
    const [selectedAccountId, setSelectedAccountId] = useState(null);
    const [showMoreMovements, setShowMoreMovements] = useState(false);

    const handleAccountSelect = (accountId) => {
        setSelectedAccountId(accountId === selectedAccountId ? null : accountId);
        setShowMoreMovements(false);
    };

    const filteredMovements = movements.filter(movement => movement.accountId === selectedAccountId);

    return (
        <Container sx={{ mt: 10, mb: 4 }}>
            <Box display="flex" alignItems="center" sx={{ mb: 4 }}>
                <img src={caixabankIcon} alt="CaixaBank" style={{ height: '40px', marginRight: '10px' }} />
                <Typography variant="h4" component="div">
                    Movements
                </Typography>
            </Box>
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
                                <TimelineIcon sx={{ mr: 1, color: '#007eae' }} />
                                Movements
                            </Typography>
                            {selectedAccountId && filteredMovements.length === 0 && (
                                <Typography variant="body1" color="textSecondary">
                                    No movements found for this account.
                                </Typography>
                            )}
                            <List>
                                {filteredMovements.slice(0, 2).map((movement, index) => (
                                    <ListItem key={index}>
                                        <ListItemText
                                            primary={movement.description}
                                            secondary={`Date: ${new Date(movement.date).toLocaleString()} Amount: ${movement.amount}`}
                                        />
                                    </ListItem>
                                ))}
                                <Collapse in={showMoreMovements}>
                                    {filteredMovements.slice(2).map((movement, index) => (
                                        <ListItem key={index}>
                                            <ListItemText
                                                primary={movement.description}
                                                secondary={`Date: ${new Date(movement.date).toLocaleString()} Amount: ${movement.amount}`}
                                            />
                                        </ListItem>
                                    ))}
                                </Collapse>
                                {filteredMovements.length > 2 && (
                                    <Button onClick={() => setShowMoreMovements(!showMoreMovements)}>
                                        {showMoreMovements ? 'Show Less' : 'Show More'}
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

export default Movements;