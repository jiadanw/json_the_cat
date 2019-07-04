const request = require('request')
const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;


request(url, (error, resp, body) => {
   console.log(body);
   console.log(typeof body);
  const data = JSON.parse(body);
    console.log(data);
    console.log(typeof data);
  if(error) {
    console.log("error: ", error)
  }
  
  if(data[0]){
      console.log(data[0].description)
    }
    else{
      console.log('wrong name')
    }

  }
  
  )