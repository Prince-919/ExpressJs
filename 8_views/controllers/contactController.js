import { join } from 'path';

const contactController = (req, res) => {
    // res.send('This is Contact Page');
    res.sendFile(join(process.cwd(), 'views', 'contact.html'));
}
export default contactController;