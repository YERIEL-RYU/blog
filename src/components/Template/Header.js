import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { AppBar, Avatar, makeStyles, Toolbar, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transitions: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    cursor: 'pointer',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

const Header = ({ open, onDrawerOpen }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const onClick = (e) => {
    console.log('click');
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };
  const popOpen = Boolean(anchorEl);
  const id = popOpen ? 'transitons-popper' : undefined;

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, { [classes.appBarShift]: open })}
    >
      <Toolbar>
        <IconButton
          aria-label="open menu"
          onClick={onDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, { [classes.hide]: open })}
        >
          <MenuIcon />
        </IconButton>
        <Grid container>
          <Grid item xs>
            <Typography variant="h4" className={classes.title}>
              삥삥아 어디까지 갈래?
            </Typography>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item>
                <Avatar className={classes.small} onClick={onClick}></Avatar>
                <Popper
                  disablePortal={true}
                  id={id}
                  open={popOpen}
                  anchorEl={anchorEl}
                  transition
                >
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                      <Paper>
                        <Typography className={classes.typography}>
                          <Link to="/mypage">My page</Link>
                        </Typography>
                      </Paper>
                    </Fade>
                  )}
                </Popper>
              </Grid>
              <Grid item>
                <Button color="inherit" href="/">
                  로그아웃
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
