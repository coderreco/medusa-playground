import { Invite } from "@medusajs/medusa";
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

let logo = process.env.LOGO_BASE_STRING

export const InviteUserEmail = ({
  user_email,
  token
}: {user_email: string, token: string}) => {
  const previewText = `Manage products, fulfill orders, and more with Fungal Friend.`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Row>
                <Column align="center">
                  <Img
                    src="https://asset.cloudinary.com/dbf42p0x2/be119af6c7f860a25d7ed1a31f3f7e7a"
                    width="64"
                    height="64"
                  />
                </Column>
              </Row>
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Join the <strong>Fungal Friend</strong> team.
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello {user_email},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              You have been invited to the <strong>Fungal Friend</strong> team.
            </Text>
            <Section>

            </Section>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#AB9AFF] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={`https://dashboard.usechoose.com/app/invite?token=${token}`}
              >
                Join the team
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              or copy and paste this URL into your browser:{" "}
              <Link href={`https://dashboard.usechoose.com/app/invite?token=${token}`} className="text-blue-600 no-underline">
                {`dashboard.usechoose.com/app/invite?token=${token}`}
              </Link>
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This invitation was intended for{" "}
              <span className="text-black">{user_email}</span>. If you
              were not expecting this invitation, you can ignore this email. If
              you are concerned about your account's safety, please forward this email to
              admin@usechoose.com to get in touch with us.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default InviteUserEmail;
