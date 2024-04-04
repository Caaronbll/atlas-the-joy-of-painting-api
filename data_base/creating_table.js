const { Client } = require('pg');

const client = new Client({
  user: 'ab',
  host: 'localhost',
  database: 'postgres',
  password: 'itsme',
  port: 5432,
});

client
  .connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  });

  const createTableQuery = `
  CREATE TABLE newpisodes (
    episode_id integer PRIMARY KEY,
    title varchar,
    date varchar,
    season integer,
    episode integer,
    img_src varchar,
    num_of_colors integer,
    colors varchar,
    hex_list varchar,
    subjects varchar,
    yt_src varchar,
    notes varchar
  );
`;

const dropTable = `
DROP TABLE episodes;
`;


client.query("SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_type='BASE TABLE';")
  .then((result) => {
    console.log("Tables in the database:");
    result.rows.forEach((row) => {
      console.log(row.table_name);
    });
  })
  .catch((error) => {
    console.error("Error fetching tables:", error);
  });