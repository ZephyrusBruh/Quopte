let quoteText = document.getElementById("quote");
let authorText = document.getElementById("author");

let butt = document.getElementById("showOther");
let quotes = ["A journey of a thousand miles begins with a single step.","You can never be overdressed or overeducated", 
    "Every year, many, many stupid people graduate from college. And if they can do it, so can you.", "My specialty is detached malevolence.", "Don’t worry about the world coming to an end today. It is already tomorrow in Australia."];
let author = ["-Sun Tzu","-Oscar Wilde", "-John Green", "-Alice Roosevelt Longworth", "-Charles Shulz"];
let photos = ["https://www.thefamouspeople.com/profiles/images/sun-tzu-4.jpg","https://upload.wikimedia.org/wikipedia/commons/9/9c/Oscar_Wilde_portrait.jpg",
    "https://funeratic.com/image/goo-square/celebrity-goo-game/source/john-green-2.jpg","https://allthatsinteresting.com/wordpress/wp-content/uploads/2019/03/alice-roosevelt-portrait.jpg"
    ,"https://freshairarchive.org/sites/default/files/styles/square_1600/public/2022-01/CharlesSchulz.jpg?itok=yMsCd67z"]

document.getElementById("showOther").addEventListener("click", handleClick);

function handleClick(){
    let rand = Math.floor(Math.random() * quotes.length);
    changeQuote(rand);
    changeAuthor(rand);
    changeImage(rand);
}

function changeQuote(rand){
    quoteText.innerText=quotes[rand];
}

function changeAuthor(rand){
    authorText.innerText=author[rand];
}

function changeImage(rand){
    document.getElementById("person").src = photos[rand];
    console.log(document.getElementById("person").src);
}