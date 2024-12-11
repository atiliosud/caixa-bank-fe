import React, { useState } from "react";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import { useStore } from "@nanostores/react";
import caixabankIcon from "../assets/caixabank-icon-blue.png";
import { accountsStore, deleteCard } from "../contexts/GlobalState";
import CardList from "../components/CardList";
import AddCardForm from "../components/AddCardForm";

const Cards = () => {
  const [open, setOpen] = useState(false);
  const { cards } = useStore(accountsStore);

  const handleOpenForm = () => setOpen(true);
  const handleCloseForm = () => setOpen(false);

  const handleAddCard = (newCard) => {
    accountsStore.addCard(newCard);
    setOpen(false);
  };

  const handleDeleteCard = (cardId) => {
    deleteCard(cardId);
  };

  return (
    <Container sx={{ mt: 10, mb: 4 }}>
      <Box display="flex" alignItems="center" sx={{ mb: 4 }}>
        <img
          src={caixabankIcon}
          alt="CaixaBank"
          style={{ height: "40px", marginRight: "10px" }}
          data-testid="caixabank-icon"
        />
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4" component="div" data-testid="cards-title">
            Cards
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            data-testid="cards-subtitle"
          >
            Manage your cards, including adding and deleting cards.
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenForm}
          data-testid="add-card-button"
        >
          Add Card
        </Button>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CardList
            cards={cards}
            onDeleteCard={handleDeleteCard}
            data-testid="card-list"
          />
        </Grid>
      </Grid>
      <AddCardForm
        open={open}
        setOpen={setOpen}
        onClose={handleCloseForm}
        onAddCard={handleAddCard}
      />
    </Container>
  );
};

export default Cards;
