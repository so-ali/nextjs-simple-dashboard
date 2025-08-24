"use client";
import { Button } from "@/components/atoms";
import { useRouter } from "next/navigation";
import style from "./Home.module.scss";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();
  return (
    <div className={style.container}>
      <h1 className={style.page__title}>Hello world!</h1>
      <p className={style.page__description}>
        This is a practice project for the employer to determine the level.
      </p>
      <Button
        variant="primary"
        onClick={() => {
          if (user) {
            router.push("/dashboard");
            return;
          }
          router.push("/auth");
        }}
      >
        Continue to the {user === null ? "login" : "dashboard"}
      </Button>
    </div>
  );
}
