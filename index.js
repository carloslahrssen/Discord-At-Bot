const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log('I am ready!');
});
 
client.on('message', message => {
  if (message.content.includes('<@129422176653803520>')) {
    message.channel.send('Dont @ me');
  }
});
 
client.login('MzI1ODk1NTc2NjAyMjc5OTU0.DCe5dw.kV7qoOQTecJBXFwJrEw8K3DZ14w');