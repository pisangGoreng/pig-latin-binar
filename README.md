# Pig Latin

kata vokal = a, i, u ,e ,o

Buat sebuah function untuk mengecek setiap huruf pertama dari kalimat yang di input,
apabila huruf pertama dari kata tersebut adalah:
- kata vokal
  1. maka lanjut cek ke kata selanjutnya

- bukan kata vokal
  1. pindahkan kata tersebut ke bagian belakang, lalu cek kata selanjutnya sampai ketemu kata konsonan
  2. tambahkan kata "ay" di akhir kata yang dipindahkan tersebut

```
contoh input dan output:
food ---> oodfay
Snap ---> apsnay
guide ----> uidegay
beli makanan ----> elibay akananmay
apel ----> apel
