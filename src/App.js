import React from "react";

import { Home } from "./pages";
import styles from "./App.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className={styles.app}>
      <Home />
    </div>
  );
}

export default App;
