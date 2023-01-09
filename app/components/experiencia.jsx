"use client"
import  React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Link from 'next/link';
import Stack from '@mui/material/Stack';

export default function Experiencias() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Stack 
       direction={{ xs: 'column', sm: 'row' }}  spacing={{ xs: 1, sm: 2, md: 4 }}>
      <Button variant="contained" color="primary">
      <Link  href="/mitrabajo">mi trabajo</Link>
      </Button>
      <Button variant="contained" onClick={handleClickOpen}>
       EXPERIENCIA
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" color={"primary"}>
          {"experiensa que tengo"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
        *realice un prototipo de una página para gestionar proyectos de texto plano (Word, Excel, PowerPoint), utilice la librería ReactJS, para la base de la ui, utilice la librería React bootstrap complementando con CSS, como este proyecto no contaba con backend utilice la persistencia de datos del localstorage del navegador para simular el almacenamiento de un proyecto y su visualización en la ui, para simular la visualización de los usuarios realice un consumo de la API Random Data API, para el manejo del formulario del login y el registro de un nuevo usuario utilice la librería react hook form <br/>
         *realice el front-end de una página de un spa de uñas, este proyecto lo realice utilizando react js librería de JavaScript,para realizar la ui de esta página utilice la biblioteca de componentes MUI, para hacer el manejo de los formularios con su montaje y validaciones utilice la librería de React hook form, utilice GraphQL, para interactuar con el backend por medio de la mutación y querys, modificando o consultando información, para la navegación entre las diferentes pestañas, utilice React Router. <br />
         *realice el front-end de una página estática para una pequeña empresa de recreación para fiestas, para este proyecto implemente la librería ReactJS, para la base de la ui utilice la librería de React bootstrap complementando con CSS <br />
         *realice una página estática con ReactJS consumiendo la API de Rick y Morty la ui la realice con CSS <br />
         *una aplicación web con ReactJS de todo list usando persistencia de datos de localstorage y la ui la, realice con SASS y CSS <br />
         *una calculadora básica con ReactJS
        
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" >cerrar</Button>
          </DialogActions>
      </Dialog>
      </Stack>
    </div>
  );
}