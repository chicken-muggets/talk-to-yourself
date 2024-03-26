talked = 0
w = "Type your first message"
function start() {
    while true {
        w= prompt(w,"respond");
        talked ++
        getElementById("talkedamount").innerHTML = "you have talked to yourself" + talked + "times"
    }
}
