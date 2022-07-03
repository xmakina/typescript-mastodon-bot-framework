import dotenv from 'dotenv'
import { Bot } from '../src/Bot'
dotenv.config()

const {
    API_URL,
    ACCESS_TOKEN
} = process.env

var bot = new Bot()

if(API_URL == undefined || ACCESS_TOKEN === undefined){
    throw new Error('API or Access Token are undefined!')
}

bot.listen(API_URL, ACCESS_TOKEN)

console.log('listening')

bot.OnMention((data) => console.log('Mention from', data.account.displayName))