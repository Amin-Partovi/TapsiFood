"use client";

import { useProductsQuery } from "@/services";

export default function Home() {
  const { data } = useProductsQuery();
  console.log(data);
  return <div></div>;
}
