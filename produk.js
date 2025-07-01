const tbody = document.getElementById('daftar-produk');
let data = JSON.parse(localStorage.getItem('produk')) || [];

function renderTabel() {
    tbody.innerHTML = ''; // bersihkan isi
    data.forEach((item, index) => {
        tbody.innerHTML += `
      <tr class="${index % 2 === 0 ? 'bg-gray-50' : ''}">
        <td class="border px-4 py-2">${index + 1}</td>
        <td class="border px-4 py-2">${item.nama}</td>
        <td class="border px-4 py-2">${item.kategori}</td>
        <td class="border px-4 py-2">${item.stok}</td>
        <td class="border px-4 py-2">Rp${item.harga.toLocaleString()}</td>
        <td class="border px-4 py-2">
          <button onclick="hapus(${index})" class="text-red-600 hover:underline">Hapus</button>
        </td>
      </tr>
    `;
    });
}

function hapus(index) {
    if (confirm('Yakin ingin menghapus produk ini?')) {
        data.splice(index, 1);
        localStorage.setItem('produk', JSON.stringify(data));
        renderTabel();
    }
}

renderTabel();
