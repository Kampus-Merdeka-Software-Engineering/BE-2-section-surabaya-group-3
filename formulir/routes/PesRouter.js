import express from "express";
import {
     getPes,
     getPesByid,
     createPes,
     updatePes,
     deletePes

} from "../controllers/PesController.js";

const router = express.Router();

router.get('/pesawat', getPes);
router.get('/pesawat/:id',getPesByid);
router.post('/pesawat', createPes);
router.patch('/pesawat/:id', updatePes);
router.delete('/pesawat/:id', deletePes);

export default router;