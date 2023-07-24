import { useNavigate } from "react-router-dom";
import { LogoIcon } from "./Logo.styled";

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <LogoIcon
      onClick={() => {
        navigate("/");
      }}
    />
  );
};
