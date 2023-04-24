var id = document.getElementById("txtId");
var nombre = document.getElementById("txtNombre");
var sexo = document.getElementById("sx");
var ciclo = document.getElementById("cic");
var escuprof = document.getElementById("escu");
var fila = "";
var est = 0;
function guardarCambios(){
    if(est === 0){
    var table = document.getElementById("tblPost");
    var tbody = document.getElementById("bodyPost");

    //crear fila
    var fil = document.createElement("tr");

    //crear celda
    var colNombre = document.createElement("td");
    colNombre.innerHTML=nombre.value;

    var colSexo = document.createElement("td");
    colSexo.innerHTML=sexo.value;

    var colCiclo = document.createElement("td");
    colCiclo.innerHTML=ciclo.value;

    var colEscuelaprofesional = document.createElement("td");
    colEscuelaprofesional.innerHTML=escuprof.value;

    var celda_accion = document.createElement("td");
    celda_accion.classList.add("accion");
    celda_accion.innerHTML=
    "<a href='#' class='icono2' onclick='editar(this)'>editar</a>"
    +"<a href='#' class='icono1' onclick='eliminar(this)'>eliminar</a>";
    fil.appendChild(colNombre);
    fil.appendChild(colSexo);
    fil.appendChild(colCiclo);
    fil.appendChild(colEscuelaprofesional);
    fil.appendChild(celda_accion);
    tbody.appendChild(fil);
    table.appendChild(tbody);
    limpiar();
    }else{
        fila.cells[0].innerHTML = nombre.value;
        fila = "";
        limpiar();
        estado = 0;
    }
}
function limpiar(){
    nombre.value = "";
    nombre.focus();

    sexo.value = "";
    sexo.focus();

    ciclo.value = "";
    ciclo.focus = "";

    escuprof.value = "";
    escuprof.focus();
}
function editar(row){
    fila = row.parentNode.parentNode;
    nombre.value = fila.cells[0].innerHTML;
    sexo.value = fila.cells[0].innerHTML;
    ciclo.value = fila.cells[0].innerHTML;
    escuprof.value = fila.cells[0].innerHTML;
    
    est = 1;
}
function eliminar(row){
    let f = row.parentNode.parentNode;
    f.parentNode.removeChild(f);
}

