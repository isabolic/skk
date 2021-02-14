import { getDb } from '../migrations-utils/db';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const up = async () => {};

const down = async () => {
  console.log(`drop start....`);
  const db = await getDb();
  const collections = await db.collections();

  for (const [key, collection] of collections.entries()) {
    console.log(`drop.... ${key} : ${collection.collectionName}`);
    await collection.drop();
  }
};

export { down, up };
