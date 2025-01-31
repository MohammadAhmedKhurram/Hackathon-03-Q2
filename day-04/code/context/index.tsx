'use client';
import { createContext, useContext, useState } from 'react';
// import React from 'react';

const AppContext = createContext<any>(undefined);




export const AppWrapper = ({ children }: { children: React.ReactNode}) => {
  // const [name, setName] = useState('Ahmed');
  const [cart, setCart] = useState<Array<any>>([]);
  const [wishlist, setWishlist] = useState<Array<any>>([]);
  console.log("Wishlist", wishlist);
console.log("cart", cart);


// const addToCart = (newProduct: any) => {
//   setCart((prevCart: any) => [...prevCart, newProduct]); // Append new product to the existing cart
//   console.log("Context", newProduct);
// };





    // Add product to the cart
    // Add product to the cart
  // const addToCart = (newProduct: any) => {
  //   setCart((prevCart) => {
  //     console.log("newProduct", newProduct);
      
  //     // Find if the product already exists in the cart
  //     const existingProduct = prevCart.find((product) => product.name === newProduct.name);
  //     const existingProductIndex = prevCart.findIndex((product) => product.name === newProduct.name);

  //     console.log("prevCart", prevCart);
  //     console.log("existingProduct", existingProduct);

  //     if (existingProduct) {
  //       // If product exists, increment quantity
  //       return prevCart.map((product) =>
  //         product.name === newProduct.name
  //           ? { ...product, quantity: product.quantity + 1 }
  //           : product
  //       );
  //     }
      
  //     // If product doesn't exist, add it to the cart with quantity 1
  //     return [...prevCart, { ...newProduct, quantity: 1 }];
  //   });
  // };


  // const incrementQuantity = (productName: string) => {
  //   setQuantity
  // }


  // const addToCart = (newProduct: any) => {
  //   setCart((prevCart) => {
  //     const existingProduct = prevCart.find(
  //       (product) => product.name === newProduct.name
  //     );
  //     if (existingProduct) {
  //       return prevCart.map((product) =>
  //         product.name === newProduct.name
  //           ? { ...product, quantity: product.quantity + 1 }
  //           : product
  //       );
  //     }
  //     return [...prevCart, { ...newProduct, quantity: 1 }];
  //   });
  // };


  
  


  // Increment quantity for a specific product
  // const incrementQuantity = (productName: string) => {
  //   setCart((prevCart) =>
  //     prevCart.map((product) =>
  //       product.name === productName
  //         ? { ...product, quantity: product.quantity + 1 }
  //         : product
  //     )
  //   );
  // };

  // // Decrement quantity for a specific product
  // const decrementQuantity = (productId: string) => {
  //   setCart((prevCart) =>
  //     prevCart.map((product) =>
  //       product.id === productId && product.quantity > 1
  //         ? { ...product, quantity: product.quantity - 1 }
  //         : product
  //     )
  //   );
  // };











  // const addToCart = (newProduct: any) => {
  //   setCart((prevCart: any) => {
  //     // Check if the product already exists in the cart
  //     const existingProductIndex = prevCart.findIndex(
  //       (product) => product.name === newProduct.name
  //     );
  
  //     if (existingProductIndex >= 0) {
  //       // If product exists, increment quantity
  //       const updatedCart = [...prevCart];
  //       updatedCart[existingProductIndex].quantity += 1;
  //       return updatedCart;
  //     }
  
  //     // If product doesn't exist, add it to the cart with quantity 1
  //     return [...prevCart, { ...newProduct, quantity: 1 }];
  //   });
  // };

  const addToCart = (newProduct: any) => {
    setCart((prevCart) => {
      // Check if the product already exists in the cart
      const existingProductIndex = prevCart.findIndex(
        (product) => product.name === newProduct.name
      );
  
      if (existingProductIndex >= 0) {
        // Product exists, update quantity
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        // Product doesn't exist, add to cart with quantity 1
        return [...prevCart, { ...newProduct, quantity: 1 }];
      }
    });
  };


  const addToWishlist = (newProduct: any) => {
    setWishlist((prevWishlist) => [...prevWishlist, newProduct]);
  };
  
  const clearWishlist = () => {
    return setWishlist([]);
  }
  
  
  const incrementQuantity = (productName: string) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.name === productName
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };
  
  const decrementQuantity = (productName: string) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.name === productName && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };
  
  
  const shippingChargesAndTaxes = 10;
  

const subTotal = cart.reduce((acc, item) => {
  return acc + item.quantity * parseFloat(item.discountedPrice);
}, 0);

const totalPrice = cart.reduce((acc, item) => {
  return acc + item.quantity * (parseFloat(item.discountedPrice) + shippingChargesAndTaxes);
}, 0);


const clearCart = () => {
  return setCart([]);
}



  return (
    <AppContext.Provider
      value={{
        // name,
        // setName,
        cart,
        setCart,
        addToCart, // Expose addToCart in context
        incrementQuantity,
        decrementQuantity,
        totalPrice,
        subTotal,
        clearCart,
        addToWishlist,
        wishlist,
        clearWishlist
          }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppWrapper');
  }
  return context;
};





