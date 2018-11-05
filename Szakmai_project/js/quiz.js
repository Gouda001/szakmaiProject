  let pos = 0,
    test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;


  function _(x) {
    return document.getElementById(x);
  }

  function closePopupMenu() {
    _("popup_bg").style.display = "none";
  }


  function renderQuestion() {
    if (pos >= questions.length) {
      _("question").innerHTML = questions.length + "-ből " + correct + " kérdésre válaszoltál helyesen";
      if (correct > 2) {
        _("question-num").innerHTML = "Sikeres tesztkitöltés!";
        _("answer").style.display = "none";
        _("answers").style.background = "url('../img/pipa.svg') no-repeat left 90px top";

      } else {
        _("question-num").innerHTML = "Sikertelen tesztkitöltés!";
      }
      document.getElementsByClassName("answer").style.display = "none";
      setTimeout(closePopupMenu, 3000);
      return false;
    }

    _("question-num").innerHTML = "Kérdés " + (pos + 1) + "/" + questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    _("question").innerHTML = question;
    _("ans").innerHTML = chA;
    _("ans1").innerHTML = chB;
    _("ans2").innerHTML = chC;
    _("ans3").innerHTML = chD;
  }

  function checkAnswer(answer) {
    console.log(answer);

    if (answer == questions[pos][5]) {
      //console.log("yep");
      correct++;
      _("answer-bar-" + pos).style.background = "#4B8B3B";
    } else {
      _("answer-bar-" + pos).style.background = "#FF0800";
    }
    pos++;
    renderQuestion();
  }