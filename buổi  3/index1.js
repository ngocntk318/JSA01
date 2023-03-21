var studentlist = ['a', 'b', 'c', 'd', 'e', 'f']
// console.log(studentlist.length)
// // them phan tu vao mang
// studentlist.push("ngoc");
// // xoa phan tu cua mang
// studentlist.splice(1,1);
// // đọc mảng
// console.log(studentlist[0]);

var computer = {
    brand: "macbook",
    color: "silver",
    os: 'ios',
    ram: 16,
    weight: 1.5
}

for (let x in computer) {
     console.log(computer[x]);
}


// for in đọc thuộc tính obj
//for of đọc thuộc tính của những thứ lặp lại đc


// // cập nhật thay đổi giá trị 
// computer.ram = 120;
// console.log(computer);
// // xoá giá trị
// delete computer.brand;
// console.log(computer);