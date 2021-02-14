import { getDb } from '../migrations-utils/db';

const generateTicketNo = () => {
  return `${Math.floor(Math.random() * 1000000000)}`;
};

const up = async () => {
  const db = await getDb();
  const exist = (await db.collections()).find(
    (collection) => collection.collectionName === 'ticket',
  );

  if (exist) {
    await db.dropCollection('ticket');
    await db.createCollection('ticket');
  }

  const termList = (await db.collection('term').find().toArray()) as {
    _id: string;
  }[];

  for (const term of termList) {
    const data = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const n of new Array(50)) {
      data.push({ ticketNo: generateTicketNo(), userId: null, term: term._id });
    }

    await db.collection('ticket').insertMany(data);
  }
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const down = async () => {};

export { up, down };
