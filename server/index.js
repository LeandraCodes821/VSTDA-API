const server = require('./app');
const PORT = process.env.PORT || 8484;
// write your code here
server.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));