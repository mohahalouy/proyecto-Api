let calcular = document.getElementById("calcular");
let select = document.getElementById("select");
let select2 = document.getElementById("select2");
let cantidad = document.getElementById("cantidad");





const lista = () => {
    fetch('https://openexchangerates.org/api/currencies.json')
        .then((response) => response.json())
        .then(JSON => {
            mostrarLista(JSON);

        });
    const fragment = new DocumentFragment();
    const fragment2 = new DocumentFragment();

    mostrarLista = (datos) => {
        console.log(datos)


        for (var i in datos) {
            console.log(datos[i])
            console.log(i)
            let opt = document.createElement("OPTION");
            opt.textContent = i;
            select.value = i;
            fragment.append(opt);

            let opt2 = document.createElement("OPTION");
            opt2.textContent = i;
            select2.value = i;
            fragment2.append(opt2);

        }
        select.appendChild(fragment)
        select2.appendChild(fragment2)
    }
}

document.addEventListener("DOMContentLoaded", lista)



/* const calculo = () => {
    fetch("https://cors-anywhere.herokuapp.com/http://api.cambio.today/v1/quotes/" + select.value + "/" + select2.value + "/json?quantity=" + cantidad.value + "&key=7579|~1DFiM2q0GoTPeGr1^KMY0bryYPgE3jZ")
        .then((response) => response.json())
        .then(JSON => {
            console.log(JSON)
            mostrarDatos(JSON);

        });
    mostrarDatos = (datos) => {

    }
}

calcular.addEventListener("click", calculo) */