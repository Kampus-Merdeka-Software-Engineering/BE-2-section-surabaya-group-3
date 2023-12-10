import express from "express";
import {
     getKer,
     getKerByid,
     createKer,
     updateKer,
     deleteKer

} from "../controllers/KerController.js";

const router = express.Router();

router.get('/kereta', getKer);
router.get('/kereta/:id',getKerByid);
router.post('/kereta', createKer);
router.patch('/kereta/:id', updateKer);
router.delete('/kereta/:id', deleteKer);

export default router;