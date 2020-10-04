import React from "react";

import HeroLogin from "../../components/HeroLogin";
import BannerLogin from "../../components/BannerLogin";
import RegisterForm from "../../components/RegisterForm";

export default function Login() {
  return (
    <div>
      <HeroLogin />
      <BannerLogin text="TENER UNA MARCA MAL DISEÑADA ES AYUDAR A TU COMPETENCIA" />
      <RegisterForm />
    </div>  
  );
}
