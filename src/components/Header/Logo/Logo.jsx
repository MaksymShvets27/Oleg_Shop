import { useNavigate } from "react-router-dom";
import { LogoIcon } from "./Logo.styled";

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <LogoIcon
      src={"/public/MS_SHOP_LOGO.jpg"}
      alt="Logo"
      onClick={() => {
        navigate("/");
      }}
    />
  );
};
