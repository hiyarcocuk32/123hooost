const Discord = require('discord.js')
 
 
exports.run = async(client, message, args) => {
 
 
const emoji1 = message.client.emojis.get('??');
const emoji2 = message.client.emojis.get('??');
const emoji3 = message.client.emojis.get('??');
const emoji4 = message.client.emojis.get('??');
const emoji5 = message.client.emojis.get('??');
const emoji6 = message.client.emojis.get('??');
const emoji7 = message.client.emojis.get('??');
      let isEnabled;
      message.reply("Canl� Destek Komutunu Kulland���n�z ��in Te�ekk�rler. Birazdan Yetkili Ekibimiz sizinle ilgilenicektir.");
      let mesaj = args.slice(0).join(' ');
      let chan = message.channel;
      let destekKanal = "504305757240426528";
      const embed = new Discord.RichEmbed()
        .addField('Uyar�', `?? Canl� Destek �a�r�s�`)
        .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL}`)
        .setColor("RANDOM")
        .addField(`Bilgiler`, `**Sunucu**: ${message.guild.name} (${message.guild.id}) \n**Kanal**: ${message.channel.name} (${message.channel.id}) \n**Destek �steyen**: ${message.author.tag} (${message.author.id}) \n**Destek Mesaj�**: ${mesaj}`)
        .setFooter("Canl� Destek")
        .setTimestamp()
      client.channels.get(destekKanal).send({
        embed: embed
      });
    const collector = client.channels.get(destekKanal).createCollector(message => message.content.startsWith(''), {
      time: 0
    })
    client.channels.get(destekKanal).send('?? Destek �agr�s� ba�lanmak i�in `kat�l` yaz�n�z. �ptal Etmek ��in `kapat` yaz�n�z.')
    collector.on('message', (message) => {
      if (message.content === 'kapat') collector.stop('aborted')
      if (message.content === 'kat�l') collector.stop('success')
    })
    collector.on('end', (collected, reason) => {
      if (reason === 'time') return message.reply('?? �agr� zaman a��m�na u�rad�.')
      if (reason === 'aborted') {
        message.reply('�a�r� reddedildi.')
        client.channels.get(destekKanal).send('?? Ba�ar�yla �a�r� reddedildi.')
      }
      if (reason === 'success') {
        client.channels.get(destekKanal).send('?? Destek �agr�s� al�nd�!')
        client.channels.get(destekKanal).send('?? Destek �a�r�s�n� kapatmak i�in `kapat` yaz�n�z.')
        chan.send(`${message.author}`)
        chan.send('�a�r�n�z bir destek yetkili taraf�ndan al�nd�!')
        chan.send('En Yak�n Zamanda Size Yard�mc� Olacag�z.')
        chan.send('Destek �agr�s� kapatmak i�in `kapat` yaz�n�z.')
        isEnabled = true
        client.on('message', message => {
          function contact() {
            if (isEnabled === false) return
            if (message.author.id === client.user.id) return
            if (message.content.startsWith('kapat')) {
              message.channel.send('???? �a�r� Kapat�ld�.')
              if (message.channel.id === chan.id) client.channels.get(destekKanal).send('?? �a�r� kar�� taraftan kapat�ld�.')
              if (message.channel.id === destekKanal) chan.send('?? �a�r� kar�� taraftan kapat�ld�.')
 
              return isEnabled = false
            }
            if (message.channel.id === chan.id) client.channels.get(destekKanal).send(`?? **${message.author.tag}**: ${message.content}`)
            if (message.channel.id === destekKanal) chan.send(`?? **${message.author.tag}**: ${message.content}`)
          }
          contact(client)
        })
      }
    })
}
 
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'canl�destek',
  description: 'Canl� Destek Tablebi Olu�turur.',
  usage: 'canl�destek'
};