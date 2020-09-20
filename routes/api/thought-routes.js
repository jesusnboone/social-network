const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction
} = require('../../controllers/Thought-controller');

// /api/Thoughts
router
    .route('/')
    .get(getAllThought)
    .post(createThought);

// /api/Thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/:id/reactions')
    .post(addReaction)

module.exports = router;
