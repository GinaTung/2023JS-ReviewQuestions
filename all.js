//題目1：相加產生器 (+)

function add(x,y){
    return x+y;
}
// input 輸入
// 呼叫函式並將結果印出
console.log(add(1, 1)); // 顯示 2
console.log(add(2, 2)); // 顯示 4
console.log(add(3, 3)); // 顯示 6



//題目2：相減產生器 (-)
function subtract(x,y){
    return x-y;
}
// input 輸入
console.log(subtract(1,1));
console.log(subtract(2,3));
console.log(subtract(8,3));



//題目3：相乘三次 (*)
function multiply3Times(x) { 
    return x*x*x;
 }
// input 輸入
console.log(multiply3Times(3));
console.log(multiply3Times(0));
console.log(multiply3Times(9));



// 題目4：取 2 的餘數（%）
function remainder(x){
    return x%2;
}
// input 輸入
console.log(remainder(3));
console.log(remainder(2));
console.log(remainder(8));

// 題目5：取 2 的餘數 + 判斷是否可整除 (% + 結果判斷)
function isDivisible(x){
    return x%2===0 ? "已整除":"未整除"
}
// input 輸入
console.log(isDivisible(3));
console.log(isDivisible(2));
console.log(isDivisible(8));

// 題目6：我要存錢(區域變數、全域變數)
// 請透過 addBankMoney 函式，來累加 bankMoney 變數

let bankMoney = 0;

// <!-- 作答開始  -->
function addBankMoney(num){
  return bankMoney+=num;
}
// <!-- 作答結束  -->

// input 輸入
console.log(addBankMoney(1));
console.log(addBankMoney(50));
console.log(addBankMoney(10));

// 題目7：簡單計算機
function calculate(x,y,z){
    if(z === "+"){
        return x+y;
    }else if(z === "-"){
        return x-y;
    }else if(z === "*"){
        return x*y;
    }else if(z === "/"){
        return x/y;
    }else{
        return "請重新提供數值"
    }
    
}
// input 輸入
console.log(calculate(3,5,'+'));
console.log(calculate(4,2,'-'));
console.log(calculate(7,9,'*'));
console.log(calculate(5,5,'/'));

// 題目8：簡單計算機 + 顯示算式過程
function calculateProcess(x,y,z){
    if(z === "+"){
        return x+"+"+y+"="+(x+y);
    }else if(z === "-"){
        return x+"-"+y+"="+(x-y);
    }else if(z === "*"){
        return x+"*"+y+"="+(x*y);
    }else if(z === "/"){
        return x+"/"+y+"="+(x/y);
    }else{
        return "請重新提供數值"
    }
}
// input 輸入
console.log(calculateProcess(3,5,'+'));
console.log(calculateProcess(4,2,'-'));
console.log(calculateProcess(7,9,'*'));
console.log(calculateProcess(5,5,'/'));

// 題目9：商業邏輯題：增加服務費
// <!-- 作答開始 -->
function serviceCharge(num){
  return num*1.05;
}
// <!-- 作答結束  -->
const total = serviceCharge(100);
console.log(`您總計費用為 ${total}元`)

// 題目10：重構題：消除重複，抽離變因
// 第一個參數為冰的數量
// 兩個函式裡面的服務費都是一樣的，可以嘗試抽出來成一個新函式 serviceCharge，專門來計算兩間店的服務費
function serviceCharge(num,number){
    const subTotal = num*number;
    const serviceCharge = subTotal * 0.1;
    const total = subTotal + serviceCharge;
    return total;
}

function sixAngleCalculate(num){
    return serviceCharge(num,100);

  }
  
  //
  function eightAngleCalculate(num){
    return serviceCharge(num,800);
  }
  
  console.log(sixAngleCalculate(1),eightAngleCalculate(1))