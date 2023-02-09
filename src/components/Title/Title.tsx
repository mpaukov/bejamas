import React from "react";
import { Text } from "./Title.styled";

type Props = {
  children: string | string[];
};

const TitleMinor: React.FC<Props> = ({ children }) => {
  return <Text>{children}</Text>;
};

export default TitleMinor;
