import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Select, MenuItem, Paper, List, ListItem, ListItemText, Divider, CircularProgress } from '@mui/material';

const generateClients = () => {
  return Array.from({ length: 10000 }, (_, index) => ({
    id: index + 1,
    name: `Client ${index + 1}`,
    transactions: Array.from({ length: Math.floor(Math.random() * 10) + 1 }, (_, transIndex) => ({
      id: transIndex + 1,
      amount: Math.floor(Math.random() * 1000) + 1,
      date: new Date().toISOString(),
    })),
  }));
};

const App = () => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [filter, setFilter] = useState('All');
  const [sortType, setSortType] = useState('Name');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setClients(generateClients());
    setLoading(false);
  }, []);

  const filteredClients = clients.filter((client) => {
    if (filter === 'All') return true;
    return client.transactions.length >= parseInt(filter, 10);
  });

  const sortedClients = [...filteredClients].sort((a, b) => {
    if (sortType === 'Name') return a.name.localeCompare(b.name);
    if (sortType === 'Transaction Count') return b.transactions.length - a.transactions.length;
    if (sortType === 'Total Balance') {
      const aBalance = a.transactions.reduce((acc, t) => acc + t.amount, 0);
      const bBalance = b.transactions.reduce((acc, t) => acc + t.amount, 0);
      return bBalance - aBalance;
    }
    return 0;
  });

  return (
    <Container maxWidth="lg" sx={{ padding: 4 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>Client Management</Typography>
        <Typography variant="h6" gutterBottom>Manage and Analyze Clients</Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>Filter by Transactions:</Typography>
            <Select value={filter} onChange={(e) => setFilter(e.target.value)} sx={{ marginLeft: 2, minWidth: 150 }}>
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="5">5 or More</MenuItem>
              <MenuItem value="10">10 or More</MenuItem>
            </Select>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>Sort by:</Typography>
            <Select value={sortType} onChange={(e) => setSortType(e.target.value)} sx={{ marginLeft: 2, minWidth: 150 }}>
              <MenuItem value="Name">Name</MenuItem>
              <MenuItem value="Transaction Count">Transaction Count</MenuItem>
              <MenuItem value="Total Balance">Total Balance</MenuItem>
            </Select>
          </Box>
        </Box>

        {loading ? (
          <CircularProgress />
        ) : (
          <List sx={{ maxHeight: 400, overflowY: 'auto' }}>
            {sortedClients.map((client) => (
              <React.Fragment key={client.id}>
                <ListItem button onClick={() => setSelectedClient(client)}>
                  <ListItemText
                    primary={`ID: ${client.id} | Name: ${client.name} | Transactions: ${client.transactions.length}`}
                    secondary={`Total Balance: $${client.transactions.reduce((acc, t) => acc + t.amount, 0)}`}
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        )}

        {selectedClient && (
          <Box sx={{ mt: 4, p: 3, backgroundColor: '#f1f1f1', borderRadius: 1 }}>
            <Typography variant="h6">Client Details</Typography>
            <Typography>Name: {selectedClient.name}</Typography>
            <Typography>Number of Transactions: {selectedClient.transactions.length}</Typography>
            <Typography>Total Balance: ${selectedClient.transactions.reduce((acc, t) => acc + t.amount, 0)}</Typography>
            <List sx={{ mt: 2 }}>
              {selectedClient.transactions.map((transaction) => (
                <ListItem key={transaction.id}>
                  <ListItemText
                    primary={`Transaction ID: ${transaction.id} | Amount: $${transaction.amount}`}
                    secondary={`Date: ${new Date(transaction.date).toLocaleString()}`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default App;





