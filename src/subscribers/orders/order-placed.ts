import { 
  type SubscriberConfig, 
  type SubscriberArgs,
  OrderService,
} from "@medusajs/medusa"
import { Resend } from "resend"
// @ts-ignore
import OrderConfirmation from "../../data/emails/order-confirmation"

const resendKey = process.env.RESEND_API_ID

const resend = new Resend(resendKey)

export default async function handleOrderPlaced({
  data, eventName, container, pluginOptions,
}: SubscriberArgs<Record<string, string>>) {
  // TODO: handle event
  console.log('Order placed!')
  const orderService: OrderService = container.resolve("orderService")
  const order = await orderService.retrieveWithTotals(data.id, {
    relations: ["shipping_address", "customer"]
  })

  
  const email = await resend.emails.send({
    to: order.email,
    from: 'Fungal Friend Orders <info@cleaningwebsitetemplates.com>',
    subject: 'Fungal Friend Order Confirmation and Payment Details, find out more here',
    cc: 'info@cleaningwebsitetemplates.com',
    react: OrderConfirmation({ order }),
  })
  if (email.error) {
    console.error('Error sending email', email.error)
  }
}

export const config: SubscriberConfig = {
  event: OrderService.Events.PLACED,
  context: {
    subscriberId: "order-placed-handler",
  },
}