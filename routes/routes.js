import express from 'express';

import createData from '../controllers/createData.js';
import searchCeritificate from '../controllers/searchCertificate.js';

const router = express.Router()

router.get('/search',searchCeritificate)
router.post('/createdata',createData)

export default router




