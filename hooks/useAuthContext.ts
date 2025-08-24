import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth most be used inside the AuthContextProvider!");
  }

  return context;
};
