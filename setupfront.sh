#!/bin/bash

# Script to set up the Ngola Nurtura frontend project

echo "Setting up Ngola Nurtura frontend project..."

# Create project directory if it doesn't exist
if [ ! -d "frontend" ]; then
  mkdir frontend
fi

# Navigate to the project directory
cd frontend

# Create directories for the project structure
mkdir css js images

# Create CSS files
touch css/common.css css/doadora.css css/receptora.css css/profissional.css css/admin.css css/login.css

# Create JS files
touch js/common.js js/auth.js js/doadora.js js/receptora.js js/profissional.js js/admin.js

# Create main HTML files
touch index.html login.html

echo "Project setup complete!"
echo "Don't forget to:"
echo "- Fill in the HTML, CSS, and JavaScript code."
echo "- Add your images to the images/ folder."
