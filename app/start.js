var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');

    
}).listen(8080);

const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: 'a77445de3d43462781ae2749d47aa35c'
});

{/* <script type='text/javascript' src="https://sdk.clarifai.com/js/clarifai-latest.js" /> */}

app.models.predict(Clarifai.GENERAL_MODEL, 'C:\\Users\daniel\Downloads\tux.jpg').then(
    function(response) {
    //   response.forEach(function(x) {
    //    console.log(x)
    //  });
     console.log(response);
  
    },
    function(err) {
      console.error(err);
    }
  );