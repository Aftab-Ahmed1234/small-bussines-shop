import React, { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const URL = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetch(URL).then((response)=>{
      return response.json().then((data)=>{
        setProducts(data);
      })

    }).catch((error)=>{
      setError(true);
      console.log(error);

    })
    fetch()
  },[])
  

  return (
    <div className='bg-pink-100'>       
      <section className="text-gray-600 body-font ml-20 ">
        <div className="container px-5 py-16 mx-auto ">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-[200px] h-[400px]">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img 
                    alt="ecommerce"
                    className="object-cover object-center w-[200px] h-[150px] block"
                    src={product.image}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-sm font-medium">
                    {product.title}
                  </h2>
                  <p className="mt-1">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       
    </div>
    
  );
};

export default Products;
