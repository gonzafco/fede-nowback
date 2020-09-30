import React from "react";

import HeroLogin from "../../components/HeroLogin";
import BannerLogin from "../../components/BannerLogin";
import RegisterForm from "../../components/RegisterForm";

export default function Login() {
  console.log("cargando el Page Login")
  return (
    <div>
      <HeroLogin />
      <BannerLogin />
      <RegisterForm />
    </div>  
  );
}
