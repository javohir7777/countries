const toggleLight=document.querySelector("#toggleLight");
const navImg=toggleLight.querySelector(".nav__img");
const body=document.querySelector("body");
const section=document.querySelector("section");

toggleLight.addEventListener("click",function(){
    this.classList.toggle("bi-moon");
    if(this.classList.toggle("bi-brightness-high")){
        body.style.background = "#fff";
        body.style.color = "#111517";
        section.style.backgroundColor = "#FAFAFA";
    }else{
        body.style.background="#2B3844";
        body.style.color = "#fff"
        section.style.backgroundColor = "#202C36";
    }
})

let url="https://ap-countries-api.vercel.app/all";
const row=document.querySelector(".row")

function countries(data){
    let str="";
    console.log(data.data);
    data.data.forEach((country)=>{
        const row=document.querySelector(".row");
        str += `
        <div class="col-12 col-md-6 col-lg-3">
                    <div class="card">
                        <img src="${country.flags.png}" alt="">
                        <div class="card-body">
                            <h4 class="card-title">${country.name.common}</h4>
                            <p class="card-text">Population: <span>${country.population}</span></p>
                            <p class="card-text">Region: <span>${country.region}</span></p>
                            <p class="card-text">Capital: <span>${country.capital}</span></p>
                        </div>
                    </div>
        </div>
        `;
        row.innerHTML=str;
    })
}

async function fetchPromise(){
    let options={
        method:"GET",
    }
    try{
        let res=await fetch(url,options);
        let data=await res.json();
        // console.log(data.data);
        countries(data)
    }catch{
        console.log("err");
    }
}
fetchPromise()
