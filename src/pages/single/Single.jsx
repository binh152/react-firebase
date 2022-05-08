import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import Chart from "../../components/chart/Chart";

import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

import "./single.scss";
import { MyTable } from "../../components/table/Table";

export const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editBtn">
              <ModeEditOutlineOutlinedIcon className="iconEdit" />
              Edit
            </div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416__340.png"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="detailTitle">Binh Ta</h1>
                <div className="detailItem">
                  <span className="ItemKey">Email:</span>
                  <span className="ItemValue">binh@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="ItemKey">Phone:</span>
                  <span className="ItemValue">0327438247</span>
                </div>
                <div className="detailItem">
                  <span className="ItemKey">Address:</span>
                  <span className="ItemValue">198 phu dien HN</span>
                </div>
                <div className="detailItem">
                  <span className="ItemKey">Cuontry:</span>
                  <span className="ItemValue">Viet Nam</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User spending (Last 8 month)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transaction</h1>
          <MyTable />
        </div>
      </div>
    </div>
  );
};
