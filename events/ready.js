const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
console.log('Oynuyor Oynuyor!.');
console.log('Bot hazır.');

    var Games = [

        '%yardım Aktif!!!!!!!',
    
        'NABER?',
        
        `${client.users.size} Kullanıcı Adamsınız`,
        
        `${client.guilds.size} Sunucu Adamsınız`,
        
        `Beni Eklermisin %davet`,

        `Yapımcım RK|BebeMustafa`
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

        client.user.setActivity(Games[random], "https://twitch.tv/tunamustafa");
        }, 2 * 2500);

};
