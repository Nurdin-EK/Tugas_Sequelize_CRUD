const express = require('express');
const router = express.Router();
const Biodata = require('../models/Biodata');

// Create Biodata
router.post('/', async (req, res) => {
  try {
    const { nama, tempatLahir, tanggalLahir, alamat } = req.body;
    const biodata = await Biodata.create({
      nama,
      tempatLahir,
      tanggalLahir,
      alamat
    });
    res.status(201).json(biodata);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Read Biodata
router.get('/:id', async (req, res) => {
  try {
    const biodata = await Biodata.findByPk(req.params.id);
    if (biodata) {
      res.json(biodata);
    } else {
      res.status(404).json({ message: 'Biodata not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Update Biodata
router.put('/:id', async (req, res) => {
  try {
    const biodata = await Biodata.findByPk(req.params.id);
    if (biodata) {
      const { nama, tempatLahir, tanggalLahir, alamat } = req.body;
      await biodata.update({
        nama,
        tempatLahir,
        tanggalLahir,
        alamat
      });
      res.json(biodata);
    } else {
      res.status(404).json({ message: 'Biodata not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Delete Biodata
router.delete('/:id', async (req, res) => {
  try {
    const biodata = await Biodata.findByPk(req.params.id);
    if (biodata) {
      await biodata.destroy();
      res.json({ message: 'Biodata deleted' });
    } else {
      res.status(404).json({ message: 'Biodata not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
