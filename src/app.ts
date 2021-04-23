import express from 'express';

const app = express();
const PORT = 4040;
app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope! JENKINS2');
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
