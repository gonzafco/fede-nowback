import React from "react";

import HeroLogin from "../../components/HeroLogin";
import BannerLogin from "../../components/BannerLogin";
import RegisterForm from "../../components/RegisterForm";

export default function Register() {
  return (
    <>
      <HeroLogin />
      <BannerLogin text="TENER UNA MARCA MAL DISEÑADA ES AYUDAR A TU COMPETENCIA"/>
      <RegisterForm />
    </>
  );
}
