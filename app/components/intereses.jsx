"use client"
import  React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Intereses() {
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
        intereses
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" color={"primary"}>
          {"intereses que tengo de la ingenieria de sofware"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          *Lineas de comando de Linux <br/>
         *Git - Como versionador y GitHub  <br/>
         *Gestión de Dependencias y Paquetes con NPM  <br/>
         * mui <br/>
         *react hook form <br/>
         * Desarrollo web Front-end con JavaScript y  TypeScript con sus librerias y framework<br/>
         * graphql <br/>
         *swr <br/>
         *Next.js <br/>
         *axios <br/>
         *zod <br/>
        *node.js <br/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" >cerrar</Button>
          </DialogActions>
      </Dialog>
    </div>
  );
}