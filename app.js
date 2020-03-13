// Тоглогчийн ээлжийг хадгалах хувьсагч /1-р тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэе./
var activePlayer = 0;

// Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Идэвхитэй тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгийг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var diceNumber = Math.floor(Math.random() * 6) + 1;
var diceDom = document.querySelector(".dice");

// <div class="player-score" id="score-0">43</div>
// document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").textContent = dice;
// document.querySelector(".dice").console.log("Шоо " + diceNumber);

// Програм эхлэхэд бэлтгэе ...
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
// document.querySelector(".dice").style.display = "none";
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

document.querySelector("#score-0").textContent = 0;
// Roll dice товч олж, эвэнт листенертэй холбох
document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
  //   alert("Шоо буулаа : " + diceNumber);
});
