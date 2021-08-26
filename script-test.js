const shell = require('shelljs');

shell.exec('git diff --name-only branch-scripts-tests..main');