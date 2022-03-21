import React from "react";
import { Route, Routes } from "react-router-dom";
import { EditorPage } from "../Components/EditorPage";
import { Home } from "../Components/Home";

export const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/editor/:roomId" element={<EditorPage />}></Route>
    </Routes>
  );
};
