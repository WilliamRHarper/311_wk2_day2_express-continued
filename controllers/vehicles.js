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
    ...req.body,
  };

  vehicles.push(newVehicle);
  res.json(newVehicle);
};

module.exports = {
  list,
  show,
  create,
};
