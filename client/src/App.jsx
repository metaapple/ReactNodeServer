import React from "react";
import RequireAuth from "./components/RequireAuth";
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
          <Route
            path="/about"
            element={
              <RequireAuth>
                <AboutPage />
              </RequireAuth>
            }
          />
          <Route
            path="/trend"
            element={
              <RequireAuth>
                <TrendPage />
              </RequireAuth>
            }
          />
          <Route
            path="/resume"
            element={
              <RequireAuth>
                <ResumePage />
              </RequireAuth>
            }
          />
          <Route
            path="/question"
            element={
              <RequireAuth>
                <QuestionPage />
              </RequireAuth>
            }
          />
          <Route
            path="/custom"
            element={
              <RequireAuth>
                <CustomPage />
              </RequireAuth>
            }
          />
          <Route
            path="/chat"
            element={
              <RequireAuth>
                <ChatPage />
              </RequireAuth>
            }
          />
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
