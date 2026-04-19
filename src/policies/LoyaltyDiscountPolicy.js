export class LoyaltyDiscountPolicy {
  getDiscountRate(loyaltyTier) {
    const rates = {
      bronze: 0.02,
      silver: 0.05,
      gold: 0.1
    };

    return rates[loyaltyTier] ?? 0;
  }
}
