import { Notification } from "masto";
import IHandler from "../IHandler";
import PubSub from "pubsub-js";

export default class NotificationHandler implements IHandler<Notification> {
  async handle(data: Notification) {
    switch (data.type) {
      case "favourite":
        PubSub.publish('favourite', data);
        break
      case "follow":
        PubSub.publish('follow', data);
        break
      case "mention":
        PubSub.publish('mention', data);
        break
      default:
        console.log(`Unknown type, ${data.type}`);
    }
  }
}
