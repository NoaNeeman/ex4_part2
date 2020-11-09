
var aDiv, atext, aImage;
var animalDiv = [];
var isPen = [];

/*classes*/
class Animal {
    constructor(pX, pY) {
        aDiv = document.createElement("div");
        aDiv.style.position = "fixed";
        aDiv.style.top = pX + "px";
        aDiv.style.left = pY + "px";
        //can remove animal completely by clicking on it
        aDiv.addEventListener("click", function () {
            let idx = animalDiv.indexOf(this);
            aData.splice(idx, 1);
            animalDiv.splice(idx, 1);
            isPen.splice(idx, 1);
            this.remove();
        });
        atext = document.createElement("p");
        aImage = document.createElement("img");
    }
}

class Elephant extends Animal {
    constructor(pX, pY, pWeight) {   
        super(pX, pY);       
        atext.innerHTML = "The Elephant Weight is: " + pWeight + " kg";
        aImage.src = "./images/img01.jpg";
        aDiv.appendChild(aImage);
        aDiv.appendChild(atext);
        document.body.appendChild(aDiv);
        isPen.push(false);
        animalDiv.push(aDiv)
	}
}

class Rabbit extends Animal{
    constructor(pX, pY, pSpeed) {
        super(pX, pY);
        atext.innerHTML = "The Rabbit speed is: " + pSpeed + " km/h";
        aImage.src = "./images/img02.jpg";
        aDiv.appendChild(aImage);
        aDiv.appendChild(atext);
        document.body.appendChild(aDiv);
        isPen.push(false);
        animalDiv.push(aDiv)
    }
}

class Penguin extends Animal{
    constructor(pX, pY, pSwimmingSpeed) {
        super(pX, pY);
        atext.innerHTML = "The Penguin swimming speed is: " + pSwimmingSpeed + " km/h";
        aImage.src = "./images/img03.jpg";
        aDiv.appendChild(aImage);
        aDiv.appendChild(atext);
        document.body.appendChild(aDiv);
        isPen.push(true);
        animalDiv.push(aDiv)
    }
}

class ListAnimals {
    constructor(arrA) {
        arrA.forEach((item) => {
            switch (item.type) {
                case "elephant":
                    new Elephant(item.locX, item.locY, item.weight);
                    break;
                case "rabbit":
                    new Rabbit(item.locX, item.locY, item.speed);
                    break;
                case "penguin":
                    new Penguin(item.locX, item.locY, item.swimmingSpeed)
            }
        })
    }
}
/*end of classes*/

let aData = [{ "locX": 220, "locY": 40, "type": "elephant", "weight": 660 }, { "locX": 20, "locY": 240, "type": "rabbit", "speed": 44 }, { "locX": 410, "locY": 40, "type": "penguin", "swimmingSpeed": 660 }, { "locX": 20, "locY": 440, "type": "elephant", "weight": 660 }, { "locX": 20, "locY": 440, "type": "penguin", "swimmingSpeed": 660 }, { "locX": 5, "locY": 10, "type": "elephant", "weight": 780 }, { "locX": 200, "locY": 280, "type": "elephant", "weight": 660 }, { "locX": 260, "locY": 10, "type": "elephant", "weight": 660 }];
console.log(aData);

let animals = new ListAnimals(aData);

//hide all animals except penguin;
hide_Except_Pen = () => {
    isPen.forEach(function (item, index) {
        if (!item) animalDiv[index].setAttribute("hidden", "")
    })
}

//show all animals
show_All_Animals = () => {
    isPen.forEach(function (item, index) {
        if (!item) animalDiv[index].removeAttribute("hidden")
    })
}

//add random animal
random_A = () => {
    rnd_indx = Math.floor(Math.random() * 3)
    rnd_x = Math.floor(Math.random() * 500);
    rnd_y = Math.floor(Math.random() * 800);
    rnd_p = Math.floor(Math.random() * 1000);
    switch (rnd_indx) {
        case 0:
            rand_animal = new Elephant(rnd_x, rnd_y, rnd_p);
            break;
        case 1:
            rand_animal = new Rabbit(rnd_x, rnd_y, rnd_p);
            break;
        case 2:
            rand_animal = new Penguin(rnd_x, rnd_y, rnd_p);
    }
}

