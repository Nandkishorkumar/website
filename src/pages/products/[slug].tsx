import { GetStaticProps } from 'next';
import ProductDetails from '@components/product-comps/product-details';
import Layout from '@components/layout/layout';
import { getProductInServer } from '@operations/product';
import { useRouter } from 'next/router';
import { ProductsDocument } from '@graphql/products.graphql';
import { addApolloState, initializeApollo } from '@utils/apollo';
import Spinner from '@components/ui/loaders/spinner/spinner';
import dynamic from 'next/dynamic';
import RelatedProducts from '@components/product/product-details/related-products';
const CartCounterButton = dynamic(
  () => import('@components/cart/cart-counter-button'),
  { ssr: false }
);

// This function gets called at build time
export async function getStaticPaths() {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: ProductsDocument,
  });
  // Get the paths we want to pre-render based on types
  const paths = data?.products?.data?.slice(0, 100)?.map((product: any) => ({
    params: { slug: product.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
}
// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();
  const { slug } = params as any;
  const {
    data: { product },
  } = await apolloClient.query(getProductInServer({ slug }));

  if (!product) {
    return {
      notFound: true,
    };
  }
  return addApolloState(apolloClient, {
    props: {
      product,
    },
    revalidate: 1,
  });
};

export default function ProductSinglePage({ product }: any) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return (
      <div className="w-full flex justify-center">
        <Spinner />
      </div>
    );
  }
  return (
    <>
      <div className="main-container">
        <div className="kisaan-container">
          <ProductDetails product={product} />
        </div>
      </div>
      {/* <div className="bg-white min-h-screen">

        {product?.related_products?.length > 1 && (
          <div className="p-5 lg:p-14 xl:p-16">
            <RelatedProducts
              products={product?.related_products}
              currentProductId={product?.id}
              gridClassName="lg:grid-cols-4 2xl:grid-cols-5 !gap-3"
            />
          </div>
        )}
      </div> */}
      {/* <CartCounterButton /> */}
    </>
  );
}
ProductSinglePage.Layout = Layout;
