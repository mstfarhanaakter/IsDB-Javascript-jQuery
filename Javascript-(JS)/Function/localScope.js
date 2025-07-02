//A function can access all variable in the local scope (private)

function myFunction1() {
    let m = 5;
    let n = 6;
    return m * n;
}
console.log(myFunction()); // output: 30



// ❌ সমস্যা:
// m ও n এখানে ব্যবহার করা হচ্ছে, কিন্তু কখনো ঘোষণা করা হয়নি এই sub() ফাংশনের ভিতরে বা বাইরে।
// যেহেতু m ও n ছিলো শুধুমাত্র myFunction() এর ভিতরে, তাই সেগুলো sub() থেকে দেখা যায় না।
// তাই ReferenceError: m is not defined হবে।

function sub() {
    return m - n
}
console.log(sub()); // error