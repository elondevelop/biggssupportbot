module.exports.run = async (client, message, args) => {
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
}
