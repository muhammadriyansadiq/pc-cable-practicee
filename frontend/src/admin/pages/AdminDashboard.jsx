import React, { useEffect, useState } from "react";
import Admindasjboardcomponents from "../components/Admindashboardcomponents";

import { BiSolidCategory } from "react-icons/bi";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { FaFirstOrder } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import Chart from "react-apexcharts";
import PakistanMap from "../components/Map";
import AdminNavbar from "../components/AdminNavbar";
import { useSelector } from "react-redux";
import { IoIosArrowUp } from "react-icons/io";
import CircularProgressBar from "../components/Circularprogreessbar";
import "../../App.css";
const AdminDashboard = () => {
  console.log("inner width", window.outerWidth);

  const collapsed = useSelector((state) => state.counter.collapsed);
  const see = useSelector((state) => state.counter.see);

  let percentage = 39;

  // bar chart data
  const chartData = {
    series: [
      {
        name: "Clicks",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 345, 23, 34], // Example data for clicks
      },
      {
        name: "Page Views",
        data: [80, 100, 90, 120, 100, 130, 150, 170, 200, 234, 54, 234], // Example data for page views
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "oct",
          "nov",
          "dec",
        ],
      },
      yaxis: {
        title: {
          text: "Count",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: (val) => `${val} clicks`,
        },
      },
    },
  };

  return (
    <>
      <div className="flex w-full shadow-lg ">
        {/* ====This see state function on small width side bar hide ==== side bar unhide by the toggle btn click */}
        {see ? <Admindasjboardcomponents collapsed={collapsed} /> : ""}
        <div
          className={`relative homeright right min-h-screen  xs: ${
            see ? "w-[88%]" : "w-[100%]"
          }  lg:w-full  bg-[#f4f5f8] `}
        >
          <AdminNavbar />
          <div className=" content w-full">
            <div className=" flex justify-center w-full mt-6">
              <div className=" w-[97%] text-[33px] text-[#146430] font-bold  lg:text-left">
                Dashboard
              </div>
            </div>
            {/* ==========4 carts=========== */}
            <div className="flex justify-center w-full flex-wrap   mt-6">
              <div className="  w-[97%] flex justify-start lg:justify-between flex-wrap">
                <div className="w-[98%] h-[103px] border-r-[2px] lg:border-r-0   rounded-lg mt-5 lg:mt-0 lg:w-[22%] bg-white py-6 flex flex-col boreder-[1px]  justify-between items-center border-l-[6px] border-blue-500 relative capitalize">
                  <div className=" w-[85%] flex justify-between items-center absolute top-3">
                    <div>
                      <div className=" text-blue-500">Page View</div>
                      <div className=" font-bold">134</div>
                    </div>
                    <div>
                      <BiSolidCategory className=" text-[22px] text-blue-500" />
                    </div>
                  </div>
                  <div className=" text-black absolute bottom-0 py-2 bg-gray-200 w-full flex justify-around text-[13px] capitalize">
                    <div className=" flex items-center text-[8px]">
                      <IoIosArrowUp />

                      <span className=" text-[11px]">2.3%</span>
                    </div>
                    <div className=" font-semibold">last month</div>
                    <div className=" font-semibold">View more</div>
                  </div>
                </div>
                <div className="w-[98%] h-[103px] border-r-[2px] lg:border-r-0   rounded-lg mt-5 lg:mt-0 lg:w-[22%] bg-white py-6 flex flex-col boreder-[1px]  justify-between items-center border-l-[6px] border-orange-500 relative">
                  <div className=" w-[85%] flex justify-between items-center absolute top-3">
                    <div>
                      <div className=" text-orange-500">New User</div>
                      <div className=" font-bold">134</div>
                    </div>
                    <div>
                      <MdOutlineLocalPostOffice className=" text-[22px] text-orange-500" />
                    </div>
                  </div>
                  <div className=" text-black absolute bottom-0 py-2 bg-gray-200 w-full flex justify-around text-[13px]  capitalize">
                    <div className=" flex items-center text-[8px]">
                      <IoIosArrowUp />

                      <span className=" text-[11px]">2.3%</span>
                    </div>
                    <div className=" font-semibold"> last month</div>
                    <div className=" font-semibold">View more</div>
                  </div>
                </div>
                <div className="w-[98%] h-[103px] border-r-[2px] lg:border-r-0   rounded-lg mt-5 lg:mt-0 lg:w-[22%] bg-white py-6 flex flex-col boreder-[1px]  justify-between items-center border-l-[6px] border-green-500 relative">
                  <div className=" w-[85%] flex justify-between items-center absolute top-3">
                    <div>
                      <div className=" text-green-500">Click</div>
                      <div className=" font-bold">134</div>
                    </div>
                    <div>
                      <FaFirstOrder className=" text-[22px] text-green-500" />
                    </div>
                  </div>
                  <div className="capitalize text-black absolute py-2 bottom-0 bg-gray-200 w-full flex justify-around text-[13px]">
                    <div className=" flex items-center text-[8px]">
                      <IoIosArrowUp />

                      <span className=" text-[11px]">2.3%</span>
                    </div>
                    <div className=" font-semibold">last month</div>
                    <div className=" font-semibold">View more</div>
                  </div>
                </div>
                <div className="w-[98%] h-[103px] border-r-[2px] lg:border-r-0   rounded-lg mt-5 lg:mt-0 lg:w-[22%] bg-white py-6 flex flex-col boreder-[1px]  justify-between items-center border-l-[6px] border-red-500 relative">
                  <div className=" w-[85%] flex justify-between items-center absolute top-3">
                    <div>
                      <div className=" text-red-500">Conversation</div>
                      <div className=" font-bold">134</div>
                    </div>
                    <div>
                      <MdOutlineProductionQuantityLimits className=" text-[22px] text-red-500" />
                    </div>
                  </div>
                  <div className="capitalize text-black absolute bottom-0 bg-gray-200 w-full flex justify-around py-2 text-[13px]">
                    <div className=" flex items-center text-[8px]">
                      <IoIosArrowUp />

                      <span className=" text-[11px]">2.3%</span>
                    </div>
                    <div className=" font-semibold">last month</div>
                    <div className=" font-semibold">View more</div>
                  </div>
                </div>
              </div>
            </div>
            {/* ==========4 carts=========== */}

            {/* ============3 carts ============ */}

            <div className="  flex  justify-center mt-9">
              <div className=" w-[97%]  mt-4 flex flex-col justify-between lg:flex-row">
                <div className=" bg-white  w-full lg:w-[22%] py-4 flex flex-col border-[2px]  justify-between ">
                  <div className=" ml-4 text-[22px] font-bold">
                    Conversations
                  </div>
                  <div className=" flex justify-center">
                    <CircularProgressBar
                      progress={percentage}
                      radius={110}
                      stroke={15}
                    />
                  </div>

                  <div className=" text-center">Returning Customer</div>
                  <div className=" flex justify-center">
                    <div className=" w-8/12 flex justify-between my-6">
                      <div>
                        <div>This Week</div>
                        <div>23K</div>
                      </div>
                      <div>
                        <div>Last Week</div>
                        <div>63K</div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex justify-center ">
                    <button className=" bg-slate-300 hover:bg-purple-500 px-7 py-1 rounded-lg">
                      View Details
                    </button>
                  </div>
                </div>
                <div className=" bg-white w-full lg:w-[42%] py-5 px-4 my-4 lg:my-0">
                  <div className=" w-10/12  flex flex-col lg:flex-row justify-between lg:w-full ">
                    <div className=" text-[21px] font-bold ">Performance</div>
                    <div className=" flex justify-between lg:w-5/12">
                      <button className=" border-[1px] px-2 py-1 rounded-lg">
                        All
                      </button>
                      <button className=" border-[1px] px-2 py-1 rounded-lg">
                        1M
                      </button>
                      <button className=" border-[1px] px-2 py-1 rounded-lg">
                        6M
                      </button>
                      <button className=" border-[1px] px-2 py-1 rounded-lg">
                        1Y
                      </button>
                    </div>
                  </div>

                  <div className=" mt-6 bg-gray-200 p-2 rounded-lg capitalize font-semibold">
                    We regret to inform you that our server is currently
                    experiencing technical difficulties.
                  </div>

                  <div className=" overflow-auto mt-3">
                    <Chart
                      options={chartData.options}
                      series={chartData.series}
                      type="bar"
                      height={350}
                    />
                  </div>
                </div>
                <div className=" bg-white w-full lg:w-[32%] px-4 py-5">
                  <div className=" font-bold text-[21px] mb-6">
                    Session By Browser
                  </div>
                  <div className=" overflow-y-auto max-h-[400px] ">
                    <table className="   w-full  ">
                      <thead>
                        <th className=" ">Chrome</th>
                        <th>62.5%</th>
                        <th>5.06k</th>
                      </thead>
                      <tbody className=" font-semibold text-gray-800">
                        <tr className=" text-center">
                          <td className="pt-2  ">Firefox</td>
                          <td className="pt-2">34%</td>
                          <td className="pt-2">4k</td>
                        </tr>
                        <tr className=" text-center ">
                          <td className="py-2">safari</td>
                          <td className="py-2">14%</td>
                          <td className="py-2">2k</td>
                        </tr>
                        <tr className=" text-center">
                          <td className="py-2">Firefox</td>
                          <td className="py-2">34%</td>
                          <td className="py-2">4k</td>
                        </tr>
                        <tr className=" text-center">
                          <td>safari</td>
                          <td>14%</td>
                          <td>2k</td>
                        </tr>
                        <tr className=" text-center">
                          <td className="py-2">Firefox</td>
                          <td className="py-2">34%</td>
                          <td className="py-2">4k</td>
                        </tr>
                        <tr className=" text-center">
                          <td>safari</td>
                          <td>14%</td>
                          <td>2k</td>
                        </tr>
                        <tr className=" text-center">
                          <td className="py-2">Firefox</td>
                          <td className="py-2">34%</td>
                          <td className="py-2">4k</td>
                        </tr>

                        <tr className=" text-center">
                          <td>safari</td>
                          <td>14%</td>
                          <td>2k</td>
                        </tr>
                        <tr className=" text-center">
                          <td className="py-2">safari</td>
                          <td className="py-2">14%</td>
                          <td className="py-2">2k</td>
                        </tr>
                        <tr className=" text-center">
                          <td>safari</td>
                          <td>14%</td>
                          <td>2k</td>
                        </tr>
                        <tr className=" text-center">
                          <td className="py-2">safari</td>
                          <td className="py-2">14%</td>
                          <td className="py-2">2k</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className=" flex justify-center mt-5">
                    <button className=" bg-slate-300 hover:bg-purple-500 p-2 rounded-lg">
                      View All
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* ============3 carts ============ */}

            {/*maps*/}

            <div className="  flex justify-center mt-8">
              <div className=" w-[97%] flex flex-col justify-between lg:flex-row">
                <div className="w-full lg:w-[48%] px-4 py-6 bg-white">
                  <div className=" flex justify-between items-center">
                    <div className=" font-bold text-[17px]">Top Pages</div>
                    <div>
                      <button className=" bg-gray-300 p-2 rounded-lg hover:bg-purple-700 hover:text-white">
                        View All
                      </button>
                    </div>
                  </div>
                  <div className=" mt-2">
                    <hr />
                  </div>

                  <div className=" flex justify-between mt-4">
                    <div className=" w-[47%]  flex h-[30vh]">
                      <PakistanMap />
                    </div>
                    <div className=" w-[47%]">
                      <div>Punjab Population</div>
                      <div className="w-10/12 leading-3 rounded-lg bg-[#444146]">
                        <div
                          className={`bg-green-500 text-white w-[49%] rounded-md text-center text-[12px]`}
                        >
                          49%
                        </div>
                      </div>
                      <div>
                        <div className=" mt-3">Sindh Population</div>
                        <div className="w-10/12 leading-3 rounded-lg bg-[#444146]">
                          <div
                            className={`bg-orange-700 w-[19%] rounded-md text-center text-white text-[12px]`}
                          >
                            19%
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className=" mt-3">Balochistan Population</div>
                        <div className="w-10/12 leading-3 rounded-lg bg-[#444146]">
                          <div
                            className={`bg-pink-700 w-[23%] rounded-md text-center text-white text-[12px]`}
                          >
                            23%
                          </div>
                        </div>
                      </div>

                      <div>
                        <div>
                          <div className=" mt-3">KPK Population</div>
                          <div className="w-10/12 leading-3 rounded-lg bg-[#444146]">
                            <div
                              className={`bg-blue-700 w-[13%] rounded-md text-center text-white text-[12px]`}
                            >
                              13%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[48%] bg-white px-4 py-6 mt-4 lg:mt-0">
                  <div className=" flex justify-between items-center">
                    <div className=" font-bold text-[17px]">Top Pages</div>
                    <div>
                      <button className=" bg-gray-300 p-2 rounded-lg hover:bg-purple-700 hover:text-white">
                        View All
                      </button>
                    </div>
                  </div>
                  <div className=" w-full mt-4 overflow-auto">
                    <table className=" w-full">
                      <thead className=" border-[1px] text-[9px] lg:text-[13px]">
                        <th className=" py-3">Page Path </th>
                        <th className=" py-3">Page Views </th>
                        <th className=" py-3">Avg Time on Page </th>
                        <th className=" py-3">Exit Rate</th>
                      </thead>
                      <tbody className=" text-[9px] lg:text-[13px]">
                        <tr className=" text-center  border-[1px] ">
                          <td className=" py-3">rasket/dashboard.html</td>
                          <td className=" py-3">4265</td>
                          <td className=" py-3">09m:45s</td>
                          <td className="py-3 text-red-900 font-bold rounded-lg text-[11px]">
                            <span className=" bg-red-500 text-white p-[5px] rounded-sm ">
                              20.78
                            </span>{" "}
                          </td>
                        </tr>
                        <tr className=" text-center  border-[1px]">
                          <td className=" py-3">rasket/dashboard.html</td>
                          <td className=" py-3">4265</td>
                          <td className=" py-3">09m:45s</td>
                          <td className="py-3 text-red-900 font-bold rounded-lg text-[11px]">
                            <span className=" bg-red-500 text-white p-[5px] rounded-sm ">
                              20.78
                            </span>{" "}
                          </td>
                        </tr>
                        <tr className=" text-center  border-[1px]">
                          <td className=" py-3">rasket/dashboard.html</td>
                          <td className=" py-3">4265</td>
                          <td className=" py-3">09m:45s</td>
                          <td className="py-3 text-red-900 font-bold rounded-lg text-[11px]">
                            <span className=" bg-red-500 text-white p-[5px] rounded-sm ">
                              20.78
                            </span>{" "}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/*maps*/}
          </div>
          <div className=" text-center py-2 ">
        2024 © Rasket. Crafted by Techzaa
      </div>
        </div>
       
      </div>
      
    </>
  );
};

export default AdminDashboard;
