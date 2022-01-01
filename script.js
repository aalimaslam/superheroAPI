const URL = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";
const $ = s=>document.querySelector(s);

const request = new XMLHttpRequest();

request.open("GET", URL);

const container = $(".container")

request.onload = ()=>{

    const response = JSON.parse(request.response)

    for(let i =0; i<response.length; i+=5){
        let superHeroName = response[i].name;
        let superPowerStats = response[i].powerstats;
        let superHeroWeight = response[i].appearance.weight[1];
        let superHeroFirstAppearance = response[i].biography.firstAppearance;
        let imageSource = response[i].images.lg;
        
        const innerContainer = document.createElement("div");
        innerContainer.className = "superhero-card";

        const imageContainer = document.createElement("div");
        const image = document.createElement("img");
        imageContainer.className = "image-cantainer";
        image.src = imageSource;
        imageContainer.appendChild(image);
        innerContainer.appendChild(imageContainer);

        const nameContainer = document.createElement('div');
        const nameHolder = document.createElement("h1");
        const weightHolder = document.createElement("small");
        weightHolder.className = "weight"
        nameContainer.className = "title";
        nameHolder.className = 'name';
        nameHolder.innerText = superHeroName;
        weightHolder.innerText = superHeroWeight;
        nameContainer.appendChild(nameHolder);
        nameContainer.appendChild(weightHolder);
        innerContainer.appendChild(nameContainer);

        const informationContainer = document.createElement("div");
        informationContainer.className = "information";

        const outerUl = document.createElement("ul");
        const outerLi = document.createElement("li");
        const innerUl = document.createElement("ul");
        const firstAppearance = document.createElement("h4");
        firstAppearance.innerText = `First Appearance : ${superHeroFirstAppearance}`;

        outerLi.appendChild(innerUl);
        outerUl.appendChild(outerLi);

        const stringOfPowers = ["Intelligence : ", "Strength : ", "Speed : ", "Durability : ", "Power : ", "Combat : "]
        let j = 0;
        for(let key in superPowerStats){
            if(superPowerStats.hasOwnProperty(key)){
                const li = document.createElement("li");
                li.innerText = `${stringOfPowers[j]}${superPowerStats[key]}`
                innerUl.appendChild(li);
                j++;
            }
            
        }
        outerLi.appendChild(firstAppearance);

        informationContainer.appendChild(outerUl)

        innerContainer.appendChild(informationContainer)
        container.appendChild(innerContainer)

        
    }

}


request.send()

// for (var key in p) {
//     if (p.hasOwnProperty(key)) {
//         console.log(key + " -> " + p[key]);
//     }
// }