const server = require('./server.js');

const PORT = process.env.PORT || 5000;

server.listen(PORT, () =>{
    console.log(`***Auth 1 project running on port ${PORT}***`)
})