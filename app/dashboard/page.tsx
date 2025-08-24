"use client";
import { Button } from "@/components/atoms";
import { DashboardTemplate } from "@/components/templates";
import { useAuth } from "@/hooks/useAuth";

export default function DashboardPage() {
  const { logout, user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <DashboardTemplate user={user}>
      <Button onClick={() => logout()}>Logout</Button>
    </DashboardTemplate>
  );
}
