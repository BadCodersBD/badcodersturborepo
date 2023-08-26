import BrandProductImage from "./ProductImage";

const BrandsProducts = ({ product }: { product: any }) => {
  const delays = product.map(() => `${Math.random() * 3}s`);

  return (
    <section>
      <div className="grid grid-cols-1 gap-2 py-2">
        <BrandProductImage
          data={product.slice(0, 2)}
          delays={delays.slice(0, 2)}
        />
        <BrandProductImage
          data={product.slice(2, 4)}
          delays={delays.slice(2, 4)}
        />
        <BrandProductImage
          data={product.slice(4, 6)}
          delays={delays.slice(4, 6)}
        />
      </div>
    </section>
  );
};

export default BrandsProducts;
