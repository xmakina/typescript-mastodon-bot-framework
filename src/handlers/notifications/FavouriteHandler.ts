import { Notification } from "masto";
import IHandler from "../IHandler";

export class FavouriteHandler implements IHandler<Notification> {
  async handle(data: Notification) {
    throw new Error("Method not implemented.");
  }
}
