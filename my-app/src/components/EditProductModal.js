// "use client"

// import { useState } from "react"
// import { FiX, FiCheck } from "react-icons/fi"

// const EditProductModal = ({ product, onUpdate, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: product.name,
//     code: product.code,
//     category: product.category,
//     price: product.price,
//     store: product.store,
//     warehouse: product.warehouse,
//     status: product.status,
//   })

//   const categories = ["Electronics", "Clothing", "Food", "Books", "Home & Garden"]
//   const statuses = ["In Stock", "Low Stock", "Not Available"]
//   const stores = ["Main Store", "Branch Store", "Online Store"]
//   const warehouses = ["WH-001", "WH-002", "WH-003"]

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     onUpdate(formData)
//   }

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg w-full max-w-md mx-4">
//         <div className="flex items-center justify-between p-4 border-b">
//           <h3 className="text-lg font-semibold text-gray-800">Edit Product</h3>
//           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
//             <FiX className="w-5 h-5" />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="p-4 space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Product Code</label>
//             <input
//               type="text"
//               name="code"
//               value={formData.code}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
//             <select
//               name="category"
//               value={formData.category}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               {categories.map((cat) => (
//                 <option key={cat} value={cat}>
//                   {cat}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
//             <input
//               type="number"
//               step="0.01"
//               name="price"
//               value={formData.price}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Store</label>
//             <select
//               name="store"
//               value={formData.store}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               {stores.map((store) => (
//                 <option key={store} value={store}>
//                   {store}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Warehouse</label>
//             <select
//               name="warehouse"
//               value={formData.warehouse}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               {warehouses.map((warehouse) => (
//                 <option key={warehouse} value={warehouse}>
//                   {warehouse}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
//             <select
//               name="status"
//               value={formData.status}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               {statuses.map((status) => (
//                 <option key={status} value={status}>
//                   {status}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="flex justify-end space-x-3 pt-4 border-t">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
//             >
//               <FiCheck className="w-4 h-4 mr-2" />
//               Update Product
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default EditProductModal
