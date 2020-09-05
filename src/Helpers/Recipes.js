function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function randomMeal() {
    const food = [{
        "pictureAddress": "https://www.visitgozo.com/wp-content/uploads/2016/07/gozo-food.jpg",
        "name": "Słoiki",
        "ingredients": ["Słoiki", "Warzywa"],
        "description": "Włóż warzywa do słoików."
    },
    {
        "pictureAddress": "https://blog.hdwallsource.com/wp-content/uploads/2015/12/italian-food-pizza-wallpaper-44477-45603-hd-wallpapers.jpg",
        "name": "Pizza",
        "ingredients": ["Mąka", "Woda"],
        "description": "Włóż mąkę do wody."
    },
    {
        "pictureAddress": "http://i.huffpost.com/gen/1009241/images/o-SUSHI-RECIPE-KOREAN-facebook.jpg",
        "name": "Sushi",
        "ingredients": ["Ryba", "Ryż", "Glony"],
        "description": "Włóż rybę do ryżu i glonów."
    }
    ];
    return food[getRandomInt(0, food.length)]; 
};

export default randomMeal;