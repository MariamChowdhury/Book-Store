import React from "react";
import Products from "../Products/Products";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Navigation />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
