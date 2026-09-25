import { Container } from "../../elements/Container/Container";
import { FooterStyled } from "./Footer.styled";
import {
  FaPinterest,
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <FooterStyled>
      <Container className="footer-content">
        <Container className="contact-info-container">
          <Container>
            <h3>Wallywood</h3>
            <p> Øster Uttrupvej 1</p>
            <p>9000 Aalborg</p>
          </Container>
          <Container>
            <p>CVR: 12345678</p>
            <p>Mail: info@wallywood.dk</p>
            <p>Mobil: +45 9812 3456</p>
          </Container>
        </Container>

        <Container className="soMe-container">
          <a href="https://pinterest.com" aria-label="Wallywood på Pinterest">
            <FaPinterest />
          </a>
          <a href="https://instagram.com" aria-label="Wallywood på Instagram">
            <FaInstagramSquare />
          </a>
          <a href="https://facebook.com" aria-label="Wallywood på Facebook">
            <FaFacebookSquare />
          </a>
          <a href="https://twitter.com" aria-label="Wallywood på Twitter">
            <FaTwitterSquare />
          </a>
        </Container>
      </Container>
    </FooterStyled>
  );
};
