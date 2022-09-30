import React from "react";
import { Navigate, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import DetailPage from "./pages/DetailPage";
import ExplorePage from "./pages/ExplorePage";
import MyPage from "./pages/MyPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/mypage" element={<Navigate replace to='/mypage/settings' />} />
        <Route path="/mypage/*" element={<MyPage /> } />
      </Routes>
    </Layout>
  );
}

export default App;
