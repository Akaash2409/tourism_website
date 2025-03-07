import React from 'react';
import { CardContent, Box } from '@mui/material';
import {
  CardContainer,
  StyledCard,
  CardImage,
  CardTitle,
  StyledRating,
  RatingText,
  RestaurantInfo,
  Description,
  Divider,
  SectionTitle,
  TimeChipsContainer,
  TimeChip,
  ReserveButton,
} from './Card.styles';

const RestaurantCard = () => {
  return (
    <CardContainer>
      <StyledCard>
        <CardImage
          src="https://images.unsplash.com/photo-1587241321921-91a834d6d191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Cafe Badilico"
        />
        <CardContent sx={{ p: 2.5 }}>
          <CardTitle variant="h5">
            Cafe Badilico
          </CardTitle>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <StyledRating 
              value={4.5} 
              precision={0.5} 
              readOnly 
              size="small"
            />
            <RatingText variant="body2" sx={{ ml: 1 }}>
              4.5 (413)
            </RatingText>
          </Box>

          <RestaurantInfo variant="body1" sx={{ mb: 1 }}>
            $ • Italian, Cafe
          </RestaurantInfo>

          <Description variant="body2" sx={{ mb: 3 }}>
            Small plates, salads & sandwiches an intimate setting with 12 indoor seats plus patio seating.
          </Description>

          <Divider sx={{ mb: 2.5, opacity: 0.12 }} />

          <SectionTitle variant="subtitle1" sx={{ mb: 1.5 }}>
            Tonight's availability
          </SectionTitle>

          <TimeChipsContainer sx={{ mb: 2.5 }}>
            <TimeChip label="5:30PM" />
            <TimeChip label="7:30PM" isSelected />
            <TimeChip label="8:00PM" />
            <TimeChip label="9:00PM" />
          </TimeChipsContainer>

          <ReserveButton variant="text" sx={{ color: '#6200EE', fontSize: '15px', fontWeight: 500, padding: 0, '&:hover': { backgroundColor: 'transparent' }, minWidth: 'auto' }}>
            RESERVE
          </ReserveButton>
        </CardContent>
      </StyledCard>
    </CardContainer>
  );
};

export default RestaurantCard;
