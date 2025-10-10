import { createTheme } from "@mui/material/styles";

import typography from "./typography";
import palette from "./palette";

const theme = createTheme({
  palette,
  typography,
  spacing: 4,
});

export default theme;
