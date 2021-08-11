import '../../styles/App.css';

import React from 'react';

import Row from '../../components/Row.jsx';
import data from './AppLogic';

const App = () => {
  const renderRows = data.map(row => <Row key={Math.random()} row={row} />);

  return (
    <div className='container'>
      <table className='customers'>
        <thead>
          <tr>
            <th></th>
            <th>Id</th>
            <th>Customer</th>
            <th>Month</th>
            <th>Total Amount ($)</th>
            <th>Points Earned</th>
          </tr>
        </thead>
        <tbody>{renderRows}</tbody>
      </table>
    </div>
  );
};

export default App;
