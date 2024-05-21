import { Product } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import ProductItem from "./ProductItem";

const getTrips = async () => {
  const Product = await prisma.product.findMany({});
  return Product;
};

const RecomendProduct = async () => {
  const data = await getTrips();

  return (
    <div className="mt-7">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap lg:text-lg">
          Encontre seu Produto
        </h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>

      <div className="flex flex-col items-center mt-5 gap-5 lg:mt-12 lg:flex-row flex-wrap lg:justify-center lg:gap-10 lg:items-center">
        {data.map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RecomendProduct;
