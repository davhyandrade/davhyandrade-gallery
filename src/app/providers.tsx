'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@lib/mui/theme/theme.config';
import ThemedToastContainer from './_providers/themed-toast-container/ThemedToastContainer.component';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ThemedToastContainer />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

export default Providers;
