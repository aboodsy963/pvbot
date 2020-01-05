const Discord = require("discord.js");
const client = new Discord.Client();

Client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
	  const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
  .setDescription(`حياك يقلبي ♥
  https://discord.gg/SY`) 
return channel.sendEmbed(Embed11)

}).catch(console.error)
})






client.login("NjE1NjU3NTI4OTQ4MTYyNTgw.XhIdog.3yp4K1LF40YHJ15b4ROdQ6v5b4Q");
