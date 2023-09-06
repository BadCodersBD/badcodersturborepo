import Head from "next/head";
import type { ProductDetailsType } from "@/types/type";
import type { servicesProptype } from "@/types/type";
import { fetchservice } from "@/utils/fetchServices";
import Header from "@/components/ui/features/Header/Header";
import Footer from "@/components/ui/features/footer/Footer";
import ProductLayout from "../components/layouts/ProductLayout";

const Product = ({ product }: ProductDetailsType) => {
  // product id for testing: 00a6f3c5-6877-4f49-a1cf-dbcf554f7d62

  return (
    <>
      <Head>
        <title>E-Trip::All Cars</title>
        <meta name="description" content="A Travell service Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ProductLayout product={product} />
      <Footer />
    </>
  );
};

export default Product;

export async function getStaticPaths() {
  const productData = await fetchservice();
  const paths = productData.map((product: servicesProptype) => {
    return {
      params: {
        product: product.slug.current,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const productData = await fetchservice();
  const product = productData.find(
    (product: servicesProptype) => product.slug.current === params.product
  );
  return {
    props: {
      product,
      revalidate: 10,
    },
  };
}
