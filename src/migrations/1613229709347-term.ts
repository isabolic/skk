import { getDb } from '../migrations-utils/db';

const up = async () => {
  const db = await getDb();
  const exist = (await db.collections()).find(
    (collection) => collection.collectionName === 'term',
  );

  const carter1 = await db
    .collection('carter')
    .findOne({ name: 'prijevoznik 1' });
  const carter2 = await db
    .collection('carter')
    .findOne({ name: 'prijevoznik 2' });
  const carter3 = await db
    .collection('carter')
    .findOne({ name: 'prijevoznik 3' });

  if (!exist) {
    await db.createCollection('term');
    await db.collection('term').insertMany([
      {
        departureLocation: 'Zagreb',
        arrivalLocation: 'Split',
        departureDate: new Date(2018, 11, 24, 10, 30),
        arrivalDate: new Date(2018, 11, 24, 15, 30),
        carter: carter1._id,
      },
      {
        departureLocation: 'Zagreb',
        arrivalLocation: 'Slavonski Brod',
        departureDate: new Date(2018, 11, 24, 12, 0),
        arrivalDate: new Date(2018, 11, 24, 14, 30),
        carter: carter1._id,
      },
      {
        departureLocation: 'Zagreb',
        arrivalLocation: 'Čazma',
        departureDate: new Date(2018, 11, 24, 14, 0),
        arrivalDate: new Date(2018, 11, 24, 15, 30),
        carter: carter1._id,
      },
      {
        departureLocation: 'Split',
        arrivalLocation: 'Zagreb',
        departureDate: new Date(2018, 11, 24, 10, 30),
        arrivalDate: new Date(2018, 11, 24, 15, 30),
        carter: carter2._id,
      },
      {
        departureLocation: 'Rijeka',
        arrivalLocation: 'Virovitica',
        departureDate: new Date(2018, 11, 24, 12, 0),
        arrivalDate: new Date(2018, 11, 24, 15, 30),
        carter: carter2._id,
      },
      {
        departureLocation: 'Pula',
        arrivalLocation: 'Sisak',
        departureDate: new Date(2018, 11, 24, 14, 0),
        arrivalDate: new Date(2018, 11, 24, 18, 30),
        carter: carter2._id,
      },
      {
        departureLocation: 'Dubrovnik',
        arrivalLocation: 'Zagreb',
        departureDate: new Date(2018, 11, 24, 9, 30),
        arrivalDate: new Date(2018, 11, 24, 16, 30),
        carter: carter3._id,
      },
      {
        departureLocation: 'Osijek',
        arrivalLocation: 'Zagreb',
        departureDate: new Date(2018, 11, 24, 12, 0),
        arrivalDate: new Date(2018, 11, 24, 15, 30),
        carter: carter3._id,
      },
      {
        departureLocation: 'Pula',
        arrivalLocation: 'Varaždin',
        departureDate: new Date(2018, 11, 24, 14, 0),
        arrivalDate: new Date(2018, 11, 24, 18, 30),
        carter: carter3._id,
      },
    ]);
  }
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const down = async () => {};

export { up, down };
