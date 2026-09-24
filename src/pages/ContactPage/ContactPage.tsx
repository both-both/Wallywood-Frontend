import { ContentWrapper } from "../../components/elements/ContentWrapper/ContentWrapper";
import { ContactForm } from "../../components/modules/ContactForm/ContactForm";

export const ContactPage = () => {
  return (
    <ContentWrapper title="Kontakt os" description="Skriv til Wallywood">
      <ContactForm />
    </ContentWrapper>
  );
};
