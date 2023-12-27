import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import Grid from '@mui/material/Grid';
import { Tooltip } from '@mui/material';


const Footer = () => {
  return (

    <Box
      component="footer"
      sx={{
        backgroundColor: '#fefefe',
        color: '#fff',
        padding: '2rem 0',
        marginTop: 'auto', // Asegura que el pie de página se pegue al fondo de la página
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Acerca de
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Fábrica de algarrobo. Diseños personalizados, Carpintería.<br/>
              Lunes a Viernes de 11:00 a 18:00<br/>
              Sábado de 11:00 a 17:00
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contacto
            </Typography>
            <Typography variant="body2" color="text.secondary">
              AV. RIVADADIA 7685 C.A.B.A (FLORES), Buenos Aires, Argentina 1406
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tel: 4613-3733
            </Typography>
            <Typography variant="body2" color="text.secondary">
              WhatsApp: 1150168256
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Seguinos
            </Typography>
            <Tooltip title="ehwazmueblesdealgarrobo" arrow>
              <IconButton style={{ color: "#2A2929" }} href="https://www.instagram.com/ehwazmueblesdealgarrobo/" target="_blank">
                <InstagramIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <a color="inherit" href="https://your-website.com/">
              Ehwaz Muebles
            </a>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );

};

export default Footer;
