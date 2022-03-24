const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Ve el ping del bot",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        interaction.followUp({ content: `${client.ws.ping} Pong!` });
    },
};
