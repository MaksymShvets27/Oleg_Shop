import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import {
  CashCardImg,
  CashCardInfo,
  CashCardPrice,
  CashCardTitle,
  CashCardTrashButton,
  CashListItemStyled,
  CashListSendButton,
  CashListStyled,
  CheckListTitle,
  StyledGrFormDelete,
} from "./CashList.styled";
import { cashListRemoveGood } from "../../redux/cashList.thunk";
import { useNavigate } from "react-router-dom";

export const CashListPage = () => {
  const { cashList } = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  return (
    <CashListStyled>
      <CheckListTitle>Список товарів</CheckListTitle>
      {cashList.length > 0 ? (
        <>
          {cashList.map((card, index) => {
            return (
              <CashListItemStyled>
                <CashCardImg
                  style={{
                    backgroundImage: `url(${card.image})`,
                  }}
                />
                <CashCardInfo>
                  <CashCardTitle>{card.name}</CashCardTitle>
                  <CashCardPrice>{card.price} грн.</CashCardPrice>
                </CashCardInfo>
                <CashCardTrashButton
                  onClick={() => dispatch(cashListRemoveGood(index))}
                >
                  <StyledGrFormDelete />
                </CashCardTrashButton>
              </CashListItemStyled>
            );
          })}
          <CashListSendButton onClick={() => navigation("/checkout")}>
            Перейти до оформлення відправки
          </CashListSendButton>
        </>
      ) : (
        "Корзина пуста"
      )}
    </CashListStyled>
  );
};
