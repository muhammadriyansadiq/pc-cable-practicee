import React, { useState } from "react";
import { AppstoreOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { SiEngadget, SiInvoiceninja, SiTodoist } from "react-icons/si";
import { CiHome } from "react-icons/ci";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { IoIosChatboxes } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPage4 } from "react-icons/fa";
import { SiGoogleauthenticator } from "react-icons/si";
import { IoBarChartSharp } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa6";
import { IoLogoDesignernews } from "react-icons/io5";
import { CgIfDesign } from "react-icons/cg";

import "../../App.css";
import { BiCalendarEdit } from "react-icons/bi";

const Admindasjboardcomponents = ({ collapsed, toggleCollapsed }) => {
  const location = useLocation();
// all sider bar elements come from here
  const items = [
    {
      key: "/homedashboard",
      icon: (
        <img
          className={`h-[20px] w-[20px]  ${
            collapsed
              ? "text-[10px] translate-x-[-6px]  lg:translate-x-[0px]"
              : "text-[19px] translate-x-[45px] "
          }`}
          src="https://techzaa.getappui.com/rasket/admin/assets/images/logo-sm.png"
          alt=""
        />
      ),
      label: (
        <span className=" inline-block ">
          {" "}
          <Link
            to="/homedashboard"
            className={`  font-bold  ${
              collapsed
                ? "text-[10px] ml-[-15px] lg:ml-[-10px] "
                : "text-[19px] ml-[50px] "
            }`}
          >
            Rasket
          </Link>
        </span>
      ),
    },

    {
      label: (
        <span
          className={` font-bold  ${
            collapsed
              ? "text-[10px] ml-[-11px] lg:ml-[-6px]"
              : "text-[16px] ml-[0px]"
          }`}
        >
          Menu
        </span>
      ),
    },

    {
      key: "sub1",
      label: "Dashboard",
      icon: (
        <CiHome
          className={` font-bold  ${
            collapsed
              ? "text-[10px] translate-x-[-6px] lg:translate-x-[0px]"
              : "text-[16px] translate-x-[0px]"
          }`}
        />
      ),
      children: [
        {
          key: "/dashboard",
          label: <Link className="" to="/admin/dashboard">Dashboard</Link>,
        },
        {
          key: "/addbanners",
          label: <Link to="/admin/banner/create">Add Banners</Link>,
        },
      ],
    },

    {
      key: "subl",
      label: "layout",
      icon: (
        <BsLayoutTextSidebar
          className={` font-bold  ${
            collapsed
              ? "text-[10px] translate-x-[-6px] lg:translate-x-[0px]"
              : "text-[16px] translate-x-[0px]"
          }`}
        />
      ),
      children: [
        {
          key: "/layout",
          label: <Link to="/admin/layout">layout</Link>,
        },
        {
          key: "/addlayout",
          label: <Link to="/admin/layout/create">Add layout</Link>,
        },
      ],
    },

    {
      label: (
        <span
          className={` font-bold  ${
            collapsed
              ? "text-[10px] ml-[-11px] lg:ml-[-4px]"
              : "text-[16px] ml-[0px]"
          }`}
        >
          Apps
        </span>
      ),
    },

    {
      key: "sub2",
      label: "chat",
      icon: (
        <IoIosChatboxes
          className={` font-bold  ${
            collapsed
              ? "text-[10px] translate-x-[-6px] lg:translate-x-[0px]"
              : "text-[16px] translate-x-[0px]"
          }`}
        />
      ),

      children: [
        {
          key: "/chat",
          label: <Link to="/chat">Chat</Link>,
        },
        {
          key: "/addchat",
          label: <Link to="/admin/chat/create">Add Chat</Link>,
        },
      ],
    },

    {
      key: "sub3",
      label: "Email",
      icon: (
        <MdEmail
          className={` font-bold  ${
            collapsed
              ? "text-[10px] translate-x-[-6px] lg:translate-x-[0px]"
              : "text-[16px] translate-x-[0px]"
          }`}
        />
      ),
      children: [
        {
          key: "/Email",
          label: <Link to="/admin/product">Email</Link>,
        },
        {
          key: "/addEmail",
          label: <Link to="/admin/product/create">Add Email</Link>,
        },
      ],
    },

    {
      key: "sub4",
      label: "callender",
      icon: (
        <BiCalendarEdit
          className={` font-bold  ${
            collapsed
              ? "text-[10px] translate-x-[-6px] lg:translate-x-[0px]"
              : "text-[16px] translate-x-[0px]"
          }`}
        />
      ),
      children: [
        {
          key: "/callender",
          label: <Link to="/admin/brand">callender</Link>,
        },
        {
          key: "/addcallender",
          label: <Link to="/admin/brand/create">Add callender</Link>,
        },
      ],
    },

    {
      key: "sub5",
      label: "Todo",
      icon: (
        <SiTodoist
          className={` font-bold  ${
            collapsed
              ? "text-[10px] translate-x-[-6px] lg:translate-x-[0px]"
              : "text-[16px] translate-x-[0px]"
          }`}
        />
      ),
      children: [
        {
          key: "/Todo",
          label: <Link to="/admin/Todo">Todos</Link>,
        },
        {
          key: "/addTodo",
          label: <Link to="/admin/shipping/create">Add Shippings</Link>,
        },
      ],
    },

    {
      label: <Link to="/admin/invoices">Invoices</Link>,
      icon: (
        <SiInvoiceninja
          className={` font-bold  ${
            collapsed
              ? "text-[10px] translate-x-[-6px] lg:translate-x-[0px]"
              : "text-[16px] translate-x-[0px]"
          }`}
        />
      ),
    },

    {
      label: <Link to="/admin/pages">pages</Link>,
      icon: (
        <FaPage4
          className={` font-bold  ${
            collapsed
              ? "text-[10px] translate-x-[-6px] lg:translate-x-[0px]"
              : "text-[16px] translate-x-[0px]"
          }`}
        />
      ),
    },

    {
      label: (
        <span
          className={` font-bold  ${
            collapsed
              ? "text-[10px] ml-[-15px] lg:ml-[-6px]"
              : "text-[16px] ml-[0px]"
          }`}
        >
          Custom
        </span>
      ),
    },

    {
      key: "sub6",
      label: "Authentication",
      icon: (
        <SiGoogleauthenticator
          className={` font-bold  ${
            collapsed
              ? "text-[10px] translate-x-[-6px] lg:translate-x-[0px]"
              : "text-[16px] translate-x-[0px]"
          }`}
        />
      ),
      children: [
        {
          key: "/Authentication",
          label: <Link to="/admin/Authentication">Authentications</Link>,
        },
        {
          key: "/addAuthentication",
          label: (
            <Link to="/admin/Authentication/create">Add Authentications</Link>
          ),
        },
      ],
    },

    {
      key: "sub7",
      label: "Chart",
      icon: (
        <IoBarChartSharp
          className={` font-bold  ${
            collapsed
              ? "text-[10px] translate-x-[-6px] lg:translate-x-[0px]"
              : "text-[16px] translate-x-[0px]"
          }`}
        />
      ),
      children: [
        {
          key: "/postChart",
          label: <Link to="/admin/post/Chart">Chart</Link>,
        },
        {
          key: "/addpostChart",
          label: <Link to="/admin/post/Chart/create">Add Chart</Link>,
        },
      ],
    },

    {
      key: "sub8",
      label: "Form",
      icon: (
        <FaWpforms
          className={` font-bold  ${
            collapsed
              ? "text-[10px] translate-x-[-6px] lg:translate-x-[0px]"
              : "text-[16px] translate-x-[0px]"
          }`}
        />
      ),
      children: [
        {
          key: "/postForm",
          label: <Link to="/admin/postForm">Form</Link>,
        },
        {
          key: "/addpostcategory",
          label: <Link to="/admin/postForm/create">Add Form</Link>,
        },
      ],
    },

    {
      label: (
        <p
          className={`flex items-center font-bold  ${
            collapsed
              ? "text-[13px] ml-[-27px] lg:ml-[3px]"
              : "text-[16px] ml-[0px]"
          }`}
        >
          <p 
          className={`flex items-center font-bold  ${
            collapsed
              ? "text-[13px] translate-x-[22px] lg:translate-x-0"
              : "text-[16px] ml-[0px]"
          }`}
          > 
            <SiEngadget />
          </p>
          <p 
           className={`flex items-center font-bold  ${
            collapsed
              ? "text-[13px] translate-x-[45px]  lg:translate-x-6"
              : "text-[13px] translate-x-2"
          }`}
          >widgets</p>
          {/* translate-x-[100px] lg:translate-x-[93px] bg-red-500 leading-6 text-[10px] */}
          <p className=" bg-red-500 px-1 leading-6 rounded-lg translate-x-[96px] lg:translate-x-[86px]  text-[12px] ">
            Hot
          </p>
        </p>
      ),
    },

    {
      label: (
        <span
          className={` font-bold  ${
            collapsed
              ? "text-[10px] ml-[-27px] lg:ml-[-16px]"
              : "text-[16px] ml-[0px]"
          }`}
        >
          Components
        </span>
      ),
    },

    {
      key: "subbui",
      label: "BaseUI",
      icon: (
        <IoLogoDesignernews
          className={` font-bold  ${
            collapsed
              ? "text-[10px] translate-x-[-6px] lg:translate-x-[0px]"
              : "text-[16px] translate-x-[0px]"
          }`}
        />
      ),
      children: [
        {
          key: "/postBaseUI",
          label: <Link to="/admin/postBaseUI">BaseUI</Link>,
        },
        {
          key: "/addpostcategory",
          label: <Link to="/admin/postBaseUI/create">Add BaseUI</Link>,
        },
      ],
    },

    {
      key: "subForms",
      label: "Advance UI",
      icon: (
        <CgIfDesign
          className={` font-bold  ${
            collapsed
              ? "text-[10px] translate-x-[-6px] lg:translate-x-[0px]"
              : "text-[16px] translate-x-[0px]"
          }`}
        />
      ),
      children: [
        {
          key: "/postAdvance UI",
          label: <Link to="/admin/postAdvance UI">Advance UI</Link>,
        },
        {
          key: "/addpostcategory",
          label: <Link to="/admin/postAdvance UI/create">Add Advance UI</Link>,
        },
      ],
    },

    {
      key: "subFormsa",
      label: "Forms",
      icon: (
        <FaWpforms
          className={` font-bold  ${
            collapsed
              ? "text-[10px] translate-x-[-6px] lg:translate-x-[0px]"
              : "text-[16px] translate-x-[0px]"
          }`}
        />
      ),
      children: [
        {
          key: "/postForms",
          label: <Link to="/admin/postForms">Forms</Link>,
        },
        {
          key: "/addpostcategory",
          label: <Link to="/admin/postForms/create">Add Advance UI</Link>,
        },
      ],
    },
  ];

  return (
    <>
      <div
        className={
      
          collapsed ? "admin-dashboard collapsed " : "admin-dashboard expanded "
        }
      >
        <Menu
          className="sidebar border-[1px] h-full items-center bg-[#021526] lg:w-full py-4"
          selectedKeys={[location.pathname]}
          // defaultOpenKeys={["sub1"]}
          mode="inline"
          inlineCollapsed={collapsed}
          items={items}
        />
      </div>
    </>
  );
};

export default Admindasjboardcomponents;
