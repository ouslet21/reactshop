// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";

// const Footer = () => {
//   return (
//     <footer>
//       <Container>
//         <Row>
//           <Col className="text-center py-3">Copyright &copy; MernShop</Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { Container } from "react-bootstrap";
import "../footer.css";

const Footer = () => {
  return (
    <Container>
      <footer className="footer-container">
        <div className="footer-icons">


        </div>
        <div className="footer-copyright">&copy; M-Ouesleti</div>
      </footer>
    </Container>
  );
};

export default Footer;
