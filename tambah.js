document.getElementById('form-produk').addEventListener('submit', function (e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const kategori = document.getElementById('kategori').value;
    const stok = parseInt(document.getElementById('stok').value);
    const harga = parseInt(document.getElementById('harga').value);

    const produkBaru = { nama, kategori, stok, harga };

    let data = JSON.parse(localStorage.getItem('produk')) || [];
    data.push(produkBaru);
    localStorage.setItem('produk', JSON.stringify(data));

    alert('Produk berhasil ditambahkan!');
    window.location.href = 'dashboard.html';
});