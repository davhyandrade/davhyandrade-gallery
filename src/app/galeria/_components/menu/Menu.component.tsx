'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import Logotipo from '@/app/galeria/_components/logotipo/Logotipo.component';
import { Button, Divider, Stack } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import WestRoundedIcon from '@mui/icons-material/WestRounded';

import { MAIN_URL_BASE } from '@/shared/constants';

import ThemeButton from './theme-button/ThemeButton.component';

function Menu() {
  const { push, back } = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get('from');

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const handleNavigate = () => {
    if (from) {
      back();
      return;
    }

    push(MAIN_URL_BASE);
  };

  return (
    <Stack
      component="header"
      alignItems="center"
      justifyContent="center"
      padding={4}
      borderBottom={1}
      borderColor="divider"
    >
      <Stack
        direction="row"
        width="100%"
        justifyContent="space-between"
        gap={2}
        maxWidth="xl"
      >
        <Stack
          flex={1}
          direction="row"
          alignItems="center"
          gap={4}
          flexWrap="wrap"
        >
          <Logotipo />

          {!isMobile && (
            <>
              <Divider orientation="vertical" />

              <Button
                variant="text"
                color="textAction"
                startIcon={
                  from ? <WestRoundedIcon data-testid="west-icon" /> : null
                }
                endIcon={
                  from ? null : <EastRoundedIcon data-testid="east-icon" />
                }
                onClick={handleNavigate}
              >
                {from ? 'Voltar' : 'Ir'} para a página {from || 'principal'}
              </Button>
            </>
          )}
        </Stack>

        {!isMobile && (
          <Stack flex={1} direction="row" justifyContent="center" spacing={2}>
            <Button variant="text" color="textAction" href="#image-gallery">
              Galeria
            </Button>

            <Button variant="text" color="textAction" href={MAIN_URL_BASE}>
              Sobre
            </Button>
          </Stack>
        )}

        <Stack flex={1} direction="row" justifyContent="end">
          <ThemeButton />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Menu;
