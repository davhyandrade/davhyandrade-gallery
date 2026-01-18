'use client';

import { useColorScheme } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';

function ThemedToastContainer() {
  const { mode, systemMode } = useColorScheme();
  const toastTheme = systemMode || mode;

  return <ToastContainer icon={false} theme={toastTheme ?? 'light'} />;
}

export default ThemedToastContainer;
