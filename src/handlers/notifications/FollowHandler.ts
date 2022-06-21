import { Notification } from "masto";
import IHandler from "../IHandler";


export class FollowHandler implements IHandler<Notification> {
  handle(data: Notification): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
