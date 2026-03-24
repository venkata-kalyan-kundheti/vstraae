import { formatCategoryName } from "../utils/formatCategoryName";

const ShopBanner = ({ category }: { category: string }) => {

  return (
    <div className="shop-banner py-12 px-6 flex justify-center items-center mx-5 my-8 rounded-2xl shadow-2xl">
      <h2 className="text-4xl font-bold tracking-wide max-sm:text-2xl">
        {category ? formatCategoryName(category) : "Shop page"}
      </h2>
    </div>
  );
};
export default ShopBanner;
