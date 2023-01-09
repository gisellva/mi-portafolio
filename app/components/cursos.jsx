"use client"
import  React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Cursos() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
       CURSOS
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" color={"primary"}>
          {"Cursos que eh realizado"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          *Curso de Introducción a la Terminal y Línea de Comandos en Platzi  <br/>
         *Curso profesional de git y github en Platzi   <br/>
         *curso definitivo de HTML y CSS en Platzi  <br/>
         *Curso de Unit Testing con Jest en React en Platzi  <br/>
         *Curso de Frontend Developer en Platzi <br/>
         *Curso de Closures y Scope en JavaScript en Platzi  <br/>
         *Curso de programación orientada a objetos con JavaScript en Platzi <br/>
         *Curso de ECMAScript 6+ en Platzi <br/>
         *Curso de asincronismo con JavaScript en Platzi <br/>
         *Curso de consumo de API rest con javaScript en Platzi <br/>
         *curso npm : gestión de paquetes y dependencias con javascript en Platzi <br/>
         *Curso de fundamentos de typescript en Platzi  <br/>
         *curso de typescript tipos avanzados y funciones muy bien con typescript en Platzi <br/>
         *curso de introducción a React js  en Platzi  <br/>
         *curso de React js patrones de render y composición en Platzi  <br/>
         *curso profesional de Ract hooks en Platzi  <br/>
         *Curso avanzado React  en Platzi  <br/>
         *curso de manipulación de arrays en javascript en Platzi  <br/>
         *curso de next.js  en Platzi <br/>
         *curso de mui basico   en Platzi <br/>
         *curso de optimizacion y manejo de grandes datasets (next.js)  en Platzi <br/>
         *optimizacion y deploy a produccion (next.js)  en Platzi <br/>
         *autentificaion (next.js) en platzi <br/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" >cerrar</Button>
          </DialogActions>
      </Dialog>
    </div>
  );
}