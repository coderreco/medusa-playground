import { 
  type SubscriberConfig, 
  type SubscriberArgs,
  OrderService,
} from "@medusajs/medusa"
import { Resend } from "resend"
// @ts-ignore
import OrderShipped from "../../data/emails/order-shipped"

const resendKey = process.env.RESEND_API_ID

const resend = new Resend(resendKey)

export default async function handleOrderShipped({
  data, eventName, container, pluginOptions,
}: SubscriberArgs<Record<string, string>>) {
  // TODO: handle event
  const orderService: OrderService = container.resolve("orderService")
  const order = await orderService.retrieveWithTotals(data.id, {
    relations: ["fulfillments", "fulfillments.tracking_links"]
  })
  console.log(order)

  
  const email = await resend.emails.send({
    to: order.email,
    from: 'Fungal Friend Shipping <info@cleaningwebsitetemplates.com>',
    subject: 'Your order has been shipped!',
    react: OrderShipped({order}),
  })
  if (email.error) {
    console.error('Error sending email', email.error)
  }
}

export const config: SubscriberConfig = {
  event: OrderService.Events.SHIPMENT_CREATED,
  context: {
    subscriberId: "order-shipment-created-handler",
  },
}