export default class Recipe {
    constructor(title, ingredients, directions) {
        this.title       = title;
        this.ingredients = ingredients;
        this.directions  = directions;
        this.createdAt   = Date.now();
    }
    addIngredient(ing) {
        this.ingredients.push(ing);
    }
    addDirections(dir) {
        this.directions.push(dir);
    }
    reorderIngredients(idx1, idx2) {
    }
    reorderDirections(idx1, idx2) {
    }
}