import { Route, Switch } from "react-router-dom";

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
import LoginPage from "./pages/LoginPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import CreateOrderPage from "./pages/CreateOrderPage";
import ProtectedRoute from "./components/ProtectedRoute";
import useAutoLogin from "./store/hooks/useAutoLogin";
import PreviousOrdersPage from './pages/PreviousOrdersPage';

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
  useAutoLogin();
  return (
    <>
      <TopBar />
      <MainHeader />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" component={ProductDetailPage} />
        <Route path="/shop/:gender?/:categoryName?/:categoryId?" component={ShopPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/cart" component={ShoppingCartPage} />
        <ProtectedRoute path="/order" component={CreateOrderPage} />
        <ProtectedRoute path="/previous-orders" component={PreviousOrdersPage} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;