import React, { ReactNode } from "react";
import { TitleStyle, TitleProductsStyle } from "./Title.styled";

type Props = {
  children: ReactNode;
  tag?: string;
};

export const Title: React.FC<Props> = ({ tag = "h2", children }) => {
  return <TitleStyle tag={tag}>{children}</TitleStyle>;
};

type PropsProducts = {
  children: ReactNode;
  main?: boolean;
};

export const TitleProducts: React.FC<PropsProducts> = ({ main, children }) => {
  return <TitleProductsStyle main={main}>{children}</TitleProductsStyle>;
};
