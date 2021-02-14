import { getDb } from '../migrations-utils/db';

const up = async () => {
  const db = await getDb();
  const exist = (await db.collections()).find(
    (collection) => collection.collectionName === 'carter',
  );
  if (!exist) {
    await db.createCollection('carter');
    await db
      .collection('carter')
      .insertMany([
        { name: 'prijevoznik 1' },
        { name: 'prijevoznik 2' },
        { name: 'prijevoznik 3' },
      ]);
  }
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const down = async () => {};

export { up, down };
