import Rental from "../models/RentalModel.js";

export const getRental = async (req, res) => {
    try {
        if (req.params.id) {
            const rental = await Rental.findByPk(req.params.id);
            res.json(rental);
        } else {
            const rentals = await Rental.findAll();
            res.json(rentals);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while fetching rentals' });
    }
}

export const createRental = async (req, res) => {
    try {
        const { nama_penyewa, tipe_mobil, durasi_sewa, harga } = req.body;
        await Rental.create({ nama_penyewa, tipe_mobil, durasi_sewa, harga });
        res.status(201).json({ msg: "Rental Created" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'An error occurred while creating the rental' });
    }
}

export const UpdateRental = async (req, res) => {
    try {
        const { nama_penyewa, tipe_mobil, durasi_sewa, harga } = req.body;
        await Rental.update({ nama_penyewa, tipe_mobil, durasi_sewa, harga }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Rental Updated" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'An error occurred while updating the rental' });
    }
}

export const DeleteRental = async (req, res) => {
    try {
        await Rental.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Rental Deleted" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'An error occurred while deleting the rental' });
    }
}