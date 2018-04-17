const express = require('express')
const app = express()

app.get('/', (req, res) => {
	var JavaDate = Java.type("java.util.Date");
	var currDate = new JavaDate();
	res.send(currDate.toString());
})

app.listen(3000, () => {
	console.log("server started")
})