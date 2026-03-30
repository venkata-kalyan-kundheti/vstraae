import { Link } from "react-router-dom";
import { formatCategoryName } from "../utils/formatCategoryName";

const ProductItem = ({
  id,
  image,
  title,
  category,
  price,
  popularity: _popularity,
  stock: _stock,
}: {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
  popularity: number;
  stock: number;
}) => {


  return ( 
    
    <div className="w-[400px] flex flex-col   justify-center  rounded-[10px] shadow-[0_10px_25px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-300">
      <Link
        to={`/product/${id}`}
        className="w-full h-[300px] max-md:h-[200px] rounded-[6px] overflow-hidden"
      >
        <img
          src={`/assets/${image}`}
          alt={title}
        />
      </Link>
      <Link
        to={`/product/${id}`}
        className="text-center text-3xl tracking-[1.02px] max-md:text-2xl"
      >
        <h2>{title}</h2>
      </Link>
      <p className="text-secondary text-lg tracking-wide text-center max-md:text-base">
        {formatCategoryName(category)}{" "}
      </p>
      <p className="text-2xl text-center font-bold max-md:text-xl">
        Rs.{price}
      </p>
      <div className="w-full flex flex-col gap-1">
        <Link
          to={`/product/${id}`}
          className="luxury-btn text-center text-xl font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center max-md:text-base"
        >
          View product
        </Link>
        <Link
          to={`/product/${id}`}
          className="luxury-btn-outline text-center text-xl font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center max-md:text-base"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};
export default ProductItem;
