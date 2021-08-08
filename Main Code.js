//Main Code 1

const Discord = require("discord.js");

const client = new Discord.Client();


const { MessageEmbed } = require("discord.js");
//const MessageEmbed = new Discord.MessageEmbed();

client.on ("ready", () => {
    console.log (`Logined it as ${client.user.tag}!`);
});

client.on ("message", async message => {

    //명령어모음
    if (message.content == "명령어") {
        const Commend_Embed = new MessageEmbed()
            .setTitle("건우봇의 명령어 모음");
        message.channel.send( Commend_Embed );
    };

    //자동응답
    switch (message.content) {
        case "테스트":
            message.channel.send("테스트 성공");
            message.reply("테스트 성공!");
            break;
        case "ping":
            message.reply(`ping: ${client.ws.ping}`);
            break;
        case "리로드":
            message.channel.send("cd discord-bot\nnode app");
            break;
    };

    //따라하기
    if (message.content.startsWith("따라하기 ")) {
        message.channel.send(message.content.substr(5));
    };

    //임베드
    if (message.content == "임베드") {
        const embed = new MessageEmbed()
            .setTitle("Title")
            .setDescription("내용")
            .setColor("#00ffff")
            .setFooter(`Request: ${message.author.username}`);
        message.channel.send(embed);
    };
    if (message.content == "임베드 전체") {
        const ex_embed = new MessageEmbed()
            .setColor("#00FFBF")
            .setTitle("Some Title")
            .setURL("https://discord.js.org/")
            .setAuthor("Some name", "https://i.imgur.com/AfFp7pu.png", "https://discord.js.org")
            .setDescription("Some description")
            .setThumbnail("https://i.imgur.com/AfFp7pu.png")
            .addFields(
                { name: "일반적인 필드 타이틀", value: "내용" }, 
                { name: "\u200B", value: "\u200B" }, //공백
                { name: "인라인 필드 타이틀 1", value: "내용", inline: true }, 
                { name: "인라인 필드 타이틀 2", value: "내용", inline: true }
            )
            .addField("인라인 필드 타이틀 3", "내용", true)
            .setImage("https://i.imgur.com/AfFp7pu.png")
            .setTimestamp()
            .setFooter("Some footer text", "https://i.imgur.com/AfFp7pu.png");
        message.channel.send(ex_embed);
    };
    if (message.content == "임베드 전체2") {
        const ex_embed_ = {
            color: 0xEF5858, //#EF5858
            title: "Some title 2", 
            url: "https://discord.js.org/", 
            author: {
                name: "Some name", 
                icon_url: "https://i.imgur.com/AfFp7pu.png", 
                url: "https://discord.js.org/"
            }, 
            description: "Some description here", 
            thumbnail: {
                url: "https://i.imgur.com/AfFp7pu.png"
            }, 
            fields: [
                {
                    name: "일반적인 필드 타이틀", 
                    value: "내용"
                }, 
                {
                    name: "\u200b", 
                    value: "\u200b", 
                    inline: false
                }, 
                {
                    name: "인라인 필드 타이틀 1", 
                    value: "내용", 
                    inline: true
                }, 
                {
                    name: "인라인 필드 타이틀 2", 
                    value: "내용", 
                    inline: true
                }, 
                {
                    name: "인라인 필드 타이틀 3",
                    value: "내용",
                    inline: true
                }
            ], 
            image: {
                url: "https://i.imgur.com/AfFp7pu.png"
            }, 
            timestamp: new Date(), 
            footer: {
                text: "Some footer title here", 
                icon_url: "https://i.imgur.com/AfFp7pu.png"
            }
        };
        message.channel.send(new MessageEmbed(ex_embed_));
    };

    //내 아바타 전송
    if (message.content == "아바타") {
        message.reply(message.author.displayAvatarURL());
    };

    //사진 전송 + 응용
    if (message.content == "rip") {
        const attachment = new Discord.MessageAttachment("https://i.imgur.com/w3duR07.png");
        message.channel.send(attachment);
    };
    if (message.content.startsWith("사진 ")) {
        message.channel.send(
            new Discord.MessageAttachment(message.content.substr(3))
        );
    };
    
    //https://discordjs.guide/miscellaneous/parsing-mention-arguments.html
    //강퇴하기(미완성)
    if (message.content.startsWith("kick ")) {
        if (!message.guild) return;

        const user = message.mentions.users.first();

    }

});

client.login("");
