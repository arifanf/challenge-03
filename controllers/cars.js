const card = [
    {
        mobil: 'Avanza',
        harga: 'Rp 700.000',
        waktu: '2-3 Mei 2022',
        update: '28 April 2022',
    },
    {
        mobil: 'Avanza',
        harga: 'Rp 700.000',
        waktu: '2-3 Mei 2022',
        update: '28 April 2022',
    },
    {
        mobil: 'Avanza',
        harga: 'Rp 700.000',
        waktu: '2-3 Mei 2022',
        update: '28 April 2022',
    },
    {
        mobil: 'Avanza',
        harga: 'Rp 700.000',
        waktu: '2-3 Mei 2022',
        update: '28 April 2022',
    },
    {
        mobil: 'Avanza',
        harga: 'Rp 700.000',
        waktu: '2-3 Mei 2022',
        update: '28 April 2022',
    },
    {
        mobil: 'Avanza',
        harga: 'Rp 700.000',
        waktu: '2-3 Mei 2022',
        update: '28 April 2022',
    },
    {
        mobil: 'Avanza',
        harga: 'Rp 700.000',
        waktu: '2-3 Mei 2022',
        update: '28 April 2022',
    },
    {
        mobil: 'Avanza',
        harga: 'Rp 700.000',
        waktu: '2-3 Mei 2022',
        update: '28 April 2022',
    },
    {
        mobil: 'Avanza',
        harga: 'Rp 700.000',
        waktu: '2-3 Mei 2022',
        update: '28 April 2022',
    }
]


module.exports = {
    index: (req, res) => res.render('cars/index', { card }),
    add: (req, res) => res.render('cars/add'),
    edit: (req, res) => res.render('cars/edit')
}