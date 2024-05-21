import RecomendProduct from "./components/RecomendProduct";

export default function Home() {
  return (
    <div>
      <div className="h-[229px] container mx-auto bg-showcase-mobile p-2 lg:bg-showcase-desktop lg:h-[350px]"></div>
      <RecomendProduct />
    </div>
  );
}
