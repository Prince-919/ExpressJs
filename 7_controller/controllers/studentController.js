
const studentAll = (req, res) => {
    res.send('All Students.');
}

const studentDelete = (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    console.log(id);
    if (id == 10) {
        res.send('Yeh Prinece ki ID h  10 yeh delete nhi ho skta h');
    } else {
        res.send(`Student deleted ${id}`)
    }
}

export {studentAll , studentDelete};