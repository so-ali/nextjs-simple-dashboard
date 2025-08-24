"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContextProvider from "./AuthContextProvider";

const queryClient = new QueryClient();

export default function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>{children}</AuthContextProvider>
    </QueryClientProvider>
  );
}
