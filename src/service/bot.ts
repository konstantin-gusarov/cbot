import { TelegrafContext } from 'telegraf/typings/context';

export const scope = {
  siteUrl: '',
};

export const bookmark = ({ reply, match }: TelegrafContext) => {
  scope.siteUrl = match ? match[1] : 'nothing';
  reply('Got it, in which category?', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Development',
            callback_data: 'development',
          },
          {
            text: 'Music',
            callback_data: 'music',
          },
          {
            text: 'Cute monkeys',
            callback_data: 'cute-monkeys',
          },
        ],
      ],
    },
  });
};

export const callback = ({ reply, update }: TelegrafContext) => {
  const { siteUrl } = scope;
  const { callback_query } = update;

  reply(`Added "${siteUrl}" to category "${callback_query?.data}"!`);
};
