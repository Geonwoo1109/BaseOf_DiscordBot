//Main Code 1

const Discord = require("discord.js");

const client = new Discord.Client();


const { MessageEmbed } = require("discord.js");
//const MessageEmbed = new Discord.MessageEmbed();

const mainImage = "";

client.on ("ready", () => {
    console.log (`Logined it as ${client.user.tag}!`);
});

client.on ("message", async message => {

    //명령어모음
    if (message.content == "명령어") {
        const Command_Embed = new MessageEmbed()
            .setTitle("건우봇의 명령어 모음")
            .setColor("#170370")
            .setAuthor("Geonwoo.Kim")
            .setDescription(`반가워요, ${message.author.username}님!`)
            .addFields(
                { name: "`명령어`", value: "명령어 목록들을 보여줍니다." },
                { name: "`따라하기 (내용)`", value: "봇이 따라합니다." }, 
                { name: "`테스트`", value: "봇이 간단하게 2번 답장합니다." }, 
                { name: "`ping`", value: "사용자의 지연시간을 알려줍니다." }, 
                { name: "`리로드`", value: "봇을 껏다 킬 때 사용하는 명령어를 알려줍니다." }, 
                { name: "`임베드`", value: "간단한 형태의 임베드를 보여줍니다.", inline: true }, 
                { name: "`임베드 전체`", value: "임베드에서 사용할 수 있는 기능 전체를 보여줍니다.", inline: true }, 
                { name: "`임베드 전체2`", value: "임베드에서 사용할 수 있는 기능 전체를 보여줍니다. 1과 선언 방식이 다릅니다.", inline: true }, 
                { name: "`아바타`", value: "사용자의 프로필 사진을 보여줍니다." }, 
                { name: "`rip`", value: "RIP 사진을 보여줍니다." }, 
                { name: "`사진 (링크)`", value: "링크의 사진을 보여줍니다." }, 
            )
            .setTimestamp()
            .setFooter("더 자세한 문의는 `건우#8173`", );
        message.channel.send( Command_Embed );
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
