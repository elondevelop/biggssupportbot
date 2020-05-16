const Discord = require('discord.js');
const helpEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Commands')
	.setDescription('All of the current commands for BSB')
	.addFields(
		{ name: '.ping', value: 'Test Command'},
	)
	.addFields(
		{name : '.kick | .ban ', value: 'Instantly kicks/bans any member in the server if user is an Admin [.kick | .ban @MEMBER]' }
	)
    .setTimestamp()

exports.run = (client, message, args) => {
    message.channel.send(helpEmbed)
}
