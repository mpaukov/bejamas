import styled from "@emotion/styled";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 32px auto;
  width: 100%;
  max-width: 414px;
  min-height: 92px;
  border-bottom: 4px solid #e4e4e4;

  @media screen and (min-width: 1440px) {
    width: 1281px;
    height: 124px;
    margin-bottom: 132px;
  }
`;
