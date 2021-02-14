import { getDb } from '@/migrations-utils/db';

const up = async () => {
  const db = await getDb();
};

const down = async () => {
  const db = await getDb();
};

export { up, down };
