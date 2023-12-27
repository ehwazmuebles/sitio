import Grid from '@mui/material/Grid'
import styles from '../page.module.css'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import { Paper } from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Home() {
  return (
    <main className={styles.main}>
      <Paper style={{ width: "90%", marginBottom: "0.25rem" }} elevation={3}>
        <Grid container spacing={2} justifyContent="center" style={{ margin: "0", padding: "0.5rem" }}>
          <Grid xs={4}>
            <Image width={400} height={268} src="/ubicacion.png" alt='ubicacion' style={{ border: "1px solid black" }} />
          </Grid>
          <Grid xs={8} style={{ paddingLeft: "2rem" }}>
            <Typography variant="h6" color="text.secondary">
              AV. RIVADADIA 7685 C.A.B.A (FLORES), Buenos Aires, Argentina 1406
            </Typography>
            <Grid container spacing={1} alignItems="center" marginTop={0.25}>
              <Grid item>
                <EmailOutlinedIcon />
              </Grid>
              <Grid item>
                <Typography variant="body2" color="text.secondary">
                  ehwazmuebles@hotmail.com
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="center" marginTop={0.25}>
              <Grid item>
                <CallOutlinedIcon />
              </Grid>
              <Grid item>
                <Typography variant="body2" color="text.secondary">
                  4613-3733
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="center" marginTop={0.25}>
              <Grid item>
                <WhatsAppIcon />
              </Grid>
              <Grid item>
                <Typography variant="body2" color="text.secondary">
                  1150168256
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="center" marginTop={0.25}>
              <Grid item>
                <InstagramIcon />
              </Grid>
              <Grid item>
                <Typography variant="body2" color="text.secondary">
                  @ehwazmueblesdealgarrobo
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body2" color="text.secondary" marginTop={0.25}>
              Nuestros horarios:<br />
              - Lunes a Viernes de 11hs a 18hs<br />
              - Sabado de 11hs a 17hs
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </main >
  )
}

