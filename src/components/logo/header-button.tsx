import { HeaderButtonBox, HeaderButtonWrapper } from "../../styles/header";
import { HeaderButtonProps } from "../../types/header-button.interface";

export default function HeaderButton(props: HeaderButtonProps) {
  return (
    <HeaderButtonWrapper>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <HeaderButtonBox>{props.children}</HeaderButtonBox>
      </a>
    </HeaderButtonWrapper>
  );
}
