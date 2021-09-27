node v14.17.0

npm install

npm start Local: http://localhost:3000

docker build -t frontend .

docker run --rm -d --network host --name frontend frontend
