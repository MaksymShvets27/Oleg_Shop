import { useEffect, useState } from "react";
import { OrderListItem, OrderListStyled } from "./OrdersList.styled";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase/config";

export const OrdersList = () => {
  const [orders, setOrders] = useState([]);

  const getAllOrders = () => {
    onSnapshot(collection(db, "orders"), (data) => {
      setOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    setOrders(orders?.sort((a, b) => (a.postDate > b.postDate ? -1 : 1)));
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <OrderListStyled>
      {orders.map((order) => {
        return (
          <OrderListItem>
            <p>Дата замовлення: {order.postDate.seconds}</p>
            <p>ФІП: {order.userFullName}</p>
            <p>Email: {order.userEmail}</p>
            <p>Номер телефону:{order.userNumber}</p>
            <p>Адрес Нової почти: {order.userPostAdress}</p>
            <p>Статус: {order.status}</p>
            <p>Список замовлення:</p>
            {order.cashList.map((item) => {
              return (
                <>
                  <p>Id товару: {item.id}</p>
                  <p>Назва{item.name}</p>
                  <p>Ціна{item.price}</p>
                </>
              );
            })}
          </OrderListItem>
        );
      })}
    </OrderListStyled>
  );
};
