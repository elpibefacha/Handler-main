const { Message, Client } = require("discord.js");

module.exports = {
    name: `p!say`, 
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {

        const exampleEmbed = { description: args.join(' '), color: ("#8da0ec")};
        if(args.length < 1) return message.channel.send("Debes enviar algo para que el bot lo diga!");
        message.channel.send({ embeds: [exampleEmbed]});
        message.delete().catch(()=>{})
    }}