"use client";
import { useContext } from "react";
import { useRouter as usePageRouter } from "next/router";
import { useRouter as useAppRouter } from "next/navigation";
import { NextRouterContext } from "@/context/next-router-context";

const useRouter = () => {
    const context = useContext(NextRouterContext);
    const router = context === "app" ? useAppRouter : usePageRouter;
    return { ...router(), context };
};

export default useRouter;
