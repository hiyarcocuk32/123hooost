const Discord = require('discord.js')
 
 
exports.run = async(client, message, args) => {
 
 
const emoji1 = message.client.emojis.get('📞');
const emoji2 = message.client.emojis.get('📞');
const emoji3 = message.client.emojis.get('📞');
const emoji4 = message.client.emojis.get('📞');
const emoji5 = message.client.emojis.get('📞');
const emoji6 = message.client.emojis.get('📞');
const emoji7 = message.client.emojis.get('📞');
      let isEnabled;
      message.reply("Bu Koomutu Kullandığınız için teşekkürler Bir Yetkili Sizinlle İlgilinecektir");
      let mesaj = args.slice(0).join(' ');
      let chan = message.channel;
      let destekKanal = "504305757240426528";
      const embed = new Discord.RichEmbed()
        .addField('Uyari', `📞 Canli Destek Geldi`)
        .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL}`)
        .setColor("RANDOM")
        .addField(`Bilgiler`, `**Sunucu**: ${message.guild.name} (${message.guild.id}) \n**Kanal**: ${message.channel.name} (${message.channel.id}) \n**Destek Ýsteyen**: ${message.author.tag} (${message.author.id}) \n**Destek Mesajý**: ${mesaj}`)
        .setFooter("Canli Destek")
        .setTimestamp()
      client.channels.get(destekKanal).send({
        embed: embed
      });
    const collector = client.channels.get(destekKanal).createCollector(message => message.content.startsWith(''), {
      time: 0
    })
    client.channels.get(destekKanal).send('?? Destek çagrisi baglanmak için `katil` yaziniz. Iptal Etmek için `kapat` yaziniz.')
    collector.on('message', (message) => {
      if (message.content === 'kapat') collector.stop('aborted')
      if (message.content === 'katil') collector.stop('success')
    })
    collector.on('end', (collected, reason) => {
      if (reason === 'time') return message.reply('?? Çagri zaman asimina ugradi.')
      if (reason === 'aborted') {
        message.reply('Çaðrý reddedildi.')
        client.channels.get(destekKanal).send('📞 basariyla Çagri Reddedildi!.')
      }
      if (reason === 'success') {
        client.channels.get(destekKanal).send('📞 Destek Cağrisi Alindi!')
        client.channels.get(destekKanal).send('📞 Destek çagrisini kapatmak için `kapat` yaziniz.')
        chan.send(`${message.author}`)
        chan.send('Çagriniz bir destek yetkili tarafindan alindi!')
        chan.send('En Yakin Zamanda Size Yardimci Olacagiz.')
        chan.send('Destek çagrisi kapatmak için `kapat` yaziniz.')
        isEnabled = true
        client.on('message', message => {
          function contact() {
            if (isEnabled === false) return
            if (message.author.id === client.user.id) return
            if (message.content.startsWith('kapat')) {
              message.channel.send('📞📞 Çagri Kapatildi.')
              if (message.channel.id === chan.id) client.channels.get(destekKanal).send('📞 Çagri karsi taraftan kapatildi.')
              if (message.channel.id === destekKanal) chan.send('📞 Çagri karsi taraftan kapatildi.')
 
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
  name: 'canlidestek',
  description: 'Canli Destek Tablebi Olusturur.',
  usage: 'canlidestek'
};
