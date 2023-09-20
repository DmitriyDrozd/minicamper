var fs = require('fs');

var folderPath = '/db/trailers';
// var photoPath = '/photo';
var specificationFileName = 'specification.json';

var getTrailerById = (id, cb) => {
   fs.readFile(`public/${folderPath}/${id}/${specificationFileName}`, (err, buf) => {
       const data = JSON.parse(buf.toString());

       const photo = [];
       // const photo = await readdir(`${folderPath}/${id}/photo`, {withFileTypes: true});

       cb({ data, photo });
    });
}

module.exports = { getTrailerById };