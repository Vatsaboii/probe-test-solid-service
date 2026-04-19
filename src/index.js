import { Order } from "./domain/Order.js";
import { LoyaltyDiscountPolicy } from "./policies/LoyaltyDiscountPolicy.js";
import { InMemoryOrderRepository } from "./repositories/InMemoryOrderRepository.js";
import { ConsoleNotifier } from "./services/ConsoleNotifier.js";
import { CheckoutService } from "./services/CheckoutService.js";

const checkoutService = new CheckoutService({
  discountPolicy: new LoyaltyDiscountPolicy(),
  orderRepository: new InMemoryOrderRepository(),
  notifier: new ConsoleNotifier()
});

const summary = checkoutService.checkout(
  new Order({
    id: "ord_1001",
    customerEmail: "customer@example.com",
    subtotal: 250,
    loyaltyTier: "silver"
  })
);

console.log("Order processed:", summary);
