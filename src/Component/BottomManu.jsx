import { FireOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
const items = [
  {
    key: "/",

    label: (
      <p className="text-white pt-0">
        {" "}
        <span>
          {" "}
          <FireOutlined />
        </span>{" "}
        <span>Tending</span>{" "}
      </p>
    ),
  },
  {
    key: "/movies",

    label: <p className="text-white "> Movies </p>,
  },
  {
    key: "/series",
    label: <p className="text-white "> Tv Series </p>,
  },
  {
    key: "/search",
    label: <p className="text-white "> Search </p>,
  },
];

const SimpleBottomNavigation = () => {
  const navigate = useNavigate();

  const onClick = (e) => {
    console.log("click", e);
    if (e.key === "/") {
      navigate("/");
    } else if (e.key === "/movies") navigate("/movies");
    else if (e.key === "/series") navigate("/series");
    else navigate("/search");
  };

  return (
    <Menu
      onClick={onClick}
      style={{
        width: "100%",

        bottom: "0",
        justifyContent: "center",
        padding: "5px",
        backgroundColor: "black",
      }}
      mode="horizontal"
      items={items}
    />
  );
};

export default SimpleBottomNavigation;
