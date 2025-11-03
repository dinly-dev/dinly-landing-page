import { useState, useEffect } from "react";
import AdminLogin from "../components/AdminLogin";
import AdminDashboard from "../pages/Admin";

export default function ProtectedAdmin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Verificar se já está autenticado no sessionStorage
  useEffect(() => {
    const authenticated = sessionStorage.getItem("adminAuthenticated");
    if (authenticated === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (password: string) => {
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    if (password === adminPassword) {
      setIsAuthenticated(true);
      setError(null);
      // Salvar autenticação no sessionStorage (persiste apenas durante a sessão)
      sessionStorage.setItem("adminAuthenticated", "true");
    } else {
      setError("Senha incorreta. Tente novamente.");
    }
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} error={error} />;
  }

  return <AdminDashboard />;
}
