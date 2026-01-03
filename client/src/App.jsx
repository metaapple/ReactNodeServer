import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import TrendPage from "./components/TrendPage";
import ResumePage from "./components/ResumePage";
import QuestionPage from "./components/QuestionPage";
import CustomPage from "./components/CustomPage";
import ChatPage from "./components/ChatPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <RoutesWrapper>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/trend" element={<TrendPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/custom" element={<CustomPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </RoutesWrapper>
      <Footer />
    </div>
  );
}

export default App;

const RoutesWrapper = styled.div`
  padding-top: 2em;
`;
