import { 
  type SubscriberConfig, 
  type SubscriberArgs,
  OrderService,
} from "@medusajs/medusa"
import { Resend } from "resend"
import OrderCompleted from "../../data/emails/order-completed"

const resendKey = process.env.RESEND_API_ID

const resend = new Resend(resendKey)

export default async function handleOrderCompleted({
  data, eventName, container, pluginOptions,
}: SubscriberArgs<Record<string, string>>) {
  // TODO: handle event
  console.log('###Order completed!!###')
  const orderService: OrderService = container.resolve("orderService")
  const order = await orderService.retrieveWithTotals(data.id, {
    relations: ["customer",]
  })
  console.log(order)

  
  const email = await resend.emails.send({
    to: order.email,
    from: 'Fungal Friend Orders <info@cleaningwebsitetemplates.com>',
    subject: 'Fungal Friend says thank you!',
    react: OrderCompleted(),
  })
  if (email.error) {
    console.error('Error sending email', email.error)
  }
}

export const config: SubscriberConfig = {
  event: OrderService.Events.COMPLETED,
  context: {
    subscriberId: "order-completed-handler",
  },
}