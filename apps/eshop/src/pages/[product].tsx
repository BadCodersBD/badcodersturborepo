import Head from "next/head";
import type { ProductDetailsType } from "@/types/type";
import type { servicesProptype } from "@/types/type";
import { fetchservice } from "@/utils/fetchServices";
import Header from "@/components/ui/features/Header/Header";
import Footer from "@/components/ui/features/footer/Footer";
import ProductLayout from "../components/layouts/ProductLayout";
import metaData from "../../public/meta.json";

const Product = ({ product }: ProductDetailsType) => {
  // product id for testing: 00a6f3c5-6877-4f49-a1cf-dbcf554f7d62

  return (
    <>
      <Head>
        <title>Beach Limo::All Cars</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:type" content={metaData.type} />
        <meta property="og:image" content={metaData.image} />
        <meta name="google-site-verification" content="uF7IpXKCuelQJy81bb-K1zcDj1VXO3l366zJzWjRki8" /> 
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
