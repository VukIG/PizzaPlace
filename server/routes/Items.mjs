import express from 'express';
import { 
  getAllItems, 
  changeItem, 
  addItem, 
} from '../controllers/items.mjs';

const router = express.Router();

router.get('/', getAllItems);
router.put('/changeItem/:itemId', changeItem);
router.post('/addItem', addItem);

export default router;
