import { useEffect, useState } from "react";
import {
  OrderCardImg,
  OrderListItem,
  OrderListStyled,
  OrderOperationList,
  StyledGrOrderCheck,
  StyledGrOrderDelete,
  StyledGrOrderSend,
} from "./OrdersList.styled";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase/config";
import { HistoryCardImg } from "../../components/Header/UserModal/UserModal.styled";

export const OrdersList = () => {
  const [orders, setOrders] = useState([]);

  const getAllOrders = () => {
    onSnapshot(collection(db, "orders"), (data) => {
      setOrders(
        data.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .sort((a, b) => (a.postDate.seconds > b.postDate.seconds ? -1 : 1))
      );
    });
  };

  const deleteOrder = async (id) => {
    await deleteDoc(doc(db, "orders", `${id}`));
  };

  const takeOrder = async (id) => {
    await updateDoc(doc(db, "orders", `${id}`), { status: "take" });
  };

  const sendOrder = async (id) => {
    await updateDoc(doc(db, "orders", `${id}`), { status: "send" });
  };

  useEffect(() => {
    getAllOrders();
  });

  return (
    <OrderListStyled>
      {orders.map((order) => {
        return (
          <OrderListItem
            style={
              order.status === "take"
                ? {
                    backgroundColor: "yellow",
                  }
                : order.status === "send"
                ? {
                    backgroundColor: "green",
                  }
                : {}
            }
          >
            <p>
              Статус: {order.status === "create" && "Нове"}{" "}
              {order.status === "take" && "Прийняте"}
              {order.status === "send" && "Відправлене"}
            </p>
            <p>
              Дата замовлення:{" "}
              {new Intl.DateTimeFormat("en-US").format(order.postDate.seconds)}
            </p>
            <p>ФІП: {order.userFullName}</p>
            <p>Email: {order.userEmail}</p>
            <p>Номер телефону:{order.userNumber}</p>
            <p>Адрес Нової почти: {order.userPostAdress}</p>
            <p>Список замовлення:</p>
            {order.cashList.map((item) => {
              return (
                <>
                  <OrderCardImg
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  />
                  <p>Id товару: {item.id}</p>
                  <p>Назва: {item.name}</p>
                  <p>Ціна: {item.price}</p>
                </>
              );
            })}
            <OrderOperationList>
              <StyledGrOrderDelete onClick={() => deleteOrder(order.id)} />
              <StyledGrOrderCheck onClick={() => takeOrder(order.id)} />
              <StyledGrOrderSend onClick={() => sendOrder(order.id)} />
            </OrderOperationList>
          </OrderListItem>
        );
      })}
    </OrderListStyled>
  );
};
