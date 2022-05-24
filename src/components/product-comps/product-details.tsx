import React from 'react';
import BreadCrumptTopbar from './breadcrumpt-topbar';
import { temp_product } from './data';
import Divider from './elements/Divider';
import ProductDetailSelector from './product-detail-selector';
import ProductDetailsRightSide from './product-details';

interface Props {
  product: any;
}

export default function ProductDetails({ product }: Props) {
  return (
    <div>
      <BreadCrumptTopbar />
      <ProductDetailsRightSide product={temp_product} />
      <Divider />
      <ProductDetailSelector product={temp_product} />
    </div>
  );
}
