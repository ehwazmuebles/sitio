import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';
import Link from '@mui/material/Link';

const pages = ['cocina', 'comedor', 'living', 'dormitorio', 'contacto'];

function ResponsiveAppBar() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#fefefe' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Link href="/">
            <Image src="/logo.jpg" alt="Ehwaz" width={102} height={59} />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'right' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                href={page}
                sx={{ my: 2, color: '#2A2929', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;