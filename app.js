const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Bot en ligne")
  console.log("Created by Ziifkah")
})
bot.on('ready', () => {     
    bot.user.setActivity("FCF Server");  //Change statut bot
    })

bot.login('TOKEN') //Token bot here

bot.on('message', function(message) {
    if (message.content === "-portail1") { 
        var interval = setInterval (function () {
            message.delete({ timeout: 4000 })
            message.channel.send("Recharger portail T3 il reste 24h") 
            .catch(console.error); 
        }, 1 * 10000); 
        message.channel.send ("**J'ai bien mis en route le timer pour la catégorie portails 1**").then(msg => { msg.delete({ timeout : 4000 })})
    }
});

bot.on('message', function(message) {
    if (message.content === "-portail2") { 
        var interval = setInterval (function () {
            message.delete({ timeout: 4000 })
            message.channel.send("Test2")
            .catch(console.error); 
        }, 1 * 10000); 
        message.channel.send ("**J'ai bien mis en route le timer pour la catégorie portails 2**").then(msg => { msg.delete({ timeout : 4000 })})
    }
});

bot.on('message', function(message) {
    if (message.content === "-portail3") { 
        message.delete({ timeout: 4000 })
        var interval = setInterval (function () {
            message.channel.send("Test3")
            .catch(console.error); 
        }, 1 * 10000);
        message.channel.send ("**J'ai bien mis en route le timer pour la catégorie portails 3**").then(msg => { msg.delete({ timeout : 4000 })})
    }
});

bot.on('message', function(message) {
    if (message.content === "-portail4") { 
        message.delete({ timeout: 4000 })
        var interval = setInterval (function () {
             message.channel.send("Test4") 
            .catch(console.error); 
        }, 1 * 10000);  
        message.channel.send ("**J'ai bien mis en route le timer pour la catégorie portails 4**").then(msg => { msg.delete({ timeout : 4000 })})
    }
});

bot.on('message', function(message) {
    if (message.content === "-portail5") { 
        message.delete({ timeout: 4000 })
        var interval = setInterval (function () {
            message.channel.send("Test5")
            .catch(console.error); 
        }, 1 * 10000); 
        message.channel.send ("**J'ai bien mis en route le timer pour la catégorie portails 5**").then(msg => { msg.delete({ timeout : 4000 })})
    }
});

