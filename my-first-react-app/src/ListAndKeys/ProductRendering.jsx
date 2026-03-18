import React from 'react'

const ProductRendering = () => {
    const products = [
  {
    id: 101,
    name: "Apple iPhone 17E (Pink, 128GB)",
    price: 599.00,
    inStock: true
  },
  {
    id: 102,
    name: "Samsung 183L Direct Cool Refrigerator",
    price: 195.00,
    inStock: true
  },
  {
    id: 103,
    name: "Sony Soundcore Aerofit 2 Pro Earbuds",
    price: 180.00,
    inStock: false
  },
  {
    id: 104,
    name: "Philips HD9216/43 Air Fryer (4.1L)",
    price: 95.00,
    inStock: true
  },
  {
    id: 105,
    name: "Anker Nano Charger with Smart Display",
    price: 40.00,
    inStock: true
  }
];

  return (
    <div>
        <h1>ProductsRendering</h1>
        {products.map((item)=>{
            return (
                <div>
                    <p>Id:{item.id}</p>
                    <p>Name:{item.name}</p>
                    <p>Price:{item.price}</p>
                    <p>inStock:{String(item.inStock)}</p>
                    <hr />
                </div>
            );
        })}
    </div>
  )
}

export default ProductRendering 