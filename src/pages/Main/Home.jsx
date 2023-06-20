import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGoods } from "../../redux/selectors";
import { getGoodsList } from "../../redux/goods.thunk";
import {
  GoodsListItemInfoStyled,
  GoodsListItemStyled,
  GoodsListStyled,
} from "./Main.styed";

export const MainPage = () => {
  const dispatch = useDispatch();
  const goods = useSelector(selectGoods);
  useEffect(() => {
    dispatch(getGoodsList());
  }, [dispatch]);
  return (
    <>
      <GoodsListStyled>
        {goods.length > 0 &&
          goods.map((item, index) => {
            return (
              <GoodsListItemStyled key={index}>
                <img
                  src={`${item.image}`}
                  width="300px"
                  height="300px"
                  alt={`${item.name}`}
                />
                <GoodsListItemInfoStyled>
                  <p>{item.name}</p>
                  <p>{item.price} грн.</p>
                </GoodsListItemInfoStyled>
              </GoodsListItemStyled>
            );
          })}
      </GoodsListStyled>
    </>
  );
};
