import express from 'express';
import create  from '../controllers/Visitor.controller';

const router = express.Router();

router.route('/').post(create);

export default router;
