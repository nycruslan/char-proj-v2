import React, { useState } from 'react';

const Row = ({ row }) => {
  const [open, setOpen] = useState(true);

  const dropDownIcon = `chevron-${open ? 'down' : 'up'}-outline`;

  const renderTransactions = row.transactions.map(tRow => (
    <tr key={Math.random()}>
      <td>{tRow.date}</td>
      <td>-{tRow.amount}</td>
      <td>{tRow.points}</td>
    </tr>
  ));

  return (
    <>
      <tr>
        <td>
          <button className='drop-btn' onClick={() => setOpen(!open)}>
            <ion-icon name={dropDownIcon}></ion-icon>
          </button>
        </td>
        <td>{row.id}</td>
        <td>{row.name}</td>
        <td>{row.month}</td>
        <td>-{row.totalAmount}</td>
        <td>{row.totalPoints}</td>
      </tr>
      <tr className={open ? 'fold' : null}>
        <td colSpan='6'>
          <div className='panel'>
            <h3>Transactions</h3>
            <div>
              <table className='transactions'>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Amount ($)</th>
                    <th>Reward Points</th>
                  </tr>
                </thead>
                <tbody>{renderTransactions}</tbody>
              </table>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Row;
