function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const recipes = [{
    "id": 0,
    "pictureAddress": "https://www.visitgozo.com/wp-content/uploads/2016/07/gozo-food.jpg",
    "name": "Słoiki",
    "ingredients": ["Słoiki", "Warzywa"],
    "description": "Włóż warzywa do słoików."
},
{
    "id": 1,
    "pictureAddress": "https://blog.hdwallsource.com/wp-content/uploads/2015/12/italian-food-pizza-wallpaper-44477-45603-hd-wallpapers.jpg",
    "name": "Pizza",
    "ingredients": ["Mąka", "Woda"],
    "description": "Włóż mąkę do wody."
},
{
    "id": 2,
    "pictureAddress": "http://i.huffpost.com/gen/1009241/images/o-SUSHI-RECIPE-KOREAN-facebook.jpg",
    "name": "Sushi",
    "ingredients": ["Ryba", "Ryż", "Glony"],
    "description": "Włóż rybę do ryżu i glonów."
}
];

const randomRecipe = () => recipes[getRandomInt(0, recipes.length)];

export { randomRecipe, recipes as meals };