import { Box, Dialog, IconButton, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { FullImageModalProps } from "./FullImageModal.types";

function FullImageModal({ isOpen, onClose, src }: FullImageModalProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  if (!src) return null;

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          },
        },
        paper: {
          sx: {
            backgroundColor: "transparent",
            borderRadius: 0,
          },
        },
      }}
      maxWidth={false}
      fullScreen={fullScreen}
    >
      <IconButton
        color="info"
        onClick={onClose}
        sx={{
          position: "fixed",
          top: { xs: 16, sm: 64 },
          right: { xs: 16, sm: 64 },
          bgcolor: "#fff",
          "&:hover": {
            bgcolor: "#f0f0f0",
          },
        }}
      >
        <CloseRoundedIcon />
      </IconButton>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        height="100%"
        padding={{ xs: 4, sm: 0 }}
      >
        <Box
          component="img"
          src={src}
          sx={{
            width: "auto",
            maxWidth: "100%",
            maxHeight: "90dvh",
            objectFit: "contain",
          }}
        />
      </Stack>
    </Dialog>
  );
}

export default FullImageModal;
