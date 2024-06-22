import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { YoutubeOutlined } from "@ant-design/icons";

const DetailsModal = ({
  isModalOpen,
  setIsModalOpen,
  name,
  originalName,
  description,
  image,
  relaseDate,
  firstDate,
  mediaType,
  id,
}) => {
  const [details, setDetails] = useState([]);
  console.log(id);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const fetchData = async (mediaType, id) => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=b3e9005b565d085ffd6c57b7d63fef73&language=en-US`
    );
    setDetails(data.data.results[0]?.key);
    console.log(details);
  };
  useEffect(() => {
    fetchData(mediaType, id);
  }, [mediaType, id]);

  return (
    <div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        width={1000}
      >
        <div className="flex  rounded-lg bg-gray-200  w-full">
          <img
            className=" w-full rounded "
            src={
              image ? `https://image.tmdb.org/t/p/w300/${image}` : " undifined"
            }
            alt=""
          />
          <div className="flex flex-col justify-start p-6">
            <h5 className="mb-2 text-3xl font-medium text-neutral-800 dark:text-neutral-50 pb-4">
              {name || originalName} <span> ({relaseDate || firstDate})</span>
            </h5>
            <p className="mb-4 text-lg text-neutral-600 dark:text-neutral-200">
              {description}
            </p>
            <Button
              type="primary"
              className="flex gap-2 w-full bg-orange-600 text-white text-lg font-medium "
              href={`https://www.youtube.com/watch?v=${details}`}
            >
              {" "}
              <YoutubeOutlined /> <span> Watch The Trailer </span>
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DetailsModal;
