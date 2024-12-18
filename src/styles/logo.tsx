import styled from "styled-components";
import { LogoIconProps } from "../types/logo.interface";

export const LogoWrapper = styled.div`
  display: inline-block;
  margin: 2%;
  margin-bottom: 0;
  width: 100px;
`;

export const LogoIcon = styled.div<LogoIconProps>`
  border-radius: 30px;
  text-align: center;
  padding: ${(props) => props.paddingTop || "22px"};
  margin-bottom: 20px;
  background: ${(props) => props.backgroundColor || "black"};
  box-shadow: 10px 10px 10px gray;
`;

export const LogoName = styled.p`
  @media (max-width: 600px) {
    display: none;
  }
`;
