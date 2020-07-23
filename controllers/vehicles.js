const vehicles = require("../data/vehicles");
const vehicleCount = vehicles.length;

const list = (req, res) => {
  res.json(vehicles);
};

const show = (req, res) => {
  const id = req.params.vehicleId;

  const foundVehicle = vehicles.find((vehicle) => vehicle._id === Number(id));
  res.json(foundVehicle);
};

const create = (req, res) => {
  const newVehicle = {
    _id: vehicleCount + 1,
    imgUrl: `./featured-img-${Math.ceil(Math.random() * 3)}.jpg`,
    ...req.body,
    price: Math.floor(Math.random() * 10000),
    km: Math.floor(Math.random() * 100000),
    miles: null,
    fuel: "Gas",
    city: "Austin",
    isNew: false,
  };
  newVehicle["miles"] = Math.floor(newVehicle.km * 0.62137);

  vehicles.push(newVehicle);
  res.json(newVehicle);
};

module.exports = {
  list,
  show,
  create,
};
