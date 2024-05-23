"use client";

import Button from "@/components/Button";
import { Product } from "@prisma/client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ReactCountryFlag from "react-country-flag";
import { BounceLoader } from "react-spinners";
import { toast } from "react-toastify";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { data, status } = useSession();
  const route = useRouter();

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

    if (status === "authenticated") {
      toast.success("Produto adicionado ao carrinho com sucesso!", {
        position: "bottom-center",
      });
    } else {
      toast.error("É necessário estar logado!", {
        position: "bottom-center",
      });
      setTimeout(() => {
        signIn("google");
      }, 2000);
    }
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
