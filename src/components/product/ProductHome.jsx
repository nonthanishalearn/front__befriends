import React from "react";
import ProductLogoComponent from "@/components/product/ProductLogoComponent";

const ProductHome = (props) => {
    const images = props.images
  return (
    <div className="px-1 ">
      <ProductLogoComponent images={images} />
    </div>
  );
};

export default ProductHome;
