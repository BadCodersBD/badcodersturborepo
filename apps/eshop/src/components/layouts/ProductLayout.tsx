import { memo, useEffect, useState } from "react";
import type { ProductDetailsType } from "@/types/type";
import { fetchservice } from "@/utils/fetchServices";
import Allcars from "../ui/features/OurCollections/AllCars/AllCars";
import Cardetails from "../ui/features/CarDetails/CarDetails";

// const MemorizedProductCarousel = memo(ProductCarousel)

const ProductLayout = ({ product }: ProductDetailsType) => {
  const [Products, setProducts] = useState([]);
  const [FilteredProduct, setFilteredProduct] = useState<any>({});
  //console.log('🚀 ~ file: ProductLayout.tsx:25 ~ ProductLayout ~ FilteredProduct:', FilteredProduct)

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const productDatanew = await fetchservice();
  //       if (productDatanew) {
  //         setProducts(productDatanew);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getProducts();
  // }, []);

  // useEffect(() => {
  //   //filter product by product id from props
  //   const productNew =
  //     Products.length > 0
  //       ? Products.filter((productRef) => {
  //           return productRef._id === product._id;
  //         })
  //       : [];
  //   productNew.length > 0
  //     ? setFilteredProduct(productNew[0])
  //     : setFilteredProduct({});
  //   //console.log('🚀 ~ file: ProductLayout.tsx:44 ~ useEffect ~ product:', productNew)
  // }, [Products]);

  // console.log(product);

  return (
    <div className="w-full bg-white px-[0.5rem] md:px-[0.8rem] lg:px-[1.2rem]">
      <Cardetails product={product} />
    </div>
  );
};

export default ProductLayout;
