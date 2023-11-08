const quiz = [
  {
    question: "となりのトトロの主題歌は誰が歌ってる？",
    answers: ["井上ななお", "井上かずこ", "井上あずみ", "井上さくら"],
    correct: "井上あずみ",
  },
  {
    question: "ハウルの動く城でハウルの声優を担当した人は？",
    answers: ["国分太一", "木村拓哉", "大野智", "香取慎吾"],
    correct: "木村拓哉",
  },
  {
    question: "魔女の宅急便で出てくるパン屋の名前は？",
    answers: ["パン工場", "グーチョキパン", "マジョパン", "ルパン"],
    correct: "グーチョキパン",
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;
//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickhandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！");
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    //問題数がまだあればこちらに実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert(
      "終了！あなたの正解数は" + score + "/" + quizLength + "です！"
    );
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickhandler(e);
  });
  handlerIndex++;
}
