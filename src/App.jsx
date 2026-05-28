import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Main content wrapper with padding */}
        <main className="flex-1 pt-16 bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} /> {/* Fixed: added / */}
            <Route path="/checkout" element={<Checkout />} />{" "}
            {/* Fixed: added / */}
            <Route path="*" element={<h1>404 not found</h1>} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
