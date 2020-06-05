const { Composer } = require("micro-bot");

const bot = new Composer();
let siteUrl = "default";

bot.start((ctx) => ctx.reply("Welcome"));

bot.hears(/\/bookmark (.+)/, ({ reply, match }) => {
  siteUrl = match[1];
  reply("Got it, in which category?", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Development",
            callback_data: "development",
          },
          {
            text: "Music",
            callback_data: "music",
          },
          {
            text: "Cute monkeys",
            callback_data: "cute-monkeys",
          },
        ],
      ],
    },
  });
});

bot.on("callback_query", (ctx) => {
  ctx.reply(
    'Added "' +
      siteUrl +
      '" to category "' +
      ctx.update.callback_query.data +
      '"!'
  );
});

// module.exports = ({ reply }) => reply("42");
module.exports = bot;
