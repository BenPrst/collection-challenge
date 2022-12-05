const collection = [
{
    name: "KAS:ST",
    country: "France",
    genre: "Electro",
    fvsong: "Hell on earth",
    fvalbum: "A Magic World",
},
{
    name: "NTO",
    country: "France",
    genre: "Electro",
    fvsong: "Time",
    fvalbum: "Apnea",
},
{
    name: "Underworld",
    country: "British",
    genre: "Electro",
    fvsong: "Born Slippy",
    fvalbum: "Compilation 1992-2012",
},
{
    name: "Lil Peep",
    country: "US",
    genre: "EmoRap",
    fvsong: "Star Shopping",
    fvalbum: "Come over when you're sober",
}
]

//divC creation
let divP = document.getElementById("divP");
let divC = document.createElement("div");
let currentDiv = document.getElementsByClassName("div");
divP.appendChild(divC);

//h2 creation
let h2 = document.createElement("h2");
divC.appendChild(h2);
let h2Title1 = document.createTextNode(collection[0].name)
h2.appendChild(h2Title1)

//l2 creation
let list = document.createElement("ul")
for (let i of collection){
    let li = document.createElement("li");
    li.innerHTML = i;
    list.appendChild(li);
}
document.getElementsById(currentDiv).appendChild(list);



