module.exports = {
  get_houses: (req, res) => {
    const db = req.app.get("db");
    db.getAllHouses().then(houses => {
      res
        .status(200)
        .send(houses)
        .catch(err => {
          res.status(500).send({ errorMessage: "Something went wrong!" });
          console.log(err);
        });
    });
  },
  add_house: (req, res) => {
    const db = req.app.post("db");
    const { name, address, city, state, zip, img, mortgage, rent } = req.body;
    db.addOneHouse([name, address, city, state, zip, img, mortgage, rent]).then(
      houses => {
        res.status(200).send(houses);
      }
    );
  },
  update_house: (req, res) => {},
  delete_house: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.deleteOneHouse(id)
      .then(dbResponse => {
        res.status(200).send(dbResponse);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
