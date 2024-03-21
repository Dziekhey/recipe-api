import { RecipeModel } from "../models/recipe.js";

export const addRecipe = async (req, res) => {
// Add recipe to database
const createResult = await RecipeModel.create(req.body);
// Return response
res.status(201).json(createResult);
};

export const getAllRecipes = async (req, res) => {
//  Get all recipes from database
const findResults = await RecipeModel.find();
// Return response
res.status(200).json(findResults);
};

export const getRecipe = (req, res) => {
    res.send(`Get recipes by id: ${req.params.id}`);
};

export const updateRecipe = (req, res) => {
    res.send(`Update recipes by id: ${req.params.id}`);
};

export const deleteRecipe = (req, res) => {
    res.send(`Delete recipes by id: ${req.params.id}`);
}