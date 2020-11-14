// https://qiita.com/turmericN/items/a5dbe3faff0bdc99f4d5

const data = `
pineapple,160
apple,80
watermelon,160
grape,160
melon,80
mango,170
banana,80
strawberry,170
peach,160
orange,170
kiwi,80
`

// should print
// apple,80
// melon,80
// banana,80
// kiwi,80
// pineapple,160
// watermelon,160
// grape,160
// peach,160
// mango,170
// strawberry,170
// orange,170

// 【お題】
// printSortedDataに処理を記載して、shoud　print以下の内容が表示されるようにする
// 要件はdataの金額でソートする。同一金額はdataの記載順で表示する。
// dataは改行区切りの文字列である

const printSortedData = (items) => {
  const array_data = items.split("\n").slice(1,-1); //split("\n")で配列を作る → sliceはいらないように見えるが、無いとdataの最初と最後に改行があるので''という空の要素が出来てしまう。それを消すために必要。
  const sort_data  = array_data.slice().sort(function(a,b){  //ここのsliceは本当にいらないはず。無くても同じ結果が帰ってきた。
      const a_plice = Number(a.split(",")[1]);
      const b_plice = Number(b.split(",")[1]);
      if (a_plice < b_plice) return -1;
      if (a_plice > b_plice) return 1;
      return 0;
    // return a_plice - b_plice;  //これでも同じ結果が帰ってきた。
  });
  const result = sort_data.join("\n");
  return result
}

console.log(printSortedData(data))
// apple,80
// melon,80
// banana,80
// kiwi,80
// pineapple,160
// watermelon,160
// grape,160
// peach,160
// mango,170
// strawberry,170
// orange,170


//番外編
console.log("番外編①",data.split("\n").slice(1,-1).sort())  //シンプルに五十音順ソート
// 番外編① [
//   'apple,80',
//   'banana,80',
//   'grape,160',
//   'kiwi,80',
//   'mango,170',
//   'melon,80',
//   'orange,170',
//   'peach,160',
//   'pineapple,160',
//   'strawberry,170',
//   'watermelon,160'
// ]