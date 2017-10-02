import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import BasturTableContainer from '../../containers/BasturTableContainer';
import './styles.css';

const App = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography type="title" color="inherit">
          Basturma
        </Typography>
      </Toolbar>
    </AppBar>
    <BasturTableContainer />
  </div>
);

export default App;
