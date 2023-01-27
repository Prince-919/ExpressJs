// const express = require('express');
import express from 'express';
const app = express();
const PORT =4000;

app.get('/', (req, res) => {
    res.send('Hello from the other side..');
})

app.listen(PORT, () => {
    console.log(`Litsening of port http://localhost:${PORT}`);
});