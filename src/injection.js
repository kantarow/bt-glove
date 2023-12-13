class ScanManagerMock {
  constructor() {
    this.readCallback = null;
  }

  setReadCallback(callback) {
    this.readCallback = window[callback];
  }

  clearReadCallback() {
    this.readCallback = null;
  }

  startRead() {}
  stopRead() {}

  isReading() {
    return false;
  }
  lockScanner() {
    return true;
  }
  unlockScanner() {
    return true;
  }
  

  onRead(result) {
    if (this.readCallback != null) {
      this.readCallback(result);
    }
  }
}

class NotificationUtilMock {
  startBuzzer(tone, onPeriod, offPeriod, repeatCount) {
    return true;
  }

  startVibrator(onPeriod, offPeriod, repeatCount) {
    return true;
  }
}

const scanManager = new ScanManagerMock();
window._scanManager = scanManager;
const notificationManager = new NotificationUtilMock();
window._notificationUtil = notificationManager;

const handySetUpEvent = new CustomEvent("handysetup")
window.dispatchEvent(handySetUpEvent)

var codeSubmitButton = document.getElementById('codeSubmitButton');

codeSubmitButton.onclick = function() {
  var codeInput = document.getElementById('codeInput');
  var code = codeInput.value;
  const result = {
    mDecodeResult: "SUCCESS",
    mCodeType: "QRCode",
    mStringData: code
  }
  window._scanManager.onRead(result);
  console.log(result)
}
