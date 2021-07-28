const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
	consol.log("Logined it as ${client.user.tag}!");
    }
);

client.on(
    "message", async msg => {
	    if (msg.author.bot) return;
	
	    switch (msg.content) {
		    case "테스트":
		        msg.reply("테스트 성공!");
		        break;
		    case "ping":
		        msg.reply("ping: ${client.ws.ping}ms");
		        break;
		}
    }
);

client.login(''); token
