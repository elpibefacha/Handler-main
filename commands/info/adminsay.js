const { Message, Client } = require("discord.js");

module.exports = {
    name: `p!bsay`, 
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
     run: async (client, message, args) => {
     if(args.length < 1) return message.author.send("Debes enviar algo para que el bot lo diga!"),message.delete().catch(()=>{})
     if (!message.member.permissions.has('MENTION_EVERYONE')) return message.author.send("No tienes permiso para usar este comando!"),message.delete().catch(()=>{})
     message.channel.send(args.join(' '));
     message.delete().catch(()=>{})
 },
};
