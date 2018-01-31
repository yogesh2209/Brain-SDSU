var path      = require("path");
var pg = require('pg'); // use for pg only
var config = require('config'); //database information stored here
//detect what environmnet is used
const ENV = config.util.getEnv('NODE_ENV')
//get database connection information
const connection = config.db[ENV];
//connect to posgres database using pg
var client = new pg.Client(connection);
client.connect();

exports.slicer = function(req, res, next) {
    results = res.send('brain slicer!');
}

exports.get_x_slice = function(req, res, next) {
  const x = req.params.x;
  results = []
  const queryStr = "SELECT * FROM braintbl WHERE x = "+x+";"
  pg.connect(connection, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const queryStr = "SELECT * FROM braintbl WHERE x = "+x+";"
    const query = client.query(queryStr);
    query.on('row', (row) => {
      for (var k in row) //convert each to int
      {
          if (row.hasOwnProperty(k))
          {
              row[k] = Number(row[k]);
          }
      }
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
};

exports.get_y_slice = function(req, res, next) {
  const y = req.params.y;
  results = []
  pg.connect(connection, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const queryStr = "SELECT * FROM braintbl WHERE y = "+y+";"
    const query = client.query(queryStr);
    query.on('row', (row) => {
      for (var k in row) //convert each to int
      {
          if (row.hasOwnProperty(k))
          {
              row[k] = Number(row[k]);
          }
      }
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
};

exports.get_z_slice = function(req, res, next) {
  const z = req.params.z;
  results = []
  pg.connect(connection, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const queryStr = "SELECT * FROM braintbl WHERE z = "+z+";"
    const query = client.query(queryStr);
    query.on('row', (row) => {
      for (var k in row) //convert each to int
      {
          if (row.hasOwnProperty(k))
          {
              row[k] = Number(row[k]);
          }
      }
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
};

exports.get_catagory_slice = function(req, res, next) {
  const catagory = req.params.catagory;
  results = []
  pg.connect(connection, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const queryStr = "SELECT * FROM braintbl WHERE catagory = "+catagory+";"
    const query = client.query(queryStr);
    query.on('row', (row) => {
      for (var k in row) //convert each to int
      {
          if (row.hasOwnProperty(k))
          {
              row[k] = Number(row[k]);
          }
      }
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
};

exports.get_all = function(req, res, next) {
  results = []
  pg.connect(connection, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    const query = client.query("SELECT * FROM braintbl;")
    query.on('row', (row) => {
      for (var k in row) //convert each to int
      {
          if (row.hasOwnProperty(k))
          {
              row[k] = Number(row[k]);
          }
      }
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
};

exports.get_ten_points = function(req, res, next) {
  results = []
  pg.connect(connection, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    const query = client.query("SELECT * FROM braintbl LIMIT 10;")
    query.on('row', (row) => {
      for (var k in row) //convert each to int
      {
          if (row.hasOwnProperty(k))
          {
              row[k] = Number(row[k]);
          }
      }
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
};
