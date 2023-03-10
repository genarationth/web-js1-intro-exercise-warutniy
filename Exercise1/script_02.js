function myFunction() {
    let text;
    let person = prompt("What your name");
    if (person == null || person == "") {
      text = "";
    } else {
      text = person;
    }
    document.getElementById("name").innerHTML = text;
  }