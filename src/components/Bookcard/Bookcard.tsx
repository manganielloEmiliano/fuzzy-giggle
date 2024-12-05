import { FC } from "react";
import Button from "../button/button";

interface BookcardProps {
  title: string;
  author: string;
  image: string; // El path de la imagen
}

export const Bookcard: FC<BookcardProps> = ({ title, author, image }) => {
  return (
    <div className="w-[200px] h-[320px] flex flex-col items-center rounded-md overflow-hidden ">
      {/* Imagen redondeada */}
      <div className="w-full h-[60%]">
        <img
          src={image}
          alt="imagen del libro"
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>

      {/* Contenedor de texto */}
      <div className="flex-grow flex flex-col justify-between p-2 w-full">
        <div className="flex flex-col items-start gap-1 overflow-hidden">
          <p className="text-white font-inter text-sm font-medium leading-tight text-left break-words">
            {title}
          </p>
          <p className="text-gray-500 font-inter text-xs font-normal leading-tight text-left break-words truncate">
            {author}
          </p>
        </div>

        {/* Botón */}
        <div className=" ">
          <Button
            text="Ver más"
            onClick={() => console.log("Button clicked")}
            type="button"
            buttonIconSrc="/src/assets/ArrowUpRight.svg"
          />
        </div>
      </div>
    </div>
  );
};
