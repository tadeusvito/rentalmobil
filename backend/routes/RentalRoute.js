import express from "express";
import {
    getRental, 
    createRental,
    UpdateRental,
    DeleteRental
} from "../controllers/RentalController.js";

const router = express.Router();

//buat endpoint
router.get('/rentals', getRental); 
router.get('/rentals/:id', getRental);
router.post('/rentals', createRental);
router.patch('/rentals/:id', UpdateRental); 
router.delete('/rentals/:id', DeleteRental);

export default router;