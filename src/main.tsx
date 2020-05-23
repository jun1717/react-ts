import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SubComponent from './sub-component';

const App = () => (
  <div>
    <h1>Hello!</h1>
    <SubComponent name="My Counter for TypeScript" />
  </div>
);


const root = document.getElementById('root');

ReactDOM.render(
  <App />,
  root,
);
