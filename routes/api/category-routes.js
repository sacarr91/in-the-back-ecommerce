const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const allCat = await Category.findAll({
      // be sure to include its associated Products
      include: [
        { model: Product }
      ]
    });
    if (!allCat) {
      res.status(404).json({ message: `Could not get category information` });
      return;
    }
    res.status(200).json(allCat);
  } catch {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const reqCat = await Category.findByPk(req.params.id, {
      // be sure to include its associated Products
      include: [
        { model: Product }
      ]
    });
    if (!reqCat) {
      res.status(404).json({ message: `Category not found` });
      return;
    }

    res.status(200).json(reqCat);
  } catch {
    res.status(500).json(err);
  }
});

// create a new category
router.post('/', async (req, res) => {
  try {
    const newCatData = await Category.create(req.body);
    res.status(200).json(newCatData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const catData = await Category.update(req.body);

    if (!catData) {
      res.status(404).json({ message: `Category not found. Could not update.` });
      return;
    }
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCat = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!deleteCat) {
      res.status(404).json({ message: 'No category found with this id! Nothing has been deleted.' });
      return;
    }

    res.status(200).json({ message: `Success... ${deleteCat} category deleted.` });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
