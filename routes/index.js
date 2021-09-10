

module.exports = (db) => {
  
  const router = require('express').Router();

  router.get('/', (req, res) => {
    const visit = "tomer"
    // insert statment
    
    const sql = 'INSERT INTO visits (ts) values (?)'
    // execute the insert statment
    db.query(sql,Date.now(),(err, result, fields) => {
      if (err) res.status(500).json({message:err})
      else res.status(200).json({ message: `Welcome! ${result.insertId}`});
    })

  });

  
  return router;

}