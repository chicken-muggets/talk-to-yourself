talked = 0
w = "Type your first message"
while(1 === 1) {
    w= prompt(w,"respond");
    talked ++
    getElementById("talkedamount").innerHTML = "you have talked to yourself {talked} amount"
}
