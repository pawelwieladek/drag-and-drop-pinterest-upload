import express from 'express';

let router = express.Router();

router.get('/log', function(req, res) {
    res.send('log');
});

export default router;
