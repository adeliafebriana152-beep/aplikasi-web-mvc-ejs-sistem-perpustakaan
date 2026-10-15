let books = [
  { id: 1, title: 'Pemrograman Web Dasar', category: 'Teknologi', stock: 10 },
  { id: 2, title: 'Algoritma dan Struktur Data', category: 'Ilmu Komputer', stock: 5 },
  { id: 3, title: 'Desain Antarmuka Pengguna', category: 'Desain', stock: 8 }
];

exports.getHome = (req, res) => {
  res.render('pages/index', { 
    title: 'Beranda', 
    totalBooks: books.length 
  });
};

exports.getAbout = (req, res) => {
  res.render('pages/about', { title: 'Tentang Kami' });
};

exports.getCatalog = (req, res) => {
  res.render('pages/catalog', { title: 'Katalog Buku', books });
};

exports.getAddForm = (req, res) => {
  res.render('pages/add', { title: 'Tambah Buku Baru' });
};

exports.postAddForm = (req, res) => {
  console.log('Data Masuk:', req.body);
  
  books.push({
    id: books.length + 1,
    title: req.body.title,
    category: req.body.category,
    stock: parseInt(req.body.stock)
  });

  res.redirect('/catalog');
};