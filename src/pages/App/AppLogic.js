import data from '../../data';

data.forEach(customer => {
  customer.totalAmount = customer.transactions
    .reduce((total, tr) => total + +tr.amount, 0)
    .toFixed(2);

  customer.transactions.forEach(tr => {
    let points = 0;

    if (tr.amount > 50 && tr.amount < 100) {
      points = Math.floor(tr.amount - 50);
    }

    if (tr.amount > 100) {
      points = Math.floor(tr.amount - 100) * 2 + 50;
    }

    tr.points = points;
  });

  customer.totalPoints = customer.transactions.reduce(
    (total, tr) => total + +tr.points,
    0
  );
});

export default data;
