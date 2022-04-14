import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
