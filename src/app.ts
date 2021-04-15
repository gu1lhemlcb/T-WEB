import express from 'express';

const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));