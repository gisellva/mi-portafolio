"use client"
import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { deepOrange, red } from '@mui/material/colors';
import { CatchingPokemon } from '@mui/icons-material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Link from 'next/link';
import { Button } from '@mui/material';
import { Stack } from '@mui/system';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
function Cartsmistrabajos () {
   
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: deepOrange[100] }} aria-label="recipe">
              <IconButton aria-label="pokem" >
                <CatchingPokemon />
              </IconButton>
            </Avatar>
          }
          
          title="pokedex"
          subheader="ReacJS"
        />
        <CardMedia />
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBZNh6GNUNWJhUhTEJKE6IwT1UBMyQ_isiLDtLxPdQfyCJlxdgd41xxY-oncUZ5mIBkwI&usqp=CAU' alt='a' height={110} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Pokedex realizada haciendo uso del consumo de la API de pokeapi para obtener los datos 
            de los pokemones utilice async await, para compartir el estado en la aplicaion use 
            contex api, para estilizar la UI utilice css, para el deploy hice uso de vercel 
          </Typography>
         
        </CardContent>
        <CardActions disableSpacing>
          
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>tegnologias</Typography>
            <Typography paragraph>
           <li>React</li>
           <li>Css</li>
           <li>JavaScript</li>
            </Typography>
            <Stack  direction={  'row' }   spacing={  1 }>
            <Button variant="contained" color="primary" >
            <Link  href="https://create-react-app-s4o9-c7mlv72zv-gisellva.vercel.app/">vistar pagina</Link>
            </Button>
            <Button variant="contained" color="primary" >
            <Link  href="https://github.com/gisellva/create-react-app.git">vistar repositorio</Link>
            </Button>
            </Stack>
          </CardContent>
        </Collapse>
      </Card>
    );
  
    
}

export default Cartsmistrabajos;