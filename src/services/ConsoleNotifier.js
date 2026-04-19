export class ConsoleNotifier {
  sendOrderConfirmation(email, message) {
    console.log(`Notification sent to ${email}: ${message}`);
  }
}
