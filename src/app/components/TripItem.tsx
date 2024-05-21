import Button from "@/components/Button";
import { Trip } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";
import { toast } from "react-toastify";

interface TripItemProps {
  trip: Trip;
}

const TripItem = ({ trip }: TripItemProps) => {
  /*
  const handleBuyClick = async () => {
    const res = await fetch("/api/trips/reservation", {
      method: "POST",
      body: Buffer.from(
        JSON.stringify({
          tripId: params.tripId,
          startDate: searchParams.get("startDate"),
          endDate: searchParams.get("endDate"),
          guests: Number(searchParams.get("guests")),
          userId: (data?.user as any)?.id!,
          totalPaid: totalPrice,
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

    //router.push("/");
  };

  */

  return (
    <Link href={`/trips/${trip.id}`}>
      <div className="flex flex-col">
        <div className="relative h-[280px] w-[280px]">
          <Image
            src={trip.coverImage}
            fill
            className="rounded-lg shadow-md"
            alt={trip.name}
            style={{ objectFit: "cover" }}
          />
        </div>

        <h3 className="text-primaryDarker font-medium text-sm mt-2">
          {trip.name}
        </h3>
        <div className="flex items-center gap-1 my-1 ">
          <ReactCountryFlag svg countryCode={trip.countryCode} />
          <p className="text-xs text-grayPrimary">{trip.location}</p>
        </div>
        <Button variant="primary">Comprar</Button>
      </div>
    </Link>
  );
};

export default TripItem;
