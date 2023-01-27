import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;


// Routing 
// Get method 

app.get('/', (req, res) => {
    res.send('Hello Prince');
})

// app.all('/subkuch', (req, res) => {
//     res.send('All Method');
// });

// app.all('*', (req, res) => {
//     res.send('Page Not Found!..');
// });

// app.all('/api/*', (req, res) => {
//     res.send('API Page..')
// });

// String path

// app.get('/about', (req, res) => {
//     res.send('About Page');
// })

// app.get('/contact', (req, res) =>{
//     res.send('Contact Page');
// })


// String Pattern Path

// app.get('/ab?cd', (req, res) => {
//     res.send('This  route path will match acd and abcd');
// })


// Reguler expression path
// app.get(/a/, (req, res) => {
//     res.send('This is a');
// });


// One callback path  

// app.get('/callback-1', (req, res) => {
//     res.send('Hello Callback First.')
// })

// More than One callback path 

// app.get('/callback-1', (req, res, next) => {
//     console.log('Callback First Running..');
//     next();
// }, (req, res) => {
//     console.log('Callback second Running..');
//     res.send('Hello More than one callback called..')
// })


// An array of callback
// const cb1 = (req, res, next) => {
//     console.log('First Callback Running..');
//     next();
// }
// const cb2 = (req, res, next) => {
//     console.log('Second Callback Running..');
//     next();
// }
// const cb3 = (req, res) => {
//     console.log('Third Callback Running..');
//     res.send('An Array of Callback Example..')
// }

// app.get('/array-callback', [cb1, cb2, cb3]);


// Combination function and array of callback

// const cb1 = (req, res, next) => {
//     console.log('first callback running..');
//     next();
// }

// const cb2 = (req, res, next) => {
//     console.log('second callback running..');
//     next();
// }

// app.get('/function-array',[cb1, cb2], (req, res, next) => {
//     console.log('third callback running..');
//     next();
// }, (req, res) => {
//     console.log('four callback running..');
//     res.send('Combination of function or array callback');
// });

// Chained route callback

// app.route('/student')
//     .get((req, res) => {
//         res.send('All Student');
//     })
//     .post((req, res) => {
//         res.send('Add new Student');
//     })
//     .put((req, res) => {
//         res.send('Update Student');
//     })


app.route('/student')
    .all((req, res, next) => {
        console.log('All Method Called..');
        next();
    })
    .get((req, res) => {
        console.log('Get Method Called..');
        res.send('All Student');
    })
    .post((req, res) => {
        console.log('Post Method Called..');
        res.send('Add new Student');
    })
    .put((req, res) => {
        console.log('Put Method Called..');
        res.send('Update Student');
    })

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});

