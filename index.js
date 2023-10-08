const date = new Date();

if (date.getDate() == 8 && date.getMonth() == 9) {
  document.querySelector(
    ".container"
  ).innerHTML = `<h1> Đợi đến 0h đi bà nội :) `;
} else {
  document.querySelector(".container").innerHTML = `<div class="card">
    <div class="outside">
      <div class="front">
        <p>Happy Birthday Phuong Linh ^^</p>
        <div class="cake">
          <div class="top-layer"></div>
          <div class="middle-layer"></div>
          <div class="bottom-layer"></div>
          <div class="candle"></div>
        </div>
      </div>
      <div class="back"></div>
    </div>
    <div class="inside">
      <p>Chúc chị tuổi mới zui zẻ hơn, xinh đẹp hơn, luôn bình an và hạnh phúc trên chặng đường sắp tới nha &#128156</p>
      <p>P/s: nhấn vô hộp quà để thấy quà ^^</p>
      <h1><a href="https://phongnguyentien.github.io/happy-birthday/gift.html">&#127873;</a></h1>
    </div>
  </div>`;
}
