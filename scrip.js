

//
function calculatePrice() {
  var country = document.getElementById("country").value;
  var subtotal = 1200000;
  var discount = 0;

  if (country === "vietnam") {
    discount = 200000;
  }

  var total = subtotal - discount;

  document.getElementById("discount").innerHTML = discount.toLocaleString("vi-VN") + " đ";
  document.getElementById("total").innerHTML = total.toLocaleString("vi-VN") + " đ";
  document.getElementById("bsmart-discount").innerHTML = discount.toLocaleString("vi-VN") + " đ";
  document.getElementById("subtotal").innerHTML = subtotal.toLocaleString("vi-VN") + " đ";
  document.getElementById("h3-tag").innerHTML = total.toLocaleString("vi-VN") + " đ";
  document.getElementsByClassName("body-payment-hr")[0].style.display = "block";
}
///
const questionButton = document.querySelector('.question__button');
const questionContent = document.querySelector('.question__content');
const popup = document.getElementById('myPopup');
const popupQuestion = document.querySelector('.popup__question');
const popupExit = document.querySelector('.popup__exit');
const popupClose = document.querySelector('.popup__close');

questionButton.addEventListener('click', () => {
  popupQuestion.innerHTML = questionContent.innerHTML;
  popup.style.display = 'block';
});

popupExit.addEventListener('click', () => {
  popup.style.display = 'none';
});

popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});
//
const questionButton1 = document.querySelector('.question__button1');
const questionContent1 = document.querySelector('.question__content1');
const popup1 = document.getElementById('myPopup1');
const popupQuestion1 = document.querySelector('.popup__question1');
const popupExit1 = document.querySelector('.popup__exit1');
const popupClose1 = document.querySelector('.popup__close1');

questionButton1.addEventListener('click', () => {
  popupQuestion1.innerHTML = questionContent1.innerHTML;
  popup1.style.display = 'block';
});

popupExit1.addEventListener('click', () => {
  popup1.style.display = 'none';
});

popupClose1.addEventListener('click', () => {
  popup1.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup1.style.display = 'none';
  }
});

/// xoa
// Lấy danh sách các khóa học
var courses = document.getElementsByClassName('mainmid-text');

// Đếm số lượng khóa học và cập nhật số lượng lên phần tử có id="number"
document.getElementById('number').innerHTML = courses.length;
//pageuser
let divs = document.getElementsByTagName("div");
let count = 0;
for (let i = 0; i < divs.length; i++) {
if (divs[i].className === "body-mid-infor-boder-main") {
    count++;
}
console.log(count);
}
const deleteButtons = document.querySelectorAll('.btn-xoa');
const numberElement = document.getElementById('number'); // lấy phần tử có id="number"

deleteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const elementToRemove = button.closest('.mainmid-text');
    elementToRemove.remove();
    const count = document.querySelectorAll('.body-mid-infor-boder-main').length; // đếm số phần tử có class "body-mid-infor-boder-main"
    numberElement.textContent = count; // cập nhật số lượng phần tử vào phần tử có id="number"
  });
});

const deleteBtns = document.querySelectorAll('.btn-xoa');
deleteBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    const target = document.getElementById(targetId);
    target.remove();
  });
});
/// Momo
const momoButton = document.querySelector('.btn-momo');
const viettelButton = document.querySelector('.btn-viettel');
const paymentPopup = document.querySelector('.payment-popup');
const paymentPopup1 = document.querySelector('.payment-popup-1');

momoButton.addEventListener('click', () => {
  paymentPopup.style.display = 'block';
});

viettelButton.addEventListener('click', () => {
  paymentPopup1.style.display = 'block';
});
//
// Get the payment buttons
// const momoButtonn = document.getElementsByClassName('button-momo');
// const viettelButtonn = document.getElementById('viettel-payment');

// Add event listeners to the buttons
momoButton.addEventListener('click', startCountdown);
viettelButton.addEventListener('click', startCountdown1);

// Countdown function
function startCountdown() {
  // Get the countdown element
  const countdownElement = document.getElementById('countdown');

  // Set the initial time in seconds
  let timeLeft = 5;

  // Start the countdown
  const countdownInterval = setInterval(() => {
    timeLeft--;
    countdownElement.innerText = timeLeft;

    // Check if the time has run out
    if (timeLeft === 0) {
      clearInterval(countdownInterval);

      // Hide the payment popup
      const paymentPopup = document.querySelector('.payment-popup');
      paymentPopup.style.display = 'none';
    }
  }, 1000);
}

function startCountdown1() {
  // Get the countdown element
  const countdownElement = document.getElementById('countdown1');

  // Set the initial time in seconds
  let timeLeft = 5;

  // Start the countdown
  const countdownInterval = setInterval(() => {
    timeLeft--;
    countdownElement.innerText = timeLeft;

    // Check if the time has run out
    if (timeLeft === 0) {
      clearInterval(countdownInterval);

      // Hide the payment popup
      const paymentPopup = document.querySelector('.payment-popup-1');
      paymentPopup.style.display = 'none';
    }
  }, 1000);
}
//--------------------------------------------tinh tien



