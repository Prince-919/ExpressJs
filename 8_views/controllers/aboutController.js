import { join } from 'path';
const aboutController = (req, res) => {
    // res.send('This is about page.');
    res.sendFile(join(process.cwd(), 'views', 'about.html'));
}

export default aboutController;