import { useLocation } from "react-router-dom";

export const SearchPage = () => {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  return <>SearchPage</>;
};
