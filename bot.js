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






client.login("NjE1NjU3NTI4OTQ4MTYyNTgw.XhI0XA.2CJCW71wl5zsQPzLDIOuwOWrKAE");
