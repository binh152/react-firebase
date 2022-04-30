import "./featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

export const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={50} text="50%" strokeWidth={4} />
        </div>
        <p className="title">Total sales today</p>
        <p className="amount">$300</p>
        <p className="desc">Description total</p>
        <div className="sumary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$25</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">$14</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">$14</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
