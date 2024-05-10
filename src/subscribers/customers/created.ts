import { 
  type SubscriberConfig, 
  type SubscriberArgs,
  CustomerService
} from "@medusajs/medusa"
import { Resend } from "resend"
import WelcomeCustomerEmail from "../../data/emails/welcome-customer"
// @ts-ignore

const resendKey = process.env.RESEND_API_ID

const resend = new Resend(resendKey)

export default async function handlePasswordReset({
  data, eventName, container, pluginOptions,
}: SubscriberArgs<Record<string, string>>) {
  // TODO: handle event

  const customerService: CustomerService = container.resolve("customerService")
  const customer = await customerService.retrieve(data.id)
  console.log('data', data)
  console.log('customer', customer)

  
  const email = await resend.emails.send({
    to: customer.email,
    from: 'Fungal Friend Team <info@cleaningwebsitetemplates.com>',
    subject: "You've created a Fungal Friend profile, find out more here.",
    react: WelcomeCustomerEmail({ customer }),
  })
  if (email.error) {
    console.error('Error sending email', email.error)
  }
}

export const config: SubscriberConfig = {
  event: CustomerService.Events.CREATED,
  context: {
    subscriberId: "customer-created-handler",
  },
}