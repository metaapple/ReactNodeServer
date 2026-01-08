const express = require("express")
const router = express.Router()
const { createJobResume } = require("../db/job_resume_db")

// POST /job-resumes
router.post("/", async (req, res) => {
  try {
    const { jc_code, jrs_text, jrs_type } = req.body

    // (선택) 로그인 필수로 하고 싶으면 이거 켜기
    // if (!req.session?.user)
    //   return res.status(401).json({ error: "로그인이 필요합니다." })

    if (!jc_code)
      return res.status(400).json({ error: "직무 카테고리를 선택해주세요." })
    if (!jrs_text)
      return res.status(400).json({ error: "자기소개서 내용을 입력해주세요." })

    const text = String(jrs_text).trim()
    if (text.length < 200)
      return res.status(400).json({ error: "최소 200자 이상 입력해주세요." })
    if (text.length > 4000)
      return res.status(400).json({ error: "최대 4000자까지 입력 가능합니다." })

    const id = await createJobResume({
      jc_code,
      jrs_text: text,
      jrs_type: jrs_type || "text",
    })
    return res.json({ success: true, jrs_id: id })
  } catch (e) {
    console.error(e)
    return res.status(500).json({ error: "자기소개서 저장 실패" })
  }
})

module.exports = router
