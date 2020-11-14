//value-sampleの取り出し方

var obj = {

  "key-sample": "value-sample",
  "keySample": "value-sample",
  
}

// console.log(obj.key-sample);  //JSではハイフンを認識しないのでエラーが起きる。
console.log(obj["key-sample"]);  //このようにドットではなくキー表記を使用しなければならない。

console.log(obj.keySample);  //OK

var propertyName = "keySample"; 
console.log(obj.propertyName);  //ドット記法だと変数を認識しないのでundifinedになる。
console.log(obj[propertyName]);  //ブラケット記法で""を付けない場合は変数として認識するのでvalue-sampleを取り出せる。
