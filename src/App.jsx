import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import CustomerReviews from "./sections/CustomerReviews";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import SuperQuality from "./sections/SuperQuality";
import Subscribe from "./sections/Subscribe";
import Nav from "./components/Nav";
import SignIn from "./components/SignIn";

const MainContent = () => (
  <>
    <section className="x1:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding" id="products">
      <PopularProducts />
    </section>
    <section className="padding" id="about-us">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full" id="contact-us">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </>
);

const App = () => (
  <Router>
    <main className="relative">
      <Nav />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<MainContent />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  </Router>
);

export default App;