export default class RecipeBook {
    constructor(title, isPrivate) {
        this.title     = title;
        this.isPrivate = isPrivate;
        this.recipes   = [];
    } 
    save() {
    }
    addRecipe(recipe) {
        this.recipes.push(recipe);
    }
}