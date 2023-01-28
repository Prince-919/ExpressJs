import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

// app.get('/student/delete/:id', (req, res) => {
//     res.send(`Student Deleted.. ${req.params.id}`)
// })

// More than 

// app.get('/product/:category/:id', (req, res) => {
//     // console.log(req.params);
//     // res.send(`Product : Category : ${req.params.category} And Id : ${req.params.id} `)

//     // object disstruting
//     const {category, id} = req.params;
//     res.send(`Product : Category = ${category} And Id = ${id} `)
// });

// app.get('/product/order/:year/and/:month', (req, res) => {
//     const {year, month} = req.params;
//     res.send(`Year : ${year} and Month : ${month}`);
// })

// app.get('/train/:from-:to', (req, res) => {
//     const {from, to} = req.params;
//     res.send(`Travelling From  ${from} To ${to} `)
// })

app.get('/location/:state.:city', (req, res) => {
    const {state, city} = req.params;
    res.send(`Location ${state} . ${city}`);
})

app.listen(PORT, () =>{
    
    console.log(`Listening on port http:localhost${PORT}`);
});