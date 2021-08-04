//Main Code 1

const Discord = require("discord.js");
const client = new Discord.Client();

client.on ("ready", () => {
    console.log (Logined it as ${client.user.tag}!);
});

client.on ("message", async message => {

    switch (message.content) {
        case "테스트":
            message.channel.send("테스트 성공");
            message.reply("테스트 성공!");
            break;
        case "ping":
            message.reply(ping: ${client.ws.ping});
            break;
        case "리로드":
            message.channel.send("cd discord-bot\nnode app");
            break;
    }

    if (message.content == "임베드") {
        const embed = new Discord.MessageEmbed()
            .setTitle("Title")
            .setDescription("내용")
            .setColor("#00ffff")
            .setFooter(Request: ${message.author.username});
        message.channel.send(embed);
    }

});

client.login("");
