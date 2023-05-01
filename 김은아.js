example = [[1, 2, 3], [4, [5, 6]], 7, [8, 9]];


//배열 평탄화 함수
function flatten(data) {

  //빈 배열 만들기
  let output = [];

  //매개변수 data를 통해 들어온 데이터를 변수 item에 하나씩 담고
  for (let item of data) {

    //item의 자료형이 배열이라면
    if (Array.isArray(item)) {
      //전개해서 배열에 넣기
      output.push(...flatten(item));
    }

    //item의 자료형이 배열이 아니면 
    else {
      //배열에 넣기
      output.push(item);
    }
  }
  //결과 반환
  return output;
}

console.log(flatten(example));

