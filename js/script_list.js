document.addEventListener("DOMContentLoaded", function() {
    let data;
    let countrySelect = document.getElementById('paises');
    let stateSelect = document.getElementById('departamentos');
    let citySelect = document.getElementById('ciudades');
    let result = document.getElementById("result");
    let resCiud = document.getElementById("resCiud");
    let resDep = document.getElementById("resDep");
    let resPai = document.getElementById("resPai");

  
    countrySelect.addEventListener('change', () => {
        let valoresUnicos1 = new Set(); 
        stateSelect.innerHTML = "";
        stateSelect.add(new Option('Seleccione un Estado'));
        citySelect.innerHTML = "";
        citySelect.add(new Option('Seleccione una Ciudad'));

        for(const element of data) {
            if(countrySelect.value == element.country && element.state != null) {
                valoresUnicos1.add(element.state);
            } else if(countrySelect.value == element.country && element.state == null) {
                citySelect.add(new Option(element.city, element.city));
            }
        }
        let valuni = Array.from(valoresUnicos1);
        valuni.sort();
        for(const estado of valuni) {
            stateSelect.add(new Option(estado, estado));
        }
        if(stateSelect.value == 'Seleccione un Estado' && stateSelect.childElementCount == 1) {
            stateSelect.style.display = 'none';
        } else {
            stateSelect.style.removeProperty('display');
        }
    });

    stateSelect.addEventListener('change', () => {
        citySelect.innerHTML = "";
        citySelect.add(new Option('Seleccione una Ciudad'));

        for(const element of data) {
            if(stateSelect.value == element.state && element.city != null) {
                citySelect.add(new Option(element.city, element.city));
            }
        }
    });

    result.style.display = 'none';
    citySelect.addEventListener('change', () => {
        resCiud.innerHTML = "";
        resPai.innerHTML = "";
        resDep.innerHTML = "";
        if(citySelect.value != 'Seleccione una Ciudad') {
            result.style.removeProperty('display');
            resCiud.innerHTML = citySelect.value;
            resPai.innerHTML = countrySelect.value;
            if(stateSelect.value != 'Seleccione un Estado') {
                resDep.innerHTML = stateSelect.value;
            }

        } else {
            result.style.display = 'none';
        }
    });

    (async () => {
        try {
          let valoresUnicos = new Set();  //experimento
          let response = await fetch('./data/MOCK_DATA.json');
          if (response.ok) {
            data = await response.json();
            console.log(data); // mostramos el objeto en la consola del navegador
            countrySelect.innerHTML = "";
            countrySelect.add(new Option('Seleccione un País'));
            for(const element of data){
                valoresUnicos.add(element.country);
            }
            let valuni = Array.from(valoresUnicos);
            valuni.sort();
            for(const pais of valuni) {
                countrySelect.add(new Option(pais, pais));
            }            
          } else {
            throw new Error(response.statusText);
          }
        } catch (err) {
          console.log("Error al realizar la petición AJAX: " + err.message);
        }
      })();
    
});