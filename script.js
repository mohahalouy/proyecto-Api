let calcular = document.getElementById("calcular");
let select = document.getElementById("select");
let select2 = document.getElementById("select2");
let cantidad = document.getElementById("cantidad");
let form = document.getElementById("form");

const lista = () => {
    fetch("https://openexchangerates.org/api/currencies.json")
        .then((response) => response.json())
        .then((JSON) => {
            mostrarLista(JSON);
        });
    const fragment = new DocumentFragment();
    const fragment2 = new DocumentFragment();

    mostrarLista = (datos) => {
        console.log(datos);

        for (var i in datos) {
            //lo recorro con un for in ya que al ser uin objeto no puedo recorrerlo con un for of
            //la i en este caso es el indice pero la necesito ya que en este array el indice es la moneda

            /* console.log(datos[i])
                                                            console.log(i) */
            let opt = document.createElement("OPTION");
            opt.textContent = i;
            select.value = i;
            fragment.append(opt);

            let opt2 = document.createElement("OPTION");
            opt2.textContent = i;
            select2.value = i;
            fragment2.append(opt2);
        }
        select.appendChild(fragment);
        select2.appendChild(fragment2);
    };
};

document.addEventListener("DOMContentLoaded", lista);

const calculo = () => {
    fetch(
            "https://cors-anywhere.herokuapp.com/http://api.cambio.today/v1/quotes/" +
            select.value +
            "/" +
            select2.value +
            "/json?quantity=" +
            cantidad.value +
            "&key=7613|kWCPohtrSfKkBG~DyoOzP7G*ZJSZm3VX"
        )
        .then((response) => response.json())
        .then((JSON) => {
            console.log(JSON);
            mostrarDatos(JSON);
        });
    mostrarDatos = (datos) => {
        resultado = datos.result.value;
        let input = document.createElement("INPUT");
        input.value = resultado;
        input.style.textAlign = "center";
        form.appendChild(input);

        form.removeChild(form.childNodes[4]);
    };
};

calcular.addEventListener("click", calculo);

let fotos = [
    "peso.jpg",
    "libra.jpg",
    "dolar.jpg",
    "euro.jpg",
    "dirham.jpg",
    "dirham2.jpg",
    "suriname.jpg",
    "laotian.jpg",
    "uganda.jpg",
    "panamanian.jpg",
];

let galeria = document.getElementById("galeria");

const Imagenes = () => {
    for (let i = 0; i < fotos.length; i++) {
        let ale = Math.floor(Math.random() * fotos.length);
        let imagen = document.createElement("IMG");
        imagen.src = fotos[ale];
        imagen.style.width = 100 + "%";
        imagen.style.height = 100 + "%";
        imagen.style.objectFit = "cover";
        imagen.style.borderRadius = 5 + "px";
        galeria.appendChild(imagen);
    }
};
document.addEventListener("DOMContentLoaded", Imagenes);