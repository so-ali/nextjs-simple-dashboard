"use client";
import React, { useEffect, useState } from "react";
import { AuthContext } from "../AuthContext";
import { IUser } from "@/types/User";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<IUser | null>();
  const localStorage = useLocalStorage();

  useEffect(() => {
    if (!user) {
      const getUser = localStorage.get("user") as IUser;
      setUser(getUser ? getUser : null);
    }
  }, [user, localStorage]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser: (user: IUser) => setUser(user),
        clearUser: () => {
          localStorage.remove("user");
          setUser(null);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
