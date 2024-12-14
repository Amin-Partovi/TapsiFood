"use client";

import { Button, Checkbox, Input } from "@/components/elements";
import { useProductsQuery } from "@/services";

export default function Home() {
  const { data } = useProductsQuery();
  console.log(data);
  return (
    <div>
      <Button>something</Button>
      <Checkbox checked onChange={() => {}} />
      <Input onChange={() => {}} />
    </div>
  );
}
