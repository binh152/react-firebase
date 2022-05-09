import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { useState } from "react";

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import "./new.scss";

export const New = ({ input, title }) => {
  const [file, setFile] = useState("");
  console.log(file);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="headerNew">
          <h1>{title}</h1>
        </div>
        <div className="contentNew">
          <div className="user">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg"
              }
              alt=""
              className="imgUser"
            />
          </div>
          <div className="info">
            <form>
              <div className="formGruop">
                <label htmlFor="file">
                  Image <DriveFolderUploadOutlinedIcon className="iconUpload" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {input.map((input) => (
                <div className="formGruop" key={input.id}>
                  <label htmlFor="">{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
