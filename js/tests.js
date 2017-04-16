var res = "1111111111"
function check_me() {
    var count = 0
    with (document.test) {
        if (!Q1[0].checked && !Q1[1].checked && !Q1[2].checked && !Q1[3].checked && !Q1[4].checked) {
            count += 1
        }
        ;
        if (!Q2[0].checked && !Q2[1].checked && !Q2[2].checked && !Q2[3].checked && !Q2[4].checked) {
            count += 1
        }
        ;
        if (!Q3[0].checked && !Q3[1].checked && !Q3[2].checked && !Q3[3].checked && !Q3[4].checked) {
            count += 1
        }
        ;
        if (!Q4[0].checked && !Q4[1].checked && !Q4[2].checked && !Q4[3].checked && !Q4[4].checked) {
            count += 1
        }
        ;
        if (!Q5[0].checked && !Q5[1].checked && !Q5[2].checked && !Q5[3].checked && !Q5[4].checked) {
            count += 1
        }
        ;
        if (!Q6[0].checked && !Q6[1].checked && !Q6[2].checked && !Q6[3].checked && !Q6[4].checked) {
            count += 1
        }
        ;
        if (!Q7[0].checked && !Q7[1].checked && !Q7[2].checked && !Q7[3].checked && !Q7[4].checked) {
            count += 1
        }
        ;
        if (!Q8[0].checked && !Q8[1].checked && !Q8[2].checked && !Q8[3].checked && !Q8[4].checked) {
            count += 1
        }
        ;
        if (!Q9[0].checked && !Q9[1].checked && !Q9[2].checked && !Q9[3].checked && !Q9[4].checked) {
            count += 1
        }
        ;
        if (!Q10[0].checked && !Q10[1].checked && !Q10[2].checked && !Q10[3].checked && !Q10[4].checked) {
            count += 1
        }
        ;
        if (count > 0) {
            alert("Вы выполнили не все задания. Проверьте себя!")
        }
        else answer()
    }
}

function control(k, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10) {
    if (k == 1 && f1.checked) return true;
    if (k == 2 && f2.checked) return true;
    if (k == 3 && f3.checked) return true;
    if (k == 4 && f4.checked) return true;
    if (k == 5 && f5.checked) return true;
    if (k == 6 && f6.checked) return true;
    if (k == 7 && f7.checked) return true;
    if (k == 8 && f8.checked) return true;
    if (k == 9 && f9.checked) return true;
    if (k == 10 && f10.checked) return true;
    return false;
}

function answer() {
    answ = "";
    with (document) {
        answ += control(res.charAt(0), test.Q1[0], test.Q1[1], test.Q1[2], test.Q1[3], test.Q1[4]) ? "1" : "0"
        answ += control(res.charAt(1), test.Q2[0], test.Q2[1], test.Q2[2], test.Q2[3], test.Q2[4]) ? "1" : "0"
        answ += control(res.charAt(2), test.Q3[0], test.Q3[1], test.Q3[2], test.Q3[3], test.Q3[4]) ? "1" : "0"
        answ += control(res.charAt(3), test.Q4[0], test.Q4[1], test.Q4[2], test.Q4[3], test.Q4[4]) ? "1" : "0"
        answ += control(res.charAt(4), test.Q5[0], test.Q5[1], test.Q5[2], test.Q5[3], test.Q5[4]) ? "1" : "0"
        answ += control(res.charAt(5), test.Q6[0], test.Q6[1], test.Q6[2], test.Q6[3], test.Q6[4]) ? "1" : "0"
        answ += control(res.charAt(6), test.Q7[0], test.Q7[1], test.Q7[2], test.Q7[3], test.Q7[4]) ? "1" : "0"
        answ += control(res.charAt(7), test.Q8[0], test.Q8[1], test.Q8[2], test.Q8[3], test.Q8[4]) ? "1" : "0"
        answ += control(res.charAt(8), test.Q9[0], test.Q9[1], test.Q9[2], test.Q9[3], test.Q9[4]) ? "1" : "0"
        answ += control(res.charAt(9), test.Q10[0], test.Q10[1], test.Q10[2], test.Q10[3], test.Q10[4]) ? "1" : "0"

        showResult();
    }
}

function showResult() {
    var nok = 0;
    var i, s;

    for (i = 0; i < answ.length; i++) {
        nok += answ.charAt(i) == "1" ? 1 : 0;
    }
    if (nok == 10) s = "ОТЛИЧНО";
    if (nok < 10) s = "ХОРОШО";
    if (nok < 7.5) s = "УДОВЛЕТВОРИТЕЛЬНО";
    if (nok < 5) s = "НЕУДОВЛЕТВОРИТЕЛЬНО";
    document.test.s1.value = "Количество правильных ответов " + nok + ". Ваша оценка  " + s + ". Посмотрите на окно рядом с номером вопроса. Если ответ правильный, там (+). Если ответ ошибочен, там (-).";

    with (document.test) {
        if (answ.charAt(0) == "1") {
            T1.value = " + "
        } else {
            T1.value = " - "
        }
        ;
        if (answ.charAt(1) == "1") {
            T2.value = " + "
        } else {
            T2.value = " - "
        }
        ;
        if (answ.charAt(2) == "1") {
            T3.value = " + "
        } else {
            T3.value = " - "
        }
        ;
        if (answ.charAt(3) == "1") {
            T4.value = " + "
        } else {
            T4.value = " - "
        }
        ;
        if (answ.charAt(4) == "1") {
            T5.value = " + "
        } else {
            T5.value = " - "
        }
        ;
        if (answ.charAt(5) == "1") {
            T6.value = " + "
        } else {
            T6.value = " - "
        }
        ;
        if (answ.charAt(6) == "1") {
            T7.value = " + "
        } else {
            T7.value = " - "
        }
        ;
        if (answ.charAt(7) == "1") {
            T8.value = " + "
        } else {
            T8.value = " - "
        }
        ;
        if (answ.charAt(8) == "1") {
            T9.value = " + "
        } else {
            T9.value = " - "
        }
        ;
        if (answ.charAt(9) == "1") {
            T10.value = " + "
        } else {
            T10.value = " - "
        }
        ;
    }
}
function showhide(obj) {
    if (obj == 'none') return 'inline';
    else return 'none';
}