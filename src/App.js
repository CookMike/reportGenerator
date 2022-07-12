import { Routes, Route } from "react-router-dom";

import "./App.css";

import Navigation from "./components/navigation/navigation.component";
import HomePage from "./components/pages/homepage.component";
import Information from "./components/pages/info.component";
import Login from "./components/pages/login.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="home" element={<HomePage />} />
        <Route path="info" element={<Information />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
