import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CardList = ({ cards, onDeleteCard }) => {
    return (
        <List data-testid="card-list">
            {cards.map((card) => (
                <ListItem key={card.id} data-testid="card-item">
                    <ListItemText
                        primary={`${card.cardholderName} - **** **** **** ${card.cardNumber.slice(-4)}`}
                        secondary={`Expire: ${card.expiryDate}`}
                    />
                    <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => onDeleteCard(card.id)}
                        data-testid="delete-card-button"
                    >
                        <DeleteIcon />
                    </IconButton>
                </ListItem>
            ))}
        </List>
    );
};

export default CardList;