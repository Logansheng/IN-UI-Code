rm -rf dist
yarn build
cd dist
git init
git add .
git commit -m "updated"
git branch -M main
git remote add origin git@github.com:Logansheng/IN-UI-Website.git
git push -u origin main
cd ../
