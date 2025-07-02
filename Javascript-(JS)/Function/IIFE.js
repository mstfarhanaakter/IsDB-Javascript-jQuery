//IIFE regular function

//IIFE হলো এমন একটা function যা declare করার পরপরই নিজে নিজে execute হয়ে যায়।

(function (x, y, z) {
    console.log(x + y + z);
})(5, 6, 4); // ✅ Call এইখানেই করতে হবে

//syntax
// Structure:
// (function(parameters) {
   // logic
// })(arguments);
