const fs = require('fs');
const path = require('path');

// Callback-based approach
function readFileAsyncCallback(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, data);
    });
}

function aggregateDataCallback(filePaths, callback) {
    let aggregatedData = [];

    function readNextFile(index) {
        if (index >= filePaths.length) {
            callback(null, aggregatedData.join('\n'));
            return;
        }

        const filePath = filePaths[index];
        readFileAsyncCallback(filePath, (err, data) => {
            if (err) {
                callback(err);
                return;
            }
            aggregatedData.push(data);
            readNextFile(index + 1);
        });
    }

    readNextFile(0);
}

const dataDirectory = path.join(__dirname, 'data');
const filePaths = [
    path.join(dataDirectory, 'file1.txt'),
    path.join(dataDirectory, 'file2.txt'),
    path.join(dataDirectory, 'file3.txt')
];

aggregateDataCallback(filePaths, (err, aggregatedData) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Aggregated Data (Callback):');
    console.log(aggregatedData);
});

// Promise-based approach
function readFileAsyncPromise(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}

async function aggregateDataPromise(filePaths) {
    try {
        const dataPromises = filePaths.map(filePath => readFileAsyncPromise(filePath));
        const data = await Promise.all(dataPromises);
        return data.join('\n');
    } catch (error) {
        throw error;
    }
}

aggregateDataPromise(filePaths)
    .then(aggregatedData => {
        console.log('Aggregated Data (Promise):');
        console.log(aggregatedData);
    })
    .catch(error => {
        console.error('Error:', error);
    });
