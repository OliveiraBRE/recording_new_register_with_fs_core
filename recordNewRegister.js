const fs = require('fs');

const recordNewRegister = (file, content) => {fs.open(`./${file}`, (err, fd) => {

    const date = Date.now();

    if(err) {
      fs.writeFile(`./${file}`, ' ', err => {
        if(err) console.log(err)
      });

      return recordNewRegister(file, content);
    }

    fs.readFile(`./${file}`, 'utf-8', (err, data) => {
      if(err) {
        return console.log(err);
      }
  
      if(data[0] === ' ') {
        fs.writeFile(`./${file}`, `[Register in: ${new Date(date)}]\n${content}`, err => {
          if(err) console.log(err)
        });
      } else {
        fs.writeFile(`./${file}`, `${data}\n\n$[Register in: ${new Date(date)}]\n${content}`, err => {
          if(err) console.log(err)
        });
        
        fs.close(fd, err => {
          if(err) {
            throw err;
          };
        });
      }
    });
  });
}

module.exports = recordNewRegister;