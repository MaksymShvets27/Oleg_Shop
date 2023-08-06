import {
  ModalUserAlert,
  UserModalBtn,
  UserModalForm,
  UserModalInput,
  UserModalTitle,
} from "./UserModal.styled";

export const UserInfo = () => {
  return (
    <UserModalForm id="userFormConfig">
      <UserModalTitle>Контактні дані</UserModalTitle>
      <UserModalInput
        required
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Введіть ФІБ"
      />
      <UserModalInput
        required
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Введіть контактну електронну адресу"
      />
      <UserModalInput
        required
        name="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Введіть пароль"
      />
      <UserModalInput
        required
        name="passwordDublicate"
        value={passwordDublicate}
        onChange={(e) => {
          setPasswordDublicate(e.target.value);
        }}
        placeholder="Повторіть пароль"
      />
      <UserModalInput
        value={userNumber}
        onChange={(e) => {
          setUserNumber(e.target.value);
        }}
        placeholder="Введіть контактний номер телефону"
      />
      <UserModalInput
        value={userPostAdress}
        onChange={(e) => {
          setUserPostAdress(e.target.value);
        }}
        placeholder="Введіть адресу відділення пошти"
      />
      <ModalUserAlert>
        Попередження, відправка куплених товарів відбувається виключно мережею
        відділень "Нова пошта", оплатою при отриманні !!!
      </ModalUserAlert>
      <UserModalBtn style={badPassword ? { backgroundColor: "red" } : {}}>
        {badPassword ? "Невірний пароль або e-mail" : "Змінити дані"}
      </UserModalBtn>
      <UserModalBtn onClick={LogOut}>Вийти з аккаунта</UserModalBtn>
    </UserModalForm>
  );
};
