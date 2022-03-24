const { Message, Client } = require("discord.js");

module.exports = {
    name: "p!ping",
    aliases: ['p!p'],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        message.channel.send(`${client.ws.ping} Pong!`);
    },
};
