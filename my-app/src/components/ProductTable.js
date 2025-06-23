// "use client"

// import { useState } from "react"
// import { FiEdit, FiEye } from "react-icons/fi"

// const ProductTable = ({ searchTerm, selectedCategory, selectedColor, selectedThickness }) => {
//   const [products] = useState([
//     {
//       id: 1,
//       name: "Laptop Dell XPS 13",
//       code: "DELL001",
//       barcode: "1234567890123",
//       category: "Electronics",
//       tax: "18%",
//       price: "$999.99",
//       store: "Main Store",
//       warehouse: "WH-001",
//       status: "In Stock",
//       color: "Black",
//       thickness: "Thin",
//     },
//     {
//       id: 2,
//       name: "iPhone 14 Pro",
//       code: "APL001",
//       barcode: "2345678901234",
//       category: "Electronics",
//       tax: "18%",
//       price: "$1299.99",
//       store: "Main Store",
//       warehouse: "WH-001",
//       status: "In Stock",
//       color: "Blue",
//       thickness: "Medium",
//     },
//     {
//       id: 3,
//       name: "Cotton T-Shirt",
//       code: "CLT001",
//       barcode: "3456789012345",
//       category: "Clothing",
//       tax: "12%",
//       price: "$29.99",
//       store: "Branch Store",
//       warehouse: "WH-002",
//       status: "Low Stock",
//       color: "Red",
//       thickness: "Thin",
//     },
//     {
//       id: 4,
//       name: "Organic Apples",
//       code: "FD001",
//       barcode: "4567890123456",
//       category: "Food",
//       tax: "5%",
//       price: "$4.99",
//       store: "Main Store",
//       warehouse: "WH-003",
//       status: "Not Available",
//       color: "Green",
//       thickness: "Medium",
//     },
//     {
//       id: 5,
//       name: "Programming Book",
//       code: "BK001",
//       barcode: "5678901234567",
//       category: "Books",
//       tax: "0%",
//       price: "$49.99",
//       store: "Online Store",
//       warehouse: "WH-001",
//       status: "In Stock",
//       color: "White",
//       thickness: "Thick",
//     },
//   ])

//   const [editingProduct, setEditingProduct] = useState(null)

//   const filteredProducts = products.filter((product) => {
//     const matchesSearch =
//       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.code.toLowerCase().includes(searchTerm.toLowerCase())
//     const matchesCategory = !selectedCategory || product.category === selectedCategory
//     const matchesColor = !selectedColor || product.color === selectedColor
//     const matchesThickness = !selectedThickness || product.thickness === selectedThickness

//     return matchesSearch && matchesCategory && matchesColor && matchesThickness
//   })

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "In Stock":
//         return "bg-green-100 text-green-800"
//       case "Low Stock":
//         return "bg-yellow-100 text-yellow-800"
//       case "Not Available":
//         return "bg-red-100 text-red-800"
//       default:
//         return "bg-gray-100 text-gray-800"
//     }
//   }

//   const handleEdit = (product) => {
//     setEditingProduct(product)
//   }

//   const closeEditModal = () => {
//     setEditingProduct(null)
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//       <div className="overflow-x-auto">
//         <table className="w-full">
//           <thead className="bg-gray-50 border-b border-gray-200">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Products
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Product Code
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Barcode
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Category
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tax</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Store</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Warehouse
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {filteredProducts.map((product) => (
//               <tr key={product.id} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm font-medium text-gray-900">{product.name}</div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-900">{product.code}</div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-900">{product.barcode}</div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-900">{product.category}</div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-900">{product.tax}</div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm font-medium text-gray-900">{product.price}</div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-900">{product.store}</div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-900">{product.warehouse}</div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <span
//                     className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(product.status)}`}
//                   >
//                     {product.status}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                   <button onClick={() => handleEdit(product)} className="text-blue-600 hover:text-blue-900 mr-3">
//                     <FiEdit className="w-4 h-4" />
//                   </button>
//                   <button className="text-gray-600 hover:text-gray-900">
//                     <FiEye className="w-4 h-4" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Edit Product Modal */}
//       {editingProduct && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-96 max-w-md mx-4">
//             <h3 className="text-lg font-semibold mb-4">Product Details</h3>
//             <div className="space-y-3">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Product Name</label>
//                 <p className="text-sm text-gray-900">{editingProduct.name}</p>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Product Code</label>
//                 <p className="text-sm text-gray-900">{editingProduct.code}</p>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Category</label>
//                 <p className="text-sm text-gray-900">{editingProduct.category}</p>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Price</label>
//                 <p className="text-sm text-gray-900">{editingProduct.price}</p>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Status</label>
//                 <span
//                   className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(editingProduct.status)}`}
//                 >
//                   {editingProduct.status}
//                 </span>
//               </div>
//             </div>
//             <div className="flex justify-end space-x-3 mt-6">
//               <button
//                 onClick={closeEditModal}
//                 className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default ProductTable
