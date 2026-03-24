import { Link } from "react-router-dom";

const CategoryItem = ({ categoryTitle, image, link } : { categoryTitle: string; image: string; link: string; }) => {
  return (
    <div className="w-[600px] relative max-[1250px]:w-[400px] max-[1250px]:h-[400px] max-sm:w-[300px] max-sm:h-[300px]">
      <Link to={`/shop/${link}`}>
      <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
        <img src={`/assets/${image}`} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-primary/40 to-transparent flex items-end justify-center p-4">
          <h3 className="text-2xl font-semibold max-sm:text-xl text-cream">{ categoryTitle }</h3>
        </div>
      </div>
      </Link>
    </div>
  );
};
export default CategoryItem;
