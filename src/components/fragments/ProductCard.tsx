import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Checkbox } from "../elements";
import { ProductType } from "@/services";
import fallbackImg from "../../assets/images/fallback.png";

interface Props {
  product: ProductType;
  setSelectedItems: Dispatch<SetStateAction<string[]>>;
}

const ProductCard = ({ product, setSelectedItems }: Props) => {
  const { base64Image = fallbackImg, title } = product;
  const [isChecked, setIsChecked] = useState<boolean>(false);
  function handleChange(value: boolean) {
    setIsChecked(!isChecked);
    if (value) {
      setSelectedItems((selectedItems) => [...selectedItems, product.id]);
    } else {
      setSelectedItems((selectedItems) =>
        selectedItems.filter((item) => item !== product.id),
      );
    }
  }
  return (
    <div className="flex justify-between p-4 rounded-2xl w-full  bg-general-700 border border-gray-700">
      <div className="flex  gap-4 ">
        <div className="w-16 h-16 rounded-2xl overflow-hidden relative flex-shrink-0">
          <Image
            src={base64Image}
            alt={title}
            fill
            loading="lazy"
            sizes="64px"
          />
        </div>
        <span className="text-white font-medium">{title}</span>
      </div>
      <Checkbox checked={isChecked} onChange={handleChange} />
    </div>
  );
};

export default ProductCard;
