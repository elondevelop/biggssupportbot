const Discord = require('discord.js');
const client = new Discord.Client();
client.on("ready", () => {
    client.user.setActivity('the Biggs Server!', { url: 'https://www.twitch.tv/monstercat', type: 'WATCHING' })
  });

const prefix = '.';

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

client.on('message', message => {
    if (message.content.startsWith(prefix + 'help')) {
        message.channel.send(helpEmbed)
    }
})

client.on('message', message => {
        // check if it's a kick command
    if (message.content.startsWith('.ban')) {
        // get the first mention
        const member = message.mentions.members.first()

        // check if the command author has permission to kick people
        if (message.member.hasPermission('BAN_MEMBERS')) {
            try {
                // kick him/her!
                const bannedMember = await member.kick()

                // tell the message author that this member was kicked
                message.channel.send(`:wave: ${bannedMember.displayName} has been successfully banned.`)
            } catch (e) {
                // handle the error
                message.channel.send(`Failed to ban the member due to ${e.message}`)
            }
        } else {
            message.channel.send(`You don't have the permission to ban people.`)
        }
    }
})
    
client.on('message', message => {
     if (message.content.startsWith('.kick')) {
        // get the first mention
        const member = message.mentions.members.first()

        // check if the command author has permission to kick people
        if (message.member.hasPermission('KICK_MEMBERS')) {
            try {
                // kick him/her!
                const kickedMember = await member.kick()

                // tell the message author that this member was kicked
                message.channel.send(`:wave: ${kickedMember.displayName} has been successfully kicked.`)
            } catch (e) {
                // handle the error
                message.channel.send(`Failed to kick the member due to ${e.message}`)
            }
        } else {
            message.channel.send(`You don't have the permission to kick people.`)
        }
    }
})
    
client.on('message', message => {
    if (message.content.startsWith(prefix + 'ping')) {
        message.channel.send('Pong! :ping_pong:')
    }
})    
    

client.login(process.env.BOT_TOKEN);
