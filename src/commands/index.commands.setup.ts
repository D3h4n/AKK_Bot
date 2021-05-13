import Discord from 'discord.js';
import Command from './common.commands.config';

// admin
import timeoutCommand from './admin/timeout.config';

// chat
import helloCommand from './chat/hello.config';
import insultCommand from './chat/insult.config';
import echoCommand from './chat/echo.config';

// misc
import coinFlipCommand from './misc/coinFlip.config';
import helpCommand from './misc/help.config';
import rngCommand from './misc/rng.config';
import chooseCommand from './misc/choose.config';
import teamsCommand from './misc/teams.config';
import voteCommand from './misc/vote.config';
import yeetCommand from './misc/yeet.config';

// music
import joinCommand from './music/join.config';
import leaveCommand from './music/leave.config';
import playCommand from './music/play.config';
import pauseCommand from './music/pause.config';
import skipCommand from './music/skip.config';
import queueCommand from './music/queue.config';
import stopCommand from './music/stop.config';
import volumeCommand from './music/volume.config';
import shuffleCommand from './music/shuffle.config';
import playSkipCommand from './music/playskip.config';
import PlayTopCommand from './music/playtop.config';
import repeatCommand from './music/repeat.config';
import loopCommand from './music/loop.config';

// search
import youtubeCommand from './search/youtube.config';

// create a map of commands
let commands = new Discord.Collection<string, Command>();

// add commands to map
commands
  // admin commands
  .set('timeout', new timeoutCommand())

  // chat commands
  .set('echo', new echoCommand())
  .set('hello', new helloCommand())
  .set('insult', new insultCommand())

  // misc commands
  .set('coinflip', new coinFlipCommand())
  .set('help', new helpCommand())
  .set('rng', new rngCommand())
  .set('choose', new chooseCommand())
  .set('teams', new teamsCommand())
  .set('vote', new voteCommand())
  .set('yeet', new yeetCommand())

  // music commands
  .set('join', new joinCommand())
  .set('leave', new leaveCommand())
  .set('loop', new loopCommand())
  .set('pause', new pauseCommand())
  .set('play', new playCommand())
  .set('playskip', new playSkipCommand())
  .set('playtop', new PlayTopCommand())
  .set('queue', new queueCommand())
  .set('repeat', new repeatCommand())
  .set('shuffle', new shuffleCommand())
  .set('skip', new skipCommand())
  .set('stop', new stopCommand())
  .set('volume', new volumeCommand())

  // search commands
  .set('youtube', new youtubeCommand());

export default (() => commands)();
