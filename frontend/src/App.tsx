import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import useDocumentTitle from "./hooks/useDocumentTitle";
import { useAuthContext } from "./context/AuthContext";
import FollowerPage from "./pages/FollowerPage";
import FollowingPage from "./pages/FollowingPage";
import { HomePage } from "./pages/HomePage";
import { Layout } from "./components/Layout";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const location = useLocation();

  // Función que determina el título según la ruta activa
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Repositories | GitHub Clone";
      case "/followers":
        return "Followers | GitHub Clone";
      case "/following":
        return "Following | GitHub Clone";
      case "/login":
        return "Login | GitHub Clone";
      case "/signup":
        return "Sign Up | GitHub Clone";
      default:
        return "GitHub Clone";
    }
  };

  // Usar el hook para cambiar el título
  useDocumentTitle(getPageTitle());

  const { authUser, loading } = useAuthContext();

  console.log("Authenticated user: ", authUser);

  if (loading) return null;
  return (
    <>
      <Routes>
        {/* Ruta principal con Layout */}
        <Route path="/" element={<Layout />}>
          {/* Rutas anidadas dentro de Layout */}
          <Route path="/" element={<HomePage />} />
          <Route path="followers" element={<FollowerPage />} />
          <Route path="following" element={<FollowingPage />} />
        </Route>

        {/* Ruta para Login */}
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to={"/"} />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;