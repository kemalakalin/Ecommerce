import React from "react";
import { useHistory, Route, Switch } from "react-router-dom";

import TopBar from "./components/TopBar";
import MainHeader from "./layout/MainHeader";
import HeroSection from "./components/HeroSection";
import BrandLogosSection from "./components/BrandLogosSection";
import FeaturedCategories from "./components/FeaturedCategories";
import BestsellerProducts from "./components/BestsellerProducts";
import FeaturedContentSection from "./components/FeaturedContentSection";
import ServicesSection from "./components/ServicesSection";
import FeaturedPosts from "./components/FeaturedPosts";
import Footer from "./components/Footer";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import AboutPage from "./pages/AboutPage";
import SignupPage from "./pages/SignupPage";

function Home() {
  return (
    <>
      <HeroSection />
      <BrandLogosSection />
      <FeaturedCategories />
      <BestsellerProducts />
      <FeaturedContentSection />
      <ServicesSection />
      <FeaturedPosts />
    </>
  );
}

function App() {
  return (
    <>
      <TopBar />
      <MainHeader />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/product/:id" component={ProductDetailPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/signup" component={SignupPage} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;