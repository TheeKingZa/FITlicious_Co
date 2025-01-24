#!/usr/bin/bash

# Colors for success and error messages
GREEN='\033[0;32m'  # Green for success
RED='\033[0;31m'    # Red for errors
NC='\033[0m'        # No color

# Function to handle errors
handle_error() {
    echo -e "${RED}Error: $1${NC}"
    exit 1
}

# Function to handle success
handle_success() {
    echo -e "${GREEN}$1${NC}"
}

# Step 1: Add everything to the staging area
git add . || handle_error "Failed to add files to the staging area."

# Step 2: Ask for a commit message and commit changes
echo "Enter a commit message:"
read commit_message

# Commit the changes
git commit -m "$commit_message" || handle_error "Failed to commit changes."

# Step 3: Create or update the gh-pages branch to match master
git branch -D gh-pages 2>/dev/null || handle_success "Old gh-pages branch not found; continuing."
git checkout -b gh-pages || handle_error "Failed to create or switch to gh-pages branch."

# Step 4: Ensure gh-pages matches master
git merge master || handle_error "Failed to merge master into gh-pages."

# Step 5: Push everything to GitHub
git push origin master || handle_error "Failed to push changes to master."
git push origin gh-pages --force || handle_error "Failed to push changes to gh-pages."

# Step 6: Success message
handle_success "Deployment successful! Both master and gh-pages branches are up-to-date."

# Step 7: Switch back to master (optional)
git checkout master || handle_error "Failed to switch back to master branch."
handle_success "Returned to master branch."
