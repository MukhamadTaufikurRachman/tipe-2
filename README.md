# tipe-2
### Spesifikasi Aplikasi:
#### - Backend
1. Menggunakan framework `Express.js`.
1. Database menggunakan `PostgreSQL`dengan ORM `Sequelize`.
1. Fitur login menggunakan `JWT`.
1. `bcryptjs` untuk enkripsi password.

#### - Frontend
1. Menggunakan framework `Vue.js`.
1. Styling UI menngunakan `Bootstrap`.

### Cara menjalankan aplikasi:
#### - Halaman Login
1. Masukkan email dan password yang benar lalu klik tombol `Login` (data user folder `backend/data/users.json`).
1. Apabila ingin medaftar user baru klik link `Register` yang berada di atas tombol `Login`.

#### - Halaman Register
1. Untuk mendaftar user baru silahkan isi semua form yang telah disediakan (tidak boleh kosong) lalu klik tombol `Sign Up`.
1. Form `Username` isi bebas.
1. Form `Email` bersifat unik (belum pernah didaftarkan sebelumnya).
1. Form `Password` minimal 5 karakter.
1. Form `Phone nNmber` isi dengan angka.
1. Form `Address` isi dengan alamat.
1. Setelah berhasil mendaftar akan diarahkan ke halaman `Login`.
1. Apabila sebelumnya telah mendaftar klik link `Back to Login` untuk kembali ke halaman `Login`.

#### - Halaman Product Order
1. Untuk menambah data pesanan baru silahkan isi semua form yang telah disediakan (tidak boleh kosong) lalu klik tombol `Submit`.
1. Form `Product Name` isi dengan nama produk.
1. Form `Quantity` isi dengan jumlah produk (minimal 1).
1. Form `Price` isi dengan harga produk (minimal Rp. 100.000).
1. Setelah berhasil menambah data pesanan baru akan diarahkan ke halaman `Order List`.
1. Apabila ingin melihat pesanan klik `Order List` yang berada di bagian Navbar posisi kiri.

#### - Halaman Order List
1. Data pesanan berada di halaman ini sesuai dengan pesanan user yang Login.
1. Apabila ingin menambah data pesanan baru klik `Product Order` yang berada di bagian Navbar posisi kiri.
1. Dan apabila ingin keluar aplikasi, klik ikon `Logout`(berupah arah panah) yang berada di bagian Navbar posisi kanan.
