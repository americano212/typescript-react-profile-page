import { logoData } from "../assets/static/logo.data";
import Logo from "../components/logo/logo";
import { ContactsWrapper, LogoBox } from "../styles/contacts";

export default function ContactsPage() {
  return (
    <ContactsWrapper>
      <LogoBox>
        {logoData.map((logo, index) => (
          <Logo
            key={index}
            name={logo.name}
            filePath={logo.filePath}
            link={logo.link}
            backgroundColor={logo.backgroundColor}
            handle={logo.handle}
            imageSize={logo.imageSize}
            paddingTop={logo.paddingTop}
          />
        ))}
      </LogoBox>
    </ContactsWrapper>
  );
}
