import { useState } from "react"
import styled from "@emotion/styled"

export default function QuestionPage() {
  // 직무 역할 선택
  const [JobList, setJobList] = useState("")
  // 채용 공고 링크 첨부
  const [JobDescription, setJobDescription] = useState("")
  // 자기소개서 작성
  const [Resume, setResume] = useState("")

  // 직무 역할 선택
  const [job, setJob] = useState("")

  // 채용 공고 URL 링크 입력
  const [url, setUrl] = useState("")

  return (
    <Container>
      <Left>
        <LeftTitle>
          직무 역할 선택
          <LeftLine> </LeftLine>
          <LeftWrap>
            {" "}
            지원하시는 직무 역할을 선택하세요.
            <ListWrap>
              <ListLabel></ListLabel>
              <Select value={job} onChange={(e) => setJob(e.target.value)}>
                <option value="">선택하세요</option>
                <option value="">111</option>
                <option value="">222</option>
                <option value="">333</option>
                <option value="">333</option>
                <option value="">333</option>
                <option value="">333</option>
                <option value="">333</option>
                <option value="">333</option>
                <option value="">333</option>
                <option value="">333</option>
                <option value="">333</option>
                <option value="">333</option>
                <option value="">333</option>
                <option value="">333</option>
                <option value="">333</option>
                <option value="">333</option>
                <option value="">333</option>
                <option value="">333</option>
                <option value="">333</option>
                <option value="">333</option>
                <option value="">333</option>
              </Select>
            </ListWrap>
          </LeftWrap>
        </LeftTitle>
        <LeftContent>
          채용공고URL입력
          <LeftLine2> </LeftLine2>
          <LeftLabel>
            {" "}
            채용공고 URL을 넣어주세요.
            <Input
              type="url"
              placeholder="채용공고 URL을 입력하세요."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </LeftLabel>
        </LeftContent>
      </Left>
      <Middle>
        <MiddleTitle>
          자기소개서 진단
          <SubmitButton>분석시작</SubmitButton>
        </MiddleTitle>
        <MiddleLine> </MiddleLine>
        <MiddleContent> AI 코칭피드백 </MiddleContent>
        <MiddleLine2></MiddleLine2>
      </Middle>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Left = styled.div`
  flex: 2;
  height: 600px;
  padding: 40px;
  border: 2px solid var(--strawberry-color);
  background: #fff;
  border-radius: 12px;
`

const LeftTitle = styled.div`
  height: 200px;
  padding: 20px;
  margin-bottom: 20px;
  border: 2px solid var(--strawberry-color);
  background: #fff;
  border-radius: 12px;
`

const LeftLine = styled.div`
  position: absolute;
  top: 200px;
  left: 38px;
  width: 234px;
  height: 0px;
  border-width: 2px;
  border-color: #e05269ff;
  border-style: solid;
  transform: rotate(0deg);
`

const LeftWrap = styled.div`
  height: 200px;
  font-size: 12px;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 12px;
`

const ListWrap = styled.div`
  flex: 6;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ListLabel = styled.div`
  flex: 6;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Select = styled.select`
  top: 200px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 14px;
  color: #555;
  background-color: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--strawberry-color);
  }
`
const LeftLabel = styled.div`
  height: 200px;
  font-size: 12px;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 12px;
`

const Input = styled.input`
  width: 91%;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 14px;
  margin-bottom: 5px;
  margin-right: 10px;

  &:focus {
    outline: none;
    border-color: var(--strawberry-color);
  }
`

const LeftContent = styled.div`
  height: 200px;
  padding: 20px;
  border: 2px solid var(--strawberry-color);
  background: #fff;
  border-radius: 12px;
`

const LeftLine2 = styled.div`
  position: absolute;
  top: 420px;
  left: 38px;
  width: 234px;
  height: 0px;
  border-width: 2px;
  border-color: #e05269ff;
  border-style: solid;
  transform: rotate(0deg);
`

const Middle = styled.div`
  flex: 7;
  height: 600px;
  padding: 40px;
  border: 2px solid var(--strawberry-color);
  background: #fff;
  border-radius: 12px;
`

const MiddleTitle = styled.div`
  height: 250px;
  padding: 40px;
  margin-bottom: 20px;
  border: 2px solid var(--strawberry-color);
  background: #fff;
  border-radius: 12px;
`

const SubmitButton = styled.button`
  top: 200px;
  padding: 8px 14px;
  border-radius: 8px;
  background-color: var(--strawberry-color);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    opacity: 0.9;
  }
`
const MiddleLine = styled.div`
  position: absolute;
  top: 220px;
  left: 400px;
  width: 750px;
  height: 0px;
  border-width: 2px;
  border-color: #e05269ff;
  border-style: solid;
  transform: rotate(0deg);
`

const MiddleContent = styled.div`
  flex: 7;
  height: 250px;
  padding: 40px;
  border: 2px solid var(--strawberry-color);
  background: #fff;
  border-radius: 12px;
`

const MiddleLine2 = styled.div`
  position: absolute;
  top: 500px;
  left: 400px;
  width: 750px;
  height: 0px;
  border-width: 2px;
  border-color: #e05269ff;
  border-style: solid;
  transform: rotate(0deg);
`
