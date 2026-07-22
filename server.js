const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
app.get("/", (req, res) => {
   res.json({
       application: "Multi Region API DR Lab",
       region: "Central US",
       status: "Primary API Running"
   });
});
app.get("/health", (req, res) => {
   res.json({
       status: "Healthy"
   });
});
app.get("/products", (req, res) => {
   res.json([
       {
           id: 1,
           name: "Laptop",
           price: 60000
       },
       {
           id: 2,
           name: "Mobile",
           price: 30000
       }
   ]);
});
app.listen(port, () => {
   console.log(`Server started on port ${port}`);
});
