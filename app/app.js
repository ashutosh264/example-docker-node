const app = require("express")();
const uniAppId = process.env.ID;

app.get("/", (req, res) => {
  res.send(`On app ${uniAppId}, Heyy there!`);
});

app.listen(uniAppId, () =>
  console.log(`Node app ${uniAppId}, is listening on ${uniAppId}`)
);
