export class Order {
  constructor({ id, customerEmail, subtotal, loyaltyTier }) {
    this.id = id;
    this.customerEmail = customerEmail;
    this.subtotal = subtotal;
    this.loyaltyTier = loyaltyTier;
  }
}
