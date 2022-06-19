class Trail {
    constructor(name, image, distance, rating, time) {
        this.name = name;
        this.image = image;
        this.distance = distance;
        this.rating = rating;
        this.time = time;
    }
}

// create a list to save each new trail
trails = [];

//add each new trail to the trails list as trail objects
trails[0] = new Trail('Longshore Path', 'images/longshore.jpg',17.2, 'Moderate to Difficult', 6);
trails[1] = new Trail('Piccos Ridge Path', 'images/piccos.jpg', 14.5, 'Strenuous', 7);
trails[2] = new Trail('Whitehorse Path', 'images/whitehorse.jpg',18.2, 'Strenuous', 8);
trails[3] = new Trail('Biscan Cove Path', 'images/biscan.jpg',7.0, 'Moderate to Difficult', 2);
trails[4] = new Trail('Stiles Cove Path', 'images/stiles.jpg',15.1, 'Moderate', 5);
trails[5] = new Trail('Father Troy\'s Trail', 'images/FT.jpg',8.9, 'Easy', 2);
trails[6] = new Trail('Silver Mine Head Path', 'images/silvermine.jpg',3.8, 'Easy', 2);
trails[7] = new Trail('Cobblers Path', 'images/cobblers.jpg',5.0, 'Moderate', 2);
trails[8] = new Trail('Sugarloaf Path', 'images/sugarloaf.jpg',8.8, 'Moderate to Difficult', 3);
trails[9] = new Trail('Deadmans Bay Path', 'images/deadmans.jpg',10.5, 'Moderate to Difficult', 4);
trails[10] = new Trail('Cape Spear Path', 'images/capespear.jpg',15.4, 'Moderate', 5);
trails[11] = new Trail('Motion Path', 'images/motion.jpg',13.8, 'Moderate to Difficult', 5);
trails[12] = new Trail('Spout Path', 'images/spout.jpg',16.2, 'Strenuous', 6);
trails[13] = new Trail('Mickeleens Path', 'images/mickel.jpg',7.2, 'Easy to Moderate', 2);
trails[14] = new Trail('Beaches Path', 'images/beaches.jpg',7.1, 'Easy', 2);
trails[15] = new Trail('Tinkers Point Path', 'images/tinker.jpg',5.0, 'Easy', 2);
trails[16] = new Trail('LaManche Village Path', 'images/lamanche.jpg',6.4, 'Easy', 2);
trails[17] = new Trail('Flamber Head Path', 'images/flamber.jpg',11.5, 'Moderate to Difficult', 5);
trails[18] = new Trail('Brigus Head Path', 'images/brigus.jpg',6.4, 'Moderate', 2);
trails[19] = new Trail('Cape Broyle Head Path', 'images/capebroyle.jpg',19.4, 'Strenuous', 6);
trails[20] = new Trail('Caplin Bay Path', 'images/caplin.jpg',5.6, 'Easy to Moderate', 2);
trails[21] = new Trail('Sounding Hills Path', 'images/sounding.jpg',5.4, 'Easy to Moderate', 2);
trails[22] = new Trail('Spurwink Island Path', 'images/spurwink.jpg',20.4, 'Difficult', 7);
trails[23] = new Trail('Bear Cove Point Path', 'images/bearcove.jpg',11.9, 'Moderate', 4);
trails[24] = new Trail('Island Meadow Path', 'images/islandmeadow.jpg',10.0, 'Moderate', 3);


// loop the trails list and send each object to the createTrailDiv function
trails.forEach(createTrailDiv);

function createTrailDiv(trailObject){

    let trailContainer = document.createElement("div");
    trailContainer.className = "trail-container";

    let titleElement = document.createElement('h1');
    titleElement.classList.add('trail-title');
    titleElement.innerText = trailObject.name;

    let imgElement = document.createElement('img');
    imgElement.classList.add('event-img');
    imgElement.src = trailObject.image;

    let distanceElement = document.createElement('p');
    distanceElement.classList.add('event-explanation');
    distanceElement.innerText = "Distance: " + trailObject.distance;

    let ratingElement = document.createElement('p');
    ratingElement.classList.add('event-explanation');
    ratingElement.innerText = "Rating: " + trailObject.rating;


    let timeElement = document.createElement('p');
    timeElement.classList.add('event-explanation');
    timeElement.innerText = "Time: " + trailObject.time + " Hours";


    let checkboxElement = document.createElement('p');
    checkboxElement.classList.add('event-explanation');
    checkboxElement.innerHTML = "<input type=\"checkbox\">Add this to my list!</p> ";


    trailContainer.appendChild(titleElement);
    trailContainer.appendChild(imgElement);
    trailContainer.appendChild(distanceElement);
    trailContainer.appendChild(ratingElement);
    trailContainer.appendChild(timeElement);
    trailContainer.appendChild(checkboxElement);

    document.querySelector('#trailDiv').appendChild(trailContainer);

    let totalDistance = 0;
    let totalTime = 0;

    for (let i = 0; i < trailObject.length; i++) {
        checkboxElement.addEventListener('click', () =>{
            totalDistance += trailObject[i].distance;
            totalTime += trailObject[i].time;
        });
    }
    let paceAvg = trailObject[i].totalTime / trailObject[i].totalDistance;


    let paceContainer = document.createElement("div");
    paceContainer.className = "pace-container";

    let totalDistanceElement = document.createElement('p');
    totalDistanceElement.classList.add('event-explanation');
    totalDistanceElement.innerText = "Distance: " + totalDistance;

    let totalTimeElement = document.createElement('p');
    totalTimeElement.classList.add('event-explanation');
    totalTimeElement.innerText = "Rating: " + totalTime;


    let paceAvgElement = document.createElement('p');
    totalPaceElement.classList.add('event-explanation');
    totalPaceElement.innerText = "Average Pace: " + paceAvg;

    paceContainer.appendChild(totalDistanceElement);
    paceContainer.appendChild(totalTimeElement);
    paceContainer.appendChild(paceAvgElement);

    document.querySelector('#trailDiv').appendChild(paceContainer);

}

