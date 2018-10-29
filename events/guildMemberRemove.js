module.exports = member => {
  let guild = member.guild;
  member.send('Ne gidiyon Tirrek');
  guild.defaultChannel.sendMessage(`${member.user.username} gitti.`);
};
