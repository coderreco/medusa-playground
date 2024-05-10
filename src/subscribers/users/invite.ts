import { 
  type SubscriberConfig, 
  type SubscriberArgs
} from "@medusajs/medusa"
import InviteService from "@medusajs/medusa/dist/services/invite"
import { Resend } from "resend"
// @ts-ignore
import InviteUserEmail from "../../data/emails/invite-user"

const resendKey = process.env.RESEND_API_ID

const resend = new Resend(resendKey)

export default async function handleInviteCreated({
  data, eventName, container, pluginOptions,
}: SubscriberArgs<Record<string, string>>) {
  
  const email = await resend.emails.send({
    to: data.user_email,
    from: 'Fungal Friend Team <info@cleaningwebsitetemplates.com>',
    subject: 'You have been invited to Fungal Friend Team!',
    react: InviteUserEmail({ user_email: data.user_email, token: data.token}),
  })
  if (email.error) {
    console.error('Error sending email', email.error)
  }
}

export const config: SubscriberConfig = {
  event: InviteService.Events.CREATED,
  context: {
    subscriberId: "user-invited-handler",
  },
}