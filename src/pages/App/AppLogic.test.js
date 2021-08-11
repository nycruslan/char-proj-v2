import data from './AppLogic';

test('A customer receives 2 points for every dollar spent over $100', () => {
  const amountSpent = data[0].transactions[0].amount;
  const pointsEarned = data[0].transactions[0].points;

  if (amountSpent > 100)
    expect(pointsEarned).toBe(Math.floor(amountSpent - 100) * 2 + 50);
});

test('A customer receives 1 points for every dollar spent over $50', () => {
  const amountSpent = data[0].transactions[0].amount;
  const pointsEarned = data[0].transactions[0].points;

  if (amountSpent <= 50) expect(pointsEarned).toBe(0);
});

test('A customer receives 0 points for every dollar spent up to $50', () => {
  const amountSpent = data[0].transactions[0].amount;
  const pointsEarned = data[0].transactions[0].points;

  if (amountSpent > 50 && amountSpent < 100)
    expect(pointsEarned).toBe(Math.floor(amountSpent - 50));
});
