let suscriptores = [];

const form = document.querySelector('#form-registro');
const input = document.querySelector('#input-correo');
const select = document.querySelector('#select-plan');
const lista = document.querySelector('#lista-subs');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let correo = input.value;

    if (correo == "") {
        alert("Ingrese un correo");
    } else {
        let nuevo = {
            correo: correo,
            plan: select.value
        };

        suscriptores.push(nuevo);

        lista.innerHTML = "";

        for (let i = 0; i < suscriptores.length; i++) {
            lista.innerHTML += "<li>" + suscriptores[i].correo + " - " + suscriptores[i].plan + "</li>";
        }

        input.value = "";
    }
});
