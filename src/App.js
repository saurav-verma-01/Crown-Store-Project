import Home from "./routes/home/HomePage";

import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navigation from "./routes/navigation/Navigation";
import SignIn from "./routes/sign-in/SignIn";

const Shop = () => {
  return (
    <div>
      <div>
        <h1>This is the Shooping Cart</h1>
      </div>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
