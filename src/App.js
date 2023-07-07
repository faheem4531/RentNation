import React from "react";

import { Home, Listing } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./pages/contact";
import About from "./pages/about";
import Order from "./pages/order";
import DamageReport from "./pages/damageReport";
import Notification from "./pages/notification";
import Profile from "./pages/profile";
import ListingPreview from "./pages/listingPreview";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />} />
        <Route path="/damageReport" element={<DamageReport />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/listingPreview" element={<ListingPreview />} />
      </Routes>
    </div>
  );
}

export default App;
