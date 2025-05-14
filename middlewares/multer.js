const multer = require('multer');
const slugify = require('slugify');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/movies_cover')
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        // cb(null, file.fieldname + '-' + uniqueSuffix)

        const slugifyName = slugify(file.originalname, {
            lower: true,
            trim: true,
        });

        const uniqueName = `${Date.now()} - ${Math.round(Math.random() * 1E9)} - ${slugifyName}`;
        cb(null, uniqueName);
    }
})

const upload = multer({ storage });

module.exports = upload;