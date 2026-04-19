export class CheckoutService {
  constructor({ discountPolicy, orderRepository, notifier }) {
    this.discountPolicy = discountPolicy;
    this.orderRepository = orderRepository;
    this.notifier = notifier;
  }

  checkout(order) {
    const discountRate = this.discountPolicy.getDiscountRate(order.loyaltyTier);
    const total = Number((order.subtotal * (1 - discountRate)).toFixed(2));

    const summary = {
      id: order.id,
      customerEmail: order.customerEmail,
      subtotal: order.subtotal,
      total,
      discountRate
    };

    this.orderRepository.save(summary);
    this.notifier.sendOrderConfirmation(
      order.customerEmail,
      `Your order total is $${summary.total}.`
    );

    return summary;
  }
}
