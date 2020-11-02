const express = require('express');
const connectDB = require('./config/db');
const app = express();
const { check, validationResult } = require('express-validator');

//db baglantısı
connectDB();

//middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => {
  res.send('API Running');
});

//define routes
app.use('/api/users', require('./routers/api/users'));
app.use('/api/auth', require('./routers/api/auth'));
app.use('/api/posts', require('./routers/api/posts'));
app.use('/api/profile', require('./routers/api/profile'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server stareted on port ${PORT}`);
});
