import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderNavigation = styled.nav`
  display: flex;
  gap: 15px;
`;

export const StyledNavigationLink = styled(NavLink)`
  color: black;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;

  padding: 10px 10px;
  border: 2px solid black;
  border-radius: 20px 10px;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  &.active {
    color: green;
    border-color: green;
  }

  &:hover {
    color: green;
    border-color: green;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    font-size: 38px;
    padding: 15px 15px;
  }
`;
