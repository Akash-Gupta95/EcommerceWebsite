import { useState, useContext, createContext, useEffect } from "react";

const orderContext = createContext();
const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  //   useEffect(() => {
  //     let existingCartItem = localStorage.getItem("order");
  //     if (existingCartItem) setOrder(JSON.parse(existingCartItem));
  //   }, []);

  return (
    <orderContext.Provider value={[order, setOrder]}>
      {children}
    </orderContext.Provider>
  );
};

// custom hook
const useOrder = () => useContext(orderContext);

export { useOrder, OrderProvider };
