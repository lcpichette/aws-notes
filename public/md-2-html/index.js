var fs = require('fs');
var commands = require('./lib');

const CMDS = {
  '-h': {
    fn: commands.help,
    needsSecondArg: false
  }
};

(() => {
  const ARGS = process.argv.slice(2);
  const CMD_FLAGS = Object.keys(CMDS);
  
  if (ARGS.length === 0) {
    console.error('Insufficient arguments passed, running -h automatically');
    CMDS['-h'].fn();
    return;
  }
  
  for(let i = 0; i < ARGS.length; i++) {
    const FLAG = ARGS[i];
    
    if (FLAG.includes('-')) {
      console.error('Unexpected argument format');
    }
    
    if (CMD_FLAGS.includes(FLAG)) {
      if (CMDS[FLAG].needsSecondArg) {
        i++;
        CMDS[FLAG].fn(ARGS[i])
      } else {
        CMDS[FLAG].fn();
      }
    } else {
      console.error('Unsupported flag provided');
    }
  }
})();
