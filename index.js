var choice = prompt("Choose:\n1. Forward Counting\n2. Backward Counting\n3. Multiplication Table");

if (choice === "1") {
    var end = +prompt("Enter how far to count (e.g., 20)");
    document.write("<div class='output'><b>Forward Counting:</b><br>");
    for (var i = 1; i <= end; i++) {
        document.write(i + " ");
    }
    document.write("</div>");

} else if (choice === "2") {
    var start = +prompt("Enter number to count down from:");
    document.write("<div class='output'><b>Backward Counting:</b><br>");
    for (var i = start; i >= 1; i--) {
        document.write(i + " ");
    }
    document.write("</div>");

} else if (choice === "3") {
    var table = +prompt("Enter table number:");
    var length = +prompt("Enter table length:");
    document.write("<div class='output'><b>Multiplication Table of " + table + ":</b><br>");
    for (var i = 1; i <= length; i++) {
        document.write(table + " × " + i + " = " + (table * i) + "<br>");
    }
    document.write("</div>");

} else {
    document.write("<div class='output'>❌ Invalid Choice! Refresh and try again.</div>");
}