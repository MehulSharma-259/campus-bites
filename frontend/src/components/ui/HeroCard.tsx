/** @format */
//

interface CardProps {
  title: string;
  image: string;
  onClick?: () => void; // Added onClick prop
}

export function HeroCard({title, image, onClick}: CardProps) {
  return (
    <div 
      onClick={onClick} // Trigger the scroll function
      className="bg-[rgba(255,255,255,0.25)] shadow-xl shadow-gray-500 rounded-2xl flex flex-col items-center w-[200px] p-5 cursor-pointer hover:scale-105 transition-transform duration-200"
    >
      <div className="rounded-2xl overflow-hidden">
        <img className="h-full w-full object-cover" src={image} alt="image" />
      </div>
      <div className="text-center font-bold mt-2">{title}</div>
    </div>
  );
}