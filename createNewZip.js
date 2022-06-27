var path = require('path'),
    AdmZip = require("adm-zip");

function createZipArchive() {
    const zip = new AdmZip();
    const outputFile = "newStatic.zip";
    zip.addLocalFolder(path.join(__dirname, '../.output/public'));
    return zip.writeZip(outputFile);
    console.log(`Created ${outputFile} successfully`);
}

createZipArchive();
