import { useState } from "react";
import DetailsModal from "../Modal/DetailsModal";

const SingleTrending = ({
  image,
  name,
  originalName,
  mediaType,
  firstDate,
  relaseDate,
  description,
  id,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <div
        onClick={showModal}
        className="max-w-sm  overflow-hidden shadow-lg bg-gray-400 hover:bg-slate-50 text-white hover:text-black rounded-lg"
      >
        <img
          className="w-full p-4 rounded-lg"
          src={
            image ? `https://image.tmdb.org/t/p/w300/${image}` : " undifined"
          }
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name || originalName}</div>
          <div className="flex gap-3 justify-between text-xl">
            <p>{mediaType}</p>
            <p>{firstDate || relaseDate} </p>
          </div>
        </div>
      </div>

      <DetailsModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        image={image}
        description={description}
        name={name}
        originalName={originalName}
        relaseDate={relaseDate}
        firstDate={firstDate}
        id={id}
        mediaType={mediaType}
      />
    </div>
  );
};

export default SingleTrending;
