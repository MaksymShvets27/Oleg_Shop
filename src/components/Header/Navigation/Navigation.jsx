import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/selectors";
import { HeaderNavigation, StyledNavigationLink } from "./Navigation.styled";

const pages = [
  { to: "/", title: "Головна" },
  { to: "/category", title: "Категорії" },
  { to: "/search", title: "Пошук" },
];

export const Navigation = () => {
  const user = useSelector(selectUser);

  return (
    <HeaderNavigation>
      {pages.map((page, ind) => (
        <StyledNavigationLink key={ind} to={`${page.to}`}>
          {page.title}
        </StyledNavigationLink>
      ))}
      {user.role === "admin" && (
        <StyledNavigationLink key="admin" to={`/Admin`}>
          Адмін
        </StyledNavigationLink>
      )}
    </HeaderNavigation>
  );
};
