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






client.login("NjU2OTAwMTAxODMwMzQ0NzE0.XfpYKQ.ewBhQvG2aOP3mlJZ9Ua9tHv2XWE");
