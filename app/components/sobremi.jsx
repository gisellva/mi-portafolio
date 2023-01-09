"use client"
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import Carts from './carts';
import { motion } from "framer-motion";
import "../components/styles/home.css"
function Sobremi({ }) {
  const options = {method: 'GET'};
  const [cursos ,setcursos]=React.useState([])
  useEffect(()=>{
  fetch('/api/cursos', options)
  .then(response => response.json())
  .then(response =>setcursos(response.cursos))
  .catch(err => console.error(err))},[])

   return (
     <Stack  justifyContent="center"
     alignItems="center" >
     <Box sx={{marginTop:13, width:{xs:300 ,lg:1450, md:900}, height:600} }>
      <Stack alignItems="center"   >
     <Typography variant="h3" color="primary" sx={{fontSize:60 , fontWeight:300}}>Un poco sobre mí</Typography>
     </Stack>
     <Stack  direction={{ xs: 'column', sm: 'row' }}>
     <Typography variant="body1" color="initial" sx={{marginTop:4, marginBottom:4}}>
     Soy una desarrolladora front-end ubicada en la ciudad de Bogotá, Colombia. <br/> tengo una gran pasión por arte, los efectos de interfaz de usuario,
     la creación de experiencias de usuario dinámicas con mucho color y estoy 
     muy interesada en todo el espectro front-end, me gusta aprender cada día más para
     integrar nuevas tecnologías y contribuir a nuevos proyectos.  <br/>
    desde pequeña me, interese por la tecnología, de como el arte y el color
    le podían dar vida a un sitio web y mejorar la experiencia del usuario que la 
    utiliza gracias a una persona muy importante en mi vida tomé la decisión de empezar
    con este camino.
     </Typography>
     <motion.img  initial={{scale:0}}
       animate={{scale:1}}
       transition={{duration:1,type:"spring"}}
        className="imagensobremi" 
        src="https://i.pinimg.com/564x/b5/75/c7/b575c7603efe3c7d7fe2fd2bd5588966.jpg" 
        alt="avatar"/>
        </Stack>
     <Typography variant="h4" color="primary">Algunos cursos que realizados</Typography>
     <Typography variant="body1" color="primary">(mueve las carts)</Typography>
     <Carts cursos={cursos} setcursos={setcursos} />
     <Stack alignItems="center">
     <motion.div
  initial={{scale:0}}
  animate={{scale:1}}
  transition={{type:"spring", duration: 1 }}
> 
     <Button variant="contained" color="primary"  >
       <Link href="/curriculum">curriculum</Link>
       </Button>
       </motion.div>
       </Stack>
     </Box>   
      </Stack>
    )  
}

export default Sobremi;