

var countryStateCityinfo= {
    Australia: {
        "Western Australia": {
            Broome: ["4657", "2345", "7896"],
            Coolgardie: ["1234", "2845", "3896"],
        },
        "Tasmania": {
            Hobart: ["0957", "5645", "4896"],
            Launceston: ["3134", "8745", "5696"],
            Burnie: ["1294", "2825", "3346"],
        },
    },
    Pakistan: {
        "Punjab": {
            Layyah: ["4634", "2378", "7066"],
            Multan: ["1564", "1845", "4396"],
        },
        "Sindh": {
            Karachi: ["0950", "5345", "9896"],
            NawabShah: ["3434", "3975", "2396"],
            Sakkar: ["1264", "2897", "3676"],
        },
    },
}

window.onload = function(){
    const selectCountry = document.getElementById('country');
    const selectState = document.getElementById("state");
    const selectCity = document.getElementById("city");
    const selectZip = document.getElementById("zip");
    const selects = document.querySelectorAll("select") ;    

    selectState.disabled = true;
    selectCity.disabled = true;
    selectZip.disabled = true;

    selects.forEach(select => {
        if(select.disabled == true){
            select.style.cursor = "auto";
        }
        else{
            select.style.cursor = "pointer";
        }
    })

    for (let country in countryStateCityinfo){
          selectCountry.options[selectCountry.options.length] = new Option(country, country)
    }

    selectCountry.onchange = (e) =>{
        selectState.disabled = false;
        selectCity.disabled = true;
        selectZip.disabled = true;


        selects.forEach(select => {
            if(select.disabled == true){
                select.style.cursor = "auto";
            }
            else{
                select.style.cursor = "pointer";
            }
        })

        selectState.length= 1;
        selectCity.length= 1;
        selectZip.length= 1;

        for(let state in countryStateCityinfo[e.target.value]){
            selectState.options[selectState.options.length] = new Option(state, state)
        }
    }
    selectState.onchange = (e) =>{
        selectCity.disabled = false;
        selectZip.disabled = true;
        

        selects.forEach(select => {
            if(select.disabled == true){
                select.style.cursor = "auto";
            }
            else{
                select.style.cursor = "pointer";
            }
        })

        selectCity.length= 1;
        selectZip.length= 1;

        for(let city in countryStateCityinfo[selectCountry.value][e.target.value]){
            selectCity.options[selectCity.options.length] = new Option(city, city)
        }
    }
    selectCity.onchange = (e) =>{
        selectZip.disabled = false;


        selects.forEach(select => {
            if(select.disabled == true){
                select.style.cursor = "auto";
            }
            else{
                select.style.cursor = "pointer";
            }
        }) 
        selectZip.length= 1;

        let zips = countryStateCityinfo[selectCountry.value][selectState.value][e.target.value];
            for(let i=0; i<zips.length; i++){
                selectZip.options[selectZip.options.length] = new Option(zips[i], zips[1])
            }
    }
}