

document.addEventListener("DOMContentLoaded", function () {
  changeToWeekly();
});

function changeToDaily(){
    document.getElementById("daily").classList.add("active");
    document.getElementById("monthly").classList.remove("active");
    document.getElementById("weekly").classList.remove("active");

    if (window.matchMedia('(min-width: 769px)').matches){
        //rotateContentModified();
    }

    document.querySelector(".work-hours").textContent="5hrs";
    document.querySelector(".work-previous-hours").textContent="last day - 7hrs";

    document.querySelector(".play-hours").textContent="1hrs";
    document.querySelector(".play-previous-hours").textContent="last day - 2hrs";

    document.querySelector(".study-hours").textContent="0hrs";
    document.querySelector(".study-previous-hours").textContent="last day - 1hrs";

    document.querySelector(".exercise-hours").textContent="1hrs";
    document.querySelector(".exercise-previous-hours").textContent="last day - 1hrs";

    document.querySelector(".social-hours").textContent="1hrs";
    document.querySelector(".social-previous-hours").textContent="last day - 3hrs";

    document.querySelector(".self-care-hours").textContent="0hrs";
    document.querySelector(".self-care-previous-hours").textContent="last day - 1hrs";


}


function changeToWeekly(){
    document.getElementById("weekly").classList.add("active");
    document.getElementById("daily").classList.remove("active");
    document.getElementById("monthly").classList.remove("active");


    if (window.matchMedia('(min-width: 769px)').matches){
        //rotateContentModified();
    }

    document.querySelector(".work-hours").textContent="32hrs";
    document.querySelector(".work-previous-hours").textContent="last week - 36hrs";

    document.querySelector(".play-hours").textContent="10hrs";
    document.querySelector(".play-previous-hours").textContent="last week - 8hrs";

    document.querySelector(".study-hours").textContent="4hrs";
    document.querySelector(".study-previous-hours").textContent="last week - 7hrs";

    document.querySelector(".exercise-hours").textContent="4hrs";
    document.querySelector(".exercise-previous-hours").textContent="last week - 5hrs";

    document.querySelector(".social-hours").textContent="5hrs";
    document.querySelector(".social-previous-hours").textContent="last week - 10hrs";

    document.querySelector(".self-care-hours").textContent="2hrs";
    document.querySelector(".self-care-previous-hours").textContent="last week - 2hrs";

}


function changeToMonthly(){
    document.getElementById("monthly").classList.add("active");
    document.getElementById("daily").classList.remove("active");
    document.getElementById("weekly").classList.remove("active");


    if (window.matchMedia('(min-width: 769px)').matches){
        //rotateContentModified();
    }

    document.querySelector(".work-hours").textContent="103hrs";
    document.querySelector(".work-previous-hours").textContent="last month - 128hrs";

    document.querySelector(".play-hours").textContent="23hrs";
    document.querySelector(".play-previous-hours").textContent="last month - 29hrs";

    document.querySelector(".study-hours").textContent="13hrs";
    document.querySelector(".study-previous-hours").textContent="last month - 19hrs";

    document.querySelector(".exercise-hours").textContent="11hrs";
    document.querySelector(".exercise-previous-hours").textContent="last month - 18hrs";

    document.querySelector(".social-hours").textContent="21hrs";
    document.querySelector(".social-previous-hours").textContent="last month - 23hrs";

    document.querySelector(".self-care-hours").textContent="7hrs";
    document.querySelector(".self-care-previous-hours").textContent="last month - 11hrs";
    
}


function rotateContent() {
    const contents = document.querySelectorAll(".content");

    contents.forEach((element) => {
        //transizioni nulle all'inizio
        element.style.transition = "none";
        element.style.transform = "rotateX(0deg)";
        
        //reset visivo
        void element.offsetWidth;
        //transizione
        element.style.transition = "transform 2s";
        element.style.transform = "rotateX(360deg)";

    });
}


function rotateContentModified() {
    const contents = document.querySelectorAll(".content");
    const hours = [
        document.querySelector(".work-hours"),
        document.querySelector(".play-hours"),
        document.querySelector(".study-hours"),
        document.querySelector(".exercise-hours"),
        document.querySelector(".social-hours"),
        document.querySelector(".self-care-hours"),
    ]
    const prevHours = [
        document.querySelector(".work-previous-hours"),
        document.querySelector(".play-previous-hours"),
        document.querySelector(".study-previous-hours"),
        document.querySelector(".exercise-previous-hours"),
        document.querySelector(".social-previous-hours"),
        document.querySelector(".self-care-previous-hours"),
    ]

    contents.forEach((element) => {
        //transizioni nulle all'inizio
        element.style.transition = "none";
        element.style.transform = "rotateX(0deg)";

        hours.forEach((singleHour) =>{
            singleHour.style.opacity = "0";
        });
        prevHours.forEach((singlePrevHour) =>{
            singlePrevHour.style.opacity = "0";
        });

        //element.style.opacity = "0"
        //reset visivo
        void element.offsetWidth;
        //transizione
        element.style.transition = "transform 2s";
        element.style.transform = "rotateX(360deg)";

        
        setTimeout(() => {
            hours.forEach((singleHour) =>{
                singleHour.style.opacity = "1";
            });
            prevHours.forEach((singlePrevHour) =>{
                singlePrevHour.style.opacity = "1";
            });

            //element.style.opacity = "1";
        }, 400);
        

    });
}
