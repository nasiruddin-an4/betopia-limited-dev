const { getNewsAction } = require("./app/actions/mongodb.js");
(async () => {
  try {
    const data = await getNewsAction("all");
    const categories = data.map(d => d.category);
    console.log(categories);
  } catch (e) {
    console.log(e);
  }
})();
