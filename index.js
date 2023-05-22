const express = require('express');
const app = express();
const biodataRoutes = require('./routes/biodataRoutes');
const sequelize = require('./database');

// Middleware
app.use(express.json());

// Routes
app.use('/biodata', biodataRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});
