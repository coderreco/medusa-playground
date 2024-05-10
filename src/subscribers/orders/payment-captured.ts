import { 
  type SubscriberConfig, 
  type SubscriberArgs,
  OrderService,
} from "@medusajs/medusa"
// @ts-ignore
import PaymentCaptured from "../../data/emails/payment-captured"
import { Resend } from "resend"

const resendKey = process.env.RESEND_API_ID

const resend = new Resend(resendKey)

export default async function handlePaymentCaptured({
  data, eventName, container, pluginOptions,
}: SubscriberArgs<Record<string, string>>) {
  // TODO: handle event
  console.log('Payment Captured!')
  const orderService: OrderService = container.resolve("orderService")
  const order = await orderService.retrieveWithTotals(data.id)

  // Send email
  const email = await resend.emails.send({
    to: order.email,
    from: 'Fungal Friend Payments <info@cleaningwebsitetemplates.com>',
    subject: 'Payment Captured!',
    react: PaymentCaptured({order}),
  })
  if (email.error) {
    console.error('Error sending email', email.error)
  }
}

export const config: SubscriberConfig = {
  event: OrderService.Events.PAYMENT_CAPTURED,
  context: {
    subscriberId: "order-payment-captured-handler",
  },
}