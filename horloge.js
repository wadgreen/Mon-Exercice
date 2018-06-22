function rotate() {
    var maDate = new Date();
       
     var heure = maDate.getHours();
     var minutes = maDate.getMinutes();
     var secondes = maDate.getSeconds();

     let Heures = document.getElementById("Heures");
     let Minutes = document.getElementById("Minutes");
     let Secondes = document.getElementById("Secondes");
       
     positionHeure = (360/12 * (heure-12))-90;
     positionMinutes = (360/60 * (minutes))-90;
     positionSecondes = (360/60 * (secondes))-90;
       
     Heures.style.transform ="rotate("+positionHeure+"deg)";
     Minutes.style.transform ="rotate("+positionMinutes+"deg)";
     Secondes.style.transform ="rotate("+positionSecondes+"deg)";
    }
    rotate();
    setInterval(rotate,1000);
