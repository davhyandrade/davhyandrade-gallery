"use client";

import { useState } from "react";

import { Box, ButtonBase, Grid, Stack, Typography } from "@mui/material";
import OpenInFullRoundedIcon from "@mui/icons-material/OpenInFullRounded";

import FullImageModal from "./components/full-image-modal/FullImageModal.component";

function GalleryPage() {
  const [test, setTest] = useState<string | null>(null);
  const images = [
    "https://res.cloudinary.com/dbsebu2ef/image/upload/v1759854195/_MG_1978_gbwrux.jpg",
    "https://res.cloudinary.com/dbsebu2ef/image/upload/v1759854195/_MG_1682_x2qd3z.jpg",
    "https://res.cloudinary.com/dbsebu2ef/image/upload/v1759854195/_MG_1925_dxycsa.jpg",
    "https://res.cloudinary.com/dbsebu2ef/image/upload/v1759854194/_MG_1939_h6vu7y.jpg",
    "https://res.cloudinary.com/dbsebu2ef/image/upload/v1759854194/_MG_1919_maubgi.jpg",
    "https://res.cloudinary.com/dbsebu2ef/image/upload/v1759854194/_MG_1899-3_gcranv.jpg",
    "https://res.cloudinary.com/dbsebu2ef/image/upload/v1759854194/_MG_1864_uupobr.jpg",
    "https://res.cloudinary.com/dbsebu2ef/image/upload/v1759854194/_MG_1811_rnuesc.jpg",
    "https://res.cloudinary.com/dbsebu2ef/image/upload/v1759854193/_MG_1781_u8l6wh.jpg",
    "https://res.cloudinary.com/dbsebu2ef/image/upload/v1759854193/_MG_1597_gmhgry.jpg",
    "https://res.cloudinary.com/dbsebu2ef/image/upload/v1759854193/_MG_1754_nmtabn.jpg",
    "https://res.cloudinary.com/dbsebu2ef/image/upload/v1759854193/_MG_1604_afyxrd.jpg",
  ];

  return (
    <>
      <Stack width="100%" direction="row" justifyContent="center">
        <Box maxWidth={1200} width="100%" p={8}>
          <Grid container spacing={2}>
            {images.map((src, i) => (
              <Grid item key={src}>
                <ButtonBase
                  onClick={() => {
                    setTest(src);
                  }}
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: 400,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={src}
                    alt={`Imagem ${i + 1}`}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      bgcolor: "rgba(255, 255, 255, 0.5)",
                      transition: "opacity 0.5s ease",
                      opacity: 0,
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  >
                    <OpenInFullRoundedIcon color="info" />

                    <Typography
                      variant="body2"
                      color="info.main"
                      fontWeight={500}
                    >
                      Abrir
                    </Typography>
                  </Stack>
                </ButtonBase>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>

      <FullImageModal
        isOpen={!!test}
        onClose={() => setTest(null)}
        src={test}
      />
    </>
  );
}

export default GalleryPage;
