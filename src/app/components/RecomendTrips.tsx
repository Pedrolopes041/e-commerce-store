import { Trip } from "@prisma/client";
import TripItem from "./TripItem";
import { prisma } from "@/lib/prisma";

const getTrips = async () => {
  const trips = await prisma.trip.findMany({});
  return trips;
};

const RecomendTrips = async () => {
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
        {data.map((trip: Trip) => (
          <TripItem key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default RecomendTrips;
