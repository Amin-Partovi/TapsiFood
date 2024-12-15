"use client";

import { MultiSelectList } from "@/components/fragments";
import { messages } from "@/messages/messages";

export default function Home() {
  return (
    <div className="flex flex-col h-full items-center">
      <h1 className="text-white font-semibold text-3xl">
        {messages.SHOPPING_LIST}
      </h1>
      <MultiSelectList />
    </div>
  );
}
