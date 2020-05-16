module.exports.run = async (client, message, args) => {
    // check if it's a kick command
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
}
