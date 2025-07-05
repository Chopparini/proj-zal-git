const calculator = require('./calculator');

describe('Calculator Integration', () => {
  test('chained operations work correctly', () => {
    const sum = calculator.add(2, 3);
    const product = calculator.multiply(sum, 2);
    expect(product).toBe(10);
  });
})