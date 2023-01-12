import styled from "@emotion/styled";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 32px auto;
  width: 100%;
  height: 92px;
  border-bottom: 4px solid #e4e4e4;

  @media screen and (min-width: 1440px) {
    width: 1281px;
    height: 124px;
    margin-bottom: 132px;
  }
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 33px;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    padding: 20px 0;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 33px;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    padding: 20px 0;
  }
`;
