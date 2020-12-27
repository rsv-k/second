const multer = require('multer');

const MIME_TYPES = {
   'image/jpeg': 'jpeg',
   'image/png': 'png',
   'image/jpg': 'jpg',
};

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, './images');
   },
   filename: (req, file, cb) => {
      cb(
         null,
         file.fieldname + '-' + Date.now() + '.' + MIME_TYPES[file.mimetype]
      );
   },
});

const fileFilter = (req, file, cb) => {
   if (MIME_TYPES[file.mimetype]) {
      cb(null, true);
   } else {
      cb(null, false);
   }
};

module.exports = multer({ storage, fileFilter }).single('icon');
