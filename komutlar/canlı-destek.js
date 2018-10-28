const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    message.guild.createChannel(`talep-${message.author.id}`, 'text').then(ch => {
        message.guild.roles.forEach((role) => {
            if (!role.hasPermission("MANAGE_MESSAGES")) {
                ch.overwritePermissions(role,{
                    VIEW_CHANNEL: false,
                }).catch()
            if (role.hasPermission("MANAGE_MESSAGES")) {
                ch.overwritePermissions(role,{
                    VIEW_CHANNEL: true,
                }).catch()
                ch.overwritePermissions(message.author.id,{
                    VIEW_CHANNEL: true,
                }).catch()
            }
        }})

        const embed = new Discord.RichEmbed()
        .setAuthor("� SyncSBot| Canl� Destek")
        .setDescription(`** :ponit_right: Merhaba! M�sait bir yetkilimiz sizinle ilgilenecektir.\nE�er ilgilenen olmazsa birisiyle �zel mesaja ge�ebilirsiniz. Ayr�ca [%kapat] yazarak kapatabilisiniz :point_left:**`)
        .setFooter('� SyncSBot| Canl� Destek', client.user.avatarURL)
        .setTimestamp()
        ch.send(embed).catch()
        ch.awaitMessages((msg)=> {
            if (msg.content === `%kapat`) {
                ch.send("`Talebiniz iptal ediliyor!`").then(()=>{
                    setTimeout(()=> {
                        ch.delete().catch()
                    },1000)
                });
            }
        },{time:86400000})
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'canl�destek',
  description: 'Bir Canl� Destek Talebi A�ars�n�z!',
  usage: 'canl�destek'
};