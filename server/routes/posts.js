import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('CORPSE JELLY!');
});

export default router;