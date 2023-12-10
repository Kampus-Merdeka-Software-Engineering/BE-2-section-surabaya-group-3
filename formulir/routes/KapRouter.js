import express from "express";
import {
     getKap,
     getKapByid,
     createKap,
     updateKap,
     deleteKap 

} from "../controllers/KapController.js";

const router = express.Router();

router.get('/kapal', getKap);
router.get('/kapal/:id',getKapByid);
router.post('/kapal', createKap);
router.patch('/kapal/:id', updateKap);
router.delete('/kapal/:id', deleteKap);

export default router; 