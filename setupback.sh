#!/bin/bash

# Script to set up the Ngola Nurtura backend project

echo "Setting up Ngola Nurtura backend project..."

# Create project directory if it doesn't exist
if [ ! -d "backend" ]; then
  mkdir backend
fi

# Navigate to the project directory
cd backend

# Create directories for the project structure
mkdir config controllers models routes middleware utils

# Create files within each directory (replace with actual code)
touch config/db.js config/passport.js
touch controllers/authController.js controllers/userController.js controllers/donationController.js controllers/requestController.js controllers/centroController.js controllers/stockController.js controllers/errorController.js
touch models/User.js models/Donation.js models/Request.js models/Centro.js models/Stock.js
touch routes/authRoutes.js routes/userRoutes.js routes/donationRoutes.js routes/requestRoutes.js routes/centroRoutes.js routes/stockRoutes.js
touch middleware/authMiddleware.js middleware/errorHandlerMiddleware.js
touch utils/emailSender.js
touch app.js server.js .env README.md

# Initialize npm project
npm init -y

# Install dependencies
npm install express mongoose bcryptjs jsonwebtoken cors dotenv passport passport-jwt nodemailer

echo "Project setup complete!"
echo "Don't forget to:"
echo "- Fill in the code for each file."
echo "- Add your environment variables to .env."
echo "- Provide instructions in README.md."

