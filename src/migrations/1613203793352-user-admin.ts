import { getDb } from '../migrations-utils/db';

const up = async () => {
  const db = await getDb();
  const exist = (await db.collections()).find(
    (collection) => collection.collectionName === 'user',
  );
  if (!exist) {
    await db.createCollection('user');
  }

  const data = await db.collection('user').findOne({ username: 'admin' });

  if (!data) {
    await db
      .collection('user')
      .insertMany([
        { username: 'admin', email: 'admin@gmail.com', password: 'password' },
      ]);
  }
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const down = async () => {};

export { up, down };
