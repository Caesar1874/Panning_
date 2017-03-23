
const fs = require("fs");
const data = [1, 2, 3];
data.forEach((ele, index) => {
    const err = fs.writeFileSync(`target${index}`, ele);
    console.log(err);
});
