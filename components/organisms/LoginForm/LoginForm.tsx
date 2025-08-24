"use client";

import { Button, Input } from "@/components/atoms";
import { InputGroup } from "@/components/molecules";
import { SchemaLoginForm } from "@/schemas/LoginForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginFormData, ILoginFormProps } from "./LoginForm.types";
import style from "./LoginForm.module.scss";

export default function LoginForm({ onSubmit }: ILoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { isLoading, isSubmitting, errors, isValid },
  } = useForm({
    resolver: zodResolver(SchemaLoginForm),
  });

  const formSubmitation: SubmitHandler<ILoginFormData> = async (data) => {
    await onSubmit(data);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(formSubmitation)(e);
      }}
    >
      <div className={style.form__inputs}>
        <InputGroup label="Phone Number:" error={errors.phone?.message}>
          <Input
            type="text"
            placeholder="Enter your iranian phone number"
            {...register("phone")}
            error={!!errors.phone}
          />
        </InputGroup>
      </div>
      <Button
        variant="primary"
        type="submit"
        loading={isLoading || isSubmitting}
        disabled={!isValid}
        block
      >
        Login
      </Button>
    </form>
  );
}
