"use client"
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { motion } from "framer-motion";
import "./styles/formulario.css"
function Formulario () {
    
        return (
          <Box 
            sx={{
             marginTop:12
            }}>
            <Stack  justifyContent="center"
         alignItems="center"
         spacing={3}>
             <motion.div
              initial={{scale:0}}
             animate={{scale:1}}
             transition={{type:"spring", duration: 1 }}
             >
           <Typography variant="h3" color="primary">Contactame</Typography>
             </motion.div>
           <Typography variant="body1" color="initial">Ponte en contacto conmigo para materializar tus ideas, podremos hablar sobre tu proyecto y la viabilidad del mismo.</Typography>
           <motion.form
           initial={{scale:0}}
           animate={{scale:1}}
           transition={{type:"spring", duration: 1 }} 
           action="https://formsubmit.co/depgisell@gmail.com" 
           method="POST">
             <Stack  spacing={2}>
            <label  >Nombre</label>
            <input className='inputtex' type="tex" name="nombre" id="nombre" />
            <label  >Correo</label>
            <input  className='inputtex'type="email" name="correo" id="correo" />
            <label >Mensaje</label>
            <input   className='inputmensaje' type="tex" name="mensaje" id="mensaje" />
            <input className='inputenvia' type="submit" />
            </Stack>
           </motion.form>
           </Stack>
            </Box>
            
        );
    
}

export default Formulario;