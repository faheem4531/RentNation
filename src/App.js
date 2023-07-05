import React from "react";

import { Home, Listing } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./pages/contact";
import About from "./pages/about";
import Order from "./pages/order";
import DamageReport from "./pages/damageReport";

function App() {
  return (
    <div className={styles.app}>
      {/* <Home /> */}
      {/* <Listing /> */}
      {/* <Contact /> */}
      {/* <About /> */}
      {/* <Order /> */}
      <DamageReport />
    </div>
  );
}

export default App;
