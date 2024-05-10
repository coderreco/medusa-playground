import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

const baseUrl = process.env.VERCEL_URL
  ? process.env.VERCEL_URL
  : "https://usechoose.com";

let logo = process.env.LOGO_BASE_STRING

export const WelcomeCustomerEmail = ({customer}) => (
  <Html>
    <Head />
    <Preview>Thanks for creating an account with Fungal Friend!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src="https://asset.cloudinary.com/dbf42p0x2/be119af6c7f860a25d7ed1a31f3f7e7a"
            width="48"
            height="48"
            alt="Fungal Friend"
          />
          <Row><Heading as="h1">{customer?.first_name && customer?.first_name} { customer?.last_name && customer?.last_name }</Heading></Row>
          <Hr style={hr} />
          <Text style={paragraph}>
            Thanks for creating an account with Fungal Friend!
          </Text>
          <Text style={paragraph}>
            You can view your order history and a variety of other information about your account right from your dashboard.
          </Text>
          <Button style={button} href={`${baseUrl}/account`}>
            View your account dashboard
          </Button>
          <Hr style={hr} />
        </Section>
      </Container>
    </Body>
  </Html>
);

export default WelcomeCustomerEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#556cd6",
};

const button = {
  backgroundColor: "#AB9AFF",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "10px",
};