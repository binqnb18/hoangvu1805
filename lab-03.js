arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
 // cau a. In ra màn hình console tất cả các phần tử của mảng
//  var arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];

//  for( var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//  }


// cau b Tính tổng các phần tư trong mảng
// var arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// var tong = 0;

// for( var i = 0; i < arr.length; i++) {
//     tong += arr[i];

// }
// console.log("tong la: " + tong);


//c. Tìm phần tử lớn nhất, phần tử nhỏ nhất trong mảng
// var arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// var max = arr[0];
// var min = arr[0];

// for( var i = 1; i < arr.length; i++) {
//     if(arr[1] > max) {
//         max = arr[i];
//     }
//     if(arr[1] < min) {
//         min = arr[i];
//     }
// }
//  console.log("so lon nhat la: " + max);
//  console.log("so nho nhat la: " + min);

//d Tính trung bình cộng các phần tử trong mảng
// var arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// var trungbinhcong = 0;

// for(var i = 0; i < arr.length; i++) {
//     trungbinhcong += arr[i];
// }
// var average = trungbinhcong / arr.length;
// console.log("trung binh cong la: " + average);

//e. Đảo ngược thứ tự các phần tử trong mảng

// var arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// var len = arr.length;

// for( var i = 0; i < len / 2; i++) {
//     var hoandoi = arr[i];
//     arr[i] = arr[len - 1 -i];
//     arr[len - 1 -i] = hoandoi;
// }
// console.log("sau khi hoan doi la: " + arr);

//f Tìm số lần xuất hiện của mỗi phần tử trong mảng 
// var arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// var count = {};

// for(var i = 0; i < arr.length; i++) {
//     var element = arr[i];
//     if(count[element] === undefined) {
//         count[element] = 1;
//     }else{
//         count[element]++;
//     }
// }
// for( var key in count) {
//     console.log(key + " xuat hien " + count[key] + " lan ");
// }

//g. Chèn phần tử 117 vào đầu mảng
// var arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// var chen = 117;

// var saukhichen = [chen];

// for(var i = 0; i < arr.length; i++) {
//     saukhichen.push(arr[i]);
// }
// console.log(saukhichen);

//h. Kiểm tra xem mảng có phải là mỗi dãy số tăng dần hay không
// var arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// var tangdan = true;

// for( var i = 0; i < arr.length - 1; i++) {
//     if(arr[i] > arr[i + 1]) {
//         tangdan = false;
//         break;
//     }
// }
// if (tangdan) {
//     console.log("la day so tang dan.");
// } else {
//     console.log("la day so khong tang dan.");
// }

//i. Sắp xếp mảng theo thứ tự tăng dần
var arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
var n = arr.length;

for( var i = 0; i < n - 1; i++){
    for( var j = 0; j < n - i -1; j ++) {
        if(arr[j] > arr[j + 1]){
            var tangdan = arr[j];
            arr[j] = arr[j +1];
            arr[j + 1] = tangdan;
        }
    }
}
console.log("mang sau khi tang dan la." + arr);

var arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
var n = arr.length;

for( var i = 0; i < n - 1; i++) {
    for( var j = 0; j < n - i -1; j++) {
        if(arr[j] < arr[j+1]) {
            var giamdan = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = giamdan;
        }
    }
}

console.log("mang sau khi giam da la." + arr);

