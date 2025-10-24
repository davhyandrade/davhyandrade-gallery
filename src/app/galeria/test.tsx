'use client';

import { useState } from 'react';
import { Box, ButtonBase, Stack, Typography } from '@mui/material';
import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded';

import FullImageModal from './components/full-image-modal/FullImageModal.component';

const initialImages = [
  {
    id: 'img1',
    src: 'https://res.cloudinary.com/dbsebu2ef/image/upload/v1759854195/_MG_1978_gbwrux.jpg',
    cols: 1,
  },
  {
    id: 'img2',
    src: 'https://res.cloudinary.com/dbsebu2ef/image/upload/v1759854195/_MG_1682_x2qd3z.jpg',
    cols: 1,
  },
  {
    id: 'img3',
    src: 'https://res.cloudinary.com/dbsebu2ef/image/upload/v1759854195/_MG_1925_dxycsa.jpg',
    cols: 1,
  },
  {
    id: 'img4',
    src: 'https://res.cloudinary.com/dbsebu2ef/image/upload/v1759854194/_MG_1939_h6vu7y.jpg',
    cols: 1,
  },
  {
    id: 'img5',
    src: 'https://res.cloudinary.com/dbsebu2ef/image/upload/v1759854194/_MG_1919_maubgi.jpg',
    cols: 1,
  },
  {
    id: 'img6',
    src: 'https://res.cloudinary.com/dbsebu2ef/image/upload/v1759854194/_MG_1899-3_gcranv.jpg',
    cols: 1,
  },
  {
    id: 'img7',
    src: 'https://res.cloudinary.com/dbsebu2ef/image/upload/v1759854194/_MG_1864_uupobr.jpg',
    cols: 1,
  },
  {
    id: 'img8',
    src: 'https://res.cloudinary.com/dbsebu2ef/image/upload/v1759854194/_MG_1811_rnuesc.jpg',
    cols: 1,
  },
  {
    id: 'img9',
    src: 'https://res.cloudinary.com/dbsebu2ef/image/upload/v1759854193/_MG_1781_u8l6wh.jpg',
    cols: 2,
  },
  {
    id: 'img10',
    src: 'https://res.cloudinary.com/dbsebu2ef/image/upload/v1759854193/_MG_1597_gmhgry.jpg',
    cols: 1,
  },
  {
    id: 'img11',
    src: 'https://res.cloudinary.com/dbsebu2ef/image/upload/v1759854193/_MG_1754_nmtabn.jpg',
    cols: 3,
  },
  {
    id: 'img12',
    src: 'https://res.cloudinary.com/dbsebu2ef/image/upload/v1759854193/_MG_1604_afyxrd.jpg',
    cols: 1,
  },
];

export default function GalleryPage() {
  const [images, setImages] = useState(initialImages);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggingIndex(index);
  };

  const handleDragOver = (
    index: number,
    e: React.DragEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault(); // necessário para permitir drop
    if (index !== draggingIndex) {
      setHoverIndex(index);
    }
  };

  const handleDrop = (index: number) => {
    if (draggingIndex === null || draggingIndex === index) return;

    const updated = [...images];
    const [movedItem] = updated.splice(draggingIndex, 1);
    updated.splice(index, 0, movedItem);

    setImages(updated);
    setDraggingIndex(null);
    setHoverIndex(null);
  };

  return (
    <>
      <Stack width="100%" direction="row" justifyContent="center">
        <Box
          maxWidth={1200}
          width="100%"
          p={4}
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: 2,
          }}
        >
          {images.map((img, i) => (
            <ButtonBase
              key={img.id}
              draggable
              onDragStart={() => handleDragStart(i)}
              onDragOver={e => handleDragOver(i, e)}
              onDrop={() => handleDrop(i)}
              onClick={() => setSelectedImage(img.src)}
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                gridColumn: `span ${img.cols || 1}`,
                gridRow: `span ${img.cols && img.cols > 1 ? 2 : 1}`,
                overflow: 'hidden',
                borderRadius: 2,
                outline:
                  draggingIndex === i
                    ? '2px solid #42a5f5' // item sendo arrastado
                    : hoverIndex === i
                    ? '2px solid red' // item sobre o qual será dropado
                    : 'none',
                cursor: 'grab',
                '&:active': { cursor: 'grabbing' },
                transition: 'outline 0.2s',
              }}
            >
              <Box
                component="img"
                src={img.src}
                alt=""
                loading="lazy"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  opacity: draggingIndex === i ? 0.5 : 1,
                  transition: 'opacity 0.2s',
                }}
              />

              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  bgcolor: 'rgba(255, 255, 255, 0.5)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  '&:hover': { opacity: 1 },
                }}
              >
                <OpenInFullRoundedIcon color="info" />
                <Typography variant="body2" color="info.main" fontWeight={500}>
                  Abrir
                </Typography>
              </Stack>
            </ButtonBase>
          ))}
        </Box>
      </Stack>

      <FullImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        src={selectedImage}
      />
    </>
  );
}
