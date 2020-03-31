import * as React from 'react';
import * as ReactDOM from 'react-dom';

const styles = require('./style/index.css');

const App = () => {
  return (
    <div className={styles.asd}>
      React and Node
    </div>
  )
};

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
