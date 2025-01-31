import { FaPenNib, FaRegCalendarAlt } from "react-icons/fa";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

interface CardProps {
  image: string;
  author: string;
  date: string;
  title: string;
  description: string;
  subHeading: string;
}

function Card({
  image,
  author,
  date,
  title,
  description,
  subHeading,
}: CardProps) {
  return (
    <div className="w-[370px] h-[493px]  ">
      {/* Image */}
      <div className="w-full h-[255px] overflow-hidden rounded-md">
        <img
          src={image}
          alt="Card Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Area */}
      <div className="flex flex-col justify-between h-[calc(100%-255px)] p-4">
        {/* Author and Date */}
        <div className="flex items-center justify-between mb-3">
          {/* Author */}
          <div className="flex items-center gap-2 text-[#151875]">
            <FaPenNib className="text-[#FB2E86]" />
            <span className="font-medium text-sm">{author}</span>
          </div>

          {/* Date with Calendar Icon */}
          <div className="flex items-center gap-2 text-[#151875]">
            <FaRegCalendarAlt />
            <span className="text-sm">{date}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold text-[#151875]  mt-4">{title}</h2>

        {/* Description */}
        <p
          className={`${lato.className} text-[16px] font-normal text-[#72718F]  flex-grow mt-4`}
        >
          {description}
        </p>

        {/* Subheading */}
        <h3
          className={`${lato.className} text-md font-semibold text-[#FB2E86] underline`}
        >
          {subHeading}
        </h3>
      </div>
    </div>
  );
}

export default Card;
