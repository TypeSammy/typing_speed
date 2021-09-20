const db = require('../db/db')

const Paragraphs = {
  limit15() {
    const sql = `
    SELECT * FROM paragraphs ORDER BY RANDOM() LIMIT 15
    `
    return db.query(sql)
      .then(res => {
        return res.rows
      })
  },
  limit30() {
    const sql = `
    SELECT * FROM paragraphs ORDER BY RANDOM() LIMIT 30
    `
    return db.query(sql)
      .then(res => {
        return res.rows
      })
  },
  limit50() {
    const sql = `
    SELECT * FROM paragraphs ORDER BY RANDOM() LIMIT 50
    `
    return db.query(sql)
      .then(res => {
        return res.rows
      })
  }
}

module.exports = Paragraphs