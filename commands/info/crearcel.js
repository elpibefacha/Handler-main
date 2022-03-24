const { Message, Client } = require("discord.js");

module.exports = {
    name: "p!crearcel",
    aliases: ['p!crearcel'],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {
       // console.log(args.slice(0, 2))
        if(!message.member.roles.cache.has("956336645018386472")) return message.author.send("No tienes permiso para usar ese comando!");
        if(args.length < 1) return message.channel.send("Para crear el canal es p!crearpc (nombre del juego) (link)");
        const channelName = (args[0]);
        const newChannel = await message.guild.channels.create("📱•" + channelName);
       newChannel.setParent("954783598244954172"); 
        message.channel.send('Se ha creado el canal');
        client.channels.cache.get(newChannel.id).send(args[1] + "\n<@&945811749087641610>");
        if(!args[2]) return message.channel.send("No has puesto una descripcion.");
        client.channels.cache.get(newChannel.id).send(args.slice(2).join(" "));
    },
};
