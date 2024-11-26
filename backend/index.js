const express = require("express");
const rootrouter = require("./routes/index");
var cors = require('cors')

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/v1", rootrouter);

app.listen(PORT, () => {
    console.log('server running on : ', PORT);
    
})