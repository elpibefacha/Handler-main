const { Message, Client } = require("discord.js");

module.exports = {
    name: "hola",
    aliases: ['buenas'],
 /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

  run: async (client, message, args) => {
if(message.content.startsWith("hola")){
    message.reply(`Hola! ${message.author} \nComo andas?`)
}
  }
}