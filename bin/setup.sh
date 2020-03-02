#/usr/bin/sh
npm install
mkdir -p /workspace/data 
mongod --dbpath /workspace/data && mongoimport --db temp --collection temp < bin/initial_data.json