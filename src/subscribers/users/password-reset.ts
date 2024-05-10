import { 
  type SubscriberConfig, 
  type SubscriberArgs,
  UserService
} from "@medusajs/medusa"
import { Resend } from "resend"
// @ts-ignore

const resendKey = process.env.RESEND_API_ID

const resend = new Resend(resendKey)

export default async function handlePasswordReset({
  data, eventName, container, pluginOptions,
}: SubscriberArgs<Record<string, string>>) {
  // TODO: handle event
  console.log('###User invited!###')
  const userService: UserService = container.resolve("userService")
  const user = await userService.retrieve(data.id)
  console.log('data', data)
  console.log('user', user)

  
  // const email = await resend.emails.send({
  //   to: order.email,
  //   from: 'info@cleaningwebsitetemplates.com',
  //   subject: 'New order!',
  //   react: OrderConfirmation({ order }),
  // })
  // if (email.error) {
  //   console.error('Error sending email', email.error)
  // }
}

export const config: SubscriberConfig = {
  event: UserService.Events.PASSWORD_RESET,
  context: {
    subscriberId: "user-password-reset-handler",
  },
}