require('dotenv').config();

const server = require('./api/server.js')

const PORT = process.env.PORT;

if(PORT==null) {
    console.error('no port set')
} else {
    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}