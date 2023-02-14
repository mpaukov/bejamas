import styled from "@emotion/styled";

export const TitleStyle = ({ tag, children }) => {
  const CustomTag = `${tag}`;
  const CustomTagStyle = styled(CustomTag)`
    font-family: "Archivo";
    font-style: normal;
    font-weight: 700;
    font-size: ${() => (tag === "h1" ? "32px" : "22px")};
    line-height: 1.5;
    margin-bottom: 30px;
  `;
  return <CustomTagStyle>{children}</CustomTagStyle>;
};

export const TitleProductsStyle = ({ main, children }) => {
  const CustomTagStyle = styled.h2`
    font-family: "Archivo";
    font-style: normal;
    font-weight: ${() => (main ? 700 : 400)};
    font-size: 18px;
    line-height: 1.1;
  `;
  return <CustomTagStyle>{children}</CustomTagStyle>;
};
