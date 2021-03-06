import Command from '../common.commands.config';
import { Message } from 'discord.js';
import { distube } from '../../index';

export default class volumeCommand extends Command {
  constructor() {
    super(
      'Volume',
      'volume',
      ['Set the volume of the bot', 'Usage: $volume <percent>'],
      ['vol']
    );
  }

  action(message: Message, args: string[]) {
    let volume = parseInt(args[1]);

    if (Number.isNaN(volume)) {
      message.channel.send('`Volume must be a number between 0 and 100`');
      return;
    }

    if (volume < 0) volume = 0;

    if (volume > 100) volume = 100;

    try {
      distube.setVolume(message, volume);
    } catch (error) {
      message.channel.send('`Error setting volume`');
      return;
    }

    message.channel.send(`\`Volume set to ${volume}\``);
  }
}
