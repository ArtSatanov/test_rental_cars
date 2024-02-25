import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

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
  engineSize = '3232',
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
              marginBottom: '8px',
            }}
          >
            <Box component="span">
              {make}
              <Box component="span" sx={{ color: 'primary.button' }}>
                {` ${model}, `}
              </Box>
              {year}
            </Box>
            <Box component="span">{rentalPrice}</Box>
          </Typography>
          <Typography
            variant="desc1"
            component="p"
            sx={{
              marginBottom: '4px',
              '& >*': {
                borderRight: '1px solid rgba(18, 20, 23, 0.1)',
                padding: '0 6px',
              },
            }}
          >
            <Box
              component="span"
              sx={{
                paddingLeft: '0',
              }}
            >
              {address.split(',')[1]}
            </Box>
            <Box component="span">{address.split(',')[2]}</Box>
            <Box
              component="span"
              sx={{
                borderRight: 'none !important',
                paddingLeft: '6px',
              }}
            >
              {rentalCompany}
            </Box>
          </Typography>
          <Typography
            variant="desc1"
            component="p"
            sx={{
              marginBottom: '4px',
              '& >*': {
                borderRight: '1px solid rgba(18, 20, 23, 0.1)',
                padding: '0 6px',
              },
            }}
          >
            <Box
              component="span"
              sx={{
                paddingLeft: '0',
              }}
            >
              {type}
            </Box>
            <Box component="span">{make}</Box>
            <Box component="span">{id}</Box>
            <Box
              component="span"
              sx={{
                borderRight: 'none !important',
                paddingLeft: '6px',
              }}
            >
              {engineSize}
            </Box>
          </Typography>
        </CardContent>
        <CustomBtn variant="learnMore">Learn More</CustomBtn>
      </Card>
    </>
  );
};
