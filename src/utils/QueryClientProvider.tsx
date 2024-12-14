"use client";

import React from "react";
import {
  QueryClientProvider as TanstakProvider,
  QueryClient,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const queryClient = new QueryClient();

const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <TanstakProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </TanstakProvider>
  );
};

export default QueryClientProvider;
