// STUDY  
// 1. What is nested list?
// Danh sách lồng nhau là danh sách các mảng chứa các phần tử dạng string hoặc int trùng với phần tử ở một mảng khác và ngược lại
// 2. Can a list store both integers and strings in it?
// Có

// Exercise 3:
// 1. let menu = ["T-shirt","Sweater"]

// for(let i = 0; i < menu.length; i++) {
//         let food = menu[i];
//         console.log(`Chung toi co cac mat hang : ${i+1}.${food}`);
//     }

//2. let menu = ["T-shirt","Sweater","Jeans"]
// const newItem = "Jeans";
// const answer = prompt("Add new item jeans? (y/n)").toLocaleLowerCase();
// if (answer === 'n')
// console.log ("good bye!")
// else if (answer === 'y')
// menu.push(newItem);
// console.log("Chung toi co cac mat hang" + menu);

// 3. let menu = ["T-shirt","Sweater","Jeans"]
// menu[1] = "skirt";
// console.log(menu)


// 4. let menu = ["T-shirt","Skirt","Jeans"]
// menu.splice(2,1)
// console.log(menu);

// Exercise 4:
// 4.1 let sheep = ["5","7","300","90","24","50","75"]
// for(let i = 0; i < sheep.length; i++) {
//         let size = sheep[i];
//         console.log(`Hello, my name is Quang and these are my sheep sizes : ${i+1}.${size}`);
//     }


// 4.2 
// let sheep = ["5","7","300","90","24","50","75"]
// const maxsheep = Math.max.apply(Math, sheep); 
// console.log("Giá trị lớn nhất là " +maxsheep);

// 4.3
// let sheep = ["5","7","300","90","24","50","75"]
// sheep[2] = "8";
// console.log(sheep);


//  4.6
// function getsum (s1, s2 , s3 , s4 , s5 , s6 , s7 ) {
// document.write('Tong kich thuoc la' + (s1+s2+s3+s4+s5+s6+s7));}
// getsum (Number(prompt("cuu s1"),prompt("cuu s2"),prompt("cuu s3"),prompt("cuu s4"),prompt("cuu s5"),prompt("cuu s6"),prompt("cuu s7")));
