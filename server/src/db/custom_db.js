
const pool = require("./db");

// 직업별
async function selectCategories() {
  const sql = `
    SELECT jc_code, jc_name
    FROM job_categories
    ORDER BY jc_name ASC
  `;
  const [rows] = await pool.query(sql);
  return rows;
}

// 직무
async function selectRolesByCategory(jc_code) {
  const sql = `
    SELECT jr_code, jr_name, jc_code
    FROM job_roles
    WHERE jc_code = ?
    ORDER BY jr_name ASC
  `;
  const [rows] = await pool.query(sql, [jc_code]);
  return rows;
}

// 고용형태
async function selectEmploymentTypesDistinct() {
  const sql = `
    SELECT DISTINCT jp_employment_type
    FROM job_postings
    WHERE jp_employment_type IS NOT NULL AND jp_employment_type <> ''
    ORDER BY jp_employment_type ASC
  `;
  const [rows] = await pool.query(sql);
  return rows.map((r) => r.jp_employment_type);
}

// 지역
async function selectLocationsDistinct() {
  const sql = `
    SELECT DISTINCT jp_location
    FROM job_postings
    WHERE jp_location IS NOT NULL AND jp_location <> ''
    ORDER BY jp_location ASC
  `;
  const [rows] = await pool.query(sql);
  return rows.map((r) => r.jp_location);
}

// 조건 기반 공고조회
async function selectPostingsByFilters({
  jc_code,
  jr_code,
  jp_employment_type,
  jp_location,
  limit = 4,
} = {}) {
  if (!jc_code) return [];

  let sql = `
    SELECT jp.*
    FROM job_postings jp
    JOIN job_roles jr
      ON jp.jr_code = jr.jr_code
    WHERE jr.jc_code = ?
  `;
  const params = [jc_code];

  if (jr_code) {
    sql += ` AND jp.jr_code = ?`;
    params.push(jr_code);
  }

  if (jp_employment_type) {
    sql += ` AND jp.jp_employment_type = ?`;
    params.push(jp_employment_type);
  }

  if (jp_location) {
    sql += ` AND jp.jp_location = ?`;
    params.push(jp_location);
  }


  sql += ` ORDER BY jp.jp_id DESC`;

  sql += ` LIMIT ?`;
  params.push(Number(limit) || 4);

  const [rows] = await pool.query(sql, params);
  return rows;
}

module.exports = {
  selectCategories,
  selectRolesByCategory,
  selectEmploymentTypesDistinct,
  selectLocationsDistinct,
  selectPostingsByFilters,
};
