import * as express from 'express';
import * as store from '../chirpstore';

let router = express.Router();



router.post("/", (req, res) => {
  let data = store.CreateChirp(req.body);
  res.send(200);

});

router.get("/", (req, res) => {
  const rawChirps = store.GetChirps();
  const chirps = Object.keys(rawChirps).map(chirp => {
    return {
      id: chirp,
      user: rawChirps[chirp].user,
      text: rawChirps[chirp].text
    };
  });
  chirps.pop();
  res.send(chirps);
});

router.get("/:id", (req, res) => {
  let id = req.params.id
  const chirps = store.GetChirp(id);
  res.send(chirps);
  
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  store.DeleteChirp(id)
  res.sendStatus(200);
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  let text = req.body
  store.UpdateChirp(id,text);
  res.sendStatus(200)
});

export default router;