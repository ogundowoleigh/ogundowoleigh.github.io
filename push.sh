git add .
echo "Staged recent changes."
echo "Now, enter commit message..."
read commit_message
git commit -m "$commit_message"
git push
echo "Commit successfully pushed!"
