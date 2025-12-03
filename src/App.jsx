import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AllPosts from "./pages/AllPosts";
import MyPosts from "./pages/MyPosts";
import { useAuth } from "./context/AuthContext";

function App({ postService }) {
  const history = useNavigate();
  const { user, logOut } = useAuth();

  const onAllPosts = () => {
    history("/");
  };

  const onMyPosts = () => {
    history(`/${user.userid}`);
  };

  const onlogOut = () => {
    if (window.confirm("로그아웃을 하시겠습니까?")) {
      logOut();
      history("/");
    }
  };

  return (
    <div className="app">
      <Header
        userid={user.userid}
        onLogout={onlogOut}
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
