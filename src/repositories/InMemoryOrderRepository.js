export class InMemoryOrderRepository {
  constructor() {
    this.orders = new Map();
  }

  save(orderSummary) {
    this.orders.set(orderSummary.id, orderSummary);
    return orderSummary;
  }

  findById(orderId) {
    return this.orders.get(orderId) ?? null;
  }
}
