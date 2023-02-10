import { ReactNode } from "react";
import { SectionStyle } from "./Section.styled.jsx";

type Props = {
  children: ReactNode;
};

const Section: React.FC<Props> = ({ children }) => {
  return <SectionStyle>{children}</SectionStyle>;
};

export default Section;
