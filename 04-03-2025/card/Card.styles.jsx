import { styled } from '@mui/material/styles';
import { Box, Card, Typography, Button, Chip, Rating } from '@mui/material';

export const CardContainer = styled(Box)({
  padding: 16,
  maxWidth: 360,
  margin: 'auto',
  marginTop: 32,
});

export const StyledCard = styled(Card)({
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.12)',
});

export const CardImage = styled('img')({
  width: '100%',
  height: 180,
  objectFit: 'cover',
  objectPosition: 'center center',
});

export const CardTitle = styled(Typography)({
  fontWeight: 700,
  fontSize: '24px',
  marginBottom: 8,
  color: '#1A1A1A',
  letterSpacing: '-0.25px',
});

export const StyledRating = styled(Rating)({
  color: '#FFB400',
  '& .MuiRating-iconFilled': {
    color: '#FFB400',
  },
  '& .MuiRating-iconEmpty': {
    color: '#FFB400',
    opacity: 0.5,
  },
});

export const RatingText = styled(Typography)({
  marginLeft: 8,
  color: '#757575',
  fontSize: '14px',
});

export const RestaurantInfo = styled(Typography)({
  marginBottom: 8,
  color: '#757575',
  fontSize: '14px',
  fontWeight: 500,
});

export const Description = styled(Typography)({
  marginBottom: 24,
  color: '#757575',
  fontSize: '14px',
  lineHeight: 1.5,
  letterSpacing: '0.15px',
});

export const Divider = styled('hr')({
  border: 'none',
  borderTop: '1px solid rgba(0, 0, 0, 0.12)',
  margin: '0 0 20px 0',
});

export const SectionTitle = styled(Typography)({
  marginBottom: 12,
  color: '#1A1A1A',
  fontSize: '16px',
  fontWeight: 500,
  letterSpacing: '0.1px',
});

export const TimeChipsContainer = styled('div')({
  display: 'flex',
  gap: 8,
  marginBottom: 20,
  '& > *': {
    minWidth: '80px',
  },
});

export const TimeChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})(({ isSelected }) => ({
  borderRadius: '24px',
  padding: '0 8px',
  height: '32px',
  backgroundColor: isSelected ? '#F0EBFF' : '#F5F5F5',
  color: isSelected ? '#6200EE' : '#757575',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: isSelected ? '#F0EBFF' : '#EEEEEE',
  },
  '&.MuiChip-root': {
    fontSize: '14px',
  },
}));

export const ReserveButton = styled(Button)({
  color: '#6200EE',
  fontSize: '15px',
  fontWeight: 500,
  padding: 0,
  '&:hover': {
    backgroundColor: 'transparent',
  },
  minWidth: 'auto',
});
