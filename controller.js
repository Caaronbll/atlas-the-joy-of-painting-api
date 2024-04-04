

const test = (req, res) => {
  res.status(200).send('TEST PASSED!!');
};

const getPainting = (req, res) => {
  const id = parseInt(req.params.id);
  client.query(queries.getPainting, [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};


const getTitles = (req, res) => {
  const id = parseInt(req.params.id);
  client.query(queries.getTitles, [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getMonth = (req, res) => {
  const id = parseInt(req.params.id);
  client.query(queries.getMonth, [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getSubject = (req, res) => {
  const id = parseInt(req.params.id);
  client.query(queries.getSubject, [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

Module.exports = {
  test,
  getPainting,
  getTitles,
  getMonth,
  getSubject
}