module.exports = (req, res) => {
  let endpoints = {
    all: "http://localhost:3000/v1/all",
    national: "http://localhost:3000/v1/national",
    business: "http://localhost:3000/v1/business",
    sports: "http://localhost:3000/v1/sports",
    world: "http://localhost:3000/v1/world",
    politics: "http://localhost:3000/v1/politics",
    technology: "http://localhost:3000/v1/technology",
    startup: "http://localhost:3000/v1/startup",
    entertainment: "http://localhost:3000/v1/entertainment",
    science: "http://localhost:3000/v1/science",
    automobile: "http://localhost:3000/v1/automobile",
    miscellaneous: "http://localhost:3000/v1/miscellaneous",
    hatke: "http://localhost:3000/v1/hatke",
  };

  res.json(endpoints);
};
