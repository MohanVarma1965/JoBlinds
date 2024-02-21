import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import Banner from "./pages/Banner";
import OurProducts from "./pages/OurProducts";
import ProductGrid from "./pages/ProductGrid";

import BannerImage from "./pages/BannerImage";
import ContactForm from "./pages/ContactForm";
import Footer from "./pages/Footer";

function HomePage() {
  return <div></div>;
}

const products = [
  { title: "Zebra Blinds", imageUrl: "/gridImages/one.png" },
  { title: "Shangri-La Blinds", imageUrl: "/gridImages/two.png" },
  { title: "Roller Blinds", imageUrl: "/gridImages/three.png" },
  { title: "Drapery", imageUrl: "/gridImages/two.png" },
  { title: "Honeycomb Blinds", imageUrl: "/gridImages/one.png" },
  { title: "Automation", imageUrl: "/gridImages/two.png" },
  { title: "Zebra Blinds", imageUrl: "/gridImages/one.png" },
  { title: "Shangri-La Blinds", imageUrl: "/gridImages/one.png" },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Banner />
        <Header />
        <BannerImage />
        <OurProducts />
        <ProductGrid products={products} />
        <ContactForm />
        <Footer />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
