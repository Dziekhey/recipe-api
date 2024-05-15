import { Router} from "express";
import { addRecipe, deleteRecipe, getAllRecipes, getRecipe, updateRecipe } from "../controllers/recipes.controller.js";
import multer from "multer";
import {multerSaveFilesOrg} from 'multer-savefilesorg'; 



// Create recipes router
const router = Router();


// Create multer upload middleware
const upload = multer({
    storage: multerSaveFilesOrg({
        serverPath: `https://savefiles.org/api/v1/uploads`,
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/recipes/images/*'
    })
  });


// Define routes
router.post('/recipes', upload.single('image'), addRecipe);

router.get('/recipes', getAllRecipes);

router.get('/recipes/:id', getRecipe);

router.patch('/recipes/:id', updateRecipe);

router.delete('/recipes/:id', deleteRecipe);

export default router;