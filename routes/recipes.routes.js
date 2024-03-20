import { Router} from "express";

const router = Router();

// Define routes
router.post('/recipes', (req, res) => {
    res.send('Add recipes!')
});

router.get('/recipes', (req, res) => {
    res.send('Get all recipes!');
});

router.get('/recipes/:id', (req, res) => {
    res.send(`Get recipes by id: ${req.params.id}`);
});

router.patch('/recipes/:id', (req, res) => {
    res.send(`Update recipes by id: ${req.params.id}`);
});

router.delete('/recipes/:id', (req, res) => {
    res.send(`Delete recipes by id: ${req.params.id}`);
});

export default router;