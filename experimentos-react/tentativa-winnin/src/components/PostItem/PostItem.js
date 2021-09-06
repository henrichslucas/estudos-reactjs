import React from "react";

import "./PostItem.css";
const PostItem = () => {
  return (
    <div className="postItem">
      <div className="thumb">

      </div>

      <div className="postInfos">
        <span className="title">titulo do post</span>

        <span className="date">
          postado a x horas atras por usuario_nickname
        </span>

        <span className="url">dominio.io</span>
      </div>
    </div>
  );
};

export default PostItem;
