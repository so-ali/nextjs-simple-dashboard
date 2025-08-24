"use client";
import { createContext } from "react";
import { IAuthContext } from "./AuthContext.types";

export const AuthContext = createContext<IAuthContext | null>(null);
