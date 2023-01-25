// import('./node_modules/qr-scanner/qr-scanner.min.js').then((module) => {
//     const QrScanner = module.default;
//     console.log(QrScanner)
    // do something with QrScanner
import QrScanner from "./qr-scanner.min.js";
// import QrScanner from "./node_modules/qr-scanner/qr-scanner.min.js";
// console.log(QrScanner)
const video = document.getElementById('video');
const logElem = document.getElementById('log');
const qrScanner = new QrScanner(
    video,
    result => {
        logElem.innerHTML = result
    },
);
// console.log(qrScanner)
qrScanner.start();
// });