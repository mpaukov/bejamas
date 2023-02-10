import { ReactNode } from "react";
import { LinkStyle } from "./Link.styled.jsx";

type Props = {
  children: ReactNode;
};

const Link: React.FC<Props> = ({ children }) => {
  return <LinkStyle>{children}</LinkStyle>;
};

export default Link;
