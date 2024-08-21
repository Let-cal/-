let rejectCount = 0;
const initialAgreeWidth = 400;
const initialAgreeHeight = 200;
const initialFontSize = 50; // Kích thước font ban đầu của thẻ <p> trong button "Đồng ý"
const maxRejectCount = 5; // Số lần bấm tối đa trước khi ẩn button "Từ chối"

// Kích thước ban đầu của rejectBtn
const initialRejectWidth = 400;
const initialRejectHeight = 200;
const initialRejectFontSize = 50; // Kích thước font ban đầu của thẻ <p> trong button "Từ chối"

// Hàm để di chuyển rejectBtn đến vị trí ngẫu nhiên
function moveRejectBtn() {
  const bodyWidth = document.body.clientWidth;
  const bodyHeight = document.body.clientHeight;

  // Tính toán vị trí ngẫu nhiên
  const randomX = Math.random() * (bodyWidth - 100); // Trừ 100 để tránh button bị ra khỏi khung
  const randomY = Math.random() * (bodyHeight - 10); // Trừ 10 để tránh button bị ra khỏi khung

  // Cập nhật vị trí của rejectBtn
  const rejectBtn = document.getElementById("rejectBtn");
  rejectBtn.style.position = "absolute";
  rejectBtn.style.left = `${randomX}px`;
  rejectBtn.style.top = `${randomY}px`;
}

document.getElementById("rejectBtn").addEventListener("click", function () {
  rejectCount++;
  let agreeBtn = document.getElementById("agreeBtn");
  let agreeText = agreeBtn.querySelector("p");

  let rejectBtn = document.getElementById("rejectBtn");
  let rejectText = rejectBtn.querySelector("p");

  // Tăng kích thước của agreeBtn
  let newAgreeWidth = initialAgreeWidth + rejectCount * 200;
  let newAgreeHeight = initialAgreeHeight + rejectCount * 200;
  let newAgreeFontSize = initialFontSize + rejectCount * 20;

  agreeBtn.style.width = newAgreeWidth + "px";
  agreeBtn.style.height = newAgreeHeight + "px";
  agreeText.style.fontSize = newAgreeFontSize + "px";

  // Giảm kích thước của rejectBtn
  let newRejectWidth = initialRejectWidth - rejectCount * 40;
  let newRejectHeight = initialRejectHeight - rejectCount * 20;
  let newRejectFontSize = initialRejectFontSize - rejectCount * 4;

  // Đảm bảo kích thước không giảm quá nhỏ
  if (newRejectWidth > 50) {
    rejectBtn.style.width = newRejectWidth + "px";
  }
  if (newRejectHeight > 20) {
    rejectBtn.style.height = newRejectHeight + "px";
  }
  if (newRejectFontSize > 10) {
    rejectText.style.fontSize = newRejectFontSize + "px";
  }

  // Di chuyển rejectBtn đến vị trí ngẫu nhiên
  moveRejectBtn();

  // Thay đổi hình ảnh trong <div class="gif">
  const gifImage = document.querySelector(".gif img");
  if (gifImage) {
    gifImage.src = "meme-buon-yody-vn1.jpg"; // Thay đổi src của hình ảnh
  }

  if (rejectCount > maxRejectCount) {
    document.getElementById("rejectBtn").style.display = "none"; // Ẩn button "Từ chối" sau 5 lần bấm
  }
});

// Hàm để phát nhạc và hiển thị phần tử sau khi ẩn `thankYouMessage`
function showAudioApologize() {
  // Hiển thị `audioApologize` và phát nhạc
  const audioApologize = document.querySelector(".audioApologize");
  const audio = document.getElementById("audio");
  audioApologize.style.display = "flex";
  audio.play();

  // Thực hiện hiệu ứng fadeIn
  fadeIn();
}

document.getElementById("agreeBtn").addEventListener("click", function () {
  // Ẩn thẻ div Apologize
  document.querySelector(".Apologize").style.display = "none";

  // Hiển thị thẻ div thankYouMessage
  const thankYouMessage = document.getElementById("thankYouMessage");
  thankYouMessage.style.display = "flex";

  // Ẩn thẻ div thankYouMessage sau 5 giây và gọi hàm để hiển thị và phát nhạc
  setTimeout(function () {
    thankYouMessage.style.display = "none";
    showAudioApologize();
  }, 5000); // 5 giây
});
