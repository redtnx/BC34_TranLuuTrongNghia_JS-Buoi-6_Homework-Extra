document.getElementById("timSo").onclick = function () {
  var soNguyen = document.getElementById("soNguyen").value * 1;
  var ketQua = "";

  for (var iSo = 2; iSo <= soNguyen; iSo++) {
    var checkSNT = true;
    for (var i = 2; i <= Math.sqrt(iSo); i++) {
      if (iSo % i === 0) {
        checkSNT = false;
        break;
      }
    }
    if (checkSNT) {
      ketQua += iSo + " ";
    }
  }
  document.getElementById("kq").innerHTML =
    "Các số nguyên tố lần lượt là: " + ketQua;
};
