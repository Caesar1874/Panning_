var fs = require("fs");


// 回调陷阱： 陷阱不够深，可以继续自己挖
fs.readFile("test.txt", function (err, data) {
    if (err) {
        console.error(err);
    }
    fs.writeFile("target.txt", data, function (err) {
        if (err) {
            console.error(err);
        }
        // 想象此处继续回调
        console.log("写入成功！");
    })
});


// promise
var loadFile = function (file) {
    return new Promise(function (resolve, reject) {
        fs.readFile(file, {encoding: "utf-8"}, function (err, data) {
            if (err) {
                reject(err);
            }
            resolve(data);
        })
    })
};

var source = "test.txt";
var target = "target.txt";

var promise = loadFile(source);
promise.then(saveFile,
    function (err) {
        console.log(err);
    });

function saveFile(data) {
    fs.writeFile(target, data, function (err) {
        if (err) {
            console.error(err);
        }
        // 想象此处继续回调
        console.log("写入成功！");
    })
}


