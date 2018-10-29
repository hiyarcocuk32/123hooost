const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const Cleverbot = require('cleverbot.io');
let bot = new Cleverbot('jJztuIuh8pj2H9kgaWcRwgDdor15S8Ez');

exports.run = (client, message, params) => {
bot.setNick('Vices');
let yazi = params.slice(0).join(' ');
 if (yazi.length < 1) return message.reply('Bir mesaj yazmalısın.');
   message.channel.send(`🔄 Mesaj Yükleniyor Lütfen Bekleyiniz `).then(msg => msg.delete(7000));
bot.create(function (err, session) {
    bot.ask(yazi, function (err, response) {
        console.log(response)
    
        message.channel.send(response)
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sor',
  description: 'sor',
  usage: 'sor'
};
