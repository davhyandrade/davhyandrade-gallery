"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { Box, Button } from "@mui/material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import WestRoundedIcon from "@mui/icons-material/WestRounded";

import { MAIN_URL_BASE } from "@/shared/constants";

function Menu() {
  const { push, back } = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  const handleNavigate = () => {
    if (from) {
      back();
      return;
    }

    push(MAIN_URL_BASE);
  };

  return (
    <Box component="header" py={4} px={6}>
      <Button
        variant="text"
        color="info"
        startIcon={from ? <WestRoundedIcon data-testid="west-icon" /> : null}
        endIcon={from ? null : <EastRoundedIcon data-testid="east-icon" />}
        disableRipple
        onClick={handleNavigate}
        sx={{ textTransform: "none", "&:hover": { bgcolor: "transparent" } }}
      >
        {from ? "Voltar" : "Ir"} para a página {from || "principal"}
      </Button>
    </Box>
  );
}

export default Menu;
