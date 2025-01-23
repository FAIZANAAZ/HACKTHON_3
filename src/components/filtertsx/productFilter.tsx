// "use client"

// import { useState, useEffect } from 'react'

// import Image from 'next/image'
// import { FiltersSidebar } from './colorsbar';

// // Define the product type based on your Sanity data structure
// type Product = {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   priceWithoutDiscount: number;
//   rating: number;
//   ratingCount: number;
//   tags: string[];
//   sizes: string[];
//   image: string;
//   colors: string[];
// }

// export default function ProductPage() {
//   const [products, setProducts] = useState<Product[]>([])
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

//   useEffect(() => {
//     // Mock data with the two products you provided
//     const mockProducts: Product[] = [
//       {
//         _id: '1',
//         name: 'CHECKERED SHIRT',
//         description: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
//         price: 300,
//         discountPercentage: 40,
//         priceWithoutDiscount: 500,
//         rating: 4.5,
//         ratingCount: 180,
//         tags: ['Shirts', 'Casual'],
//         sizes: ['Small', 'Medium', 'Large', 'X-Large'],
//         image: '/placeholder.svg?height=300&width=300',
//         colors: ['Red', 'Blue', 'Green']
//       },
//       {
//         _id: '2',
//         name: 'T-SHIRT WITH TAPE DETAILS',
//         description: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
//         price: 300,
//         discountPercentage: 20,
//         priceWithoutDiscount: 375,
//         rating: 4.5,
//         ratingCount: 240,
//         tags: ['T-shirts', 'Casual'],
//         sizes: ['Small', 'Medium', 'Large', 'X-Large'],
//         image: '/placeholder.svg?height=300&width=300',
//         colors: ['White', 'Black', 'Gray']
//       }
//     ]
//     setProducts(mockProducts)
//     setFilteredProducts(mockProducts)
//   }, [])

//  const handleFilterChange = (newFilteredProducts: Product[]) => {
//     setFilteredProducts(newFilteredProducts)
//   }

//   return (
//     <div className="flex p-4 font-['Satoshi']">
//       <FiltersSidebar products={products} onFilterChange={handleFilterChange} />
//       <div className="flex-1 ml-8">
//         <h1 className="text-2xl font-bold mb-4">Products</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {filteredProducts.map(product => (
//             <div key={product._id} className="border rounded-lg p-4 shadow-md">
//               <Image src={product.image || "/placeholder.svg"} alt={product.name} width={300} height={300} className="mb-4 rounded-md" />
//               <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
//               <div className="flex items-center mb-2">
//                 <span className="text-yellow-500 mr-1">★</span>
//                 <span>{product.rating}</span>
//                 <span className="text-gray-500 ml-2">({product.ratingCount})</span>
//               </div>
//               <p className="text-gray-600 mb-2">{product.description}</p>
//               <div className="flex items-center mb-4">
//                 <span className="text-lg font-bold">${product.price}</span>
//                 <span className="text-gray-500 line-through ml-2">${product.priceWithoutDiscount}</span>
//               </div>
//               <div className="mb-4">
//                 <h3 className="font-semibold mb-2">Select Color</h3>
//                 <div className="flex space-x-2">
//                   {product.colors.map(color => (
//                     <div key={color} className="w-6 h-6 rounded-full border border-gray-300" style={{backgroundColor: color.toLowerCase()}}></div>
//                   ))}
//                 </div>
//               </div>
//               <div className="mb-4">
//                 <h3 className="font-semibold mb-2">Choose Size</h3>
//                 <div className="flex space-x-2">
//                   {product.sizes.map(size => (
//                     <button key={size} className="px-2 py-1 border rounded-md hover:bg-gray-100">{size}</button>
//                   ))}
//                 </div>
//               </div>
//               <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">Add to Cart</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

