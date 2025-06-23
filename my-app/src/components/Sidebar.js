// "use client";
// import {
//   FiHome,
//   FiDollarSign,
//   FiPackage,
//   FiUsers,
//   FiTruck,
//   FiFileText,
//   FiSettings,
//   FiLogOut,
//   FiHelpCircle,
//   FiCpu,
//   FiBarChart2,
//   FiArrowLeft,
//   FiArrowRight,
// } from "react-icons/fi";
// import { LuBoxes } from "react-icons/lu";
// import { GiBoxUnpacking } from "react-icons/gi";
// import { ImUsers } from "react-icons/im";
// import { AiTwotoneSetting } from "react-icons/ai";
// import { GiShakingHands } from "react-icons/gi";
// import { IoIosListBox } from "react-icons/io";
// import { BsFillHouseDoorFill } from "react-icons/bs";
// import { BsGearFill } from "react-icons/bs";
// import { BsPeopleFill } from "react-icons/bs";
// import { CiBoxes } from "react-icons/ci";
// import { ImExit } from "react-icons/im";
// import { IoIosHelpCircle } from "react-icons/io";
// import { PiUserCircleGearFill } from "react-icons/pi";






// const Sidebar = ({ currentPage, onPageChange }) => {
//   const topItems = [
//     { id: "home", label: "Home", icon: BsFillHouseDoorFill },
//     { id: "sales", label: "Sales", icon: GiBoxUnpacking },
//     { id: "products", label: "Products", icon: LuBoxes },
//     { id: "utilities", label: "Utilities", icon: PiUserCircleGearFill },
//     { id: "stocks", label: "Stocks", icon: CiBoxes },
//     { id: "reports", label: "Reports", icon: IoIosListBox },
//     { id: "users", label: "Users", icon:  BsPeopleFill },
//     { id: "suppliers", label: "Suppliers", icon: GiShakingHands },
//     { id: "settings", label: "Settings", icon:  BsGearFill },
    
//   ];

//   const bottomItems = [
//     { id: "exit", label: "Exit", icon: ImExit, color: "text-red-500" },
//     { id: "help", label: "Help", icon: IoIosHelpCircle },
//   ];

//   return (
//     <div
//       className="
//         w-32 
//         h-screen        /* full viewport height */
//         flex flex-col items-center justify-between 
//         pt-4 pb-4 
//         overflow-y-hidden /* hide vertical scrollbar */
//         bg-white shadow-lg
//       "
//     >
//       {/* Arrow Button */}
//       <div className="mb-2">
//         <div className="flex items-center px-1 py-[1px] transition rounded overflow-hidden">
//           <button className="px-4 py-[4px] mx-[2px] border border-gray-300 rounded">
//             <FiArrowLeft className="w-4 h-4 text-gray-700" />
//           </button>
//           <button className="px-4 py-[4px] mx-[2px] border border-gray-300 rounded">
//             <FiArrowRight className="w-4 h-4 text-gray-700" />
//           </button>
//         </div>
//       </div>

//       {/* Logo */}
//       <div className="text-left mb-2 overflow-hidden">
//         <h1 className="text-black font-bold text-xl leading-tight truncate">
//           POS
//         </h1>
//         <p className="text-black font-bold text-base truncate">NAME</p>
//       </div>

//       {/* Top Items */}
//       <div
//         className="flex flex-col items-center mt-2 gap-[2px] w-full px-2 overflow-hidden"
//         style={{ flexGrow: 1 }}
//       >
//         {topItems.map(({ id, label, icon: Icon }) => {
//           const isActive = currentPage === id;

//           if (id === "home") {
//             return (
//               <button
//                 key={id}
//                 onClick={() => onPageChange(id)}
//                 className="flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-green-400 to-green-700 text-white transition-colors w-full justify-center whitespace-nowrap overflow-hidden text-ellipsis"
//               >
//                 <Icon className="w-6 h-6" />
//                 <span className="text-sm font-medium">{label}</span>
//               </button>
//             );
//           }

//           return (
//             <button
//               key={id}
//               onClick={() => onPageChange(id)}
//               className={`w-full flex flex-col items-center py-[6px] transition-colors whitespace-nowrap overflow-hidden text-ellipsis ${
//                 isActive ? "text-green-600" : "text-gray-600"
//               }`}
//             >
//               <div className="w-8 h-8 flex items-center justify-center">
//                 <Icon className="w-6 h-6" />
//               </div>
//               <span className="text-[11px] mt-1">{label}</span>
//               {isActive && (
//                 <div className="w-4 h-[2px] mt-1 bg-green-500 rounded-full" />
//               )}
//             </button>
//           );
//         })}
//       </div>

//       {/* Bottom Items */}
//       <div className="flex flex-col items-start gap-[4px] w-full px-2 overflow-hidden">
//         {bottomItems.map(({ id, label, icon: Icon, color }) => {
//           const isActive = currentPage === id;
//           return (
//             <button
//               key={id}
//               onClick={() => onPageChange(id)}
//               className={`flex items-center gap-2 w-full px-2 py-2 rounded text-sm transition-colors whitespace-nowrap overflow-hidden text-ellipsis ${
//                 isActive ? "text-green-600" : color || "text-gray-600"
//               }`}
//             >
//               <Icon className="w-6 h-6" />
//               <span>{label}</span>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
//
