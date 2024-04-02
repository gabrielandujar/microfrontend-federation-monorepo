import React from 'react';
import { Link, Outlet } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';


import useUserStore from 'profile-app/userStore';


export function Layout() {
  const name = useUserStore(state => state.name)
  const logged = useUserStore(state => state.logged)
  const logout = useUserStore(state => state.logout)

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  
  React.useEffect(() => {
    const openDrawer = (detail) => {
      setOpen(true);
    }
    document.addEventListener('OPEN_DRAWER', openDrawer);
  
    return () => {
      document.removeEventListener('OPEN_DRAWER', openDrawer);
    }
}, []);


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2}}
          >
            <MenuIcon />
          </IconButton>
        
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Hello {name} 
            {logged && <a href="#" onClick={() => logout()}>- Logout</a>}
          </Typography>
          <Box>
            <Link to={`/`} style={{ marginRight: "1rem" }}>
              Home
            </Link>
            <Link to={`/profile`} style={{ marginRight: "1rem" }}>
              Profile Page1
            </Link>
            <Link to={`/profile/edit`} style={{ marginRight: "1rem" }}>
              Profile Page2
            </Link>
            <Link to={`/settings/page-a`} style={{ marginRight: "1rem" }}>
              Settings PageA
            </Link>
            <Link to={`/settings/page-b`} style={{ marginRight: "1rem" }}>Settings PageB</Link>
            <Link to={`/about`} style={{ marginRight: "1rem" }}>About</Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <Container sx={{mt:"2rem", p: "2rem"}}>
        <Outlet />
      </Container>
    </Box>
  );
}