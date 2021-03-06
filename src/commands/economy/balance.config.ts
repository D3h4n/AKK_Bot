import { Message, MessageEmbed } from 'discord.js';
import economyServices from './economy.services';
import Command from '../common.commands.config';

export default class balanceCommand extends Command {
  constructor() {
    super(
      'Balance',
      'balance',
      ['check your balance', 'usage: $balance'],
      ['bal']
    );
  }

  async action({ author, member, channel }: Message) {
    // get user or create new user if doesn't exist
    const user =
      (await economyServices.getUserByDiscord(author.id)) ??
      (await economyServices.createUser(author.id, author.username));

    const response = new MessageEmbed();

    response
      .setAuthor(member?.displayName, author.displayAvatarURL())
      .setDescription(`**Balance:** $${user.balance}`);

    channel.send(response);
  }
}
