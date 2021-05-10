function time(){
    var d = new Date();
    var body = document.querySelector("body");

 

//Days and Months Stored in Arrays
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var month = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]

    //Time Display

    ap = "AM";
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();

    if(hours < 7) {
        body.style.backgroundImage = "url('https://images.pexels.com/photos/1335115/pexels-photo-1335115.jpeg?cs=srgb&dl=pexels-konevi-1335115.jpg&fm=jpg')"
        body.style.height= "100vh";
         body.style.backgroundSize = "cover";
         body.style.backgroundRepeat = "no-repeat"
         body.style.transition = "background-image 0.4s ease-in-out";
   }

 else if (hours > 7 && hours < 15){
    
        body.style.backgroundImage = "url('https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?cs=srgb&dl=pexels-daria-shevtsova-1680140.jpg&fm=jpg')"
        body.style.backgroundSize = "cover";
         body.style.height= "100vh";
         body.style.backgroundRepeat = "no-repeat"
         body.style.transition = "background-image 0.4s ease-in-out";
   }

   else if (hours >= 15 && hours <= 18){
     
        body.style.backgroundImage = "url('https://images.pexels.com/photos/3355788/pexels-photo-3355788.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-3355788.jpg&fm=jpg')"
        body.style.backgroundSize = "cover";
         body.style.height= "100vh";
         body.style.backgroundRepeat = "no-repeat"
         body.style.transition = "background-image 0.4s ease-in-out";
   }

   else if (hours > 18) {
      body.style.backgroundImage = "url('https://images.pexels.com/photos/1368382/pexels-photo-1368382.jpeg?cs=srgb&dl=pexels-vlad-bagacian-1368382.jpg&fm=jpg')"
        body.style.backgroundSize = "cover";
         body.style.backgroundRepeat = "no-repeat"
         body.style.transition = "background-image 0.4s ease-in-out";
   }


    if (hours > 11){
        ap = "PM";
    }
    if(minutes < 10  ){
        minutes = "0" + minutes;
       
    }
    if(seconds < 10){
       seconds = "0" + seconds;
    }
   
    if(hours === 0){
        hours = 12;
    }
    var t = document.querySelector(".clock").innerHTML = `${hours} : ${minutes} ${ap} `;


    //Date Display

    var date = d.getDate();
   
    var year = d.getFullYear();

    var day = weekday[d.getDay()];
    mon = month[d.getMonth()]

    var DD = document.querySelector(".date");

    DD.innerHTML = `${day},  ${mon} ${date},   ${year}`


    //Img change based on time of day
   
   
  
  

    t = setTimeout("time()", 500)
}

