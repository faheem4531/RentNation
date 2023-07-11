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
import SignIn from "./components/modals/SignIn";
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
        <Route path="/Ticket" element={<Ticket />} />
        <Route path="/AddTicket" element={<AddTicket />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route
          path="/NotificationSettings"
          element={<NotificationSettings />}
        />
        <Route path="/EditPassword" element={<EditPassword />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
      {/* <ListingPreview /> */}
    </div>
  );
}

export default App;
