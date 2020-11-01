const util = require('util');
const exec = util.promisify(require('child_process').exec);

exports.getSign = async (str) => {
   try {
      const currentDir = process.cwd().split('\\').pop();
      if (currentDir !== 'wmsigner') {
         process.chdir('./wmsigner');
      }
      let options = {};
      if (process.env.NODE_ENV !== 'production') {
         options = {
            shell: 'C:Program Files/Git/bin/bash.exe',
         };
      }

      const { stdout } = await exec(`echo "${str}" | ./wmsigner`, options);

      return stdout.toString();
   } catch (err) {
      console.error(err);
   }
};

exports.getReqn = () => {
   return Date.now();
};
