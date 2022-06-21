import dotenv from 'dotenv'
import { Bot } from '../src/Bot'
dotenv.config()

const {
    URL,
    ACCESS_TOKEN
} = process.env

var bot = new Bot()

bot.listen(URL, ACCESS_TOKEN)

console.log('listening')

bot.OnMention((data) => console.log('Mention from', data.account.displayName))