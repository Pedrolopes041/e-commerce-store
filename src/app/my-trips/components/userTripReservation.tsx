import React from "react";
import Image from "next/image";
import { Prisma } from "@prisma/client";
import ReactCountryFlag from "react-country-flag";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface UserReservationItemProps {
  reservation: Prisma.TripReservationGetPayload<{
    include: { trip: true };
  }>;
  fetcheReservation: () => void;
}

const UserReservationItem = ({
  reservation,
  fetcheReservation,
}: UserReservationItemProps) => {
  const { trip } = reservation;

  const router = useRouter();

  const handleDeleteClick = async () => {
    const res = await fetch(`/api/trips/reservation/${reservation.id}`, {
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
              src={trip.coverImage}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              alt={trip.name}
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl text-primaryDarker font-semibold">
              {trip.name}
            </h2>
            <div className="flex items-center gap-1">
              <ReactCountryFlag countryCode={trip.countryCode} svg />
              <p className="text-xs text-grayPrimary underline">
                {trip.location}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-1 text-primaryDarker">
          <h3 className="font-semibold text-primaryDarker mt-3 pt-5">
            Informações sobre o preço
          </h3>

          <div className="flex justify-between mt-1">
            <p className="text-primaryDarker text-sm mt-2">Total:</p>
            <p className="font-medium text-sm">
              R${Number(reservation.totalPaid)}
            </p>
          </div>

          <Button onClick={handleDeleteClick} variant="danger" className="mt-5">
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserReservationItem;
