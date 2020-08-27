var data = [
  
];


function formData() {
    var tabel = document.getElementById("tabel");
    tabel.innerHTML = "<tr><th>No</th><th>Nombre del curso</th><th>Acción</th></tr>";
    for (let i = 0; i < data.length; i++) {
        var btnEdit = "<button class='btn-edit' href='#' onclick='edit(" + i + ")'>Edit</button>";
        var btnHapus = "<button class='btn-hapus' href='#' onclick='delet(" + i + ")'>Eliminar</button>";
        j = i + 1;
        tabel.innerHTML += "<tr><td>" + j + "</td><td>" + data[i] + "</td><td>" + btnEdit + " " + btnHapus + "</tr>";
    }
}

function enviar() {
    var input = document.querySelector("input[name=jurusan]");
    data.push(input.value);
    formData();
    input.value = "";
}

function edit(id) {
    var baru = prompt("Edit", data[id]);
    data[id] = baru;
    formData();
}

function delet(id) {
    data.pop(id);
    formData();
}

formData();
