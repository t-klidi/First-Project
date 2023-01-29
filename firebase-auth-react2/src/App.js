import SignUp from "./Components/SignUp";
import Account from "./Components/Account";

import SignIn from "./Components/SignIn";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./Contexts/AuthContexts";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <AuthContextProvider>
      <div>
        <h1 className="text-center text-3xl font-bold">Firebase-Auth-React2</h1>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
