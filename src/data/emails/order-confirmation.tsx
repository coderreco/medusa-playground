import { Order } from "@medusajs/medusa";
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

const baseUrl = process.env.VERCEL_URL
  ? process.env.VERCEL_URL
  : "https://usechoose.com";

let logo = process.env.LOGO_BASE_STRING


export const OrderConfirmation = ({order}:{order: Order}) => {
  return (
  <Html>
      <Head />
      <Preview>Thank you for your purchase, the next step is to send your interact e-transfer to info@Fungal Friend-labs.com.</Preview>

    <Body style={main}>
      <Container style={container}>
        <Section>
          <Row>
            <Column align="center">
              <Img
                src="https://asset.cloudinary.com/dbf42p0x2/be119af6c7f860a25d7ed1a31f3f7e7a"
                width="88"
                height="88"
                alt="Fungal Friend Logo"
              />
            </Column>
          </Row>
        </Section>
        <Section>
          <Text style={{...ctaText, marginTop: "48px", marginBottom: "48px", textAlign: "center"}}>
            Your order has been placed!
            </Text>
            <Row>
              <Column style={{
                paddingBottom: "24px",
                width: "100%",
                textAlign: "center",
              }}>
                {order.id && <Button href={`${baseUrl}/order/details/${order.id}`} style={{ backgroundColor: "rgb(171, 154, 255)", color: "rgb(255,255,255)", padding: "12px 24px", borderRadius: "4px", textDecoration: "none", fontSize: "12px", fontWeight: "600" }}>View Order</Button>}
              </Column>
            </Row>
          </Section>
        <Section>
          <Text>
              Thank you for your purchase, the next step is to send your interact e-transfer to info@Fungal Friend-labs.com.
          </Text>
          <Text>
              The total amount due is <strong>{ new Intl.NumberFormat('en-CA', {style: "currency", currency: "CAD"}).format(order.total / 100) }</strong>.
          </Text>
          <Text>
            Security question is to be "<strong>Favorite place?</strong>" and the answer is to be "<strong>Canada.</strong>" Please include your order number OR name in the message section.
          </Text>
          <Text>
            Orders are shipped Monday through Thursday. This is to reduce the chance of your products sitting in a Canada Post warehouse over the weekend.
          </Text>
        </Section>
        <Hr style={productPriceLine} />
        <Section align="right">
          <Row>
            <Column align="right">
              <Text style={productPriceTotal}>TOTAL</Text>
            </Column>
            <Column style={productPriceVerticalLine}></Column>
            <Column style={productPriceLargeWrapper}>
              <Text style={productPriceLarge}>{ new Intl.NumberFormat('en-CA', {style: "currency", currency: "CAD"}).format(order.total / 100) }</Text>
            </Column>
          </Row>
        </Section>
     <Hr style={productPriceLineBottom} />
        <Section style={{textAlign: "center"}}>
          <Text>
              Post and tag our products on social media to be entered to win a $200 value prize pack!
            </Text>
          <Text>
              100% satisfaction guaranteed. Unsatisfied? Money back within 30 days.<br />We trust you'll love our products!
          </Text>
        </Section>
        <Section>
          <Row>
            <Column align="center" style={block}>
              <Img
                src="https://asset.cloudinary.com/dbf42p0x2/be119af6c7f860a25d7ed1a31f3f7e7a"
                width="42"
                height="42"
                alt="Fungal Friend Logo"
              />
            </Column>
          </Row>
        </Section>
        <Section>
          <Row>
            <Column align="center" style={ctaTitle}>
              <Text style={ctaText}>A new perspective<br/>on natural wellness.</Text>
            </Column>
          </Row>
        </Section>
        <Hr style={walletBottomLine} />
        <Text style={footerLinksWrapper}>
            <Link href={`${baseUrl}/account` }>
            Account Settings
          </Link>{" "}
          •{" "}
          <Link href={`${baseUrl}/terms` }>
            Terms of Sale
          </Link>{" "}
          •{" "}
          <Link href={`${baseUrl}/privacy` }>
            Privacy Policy{" "}
          </Link>
        </Text>
        <Text style={footerCopyright}>
          Copyright © { new Date().getFullYear()} Fungal Friend <br />{" "}
          <Text style={footerCopyright}>All rights reserved</Text>
        </Text>
      </Container>
    </Body>
  </Html>
)};

export default OrderConfirmation;


const productPriceTotal = {
  margin: "0",
  color: "rgb(102,102,102)",
  fontSize: "10px",
  fontWeight: "600",
  padding: "0px 30px 0px 0px",
  textAlign: "right" as const,
};

const productPriceLarge = {
  margin: "0px 20px 0px 0px",
  fontSize: "16px",
  fontWeight: "600",
  whiteSpace: "nowrap" as const,
  textAlign: "right" as const,
};

const productPriceLine = { margin: "30px 0 0 0" };

const productPriceVerticalLine = {
  height: "48px",
  borderLeft: "1px solid",
  borderColor: "rgb(238,238,238)",
};

        const productPriceLargeWrapper = {display: "table-cell", width: "90px" };
const main = {
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "660px",
  maxWidth: "100%",
};

const productPriceLineBottom = { margin: "0 0 75px 0" };

const block = { display: "block" };

const ctaTitle = {
  display: "block",
  margin: "15px 0 0 0",
};

const ctaText = { fontSize: "24px", fontWeight: "500", lineHeight: "1.4"};

const walletBottomLine = { margin: "65px 0 20px 0" };


const footerLinksWrapper = {
  margin: "8px 0 0 0",
  textAlign: "center" as const,
  fontSize: "12px",
  color: "rgb(102,102,102)",
};

const footerCopyright = {
  margin: "25px 0 0 0",
  textAlign: "center" as const,
  fontSize: "12px",
  color: "rgb(102,102,102)",
};