"use client"
import React  from'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import { Button, Stack } from '@mui/material';
import Intereses from './intereses';
import Experiencias from './experiencia';
import Cursos from './cursos';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

import "../components/styles/home.css"
import { motion } from "framer-motion";
import Link from 'next/link';
export default function Hojadevida() {
  
     return(
    <Box sx={{margin:{xs:10 ,md:11}}}>
        <Stack  
        
        justifyContent="center"
         alignItems="center"
         spacing={2}>
        <Typography variant="h2" color="primary">Hoja de vida</Typography>
        <Typography variant="h4" color="primary">Perfil Laboral </Typography>
        <Typography variant="body1" color="initial">
        Estudiante de Ingeniería de producción de la universidad Distrital Fráncico José de caldas con interés por la programación de Software, en mi experiencia tengo interés por los siguientes campos de la ingeniería de sistemas:
        </Typography>
        <motion.img 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01]
            },
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
         className='imagensobremi' 
         src='https://media-exp1.licdn.com/dms/image/C4E03AQERD1glIJAHUA/profile-displayphoto-shrink_800_800/0/1658198743753?e=1676505600&v=beta&t=wrFHcIw1C6lLANXb-bqE6abA0u6kqq-NLyp5SJaqGBA' alt='yo'/>
       <Intereses/>
        <Typography variant="h4" color="primary">Experiencia</Typography>
        <Typography variant="body1" color="initial">Soporte Freelance para personas naturales: Como freelance he desarrollado algunos proyectos de programación para personas que solicitaron mi ayuda:  
        </Typography>
        <Experiencias/>
        <Typography  variant="h4" color="primary">Fromacion</Typography>
        <Typography variant="body1" color="initial">Cursos que he realizado a lo largo del tiempo siendo front-end developer </Typography>
        <Cursos/>
        <Typography variant="h4" color="primary">contacto</Typography>
        <Typography variant="body1" color="initial"> Si estás interesado en mi trabajo o tienes alguna inquietud, no dudes en escribirme! </Typography>
        <Stack   direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
         <Button variant="contained" endIcon={<LinkedInIcon/>}>
         <Link href="https://www.linkedin.com/in/gisell-vanegas-02140b242/"> Linked</Link>
        
         </Button>
         <Button variant="contained" endIcon={<GitHubIcon />}>
         <Link href="https://github.com/gisellva">GitHub</Link>
         </Button>
         <Button variant="contained" endIcon={<GoogleIcon/>}>
         <Link href="https://mail.google.com/mail/u/0/?pli=1#inbox">Gmail</Link>
         </Button>
         
         
        </Stack>
    </Stack>

    </Box>
    )
}