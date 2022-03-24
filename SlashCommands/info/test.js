const { Client, CommandInteraction, Channel } = require("discord.js");
const { commands } = require("../..");

module.exports = {
    name: "crearpc",
    description: "testeo",
    options: [{
     name: "nombre-del-juego",
     description: "testea cosas dea",
     requiered: true,
     type: 'STRING',
    },
    {
        name: "link-del-juego",
        description: "testea cosas dea",
        requiered: true,
        type: 'STRING',
    }],
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    
    

    run: async (client, interaction, args) => {
        const channelName = options.String('nombre-del-juego')
        const newChannel = await message.guild.channels.create(channelName)
         message.channel.send('Se ha creado el canal');
         
    },
};
