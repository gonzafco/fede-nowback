import React from "react";

import HeroLogin from "../../components/HeroLogin";
import BannerLogin from "../../components/BannerLogin";
import RegisterForm from "../../components/RegisterForm";

export default function Register() {
  console.log("cargando el Page Register")
  return (
    <>
      <HeroLogin />
      <BannerLogin />
      <RegisterForm />
    </>
  );
}
