import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 46px;
  }
`;

export const TextOnPic = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-100%);

  width: 227px;
  height: 57px;
  background-color: #ffffff;

  p {
    color: #000000;
    font-weight: 700;
    font-size: 15px;
    line-height: 1.1;
    @media screen and (min-width: 1440px) {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 272px;
    height: 67px;
  }
`;
