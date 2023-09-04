import { memo, useEffect, useState } from "react";
// import ProductCarousel from '../ui/features/ProductDetails/ProductCarousel/ProductCarousel'

import type { ProductDetailsType } from "@/types/type";
import { fetchservice } from "@/utils/fetchServices";

// const MemorizedProductCarousel = memo(ProductCarousel)

const ProductLayout = ({ product }: ProductDetailsType) => {
  const [Products, setProducts] = useState([]);
  const [FilteredProduct, setFilteredProduct] = useState<any>({});
  //console.log('🚀 ~ file: ProductLayout.tsx:25 ~ ProductLayout ~ FilteredProduct:', FilteredProduct)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productDatanew = await fetchservice();
        if (productDatanew) {
          setProducts(productDatanew);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    //filter product by product id from props
    const productNew =
      Products.length > 0
        ? Products.filter((productRef) => {
            return productRef._id === product._id;
          })
        : [];
    productNew.length > 0
      ? setFilteredProduct(productNew[0])
      : setFilteredProduct({});
    //console.log('🚀 ~ file: ProductLayout.tsx:44 ~ useEffect ~ product:', productNew)
  }, [Products]);

  return (
    <div className="w-full px-[0.5rem] md:px-[0.8rem] lg:px-[1.2rem]">
      Car Details pages
    </div>
  );
};

export default ProductLayout;
