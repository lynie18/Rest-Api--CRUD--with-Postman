const express = require('express');
const app = express();

app.use(express.json());

const Customer = [
    {id: 1, Names: 'Janela', Email: 'Janela@ymail.com', Address: 'Chinatown, Lapasan'},
    {id: 2, Names: 'Elisia', Email: 'Elise@ymail.com', Address: 'Saudi, Balulang' },
    {id: 3, Names: 'Janete', Email: 'Jane@ymail.com' , Address: 'Bulacan, Carmen'},
    {id: 4, Names: 'Lynie', Email: 'Lynie@ymail.com' , Address: 'LA, Laguindingan'}, 
    {id: 5, Names: 'Barbie', Email: 'Babe@ymail.com', Address: 'USA, Gusa'},
    {id: 6, Names: 'Alice', Email: 'Alice@ymail.com' , Address: 'Puerto Rico, Agora'},
    {id: 7, Names: 'Kramer', Email: 'Kram@ymail.com', Address: 'Cavite, Kaybagal'},
    {id: 8, Names: 'Gina', Email: 'Gina@ymail.com', Address: 'Antipolo, Inarawan'},
    {id: 9, Names: 'Marjie', Email: 'Mar@ymail.com', Address: 'Malasin, Pangasinan'}
];

app.get(`/api/Customer`, (req, res) => {
    res.send(Customer);
});

app.get(`/api/Customer/:id`, (req, res) => {
    const info = Customer.find(c => c.id === parseInt (req.params.id));
    if (!info) res.status(404).send('The info with the given id is not found');
    res.send(info);
});

app.post(`/api/Customer`, (req, res) => {
    if (!req.body.Names || req.body.Names.length < 5){
        res.status(404).send('The info is too short.');
        return;
}
    const info = {
        id: Customer.length + 1,
        Names: req.body.Names,
        Email: req.body.Email,
        Address: req.body.Address
};
    Customer.push(info);
    res.send(info);
});

app.put(`/api/Customer/:id`, (req, res) => {
    const info = Customer.find(c => c.id === parseInt (req.params.id));
    if (!info) res.status(404).send('The info with the given id is not found');
    info.Names = req.body.Names;
    info.Email = req.body.Email;
    info.Address = req.body.Address;
    res.send(info);
});

app.delete(`/api/Customer/:id`, (req, res) => {
    const info = Customer.find(c => c.id === parseInt (req.params.id));
    if (!info) res.status(404).send('The info with the given id is not found');

    const index = Customer.indexOf(info);
    Customer.splice(index, 1);

    res.send(info);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));    
//app.get('/', (req, res) => {
//    res.send('Hello World!');
//});


// app.get('/api/info', (req, res) => {
    // res.send([1, 2,3]);

// });

// app.get('/api/post/:year/:month', (req, res) => {
// res.send(req.params);
// });



//app.put()
// app.delete()
//app.post()