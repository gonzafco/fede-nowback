import React from "react";
import "./style.scss";

export default function BannerLogin(props) {
  console.log(props)
  const {text} = props
  return (
    <div className="bannerLogin">
      <p className="textBanner">{text}</p>
    </div>
  );
}
