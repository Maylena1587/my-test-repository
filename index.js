// const totalArr = [
//     [0, 0, 1, 0, 0],
//     [0, 1, 0, 1, 0],
//     [1, 0, 0, 0, 1],
//     [0, 1, 0, 1, 0],
//     [0, 0, 1, 0, 0],
// ];




// const matrix = [
//   [0, 0, 1, 0, 0],
//     [0, 1, 0, 1, 0],
//     [1, 0, 0, 0, 1],
//     [0, 1, 0, 1, 0],
//     [0, 0, 1, 0, 0],
// ];


// for (let i = 0; i < matrix.length; i += 1) {
// //   console.log(matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log(matrix[i][j]);
      
//   }
// }


// let one = " ";
// let n = " ";
// for (i = 0; i <= totalArr; i++) {
    
//   if (i % 2 === 0) {
//       one = "1";
//       console.log(one);
//   }
    
    
    
// }

// for (a = 0; a > (totalHight / 2)+1; a++) {
//     n += "0";
    
//     console.log(n);
// }
// rhombus
// function fn(n){
//    for(let i=1; i<=n; i++){
//    let str='';
//     for(let j=n-i; j>0; j--){
//      str+=' ';
//     }
//     for(let j=1; j<=i*2-1; j++){
//      str+='*';
//     }
//    console.log(str);
//  }
//     for (var i=2; i<=n; i++){
//       var str='';
//       for (var j=0; j<i-1; j++){
//        str+=' ';
//      }
//       for (var j=(n-i)*2+1; j>0; j--){
//        str+='*';
//      }
//      console.log(str);
//  }
// }
// fn(5)
function fn(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = n - i; j > 0; j--) {
            str += ' ';
            console.log(str);
        }
        for (let j = 1; j <= i * 2 - 1; j++) {
            str += '*';
            
        }
        for (var i = 2; i <= n; i++) {
            // var str = '';
            console.log([i]);
        }
    }
}
fn(5)
  function fn(arr){
    for(let i=1; i<=arr; i++){
    let str='';
     for(let j=arr-i; j>0; j--){
      str+=' ';
     
        }
        for (let j = 1; j <= i * 2 - 1; j++) {
            str += '*';
           console.log(str); 
        }
        }
    }
        fn(5)  