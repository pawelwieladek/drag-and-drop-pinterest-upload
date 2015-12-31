import express from 'express';
import multer from 'multer';

let upload = multer({ dest: 'uploads/' });

let router = express.Router();

router.post('/api', upload.single('avatar'), function(req, res) {
    res.send('OK');
});

export default router;
