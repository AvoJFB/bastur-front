import React from 'react';
import { withRouter } from 'react-router-dom';
import { AppBar, Toolbar, Typography, withStyles } from 'material-ui';
import NewOrderDialogContainer from '../../containers/NewOrderDialogContainer';

const styles = () => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
    cursor: 'pointer',
  },
});

const NavBar = (props) => {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex} onClick={() => props.history.push('/')}>
            Basturma
          </Typography>
          <NewOrderDialogContainer />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(withRouter(NavBar));
