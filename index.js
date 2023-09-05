import LinkedList from "./linked-list.js";

let list = new LinkedList();
list.prepend("3");
list.prepend("2");
list.prepend("1");
list.append("5");
list.append("6");
list.prepend("0");
console.log(list.toString());
console.log(`List is ${list.size()} long`);
console.log("The head is", list.head());
console.log("The tail is", list.tail());
console.log("Index 4 is", list.at(4));
list.pop();
console.log(list.toString());
list.insertAt("4", 4);
list.insertAt("hello", 2);
console.log(list.toString());
list.removeAt(2);
console.log(list.toString());
console.log(list.contains("1"))
console.log(list.find("5"));