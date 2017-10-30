import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, AppBar, Toolbar, Typography, withStyles } from 'material-ui';

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
          <Button color="contrast" onClick={() => props.history.push('/new')}>Добавить Заказ</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(withRouter(NavBar));
