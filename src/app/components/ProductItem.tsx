"use client";

import Button from "@/components/Button";
import { Product, ProductReservation } from "@prisma/client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import { toast } from "react-toastify";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { data } = useSession();
  const handleBuyClick = async () => {
    const res = await fetch("/api/products/reservation", {
      method: "POST",
      body: Buffer.from(
        JSON.stringify({
          productId: product.id,
          userId: (data?.user as any)?.id!,
        })
      ),
    });

    if (!res.ok) {
      return toast.error("Ocorreu um erro ao realizar a reserva!", {
        position: "bottom-center",
      });
    }

    toast.success("Reserva realizada com sucesso!", {
      position: "bottom-center",
    });
  };

  return (
    <div className="flex flex-col">
      <div className="relative h-[280px] w-[280px]">
        <Image
          src={product.coverImage}
          fill
          className="rounded-lg shadow-md"
          alt={product.name}
          style={{ objectFit: "cover" }}
        />
      </div>

      <h3 className="text-primaryDarker font-medium text-sm mt-2">
        {product.name}
      </h3>
      <div className="flex items-center gap-1 my-1 ">
        <ReactCountryFlag svg countryCode={product.countryCode} />
        <p className="text-xs text-grayPrimary">{product.location}</p>
      </div>
      <Button onClick={handleBuyClick} variant="primary">
        Comprar
      </Button>
    </div>
  );
};

export default ProductItem;
