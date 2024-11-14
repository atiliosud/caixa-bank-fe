import React from 'react';
import { CircularProgress, Typography, Paper, Link, Box } from '@mui/material';
import useFetch from '../hooks/useFetch';

const BrokerDetails = ({ brokerId }) => {
    const { data, loading, error } = useFetch(`https://faas-lon1-917a94a7.doserverless.co/api/v1/web/fn-a089d91a-d109-4f83-b366-fa7151812c8d/default/BrokerDetails?id=${brokerId}`);

    if (loading) return (
        <Paper sx={{ p: 2, mt: 3 }} data-testid="loading-container">
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                <CircularProgress data-testid="loading-spinner" />
            </Box>
        </Paper>
    );
    if (error) return <Typography variant="body1" color="error" data-testid="error-message">Error: {error.message}</Typography>;

    return (
        <Paper sx={{ p: 2, mt: 3 }} data-testid="broker-details-container">
            <Typography variant="h6" gutterBottom>
                Broker Details
            </Typography>
            <Typography variant="body1"><strong>Name:</strong> {data.nombre}</Typography>
            <Typography variant="body1"><strong>Country:</strong> {data.pais}</Typography>
            <Typography variant="body1"><strong>Address:</strong> {data.direccion}</Typography>
            <Typography variant="body1"><strong>Phone:</strong> {data.telefono}</Typography>
            <Typography variant="body1"><strong>Email:</strong> <Link href={`mailto:${data.email}`}>{data.email}</Link></Typography>
            <Typography variant="body1"><strong>License:</strong> {data.licencia}</Typography>
            <Typography variant="body1"><strong>Active Since:</strong> {data.activo_desde}</Typography>
            <Typography variant="body1"><strong>Website:</strong> <Link href={data.sitio_web} target="_blank" rel="noopener noreferrer">{data.sitio_web}</Link></Typography>
        </Paper>
    );
};

export default BrokerDetails;