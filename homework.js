// Vòng lặp lồng nhau
const diem = 5;

if (diem < 4) {
    console.log("Học Lại");
} else {
    if (diem >= 4 && diem < 5.5) {
        console.log("Loại D");
    } else {
        if (diem >= 5.5 && diem < 7) {
            console.log("Loai C");
        } else {
            if (diem >= 7 && diem < 8.5) {
                console.log("Loại B");
            } else {
                if (diem >= 8.5 && diem <= 10) {
                    console.log("Loai A");
                } else {
                    console.log("Điểm không hợp lệ");
                }
            }
        }
    }
}
// Turtle

clear()
lt(30)
fd(50)
rt(60)
fd(50)
rt(120)
fd(50)
rt(60)
fd(50)
for(;;)
lt(150)
fd(50)
rt(60)
fd(50)
rt(120)
fd(50)
rt(60)
fd(50)

color("red")

// Tính chỉ số BMI
let height = prompt ("Nhập vào chiều cao của bạn");
let weight = prompt ("Nhập vào cân nặng của bạn");
let mass = (height*100);
let BMI = mass / (height*height);
console.log (BMI);

if (BMI < 16) {
    console.log("Thiếu cân nặng");
} else {
    if (BMI >= 16 && diem < 18.5) {
        console.log("Thiếu cân");
    } else {
        if (BMI >= 18.5 && diem < 25) {
            console.log("Bình thường");
        } else {
            if (BMI >= 25 && diem < 30) {
                console.log("Thừa cân");
            } else {
                if (BMI >30) {
                    console.log("Béo phì");
                } 
            }
        }
    }
}