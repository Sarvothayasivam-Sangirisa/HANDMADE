// "use client"

// import { useState } from "react"
// import ProductForm from "./ProductForm"
// import ProductTable from "./ProductTable"
// import { FiPlus, FiRefreshCw } from "react-icons/fi"

// const ProductManagement = () => {
//   const [showAddProduct, setShowAddProduct] = useState(false)
//   const [searchTerm, setSearchTerm] = useState("")
//   const [selectedCategory, setSelectedCategory] = useState("")
//   const [selectedColor, setSelectedColor] = useState("")
//   const [selectedThickness, setSelectedThickness] = useState("")

//   const categories = ["Electronics", "Clothing", "Food", "Books", "Home & Garden"]
//   const colors = ["Red", "Blue", "Green", "Black", "White"]
//   const thicknesses = ["Thin", "Medium", "Thick"]

//   const handleRefresh = () => {
//     setSearchTerm("")
//     setSelectedCategory("")
//     setSelectedColor("")
//     setSelectedThickness("")
//   }

//   return (
//     <div className="p-6">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Products</h1>
//         <div className="flex space-x-3">
//           <button
//             onClick={handleRefresh}
//             className="flex items-center px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
//           >
//             <FiRefreshCw className="w-4 h-4 mr-2" />
//             Refresh
//           </button>
//           <button
//             onClick={() => setShowAddProduct(true)}
//             className="flex items-center px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
//           >
//             <FiPlus className="w-4 h-4 mr-2" />
//             Add New Product
//           </button>
//           <button className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600">Scan Barcode</button>
//         </div>
//       </div>

//       {/* Filters */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Search Products</label>
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               placeholder="Search by name or code"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
//             <select
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">All Categories</option>
//               {categories.map((category) => (
//                 <option key={category} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
//             <select
//               value={selectedColor}
//               onChange={(e) => setSelectedColor(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">All Colors</option>
//               {colors.map((color) => (
//                 <option key={color} value={color}>
//                   {color}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Thickness</label>
//             <select
//               value={selectedThickness}
//               onChange={(e) => setSelectedThickness(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">All Thickness</option>
//               {thicknesses.map((thickness) => (
//                 <option key={thickness} value={thickness}>
//                   {thickness}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Product Table */}
//       <ProductTable
//         searchTerm={searchTerm}
//         selectedCategory={selectedCategory}
//         selectedColor={selectedColor}
//         selectedThickness={selectedThickness}
//       />

//       {/* Add Product Modal */}
//       {showAddProduct && <ProductForm onClose={() => setShowAddProduct(false)} />}
//     </div>
//   )
// }

// export default ProductManagement
