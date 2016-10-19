import React, {PropTypes} from 'react';

import {StyleRoot} from 'radium';
import styles from './styles';

const App = props => (
  <StyleRoot>
    <div style={styles.base}>
      {props.children}
    </div>
  </StyleRoot>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
