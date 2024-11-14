import React, { useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';

const Cards = () => {

    const [open, setOpen] = useState(false);

    return (
        <Container sx={{ mt: 10, mb: 4 }}>
            <Box display="flex" alignItems="center" sx={{ mb: 4 }}>
            {/* Use data-testid="caixabank-icon" */}
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h4" component="div" data-testid="cards-title">
                        Cards
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" data-testid="cards-subtitle">
                        Manage your cards, including adding and deleting cards.
                    </Typography>
                </Box>
                {/* Use data-testid="add-card-button" */}
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                {/* Use data-testid="card-list" */}

                </Grid>
            </Grid>

        </Container>
    );
};

export default Cards;