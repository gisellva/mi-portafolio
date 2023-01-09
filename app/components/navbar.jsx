"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton'
import { Stack } from '@mui/system';
import Botonmusica from './boton';


export default function Navbar() {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Stack 
            sx={{padding:2}}
             direction="row"
             justifyContent="center"
             alignItems="center"
             spacing={{ xs: 6, sm: 31, md: 40, lg:90}}>
          <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        startIcon={<AlignHorizontalLeftIcon/>}
        color="secondary"
        variant="outlined"
       
        
      >
      menu
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}> <Link  href="/">inicio</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link  href="/sobremi">sobre mi</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link  href="/curriculum">curriculum</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link  href="/mitrabajo">mi trabajo</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link  href="/contactame">contactame</Link></MenuItem>
        <MenuItem onClick={handleClose} > < CloseIcon  color="primary"/> </MenuItem>
      </Menu>
      <IconButton aria-label="FavoriteIcon">
      <FavoriteIcon  color="secondary"/>
      </IconButton>
      <Botonmusica/>
      </Stack>
          </Toolbar>
        </AppBar>
     
    </div>
  );
}