import styled from "styled-components";
import { mediaQueries } from "styles";

export const FooterStyle = styled.footer`
  margin-top: 50px;
  z-index: 50;
  display: flex;
  flex-flow: column;
  align-items: center;
  & > img {
    z-index: 50;
    cursor: pointer;
    margin-bottom: 20px;
    &:hover {
      transition: 0.3s ease all;
      filter: drop-shadow(0 2px 5px rgba(86, 227, 159, 0.8));
    }
  }
  & > h3 {
    z-index: 50;
    color: #155f60;
  }
  ${mediaQueries.desktop} {
    margin-top: 450px;
    & > img {
      margin-bottom: 50px;
    }
  }
`;

export const FooterLinks = styled.div`
  z-index: 50;
  & > a {
    text-decoration: none;
    margin-right: 20px;
    z-index: 50;
    font-size: 1.5rem;
    color: #fff;
    transition: 0.3s ease all;
    &:hover {
      z-index: 50;
      transition: 0.3s ease all;
      filter: drop-shadow(0 2px 5px rgba(86, 227, 159, 0.8));
    }
  }
`;
