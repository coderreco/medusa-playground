import { Order } from "@medusajs/medusa";
import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Button,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? process.env.VERCEL_URL
  : "https://usechoose.com";

let logo = process.env.LOGO_BASE_STRING


export const PaymentCaptured = ({ order}:{ order: Order}) => {
  
  return (
  <Html>
      <Head />
      <Preview>This order is 50% complete. Your payment has been captured.</Preview>

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
            We have received your payment.
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
          {/* Insert children here */}
        <Section>
        <Text style={{textAlign: "center"}}>
          This order is 50% complete. Your payment has been captured. Next we will ship your parcel to the address given and provide you with a tracking number.
        </Text>
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

export default PaymentCaptured;

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