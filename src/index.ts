import { TelegrafContext } from 'telegraf/typings/context';
// @ts-ignore
import { Composer } from 'micro-bot';

import { bookmark, callback } from './service/bot';

const bot = new Composer();

bot.start((ctx: TelegrafContext) => ctx.reply('Welcome'));

bot.hears(/\/bookmark (.+)/, bookmark);

bot.on('callback_query', callback);

export default bot;
