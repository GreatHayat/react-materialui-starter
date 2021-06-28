import React from 'react';
import clsx from 'clsx';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useAuthContext } from '../../../context/authContext';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({
  open,
  isMobileOpen,
  handleDrawerToggle,
  handleMobileDrawerToggle,
}) => {
  const classes = useStyles();
  const { user, setUser } = useAuthContext();

  const handleUser = () => {
    setUser({ isAuthenticated: false, data: { role: null } });
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {user.isAuthenticated && (
            <>
              {/* Menu Button for Mobile Screens */}
              <Hidden smUp implementation="css">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleMobileDrawerToggle}
                  edge="start"
                  className={clsx(
                    classes.menuButton,
                    isMobileOpen && classes.hide
                  )}
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>

              {/* Menu Button for large screens */}
              <Hidden xsDown implementation="css">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerToggle}
                  edge="start"
                  className={clsx(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
            </>
          )}
          <Typography variant="h6" noWrap className={classes.title}>
            Invoicing Portal
          </Typography>
          {user.isAuthenticated ? (
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleUser}
            >
              <AccountCircle />
            </IconButton>
          ) : (
            <Button
              color="inherit"
              onClick={() =>
                setUser({ isAuthenticated: true, data: { role: 'admin' } })
              }
            >
              LOGIN
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

Header.propTypes = {
  open: propTypes.bool.isRequired,
  isMobileOpen: propTypes.bool.isRequired,
  handleDrawerToggle: propTypes.func.isRequired,
  handleMobileDrawerToggle: propTypes.func.isRequired,
};

export default Header;
