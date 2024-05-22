import React from "react";
import Image from "next/image";
import { Prisma } from "@prisma/client";
import ReactCountryFlag from "react-country-flag";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface UserReservationItemProps {
  reservation: Prisma.ProductReservationGetPayload<{
    include: { product: true };
  }>;
  fetcheReservation: () => void;
}

const UserReservationItem = ({
  reservation,
  fetcheReservation,
}: UserReservationItemProps) => {
  const { product } = reservation;

  const router = useRouter();

  const handleDeleteClick = async () => {
    const res = await fetch(`/api/products/reservation/${reservation.id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      return toast.error("Ocorreu um erro ao cancelar a reserva!");
    }

    toast.success("Reserva cancelada com sucesso!", {
      position: "bottom-center",
    });

    fetcheReservation();
  };

  return (
    <div>
      {/* CARD */}
      <div className="flex flex-col p-5 mt-5 border-grayLighter border-solid border shadow-lg rounded-lg">
        <div className="flex items-center gap-3 pb-5 border-b border-grayLighter border-solid">
          <div className="relative h-[106px] w-[124px]">
            <Image
              src={product.coverImage}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              alt={product.name}
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl text-primaryDarker font-semibold">
              {product.name}
            </h2>
            <div className="flex items-center gap-1">
              <ReactCountryFlag countryCode={product.countryCode} svg />
              <p className="text-xs text-grayPrimary underline">
                {product.location}
              </p>
            </div>
          </div>
        </div>
        <Button onClick={handleDeleteClick} variant="danger" className="mt-5">
          Cancelar
        </Button>
      </div>
    </div>
  );
};

export default UserReservationItem;
