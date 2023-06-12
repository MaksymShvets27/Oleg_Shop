import { HeaderNavigation, StyledNavigationLink } from "./Navigation.styled";

const pages = [
  { to: "/", title: "Home" },
  { to: "/category", title: "Category" },
  { to: "/search", title: "Search" },
  { to: "/Admin", title: "Admin" },
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
