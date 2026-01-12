const express = require("express");
const router = express.Router();

const {
  selectCategories,
  selectRolesByCategory,
  selectEmploymentTypesDistinct,
  selectLocationsDistinct,
  selectPostingsByFilters,
} = require("../db/custom_db");



function toTrimmedString(v) {
  if (v === undefined || v === null) return "";
  return String(v).trim();
}

function toOptionalString(v) {
  const s = toTrimmedString(v);
  return s.length ? s : null;
}

function toPositiveInt(v, fallback) {
  const n = Number(v);
  if (!Number.isFinite(n)) return fallback;
  const i = Math.floor(n);
  return i > 0 ? i : fallback;
}


router.get("/jobs", async (req, res) => {
  try {
    const jc_code = toOptionalString(req.query.jc_code);

    const [categories, employmentTypes, locations] = await Promise.all([
      selectCategories(),
      selectEmploymentTypesDistinct(),
      selectLocationsDistinct(),
    ]);

    const roles = jc_code ? await selectRolesByCategory(jc_code) : [];

    return res.json({ categories, roles, employmentTypes, locations });
  } catch (err) {
    console.error("커스텀 옵션 조회 오류:", err);
    return res.status(500).json({ message: "커스텀 옵션 조회 실패" });
  }
});








//직업
router.get("/job-categories", async (req, res) => {
  try {
    const categories = await selectCategories();
    return res.json(categories);
  } catch (err) {
    console.error("직무 카테고리 조회 오류:", err);
    return res.status(500).json({ message: "직무 카테고리 조회 실패" });
  }
});



//직무
router.get("/roles", async (req, res) => {
  try {
    const jc_code = toOptionalString(req.query.jc_code);
    if (!jc_code) {
      return res.status(400).json({ message: "jc_code는 필수입니다." });
    }

    const roles = await selectRolesByCategory(jc_code);
    return res.json(roles);
  } catch (err) {
    console.error("직무 역할 조회 오류:", err);
    return res.status(500).json({ message: "직무 역할 조회 실패" });
  }
});


router.post("/match", async (req, res) => {
  try {
    const jc_code = toOptionalString(req.body?.jc_code);
    const jr_code = toOptionalString(req.body?.jr_code);
    const jp_employment_type = toOptionalString(req.body?.jp_employment_type);
    const jp_location = toOptionalString(req.body?.jp_location);
    const limit = toPositiveInt(req.body?.limit, 4);

    if (!jc_code) {
      return res.status(400).json({ message: "jc_code는 필수입니다." });
    }

    const jobs = await selectPostingsByFilters({
      jc_code,
      jr_code,
      jp_employment_type,
      jp_location,
      limit,
    });

    return res.json({ jobs });
  } catch (err) {
    console.error("공고 매칭 오류:", err);
    return res.status(500).json({ message: "공고 매칭 실패" });
  }
});

module.exports = router;



// 

