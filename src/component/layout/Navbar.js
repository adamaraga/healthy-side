import {Link, useLocation} from 'react-router-dom'
import SignInLink from './SignedInLink'
import SignOutLink from './SignedOutLink'
import { connect } from 'react-redux'
import { AppBar, Toolbar } from '@material-ui/core'
import React, { useState, useEffect } from "react";
import { IconButton, Drawer} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import Listdrawer from "./drawer";


const Navbar = (props) => {
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false
      })
      
    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 700
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
      }, []);
    

    const { auth, profile } =props;
    const link = auth.uid ? <SignInLink profile={profile}/> : <SignOutLink />;

    const { pathname } = useLocation();
    console.log(pathname)
    
    const routeStyle = () => {
        if(pathname === '/signin') {
            return 'display'
        }
        if(pathname === '/signup') {
            return 'display'
        }
        if(pathname === '/create') {
            return 'display'
        }
        if(pathname === '/congrats') {
            return 'display'
        }

    }
    
    const displayMobile = () => {
        return (
        <div className='sign-in-link-con'>
            <IconButton
              {...{
                
                
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen,
              }}
              className='menu-icon-con'
            >
              <MenuIcon className='menu-icon'/>
            </IconButton>
            <Drawer
                {...{
                    anchor: "right",
                    open: drawerOpen,
                    onClose: handleDrawerClose,
                }}
            
        >
          <div onClick={()=> handleDrawerClose()}  > <Listdrawer profile={profile} /> </div>
        </Drawer>
        </div>
            
    
        );
      };
    
      const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));

      
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
        <AppBar className="appbar" id={routeStyle()} >
            <Toolbar>
                <Link to='/'  id='logo'>HEALTHY-SIDE</Link>
                { mobileView ? displayMobile() : link }
            </Toolbar>
            {/* <div className="container">
                <Link to='/' className='brand-logo' id='logo'>HEALTHY-SIDE</Link>
                { link }
            </div> */}
        </AppBar>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect( mapStateToProps )(Navbar);