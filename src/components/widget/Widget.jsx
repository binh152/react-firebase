import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

function widget({ type }) {
  let data;
  const amount = 100;
  const diff = 10;
  switch (type) {
    case "user":
      data = {
        title: "USER",
        isMoney: false,
        link: "See all user",
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon"
            style={{
              color: "#555",
              backgroundColor: "#f39595",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDER",
        isMoney: false,
        link: "View all",
        icon: (
          <LocalGroceryStoreOutlinedIcon
            className="icon"
            style={{
              color: "#555",
              backgroundColor: "rgb(169 235 167)",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNING",
        isMoney: true,
        link: "View earning",
        icon: (
          <AttachMoneyOutlinedIcon
            className="icon"
            style={{
              color: "#555",
              backgroundColor: "rgb(226 243 149)",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              color: "#555",
              backgroundColor: "rgb(183 149 243)",
            }}
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default widget;
