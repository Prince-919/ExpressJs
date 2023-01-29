
import { join } from 'path';

const homeController = (req, res) => {
    // res.send('This is home page');
    res.sendFile(join(process.cwd(), 'views', 'index.html'));
}
export default homeController;