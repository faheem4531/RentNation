import React from "react";

import {
  Home, Listing, ListingPreview, Contact, About, Order, DamageReport, Notification, Ticket,
  AddTicket, Profile, EditProfile, Settings, NotificationSettings, EditPassword, PrivacyPolicy
} from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      {/* <Home /> */}
      {/* <Listing /> */}
      {/* <Contact /> */}
      {/* <About /> */}
      {/* <Order /> */}
      {/* <DamageReport /> */}
      {/* <Notification /> */}
      {/* <Profile /> */}
      {/* <ListingPreview /> */}
      {/* <Ticket /> */}
      {/* <AddTicket /> */}
      {/* <EditProfile /> */}
      {/* <Settings /> */}
      {/* <NotificationSettings /> */}
      {/* <EditPassword /> */}
      <PrivacyPolicy />
    </div>
  );
}

export default App;
