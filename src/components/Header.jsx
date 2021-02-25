import React, { useState } from "react";
import CreateIcon from '@material-ui/icons/Create';
import {Menu} from "@material-ui/icons"
import { Link, withRouter } from 'react-router-dom';
import { useMediaQuery ,makeStyles, Divider, List, ListItem, ListItemText,Drawer, AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    drawer: {
        width: "300px"
    }, 
    menu: {
        marginLeft: "auto"
    }
});

function Header(props) {

    const matches = useMediaQuery('(max-width:600px)');

    const isMobile = matches ? true:false ;

    const {history} = props;
    
    const classes = useStyles();
    const navList = [
        {
            comp: "Home",
            onClick: ()=> {
                history.push("/");
                setOpen(false);
            }
        },
        {
            comp: "About",
            onClick: ()=> {
                history.push("/about");
                setOpen(false);
            }
        },
        {
            comp: "Contact",
            onClick: ()=> {
                history.push("/contact");
                setOpen(false);
            }
        },
        {
            comp: "Add Blog",
            onClick: ()=> {
                history.push("/addBlog");
                setOpen(false);
            }
        }
    ]
    const [open, setOpen] = useState(false);
    function handleDrawer() {
        setOpen(true);
    }
    const navlinkStyle = {
        color: "#aaaaaa"
    }


    return isMobile ? (
        <div className="navbar">
        <AppBar position='static' color='inherit' style={{backgroundColor: "#ccf2f4"}}>
            <Toolbar>
    <IconButton onClick={handleDrawer} edge="start"  color="inherit" aria-label="menu">
    <CreateIcon style={{fontSize: 30}} />
    </IconButton>
    <Typography variant="h5" >
      Bloggit
    </Typography>
    <IconButton className={classes.menu} onClick={handleDrawer} edge="end"  color="inherit" aria-label="menu">
    <Menu/>
    </IconButton>
  </Toolbar>
        </AppBar>

        <Drawer
           anchor="right"
           open={open}
           onClose={()=> setOpen(false)}
           className={classes.drawer}
        >
         <Divider />
      <List>
        {navList.map((nav, index) => {
            const {comp, onClick} = nav;

          return (<ListItem button key={comp} onClick={onClick}>
            <ListItemText primary={comp} />
          </ListItem>)
        })}
      </List>
      <Divider />
           
        </Drawer>

        </div>
    ) :(
        <nav className="navbar">
         
            <h1 className="header"> <IconButton edge="start"  color="inherit" aria-label="menu">
          <CreateIcon style={{fontSize: 30}} />
    </IconButton>Bloggit</h1>
            <ul className="navlinks">
                <Link style={navlinkStyle} to='/addBlog'>
                <li>Add Blog</li>
                </Link>
                <Link style={navlinkStyle} to='/contact'>
                <li>Contact</li>
                </Link>
                <Link style={navlinkStyle} to='/about'>
                <li>About</li>
                </Link>
                <Link style={navlinkStyle} to='/'>
                <li>Home</li>
                </Link>
                
            </ul>
        </nav>
    );
}

export default withRouter(Header);



