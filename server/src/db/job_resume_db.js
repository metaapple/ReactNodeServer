const pool = require("./db")

async function createJobResume({ jc_code, jrs_text, jrs_type = "text" }) {
  const [result] = await pool.query(
    `INSERT INTO job_resume (jrs_type, jrs_text, jc_code)
     VALUES(?, ?, ?)`,
    [jrs_type, jrs_text, jc_code]
  )

  return result.insertId
}

module.exports = { createJobResume }
