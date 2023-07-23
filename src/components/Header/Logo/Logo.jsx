import { useNavigate } from "react-router-dom";
import { LogoIcon } from "./Logo.styled";

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <LogoIcon
      src={"/src/components/Header/Logo/MS_SHOP_LOGO.jpg"}
      alt="Logo"
      onClick={() => {
        navigate("/");
      }}
    />
  );
};
