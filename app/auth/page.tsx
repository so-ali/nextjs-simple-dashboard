"use client";

import LoginForm from "@/components/organisms/LoginForm/LoginForm";
import { ILoginFormData } from "@/components/organisms/LoginForm/LoginForm.types";
import { AuthTemplate } from "@/components/templates";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthPage() {
  const { login, user } = useAuth();
  const router = useRouter();

  const handleLogin = async (data: ILoginFormData) => {
    await login.mutateAsync(data);
  };

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  return (
    <AuthTemplate title="Login">
      <LoginForm onSubmit={handleLogin} />
    </AuthTemplate>
  );
}
