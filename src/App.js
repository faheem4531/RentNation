import React from "react";

import {
  Home,
  Listing,
  ListingPreview,
  Contact,
  About,
  Order,
  DamageReport,
  Notification,
  Ticket,
  AddTicket,
  Profile,
  EditProfile,
  Settings,
  NotificationSettings,
  EditPassword,
  PrivacyPolicy,
} from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";

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
      {/* <Listing /> */}
    </div>
  );
}

export default App;
