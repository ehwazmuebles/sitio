'use client'
import React from 'react';
import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const App = () => {
  return (
    <div>
      {/* Contenido de tu aplicación */}

      {/* Botón flotante de WhatsApp */}
      <Fab
        color="primary"
        style={{ position: 'fixed', bottom: 16, right: 16, fontSize: '24px', backgroundColor: '#4CAF50' }}
        onClick={(ev) => {
          ev.preventDefault();
          window.open(`https://wa.me/+5491150168256`, '_blank');
        }}
      >
        <WhatsAppIcon style={{ fontSize: '36px', color: 'white' }}/>
      </Fab>
    </div>
  );
};

export default App;
