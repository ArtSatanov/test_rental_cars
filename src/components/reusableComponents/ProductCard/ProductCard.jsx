import React from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import NoImg from '../../../images/no-image.jpg';
import { CustomBtn } from '../Button/CustomBtn';

export const ProductCard = ({
  year = '2006',
  make = 'HUMMER',
  model = 'model',
  type = 'type',
  id = '99',
  img,
  description,
  fuelConsumption,
  engineSize,
  accessories,
  functionalities,
  rentalPrice = '$55',
  rentalCompany = 'Adventure Car Rentals',
  address = '321 Example Road, Kharkiv, Ukraine',
  rentalConditions,
  mileage,
}) => {
  return (
    <>
      <Card
        sx={{
          maxWidth: '274px',
          maxHeight: '426px',
          margin: 'auto',
          boxShadow: 'none',
        }}
      >
        <CardMedia
          component="img"
          image={img ?? NoImg}
          alt={make}
          sx={{
            width: '100%',
            height: '268px',
            objectFit: 'cover',
            marginBottom: '14px',
            borderRadius: '14px',
          }}
        />
        <CardContent
          sx={{
            padding: '0',
            marginBottom: '28px',
          }}
        >
          <Typography
            variant="title1"
            component="h2"
            sx={{
              display: 'flex',
              direction: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Box component="span">
              {make}
              <Box component="span" sx={{ color: 'primary.button' }}>
                {' '}
                {model}
                {', '}
              </Box>
              {year}
            </Box>
            <Box component="span">{rentalPrice}</Box>
          </Typography>
          <Typography variant="desc1" component="p">
            {address.split(',')[1]}
            {address.split(',')[2]}
            {rentalCompany}
          </Typography>
          <Typography variant="desc1" component="p">
            {type}
            {id}
            {rentalCompany}
          </Typography>
        </CardContent>
        <CustomBtn variant="learnMore">Learn More</CustomBtn>
      </Card>
    </>
  );
};
