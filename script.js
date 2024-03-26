talked = 0
w = "Type your first message"
while true {
    w= prompt(w,"respond");
    talked ++
    getElementById("talkedamount").innerHTML = "you have talked to yourself {talked} amount"
}
