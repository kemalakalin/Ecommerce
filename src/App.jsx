import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopBar from "./components/TopBar";
import MainHeader from "./layout/MainHeader";
import HeroSection from "./components/HeroSection";
import BrandLogosSection from "./components/BrandLogosSection";
import FeaturedCategories from "./components/FeaturedCategories";
import BestsellerProducts from "./components/BestsellerProducts";
import FeaturedContentSection from "./components/FeaturedContentSection";
import ServicesSection from "./components/ServicesSection";
import FeaturedPosts
 from "./components/FeaturedPosts";
import Footer from "./components/Footer";

function Home() {
 
}

function App() {
  return (
    <Router>

      {/* 🔥 GLOBAL COMPONENTLER */}
      <TopBar />
      <MainHeader />
      <HeroSection />
      <BrandLogosSection />
      <FeaturedCategories />
      <BestsellerProducts />
      <FeaturedContentSection />
      <ServicesSection />
      <FeaturedPosts />
      <Footer />

      {/* 🔥 ROUTE ALANI */}
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>

    </Router>
  );
}

export default App;