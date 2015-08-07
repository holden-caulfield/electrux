var serialport = require("serialport");

initSerial();

function initSerial() {
	port = new serialport.SerialPort("/dev/cu.SLAB_USBtoUART", {
	  baudrate: 2400,
	  parser: serialport.parsers.byteLength(4)
	});

	port.on("open", function () {
	  port.on('data', function(data) {
      document.getElementById("messages").append(
        "<p>" + data + "</p>"
      );
    });
  });
}
