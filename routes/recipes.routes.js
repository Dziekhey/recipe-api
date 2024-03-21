import { Router} from "express";
import { addRecipe, deleteRecipe, getAllRecipes, getRecipe, updateRecipe } from "../controllers/recipes.controller.js";

const router = Router();

// Define routes
router.post('/recipes', addRecipe);

router.get('/recipes', getAllRecipes);

router.get('/recipes/:id', getRecipe);

router.patch('/recipes/:id', updateRecipe);

router.delete('/recipes/:id', deleteRecipe);

export default router;