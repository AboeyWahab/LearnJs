let dataBarang = ["Sabun", "Shampoo", "Sikat Gigi", "Odol"];

function tampilBarang() {
	let listBarang = document.getElementById("list-barang");
	//clear semua data barang
	listBarang.innerHTML = "";

	//cetak semua data barang
	for (let i = 0; i < dataBarang.length; i++) {
		const btnEdit = "<a href='#' onclick='ubahBarang("+i+")'>Edit</a>";
		const btnHapus = "<a href='#' onclick='hapusBarang("+i+")'>Hapus</a>";

		listBarang.innerHTML += "<li>" + dataBarang[i] + " ["+btnEdit + " | "+ btnHapus +"]</li>";
	}
}


function tambahBarang(){
	let input = document.querySelector("input[name=barang]");
    dataBarang.push(input.value);
    tampilBarang();
}

function ubahBarang(id){
    let newBarang = prompt("Nama baru", dataBarang[id]);
    dataBarang[id] = newBarang;
    tampilBarang();
}

function hapusBarang(id){
    dataBarang.splice(id, 1);
    tampilBarang();
}

tampilBarang();