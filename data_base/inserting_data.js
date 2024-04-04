const { Client } = require('pg');
const fs = require('fs');
const csv = require('csvtojson');

const client = new Client({
  user: 'ab',
  host: 'localhost',
  database: 'postgres',
  password: 'itsme',
  port: 5432,
});

// check connection
client
  .connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  });


// check table exsist
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


// Read the CSV file and insert data into the database
// insert data
(async () => {
  const data = await csv().fromFile('data/new_data.csv');
  for (const row of data) {
    try {
      // Execute an INSERT query for each row of the CSV file
      const query = 'INSERT INTO newepisodes (episode_id, title, date, season, episode, img_src, num_of_colors, colors, hex_list, subjects, yt_src, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)';
      const values = [row.painting_index, row.title, row. date, row.season, row.episode, row.img_src, row.num_of_colors, row.colors, row.hex_list, row.subject, row.yt_src, row.notes]; // Replace column1, column2, ... with your actual column names
      await client.query(query, values);
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  }
  
})();

