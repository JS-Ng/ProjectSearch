cd client/entry_notebook
npm install --save
npm run build
cd ../../
cp -r -T client/entry_notebook/build searchAPI/src/main/resources/static
mv searchAPI/src/main/resources/static/index.html searchAPI/src/main/resources/templates/