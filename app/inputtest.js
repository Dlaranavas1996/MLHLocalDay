


const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: 'a77445de3d43462781ae2749d47aa35c'
});


app.inputs.create({
    url: "https://i.pinimg.com/originals/fd/20/dd/fd20dd9f6398c9fa66012f8926a5e79b.jpg"
  }).then(
    function(response) {
      // do something with response
    },
    function(err) {
      // there was an error
    }
  );

 