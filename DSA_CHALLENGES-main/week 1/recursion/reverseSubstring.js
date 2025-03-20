function subString(str, sub1, sub2) {
  let i1 = str.indexOf(sub1);
  let i2 = str.indexOf(sub2);
  if (i1 === -1 || i2 === -1) {
    return str;
  }
  let revsub1 = sub1.split("").reverse().join("");
  let revsub2 = sub2.split("").reverse().join("");

  let before = str.substring(0, i1);
  let between = str.substring(i1 + sub1.length, i2);
  let after = str.substring(i2 + sub2.length);
  let reversedString = before + revsub1 + between + revsub2 + after;

  return subString(reversedString,sub1,sub2)
}


const string = "hello world";
const str1 = "hello";
const str2 = "world";

console.log(subString(string, str1, str2));