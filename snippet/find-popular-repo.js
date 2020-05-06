function findPopular() {
  let rows = document.getElementsByClassName("Box-row");
  let arrRows = Array.from(rows);
  arrRows.forEach((row) => {
    const star = row
      .getElementsByClassName("flex-justify-end")[0]
      .getElementsByClassName("text-bold")[0].innerText;
    if (star > 50) {
      window.open(
        row.getElementsByClassName("text-bold")[0].getAttribute("href"),
        "_blank"
      );
    }
  });
    document.getElementsByClassName("BtnGroup-item")[1].click();
    setTimeout(function () {
      findPopular();
    }, 5000);
}
findPopular();
