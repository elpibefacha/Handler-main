const { Message, Client } = require("discord.js");

module.exports = {
    name: "p!help",
    aliases: ['p!ayuda'],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        message.reply(`**p!ping:** *Te dice el ping del bot!* \n**p!say:** *Dice lo que pongas! Ejemplo:p!say hola*`);
    },
};
