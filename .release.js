const { zip } = require('zip-a-folder');
const fs = require('fs');
const path = require('path');


class Release {

  static async main() {
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
    await zip('./dist', outputPath + '/dist.zip');
  }
}

Release.main();