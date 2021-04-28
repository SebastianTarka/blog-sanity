import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AllPosts from "./CMS/AllPosts.js";
import OnePost from "./CMS/Post.js";

const CMS = () => {
  return (
    <BrowserRouter>
      <div>
        <Route component={AllPosts} path="/" exact />
        <Route component={OnePost} path="/:slug" />
      </div>
    </BrowserRouter>
  );
}
export default CMS;
