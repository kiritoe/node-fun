////////////////////////////
///     DEPENDENCIES     
////////////////////////////
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');
var twilio = require('twilio');


var app = express();
var port = 3033;

////////////////////////////
///     MIDDLEWARE     
////////////////////////////
app.use(express.static('public'));
// app.use(bodyParser());    ------normal
app.use(bodyParser.urlencoded({             
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

var message = {
    "message": "HELLO WORLD!!!"
};
////////////////////////////
///     ENDPOINTS     
////////////////////////////
app.get('/api/message', function(req, res) {
    return res.json(message);
});
app.post('/api/send_text_message', function(req, res) {
    console.log(req.body.message);
    res.send();
})



// app.listen(port, function() {
//     console.log('I\m watching you...', port);
// });

app.listen(process.env.PORT, process.env.IP);
console.log('Powering on...');
console.log('Paired');


