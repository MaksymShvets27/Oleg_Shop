import { HeaderNavigation, StyledNavigationLink } from "./Navigation.styled";

const pages = [
  { to: "/", title: "Головна" },
  { to: "/category", title: "Категорії" },
  { to: "/search", title: "Пошук" },
  { to: "/Admin", title: "Адмін" },
];

export const Navigation = () => {
  return (
    <HeaderNavigation>
      {pages.map((page, ind) => (
        <StyledNavigationLink key={ind} to={`${page.to}`}>
          {page.title}
        </StyledNavigationLink>
      ))}
    </HeaderNavigation>
  );
};
