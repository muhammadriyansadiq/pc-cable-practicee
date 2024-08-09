import React, { useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FaRegMessage } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { Badge } from "antd";
import "../../App.css";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setcollapsed, setsee, setwidth } from "../../redux/Counterslice";
import { CgProfile } from "react-icons/cg";
import { IoMoonOutline } from "react-icons/io5";
import { AiOutlineExpand } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const AdminNavbar = () => {
  const dispatch = useDispatch();
  const collapsed = useSelector((state) => state.counter.collapsed);
  const see = useSelector((state) => state.counter.see);
  const width = useSelector((state) => state.counter.width);
  const [hambergexpander, sethambergexpander] = useState(false);
  console.log("see", see);

  // useEffect(() => {
  //   if (window.outerWidth < 768) {
  //     dispatch(setsee(!see));
     

  //     dispatch(setcollapsed(true));
  //     dispatch(setwidth(true));
  //   } else {
  //     dispatch(setsee(true));
    
  //     dispatch(setcollapsed(false));

  //     dispatch(setwidth(false));
  //   }
  // }, [window.outerWidth]);

  useEffect(() => {
    const handleResize = () => {
      if (window.outerWidth < 768) {
        dispatch(setsee(false));
        dispatch(setcollapsed(true));
        dispatch(setwidth(true));
      } else {
        dispatch(setsee(true));
        dispatch(setcollapsed(false));
        dispatch(setwidth(false));
      }
    };
  
    // Add event listener on mount
    window.addEventListener('resize', handleResize);
  
    // Call the function initially to set the correct state based on the current window size
    handleResize();
  
    // Cleanup the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);
  
  

  function toggleCollapsed() {
    // this function basically controlled the width of admin side bar
    if (window.outerWidth < 768) {
      // setSee(!see);
      dispatch(setsee(!see));
      // setCollapsed(true);
      dispatch(setcollapsed(true));
      // setwidth(true)
      dispatch(setwidth(true));
    } else {
      // setCollapsed(!collapsed);
      dispatch(setcollapsed(!collapsed));
      // setwidth(false)
      dispatch(setwidth(false));
    }
  }

  console.log("inner width", window.outerWidth);

 
 

  return (
    <div>
      <div className="flex relative justify-center bg-white py-4 shadow-lg w-full px-1">
        <div className=" w-[100%] items-center  flex justify-center lg:justify-between lg:w-[98%]">
          <div className="   flex justify-between items-center  w-[80%] lg:w-[100%]">
            <div
              className=" flex items-center justify-around 
  lg:w-[15%] lg:justify-between "
            >
              <button
                className="border-[1px] border-[#146430] text-[#146430] py-1 px-3 rounded-lg "
                onClick={toggleCollapsed}
              >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </button>
              <input
                type="text"
                className="hidden border-[1px] py-1 px-2 ml-4 rounded-lg lg:block"
                placeholder=" search"
              />
            </div>
            <div className="hidden bg-white w-[17%] lg:flex justify-between text-[24px] items-center ">
              <div className=" cursor-pointer">
                <IoMoonOutline />
              </div>
              <div className=" cursor-pointer">
                <AiOutlineExpand />
              </div>
              <div className=" cursor-pointer">
                <IoMdNotificationsOutline />
              </div>
              <div className=" cursor-pointer">
                <IoSettingsOutline />
              </div>
              <div className=" cursor-pointer">
                <CgProfile />
              </div>
            </div>
            <div
              className=" lg:hidden"
              onClick={() => sethambergexpander(true)}
            >
              <GiHamburgerMenu className=" text-[23px]" />
            </div>
          </div>
          <div>
            {hambergexpander ? (
              <div className=" pl-4 z-50 fixed bg-white w-full top-0 left-0 border-[2px]  text-[24px] items-center lg:hidden">
                <div className=" cursor-pointer">
                  <IoMoonOutline />
                </div>
                <div className=" cursor-pointer my-2">
                  <AiOutlineExpand />
                </div>
                <div className=" cursor-pointer">
                  <IoMdNotificationsOutline />
                </div>
                <div className=" cursor-pointer my-2">
                  <IoSettingsOutline />
                </div>
                <div className=" cursor-pointer">
                  <CgProfile />
                </div>
                <div
                  className=" ml-1"
                  onClick={() => sethambergexpander(false)}
                >
                  X
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
