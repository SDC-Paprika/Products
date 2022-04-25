const db = require('./index');

describe('Database Client', () => {
  // beforeEach(() => db.connect()); // no longer required with pooling!

  afterAll(() => db.end());

  test('should make a valid connection', async () => {
    const res = await db.query('SELECT $1::text as message', ['Hello, pg!']);

    expect(res.rows[0].message).toBe('Hello, pg!');
  });

  test('should connect to the actual database', async () => {
    const { rows } = await db.query('SELECT * from products where id = 1');

    const expected = {
      id: 1,
      name: 'Camo Onesie',
      slogan: 'Blend in to your crowd',
      description:
        'The So Fatigues will wake you up and fit you in. This high energy ' +
        'camo will have you blending in to even the wildest surroundings.',
      category: 'Jackets',
      default_price: '140',
    };

    expect(rows[0]).toEqual(expected);
  });
});
