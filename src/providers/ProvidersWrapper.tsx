"use client";
import ReactQueryProvider from "@/context/ReactQueryProvider";

interface IProvidersWrapperProps {
  children: React.ReactNode;
}

export const ProvidersWrapper = ({ children }: IProvidersWrapperProps) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};
