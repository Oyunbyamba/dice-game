// Тоглоомын бүх газарт зарлагдах глобаль хувьсагчдийг энд зарлая
// Тоглоом дууссан эсэхийг хадгалах төлөвийн хувьсагч
var isNewGame;
// Тоглогчийн ээлжийг хадгалах хувьсагч /1-р тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэе./
var activePlayer;
// Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
var scores;
// Идэвхитэй тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore;
// Шооны зургийг үзүүлэх элементийг DOM-оос хайж олоод энд хадгална.
var diceDom = document.querySelector(".dice");
// Тоглоомыг эхлүүлнэ
initGame();
// Тоглоом шинээр эхлэхэд бэлтгэх функц
function initGame() {
  // Тоглоом эхэллээ гэсэн төлөвд оруулна
  isNewGame = true;
  // Идэвхитэй тоглогчыг 1-р тоглогч болгоно
  activePlayer = 0;
  // Тоглогчдын нийт цуглуулсан оноог 0 болгоно
  scores = [0, 0];
  // Тоглогчын тухайн ээлжиндээ цуглуулсан оноог 0 болгоно
  roundScore = 0;
  // Дэлгэц дээр харагдах оноонуудыг 0 болгоно
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.querySelector("#score-0").textContent = 0;
  diceDom.style.display = "none";
  // Тоглогчдын нэрийг буцааж гаргах
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  // Тоглогчдын CSS төлөвийг буцаан анхны төлөвд оруулах
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

// Шоо шидэх эвэнт листенер (Roll dice товч олж, эвэнт листенертэй холбох)
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (isNewGame) {
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
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      // Шоо 1 буусан үед хийх үйлдэлүүд (Тоглогчийн ээлж солих функц дуудна.)
      switchToNextPlayer();
    }
  } else {
    alert(
      "Уучлаарай, тоглоом дууссан байна ... Та 'NEW GAME' товч дарж шинээр эхлэнэ үү"
    );
  }
});

// HOLD товчны эвэнт листенер
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (isNewGame) {
    // Уг тоглогчийн цуглуулсан ээлжийн оноог глобаль оноон дээр буюу scores дээр нэмж өгнө.
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // Дэлгэц дээрх цуглуулсан оноог харуулах
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    // Идэвхитэй тоглогч хожсон эсэхийг шалгах (Цуглуулсан оноо нь 100-аас их буюу тэнцүү байх)
    if (scores[activePlayer] >= 50) {
      // Тоглоомыг дууссан төлөвд шилжүүлнэ
      isNewGame = false;
      // WINNER гэсэн текстийг тоглогчийн Player -гэсэн нэрнийх нь оронд гаргана.
      document.getElementById("name-" + activePlayer).textContent =
        "WINNER !!!";
      // Ялагчийн CSS -д winner гэсэн class нэмэх
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      // Ялагчийн нэрний ард идэвхитэй гэдгийг заасан улаан тэмдэгийг арилгах (active class-ыг хасах)
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      // Тоглогчийн ээлж солино
      switchToNextPlayer();
    }
  } else {
    alert(
      "Уучлаарай, тоглоом дууссан байна ... Та 'NEW GAME' товч дарж шинээр эхлэнэ үү"
    );
  }
});

// Тоглогчийн ээлж солих функц
function switchToNextPlayer() {
  // Шоо 1 буусан үед хийх үйлдэлүүд (Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.)
  document.getElementById("current-" + activePlayer).textContent = 0;
  roundScore = 0;
  // 1 буусан тул тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  // Идэвхитэй тоглогчийг заасан улаан цэгийг шилжүүлэх
  document.querySelector(".player-0-panel ").classList.toggle("active");
  document.querySelector(".player-1-panel ").classList.toggle("active");
  // Шоо 1 буусан тул харагдахгүй болгох
  diceDom.style.display = "none";
}
// NEW GAME - товчны эвэнт листенер
document.querySelector(".btn-new").addEventListener("click", initGame);
