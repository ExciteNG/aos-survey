import React from "react";
import Form from "./subs/Form";
import Header from "./subs/Header";
import Footer from "./../../layout/Footer";


export default function Register({match}) {
 
  return (
    <>
      <Header />
      <div className="container">
        <Form />
      </div>
      <Footer />
    </>
  );
}
