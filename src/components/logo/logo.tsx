import { LogoIcon, LogoName, LogoWrapper } from "../../styles/logo";
import { LogoProps } from "./logo.interface";

export default function Logo(props: LogoProps) {
  return (
    <LogoWrapper>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <LogoIcon backgroundColor={props.backgroundColor} paddingTop={props.paddingTop}>
          <img src={props.filePath} alt={props.name} width={props.imageSize || 50} height="auto" />
        </LogoIcon>
        <LogoName>
          {props.name} <br /> {props.handle}
        </LogoName>
      </a>
    </LogoWrapper>
  );
}
