var http = require('http'),
    fileSystem = require('fs');

http.createServer(async function(req, res) {
    console.log('New query received.')

    await createZipArchive();
    var stat = fileSystem.statSync('newStatic.zip');

    res.writeHead(200, {
        'Content-Type': 'application/zip',
        'Content-Length': stat.size,
        'Content-Disposition': `attachment; filename=newStatic.zip`
    });

    var readStream = fileSystem.createReadStream('newStatic.zip');
    readStream.pipe(res);

    console.log('zip file has been sent');
})
    .listen(80);
