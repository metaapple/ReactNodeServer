//custom_router.js (node)
const express = require("express");
const router = express.Router();

const {
  selectCategories,
  selectRolesByCategory,
  selectEmploymentTypesDistinct,
  selectLocationsDistinct,
  selectPostingsByFilters,
} = require("../db/custom_db");

// GET /api/custom/jobs
router.get("/jobs", async (req, res) => {
  try {
    const { jc_code } = req.query;

    const [categories, employmentTypes, locations] = await Promise.all([
      selectCategories(),
      selectEmploymentTypesDistinct(),
      selectLocationsDistinct(),
    ]);

    let roles = [];
    if (jc_code) {
      roles = await selectRolesByCategory(jc_code);
    }

    return res.json({ categories, roles, employmentTypes, locations });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "서버 오류" });
  }
});

// POST /api/custom/match
router.post("/match", async (req, res) => {
  try {
    const { jc_code, jr_code, jp_employment_type, jp_location } = req.body;

    if (!jc_code) {
      return res.status(400).json({ message: "jc_code는 필수입니다." });
    }

    const jobs = await selectPostingsByFilters({
      jc_code,
      jr_code,
      jp_employment_type,
      jp_location,
      limit: 4,
    });

    return res.json({ jobs });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "서버 오류" });
  }
});

module.exports = router;
