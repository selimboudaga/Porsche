import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import VerifyEmail from "./pages/VerifyEmail";
import { AuthProvider } from "./context/AuthContext";
import NewPassword from "./pages/NewPassword";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route
              path="/password-verification/:email"
              element={<NewPassword />}
            />
            <Route
              path="/email-verification/:email"
              element={<VerifyEmail />}
            />
            
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
