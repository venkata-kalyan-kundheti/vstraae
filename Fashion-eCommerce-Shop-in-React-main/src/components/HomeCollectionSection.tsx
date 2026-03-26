import ProductGrid from "./ProductGrid";
// import ProductGridWrapper from "./ProductGridWrapper";
import data from "../data/db.json";
const HomeCollectionSection = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-red-900/5 to-red-800/5 shadow-sm">
      <div className="max-w-screen-2xl flex items-center justify-between mx-auto mt-24 px-5 max-[400px]:px-3">
        <h2 className="text-black text-5xl font-normal tracking-[1.56px] max-sm:text-4xl">
          Our Collection
        </h2>
      </div>
  <ProductGrid products={data.products} />

    </div>
  );
};
export default HomeCollectionSection;
