import { ProductType, useProductsQuery } from "@/services";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Button, Input } from "../elements";
import { messages } from "@/messages/messages";
import { queryClient } from "@/utils";
import { TrashBinTrash } from "../icons";

// TODO: use virtual list

const MultiSelectList = () => {
  const { data: products } = useProductsQuery();
  const [product, setProduct] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  function handleChangeInput(value: string) {
    setProduct(value);
  }

  function handleAddList() {
    queryClient.setQueryData(["products"], (oldData: ProductType[]) => {
      if (oldData)
        return [{ title: product, id: Math.random().toString() }, ...oldData];
    });
    setProduct("");
  }

  function handleDelete() {
    queryClient.setQueryData(["products"], (oldData: ProductType[]) => {
      if (oldData)
        return oldData.filter((item) => !selectedItems.includes(item.id));
    });
  }

  return (
    <div className="flex flex-col justify-between h-full flex-1">
      <TrashBinTrash
        className="text-red-500 self-end"
        onClick={handleDelete}
        role="button"
      />

      <div className="flex flex-col gap-2 overflow-auto h-96 bg-general-600 p-2 rounded-2xl">
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <Input
          placeholder={messages.PRODUCT_NAME}
          onChange={handleChangeInput}
          value={product}
        />

        <Button onClick={handleAddList} disabled={!product.length}>
          {messages.ADD_TO_LIST}
        </Button>
      </div>
    </div>
  );
};

export default MultiSelectList;
