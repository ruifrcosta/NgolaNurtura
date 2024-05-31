#!/bin/bash

echo "=================================="
echo "Setting up Ngola Nurtura Project"
echo "=================================="

# Check for Node.js and npm
if ! [ -x "$(command -v node)" ]; then
    echo "Error: Node.js is not installed." >&2
    exit 1
fi

if ! [ -x "$(command -v npm)" ]; then
    echo "Error: npm is not installed." >&2
    exit 1
fi

# Backend Setup
echo "Setting up Backend..."
mkdir -p ngolanurtura-backend/{config,controllers,models,routes,middleware,utils}
cd ngolanurtura-backend

# Create Backend Files
touch config/db.js config/passport.js app.js server.js .env
touch controllers/{authController,userController,donationController,requestController,centroController,stockController,groupController,eventController,messageController,errorController}.js
touch models/{User,Donation,Request,Centro,Stock,Group,Event,Message}.js
touch routes/{authRoutes,userRoutes,donationRoutes,requestRoutes,centroRoutes,stockRoutes,groupRoutes,eventRoutes,messageRoutes,index}.js
touch middleware/{authMiddleware,errorHandlerMiddleware}.js
touch utils/emailSender.js

# Install Dependencies
npm init -y
npm install express sequelize pg bcryptjs jsonwebtoken cors dotenv passport passport-jwt nodemailer express-validator

echo "Backend setup complete! Filling files with provided code..."

# Fill Files with Provided Code (Replace placeholders with actual values)
cat > config/db.js <<EOF
# ... (Your database configuration code goes here)
EOF

cat > config/passport.js <<EOF
# ... (Your passport authentication code goes here)
EOF

# ... (Similarly, fill the rest of the backend files using cat >)

echo "Backend files filled. Moving on to frontend setup..."

# Frontend Setup
echo "Setting up Frontend..."
cd ../
mkdir -p frontend/{css,js,images}

# Create Frontend Files
touch frontend/{index,login}.html
touch frontend/css/{common,doadora,receptora,profissional,admin,login}.css
touch frontend/js/{common,auth,doadora,receptora,profissional,admin}.js

echo "Frontend setup complete!"

echo "=================================="
echo "Project Setup Finished!"
echo "=================================="
echo "Remember to:"
echo "- Customize the backend code (controllers, models, etc.) to match your specific requirements."
echo "- Implement frontend logic in HTML, CSS, and JavaScript."
echo "- Configure the database connection in config/db.js and environment variables in .env."
echo "- Consider adding error handling, validation, and security measures."
