


const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: 'a77445de3d43462781ae2749d47aa35c'
});



app.models.predict(Clarifai.GENERAL_MODEL, 'https://i.ytimg.com/vi/Z6k8FU9mE54/maxresdefault.jpg').then(
    function(response) {

      for (let index = 0; index < response.outputs[0].data.concepts.length; index++) {
        const element = response.outputs[0].data.concepts[index];
        console.log(element.name + " " + element.value);  
      }
   
    },
    function(err) {
      console.error(err);
    }
  );