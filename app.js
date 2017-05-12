var fs   = require('fs'),
    path = require('path'),
    less = require('less'),
    from = "./style.less";
// Testing

// HELPERS
function compileLESS (from, to) {
    from = path.join(__dirname,from);
    // to = path.join(__dirname,to);
    fs.readFile(from,function (err, data) {
    if (err) {
      console.log(err);
      return;
    }else{
        less.render(data.toString(),{compress:false,paths:[__dirname]},function(e,css){
            if (!e){
              console.log(css.css)
              // fs.writeFile(to,css);
            }
        });
      }
    });

}

compileLESS(from,null)
