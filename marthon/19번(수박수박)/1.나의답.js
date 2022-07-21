function solution(n) {
  let a = "";
  let watermelon = [];
  for (i = 0; i < n; i++) {
    a = i % 2 === 0 ? "수" : "박";
    //홀수에는 '수' 짝수에는 '박'
    watermelon.push(a);
  }
  let result = watermelon.join("");
  //join은 배열을 합쳐서 문자열로 구현
  //join('')배열 구분자인,을 지우고 구현
  return result;
}

//다른사람 풀이
function waterMelon(n){
  var result = "";
for(var i=1; i<=n; i++) {
  i % 2 === 1 ? result += "수" : result += "박"
}
return result;
}
