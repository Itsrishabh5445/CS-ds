const fs = require('fs');

const write = () => {
    const data = "I am new file"
    fs.writeFile("./data.txt", data, (err) => {
        if (err) {
            console.log("Error writting file", err);
        } else {
            console.log("file written successfully");
        }
    })
}
write("I am new file");