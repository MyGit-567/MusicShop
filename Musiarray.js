var fluteInstrument = {
    description: "Beautiful flute",
    id: 1,
    imagePath: "flute.jpg",
    instrumentOrders: null,
    instrumentType: { id: 1, name: "exhalation" },
    name: "Flute",
    price: 50,
    typeID: 1,
}

var harmonicaInstrument = {
    description: "Beautiful harmonica",
    id: 2,
    imagePath: "harmonica.jpg",
    instrumentOrders: null,
    instrumentType: { id: 2, name: "exhalation" },
    name: "harmonica",
    price: 35,
    typeID: 2,
}

var trumpetInstrument = {
    description: "Beautiful trumpet",
    id: 3,
    imagePath: "trumpet.jpg",
    instrumentOrders: null,
    instrumentType: { id: 3, name: "exhalation" },
    name: "Ttrumpet",
    price: 1500,
    typeID: 3,
}

var tromboneInstrument = {
    description: "Beautiful trombone",
    id: 4,
    imagePath: "trombone.jpg",
    instrumentOrders: null,
    instrumentType: { id: 4, name: "exhalation" },
    name: "trombone",
    price: 2400,
    typeID: 4,
}

var clarinetInstrument = {
    description: "Beautiful clarinet",
    id: 5,
    imagePath: "clarinet.jpg",
    instrumentOrders: null,
    instrumentType: { id: 5, name: "exhalation" },
    name: "clarinet",
    price: 35,
    typeID: 5,
}

var violinInstrument = {
    description: "Beautiful violin",
    id: 6,
    imagePath: "violin.jpg",
    instrumentOrders: null,
    instrumentType: { id: 6, name: "chord" },
    name: "violin",
    price: 2300,
    typeID: 6,
}


var musics = [fluteInstrument, harmonicaInstrument, trumpetInstrument, tromboneInstrument, clarinetInstrument, violinInstrument]

function CreatElements() {

    for (i = 0; i < musics.length; i++) {

        var startnow = document.getElementsByClassName("row")[1];

        var size = document.createElement("div");
        size.className = "col-4";
        startnow.appendChild(size);

        var frame = document.createElement("div");
        frame.className = "card mb-3 shadow-sm";
        size.appendChild(frame);

        var card = document.createElement("div");
        card.className = 'card body';
        frame.appendChild(card);

        var Image = document.createElement("img");
        Image.className = "image card";
        Image.setAttribute('src', musics[i].imagePath);
        card.appendChild(Image);

        var name = document.createElement("h3");
        name.className = "name card";
        name.innerHTML = musics[i].name;
        card.appendChild(name);

        var description = document.createElement("h5");
        description.className = "description card";
        description.innerHTML = musics[i].description;
        card.appendChild(description);

        var price = document.createElement("h5");
        price.className = "price card";
        price.innerHTML = musics[i].price;
        card.appendChild(price);

        var btn = document.createElement("a");
        btn.className = "btn btn-block btn-primary text-uppercase";
        btn.innerHTML = "Add to chart";
        card.appendChild(btn);

    }
}
CreatElements();


function Searching() {
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    for (i = 0; i < musics.length; i++) {
        txtValue = musics[i].name;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            console.log(txtValue);
            document.getElementsByClassName("card body")[i].style.display = 'unset';
        } else {
            document.getElementsByClassName("card body")[i].style.display = 'none';
        }
    }
}


function choosetheType(type) {
    for (let i = 0; i < musics.length; i++) {
        document.getElementsByClassName("col-4")[i].style.display = 'unset';
    }
    for (let j = 0; j < musics.length; j++) {
        if (musics[j].instrumentType.name != type) {
            document.getElementsByClassName("col-4")[j].style.display = 'none';
        }
    }
}

function showall() {
    for (let i = 0; i < musics.length; i++) {
        document.getElementsByClassName("col-4")[i].style.display = 'unset';
    }
}

function filtering() {
    for (let i = 0; i < musics.length; i++) {
        if (musics[i].instrumentType.price < 500) {
            document.getElementsByClassName("col-4")[i].style.display = 'unset';
        } else {
            document.getElementsByClassName("col-4")[i].style.display = 'none';
        }
    }
}
/*
function Price(min, max) {
    for (var i = 0; i < musics.length; i++) {
        document.getElementById(i).style.display = 'unset';

    }*/


for (var i = 0; i < musics.length; i++) {

    if (musics[i].price < maxfilter && musics[i].price >= minfilter) {
        document.getElementById(i).style.display = 'block';
    }
    //  if (array_Instruments[i].price>2000)
    //  {
    //      document.getElementById(i).style.display = 'block';
    //  }
    else {
        document.getElementById(i).style.display = 'none';

    }


}