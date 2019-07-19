const { zip } = require('zip-a-folder');
const fs = require('fs');


class Release {

  static async main() {
    let version = process.argv[2] || 'unknown_version';
    let outputPath = './release/';
    if (!fs.existsSync(outputPath)){
      fs.mkdirSync(outputPath, { recursive: true });
    } else {
      // clear folder
      fs.readdir(outputPath, (err, files) => {
        if (err) throw err;
        for (const file of files) {
          fs.unlink(path.join(directory, file), err => {
            if (err) throw err;
          });
        }
      });
    }
    await zip('./dist', outputPath + '/dist_'+version+'.zip');
  }
}

Release.main();