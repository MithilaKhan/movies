import { Pagination } from "antd";

const CustomPagination = ({ setPage }) => {
  const onChange = (page) => {
    console.log(page);
    setPage(page);
  };
  return (
    <div className="pb-5">
      <Pagination defaultCurrent={1} total={50} onChange={onChange} />
    </div>
  );
};

export default CustomPagination;
