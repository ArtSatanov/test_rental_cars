import React, { useState } from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Modal from 'react-modal';
import NoImg from '../../../images/no-image.jpg';
import { CustomBtn } from '../Button/CustomBtn';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { ModalRent } from 'components/ModalRent/ModalRent';

const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '40px',
    borderRadius: '24px',
    maxWidth: '541px',
  },
};
Modal.setAppElement('#root');

export const ProductCard = ({ car }) => {
  const [zIndex, setZIndex] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLike = () => {
    zIndex === 1 ? setZIndex(-1) : setZIndex(1);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Card
        sx={{
          position: 'relative',
          maxWidth: '274px',
          maxHeight: '426px',
          margin: 'auto',
          boxShadow: 'none',
        }}
      >
        <CardActions
          disableSpacing
          sx={{
            position: 'absolute',
            top: '16.25px',
            right: '15.16px',
          }}
        >
          <IconButton aria-label="add to favorites" onClick={handleLike}>
            <FavoriteIcon
              sx={{
                color: 'primary.button',
                position: 'absolute',
                zIndex: zIndex,
              }}
            />
            <FavoriteBorderOutlinedIcon
              sx={{
                position: 'absolute',
                fill: 'white',
              }}
            />
          </IconButton>
        </CardActions>
        <CardMedia
          component="img"
          image={car.img ?? NoImg}
          alt={car.make}
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
              {car.make}
              <Box component="span" sx={{ color: 'primary.button' }}>
                {` ${car.model}, `}
              </Box>
              {car.year}
            </Box>
            <Box component="span">{car.rentalPrice}</Box>
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
              {car.address.split(',')[1]}
            </Box>
            <Box component="span">{car.address.split(',')[2]}</Box>
            <Box
              component="span"
              sx={{
                borderRight: 'none !important',
                paddingLeft: '6px',
              }}
            >
              {car.rentalCompany}
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
              {car.type}
            </Box>
            <Box component="span">{car.make}</Box>
            <Box component="span">{car.id}</Box>
            <Box
              component="span"
              sx={{
                borderRight: 'none !important',
                paddingLeft: '6px',
              }}
            >
              {car.engineSize}
            </Box>
          </Typography>
        </CardContent>
        <CustomBtn variant="learnMore" onClick={toggleModal}>
          Learn More
        </CustomBtn>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={toggleModal}
          style={modalStyle}
        >
          <ModalRent car={car} onClose={toggleModal} />
        </Modal>
      </Card>
    </>
  );
};
