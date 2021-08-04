const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
	consol.log("Logined it as ${client.user.tag}!");
    }
);

client.on("message", async message => {
	    //if (msg.author.bot) return;
	
	    switch (msg.content) {
		    case "테스트":
		        msg.reply("테스트 성공!");
		        message.channel.send("테스트 성공!");
		        break;
		    case "ping":
		        msg.reply(`ping: ${client.ws.ping}`);
		        break;
		    case "리로드":
		        msg.reply("cd discord-bot\nnode app");
		        break;
		}
    


if (message.content == "임베드") {
	const embed = new Discord.MessageEmbed()
	    .setTitle("Test")
	    .setDescription("Content")
	    .setColor("#00ffff")
	    .setFooter(`Request: ${message.author.username}`)
	message.channel.send(embed)
}
}
);
client.login('');
