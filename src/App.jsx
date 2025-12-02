import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AllPosts from "./pages/AllPosts";
import MyPosts from "./pages/MyPosts";
import { useAuth } from "./context/AuthContext";

function App({ postService }) {
  const history = useNavigate();
  const { user, logout } = useAuth();

  const onAllPosts = () => {
    history.push("/");
  };

  const onMyPosts = () => {
    history.push(`/${userHistory.userid}`);
  };

  const onLogout = () => {
    if (window.confirm("로그아웃을 하시겠습니까?")) {
      logout();
      history.push("/");
    }
  };

  return (
    <div className="app">
      <Header
        userid={user.userid}
        onLogout={onLogout}
        onAllPosts={onAllPosts}
        onMyPosts={onMyPosts}
      ></Header>
      <Routes>
        (
        <>
          <Route
            exact
            path="/"
            element={<AllPosts postService={postService} />}
          ></Route>
          <Route
            exact
            path="/:userid"
            element={<MyPosts postService={postService} />}
          ></Route>
        </>
        )
      </Routes>
    </div>
  );
}

export default App;
