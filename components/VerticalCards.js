import styled from "styled-components";

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 93.75%;
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 64px;

  ${({ theme }) => theme.media.desktop`
    flex-wrap: wrap;
  `}
`;

const Card = styled.div`
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  width: 24%;
  margin-left: 8px;
  margin-right: 8px;
  box-sizing: border-box;
  height: 380px;
  padding: 36px 0;

  ${({ theme }) => theme.media.desktop`
    width: 48%;
    margin-left: 4px;
    margin-right: 4px;
    margin-bottom: 12px;
  `}

  ${({ theme }) => theme.media.mobile` 
    width: 100%;
  `}

  img {
    display: block;
    max-width: 100%;
    height: 148px;
    margin-left: auto;
    margin-right: auto;
  }

  h3 {
    font-weight: 700;
    font-size: 22px;
    text-align: center;
    margin-top: 35px;
    text-transform: uppercase;
    color: ${({ color }) => color};
  }

  p {
    font-size: 14px;
    color: #757575;
    text-align: center;
    margin-top: 16px;
    padding-left: 18px;
    padding-right: 18px;
    padding-bottom: 18px;
    line-height: 20px;
  }
`;

export { Cards, Card };
