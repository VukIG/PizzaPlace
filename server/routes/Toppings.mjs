import express from 'express';
import { getAllToppings } from "../controllers/toppings.mjs";

const router = express.Router();

router.get('/',getAllToppings);

export default router;