import React from "react";
import Footer from "../../components/Footer/Footer";
import Topbar from "../../components/Topbar/Topbar";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default function register() {
  return (
    <div>
      <Topbar />
      <RegistrationForm />
      <Footer />
    </div>
  );
}
