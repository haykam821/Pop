const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

module.exports = {
  name: "Reveal in Finder",
  os: ["darwin"],
  go: path => {
    spawn("open", ["-R", path]);
  },
}
