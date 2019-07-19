const { zip } = require('zip-a-folder');
const fs = require('fs');


class ZipAFolder {

  static async main() {
    let version = process.argv[2] || 'unknown_version';
    let outputPath = './release/'+version;
    if (!fs.existsSync(outputPath)){
      fs.mkdirSync(outputPath, { recursive: true });
    }
    await zip('./dist', outputPath + '/dist_'+version+'.zip');
  }
}

ZipAFolder.main();