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
  // 1-6 хүртэлх санамсаргүй тоог авна
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  // Шооны зургийг гаргаж ирнэ
  diceDom.style.display = "block";
  // Буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ.
  diceDom.src = "dice-" + diceNumber + ".png";
  // Буусан тоо нь 1-ээс ялгаатай бол идэвхиэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.
  if (diceNumber !== 1) {
    // 1 ээс ялгаатай тоо буусан тул тоог тоглогчид нэмж өгнө.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
    document.getElementById("current-" + activePlayer).textContent = 0;
    roundScore = 0;
    // 1 буусан тул тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ.
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    // Идэвхитэй тоглогчийг заасан улаан цэгийг шилжүүлэх
    document.querySelector(".player-0-panel ").classList.toggle("active");
    document.querySelector(".player-1-panel ").classList.toggle("active");
    // Шоо 1 буувал харагдахгүй болгох
    diceDom.style.display = "none";
  }
});
