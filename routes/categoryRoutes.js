import exprees from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "../controller/categoryController.js"

const router = exprees.Router();

// routes
router.post('/create-category', requireSignIn, isAdmin, createCategoryController);

// update category
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController);

// getAll categories;
router.get('/get-category', categoryController);

// single category
router.get('/single-category/:slug', singleCategoryController);

// delete category
router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategoryController);

export default router;