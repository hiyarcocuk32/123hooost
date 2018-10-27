const Discord = require("discord.js");
var Jimp = require('jimp');

exports.run = async (client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
   
    message.channel.send(`:bangbang: | Foto�raf i�leniyor, l�tfen bekleyin. :bangbang:`).then(m => m.delete(1000));

Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    //image.greyscale()
    //image.gaussian(3)
    Jimp.read("http://www.obviouslytech.com/wp-content/uploads/2012/01/OT-Scope-View.png", (err, avatar) => {
        avatar.resize(310, 325)
        image.composite(avatar, 1, 0).write(`./img/snip/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./img/snip/${client.user.id}-${user.id}.png`));
        }, 1000);
    });

});
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'tbc',
    description: 'tbc',
    usage: 'tbc'
  };