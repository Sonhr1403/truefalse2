function so(number) {
    document.getElementById("mhtrai").value += number;
}

function bang() {
    document.getElementById("mhphai").value = eval(document.getElementById("mhtrai").value);
}

function xoa() {
    document.getElementById("mhtrai").value = "";
}