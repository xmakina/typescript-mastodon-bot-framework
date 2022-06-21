import { login, Notification, MastoClient } from "masto";
import NotificationHandler from "./handlers/notifications/NotificationHandler";
import PubSub from 'pubsub-js'

export class Bot {
  private notificationHandler: NotificationHandler;
  private masto: MastoClient;

  public OnMention(userFunction: (data: Notification) => any) {
    PubSub.subscribe('mention', (_, data: Notification) => userFunction(data))
  }

  constructor() {
    this.notificationHandler = new NotificationHandler();
  }

  public async listen(URL: string, ACCESS_TOKEN: string) {
    this.masto = await login({
      url: URL,
      accessToken: ACCESS_TOKEN,
    });

    const stream = await this.masto.stream.streamUser();
    stream.on('notification', (data) => this.notificationHandler.handle(data));
  }

  public SendReply(source: Notification): (message: string) => Promise<void> {
    const masto = this.masto
    return async function (message: string) {
      await masto.statuses.create({
        inReplyToId: source.status.id,
        status: `@${source.account.acct} ${message}`
      })
    }
  }
}
