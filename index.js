const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;
app.use(express.json());
  
  app.get('/gmail', async (req, res) => {
    try {
      const response = await axios.get('http://api.eg.com/gmail'); 
      res.json(response.data);
    } catch (error) {
      console.log(error);
      
    }
  });
  
  
  app.get('/whatsapp', async (req, res) => {
    try {
      const response = await axios.get('http://api.eg.com/whatsapp');
      res.json(response.data);
    } catch (error) {
      console.log(error);
    }
  });
  
  app.listen(port, () => {
    console.log("Server is running on port 3000");
  });
