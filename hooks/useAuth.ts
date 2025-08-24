import { useAuthContext } from "./useAuthContext";
import { useMutation } from "@tanstack/react-query";
import { loginQuery } from "@/services/apiService";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const authContext = useAuthContext();
  const localStorage = useLocalStorage();

  const login = useMutation({
    mutationFn: loginQuery,
    onSuccess(data) {
      authContext.setUser(data);
      localStorage.set("user", data);
    },
  });

  return { login, user: authContext.user, logout: authContext.clearUser };
};
