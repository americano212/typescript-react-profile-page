import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: #282c34;
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0px;
  z-index: 999;
  color: white;
  text-align: right;
  @media (max-width: 600px) {
    padding-right: 20px;
    height: 8vh;
  }
`;

export const HeaderButtonWrapper = styled.div`
  a {
    color: white;
    font-family: -apple-system;
  }

  a:link {
    color: white;
    text-decoration: none;
  }
  a:visited {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: gray;
    text-decoration: underline;
  }
`;

export const HeaderButtonBox = styled.div`
  margin: 25px;
  margin-right: 50px;
  float: right;
  font-size: 16px;
  @media (max-width: 600px) {
    margin: 2vh;
    margin-right: 20px;
    float: right;
    font-size: 16px;
  }
`;
