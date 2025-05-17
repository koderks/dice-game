if (performance.getEntriesByType("navigation")[0].type === "reload") {

    var randomNumber1 = (Math.floor(Math.random()*6))+1; //gives number from 1-6

    var imageSrc1 = "images/dice"+randomNumber1+".png";

    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", imageSrc1);

    var randomNumber2 = (Math.floor(Math.random()*6))+1; //gives number from 1-6

    var imageSrc2 = "images/dice"+randomNumber2+".png";

    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", imageSrc2);

    if(randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML= "Player 1 Wins!";
    }else if(randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }else if(randomNumber1 == randomNumber2) {
            document.querySelector("h1").innerHTML = "Draw!";
    }
}