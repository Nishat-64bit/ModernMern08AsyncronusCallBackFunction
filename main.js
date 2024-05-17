
//// learn callback function , call hell function(recommeded)
// syncronus func 
// console.log("hello")
// console.log("hello1")
// console.log("hello2")
// console.log("hello3") 

// output : serially asve 

// ============ ae nicer function gulao synchronus

// function func1() {
//     console.log("hello func1");
// }
// function func2() {
//     console.log("hello func2");
// }
// function func3() {
//     console.log("hello func3");
// }
// function func4() {
//     console.log("hello func4");
// }

// func1();
// func2();
// func3();
// func4();

/// Ayncronus func 

// Asncronus task : data fetch : online hote data collect kora , dB update kora 
// ==============================================
// function func1() {
//     console.log("hello func1");
// }
// function func2() {
//     console.log("hello func2");
// }
// function func3() {
//     // settimeout ekta aynscronus task tai eta ektu somoy nibe 
//     setTimeout(()=>{
//         console.log("hello func3");
//     },1000)
// }
// function func4() {
//     console.log("hello func4");
// }
// func1();
// func2();
// func3();
// func4();
// ==============================================
// /**
//   hello func1
// hello func2
// hello func4
// hello func3 // 1s somoy nea then tarpor asve 
//  


// ekton ami cie func1 , func2 , fun4 , then fun3 asve taile ? 
// time ta barie den func3 er 3000 kore den baas 

// ! ekon ami cie je func1 , func2 , fun4  tar ayncronus kaj er aage fun3 ke run korabe kibabe korbo?
//Example : 
// ==============================================
// function uiUpdate() {
//     console.log("hello uiUpdate");
// }
// function datafetch() {
//     setTimeout(()=>{
//         console.log("hello datafetch");
//     },1000)
// }
// datafetch()
// uiUpdate()
// ==============================================
// hello uiUpdate
//hello datafetch
// karon datafetch e aysnchronus kaj hoise tai datafetch jodio aage call kora hoise kintu se pore asce


//! kintu ami cie aage datafetch hok then uiupdate aeta sababik
// ==============================================
// function uiUpdate() {
//     console.log("hello uiUpdate");
// }
// function datafetch() {
//     setTimeout(()=>{
//         console.log("hello datafetch");
//         uiUpdate() // ami cie aage data fecth hobe then uiupdate call hobe
//     },1000)
// }
// datafetch()
// ==============================================



// ! kintu ami cie je callback function use kore jinista korte ??
// ==============================================
// function uiUpdate() {
//     console.log("hello uiUpdate");
// }
// function datafetch(callback) {
//     // callback = uiupdate
//     setTimeout(()=>{
//         console.log("hello datafetch");
//         callback() // uiupdate()
        
//     },1000)
// }
// datafetch(uiUpdate) 
// ==============================================
// tahole aage datafecth call hocce then datafecth er argument uiUpdate  mane 1st funct er reference bebohar korlam 
// then seta datafetch er bitore parameter callback = uidate hisebe store korlam 
// then datafetch er kaj ses hole ami callback ta call korlam 


//!  ekon ami cie je aage datafecth , then uiupdate, then uiExtend ?
// ==============================================
// function uiExtend() {
//     console.log("hello uiExtend");
// }

// function uiUpdate(AgainCallback) {
//     // uiextend = AgainCallback 
//     console.log("hello uiUpdate");
//     AgainCallback() // uiextend ()= AgainCallback()
// }
// function datafetch(callback) {
//     // callback = uiupdate
//     setTimeout(()=>{
//         console.log("hello datafetch");
//         callback(uiExtend) // uiupdate() = callBack()
//         // jehoto ami cie je uiupdate er er pore uiExtend hok taile er bitore uiextend er reference ta naw
        
//     },1000)
// }
// datafetch(uiUpdate) 
// ==============================================

//============================= now lets move on callback hell (recommended) ===========================

// ==============================================
// function uiUpdate() {
//     console.log("hello uiUpdate");
// }
// function datafetch(callback) {
//     // callback = function
//     setTimeout(()=>{
//         console.log("hello datafetch");
//         callback() // callback() = function(){ uiupdate() }
//     },1000)
// }
// datafetch(function(){
//     uiUpdate()
// }) 
// ==============================================



// ! callback hell Ex-1
// ==============================================
// function func1() {
//     console.log("hello func1");
// }

// function func2(callBack) {
//     // callback = function()
//     console.log("hello func2");
//     callBack()
// }


// func2(function(){
//     console.log("i am annoymous");
// })
// ==============================================
// output: 
// hello func2
// i am annoymous


// callback hell Ex-2
// ==============================================
// function func1() {
//     console.log("hello func1");
// }

// function func2(callBack) {
//     // callback = function()
//     setTimeout(()=>{
//         console.log("this is func2");
//         callBack()
//         // callback() = function( func1())  // 1st function nige run then tar bitore func1 o run
//         // callback ()= func1()
//     },1000)
    
// }


// func2(function(){
//     console.log("i am annoymous");
//     func1()
// })
// ==============================================
// this is func2
// i am annoymous
// hello func1

// karon func2 er argument function hisebe save korce
// then func2 parameter callback = function ta raklam 
// func2  tar aynscronus kaj korlo 
// then se callbak ke call korlo that means function ke call korlo , sei pailo output : I am annonimous
// function ke jokon se call korlo tokon sei funtion er bitore func1()
// that means func1 = callback() , that means you call func1()


// callback hell Ex-3

// ! ekon ami  cie func5 er pore func2 asve  
// ==============================================
// function func5(x) {
//     //x = func2
//     console.log("hello func5");
//     x() // func2()  
// }
// function func4() {
//     console.log("hello func4");
// }

// function func3() {
//     console.log("hello func3");
// }

// function func2() {
//     console.log("hello func2");
// }

// function func1() {
//     console.log("hello func1");
// }

// function func0() {
//     console.log("hello func0");
// }

// func5(func2)
// ==============================================
// hello func5
// hello func2


// =============================  Call back Hell function syncronus way =====================================
// way func5 , func2 , func0  , func1 ,func4 , func3 
// ==============================================
// function func5(callBack) {
//     //callBack = function(func2)
//     console.log("hello func5");
//     callBack() // callBack = func2()
    
// }


// function func4(AgainCallback3) {
//     // func4 e AgainCallback3 = function( func3() )
//     console.log("hello func4");
//     AgainCallback3() // func3()
// }


// function func3() {
//     console.log("hello func3");
// }


// function func2(AgainCallback) {
//     // func2 er AgainCallback = function(func0())  
//     console.log("hello func2");
//     AgainCallback()
// }

// function func1(AgainCallback2) {
//     // func1 er AgainCallback2 = function(func4())
//     console.log("hello func1");
//     AgainCallback2() // func4()
// }

// function func0(AgainCallback1) {
//  // func0 er AgainCallback1 = function(func1())
//     console.log("hello func0");
//     AgainCallback1() // func1() ke call korsi
  

// }

// func5(function(){ 
//     func2(function(){
//         func0(function(){
//             func1(function(){
//                 func4(function(){
//                     func3()
//                 })
//             })
//         })
//     })
// })
// ==============================================
// hello func5
// hello func2
// hello func0
// hello func1
// hello func4
// hello func3

// =============================  Call back Hell function  Asyncronus way =====================================
// ==============================================
// function func5(callBack) {
//     setTimeout(()=>{
//     //callBack = function(func2)
//     console.log("hello func5");
//     callBack() // callBack = func2()
//     },7000)
   
    
// }


// function func4(AgainCallback3) {
//     setTimeout(()=>{
//     // func4 e AgainCallback3 = function( func3() )
//     console.log("hello func4");
//     AgainCallback3() // func3()
//     },8000)
   
// }


// function func3() {
//     setTimeout(()=>{
//         console.log("hello func3");
//     },4000)

// }


// function func2(AgainCallback) {
//     setTimeout(()=>{
//     // func2 er AgainCallback = function(func0())  
//     console.log("hello func2");
//     AgainCallback()
//     },9000)
    
// }

// function func1(AgainCallback2) {
//     setTimeout(()=>{
//     // func1 er AgainCallback2 = function(func4())
//     console.log("hello func1");
//     AgainCallback2() // func4()
//     },10000)
    
// }

// function func0(AgainCallback1) {
//     setTimeout(()=>{
//     // func0 er AgainCallback1 = function(func1())
//     console.log("hello func0");
//     AgainCallback1() // func1() ke call korsi
//     },300)
 
  

// }

// func5(function(){ 
//     func2(function(){
//         func0(function(){
//             func1(function(){
//                 func4(function(){
//                     func3()
//                 })
//             })
//         })
//     })
// })
// ==============================================

// //  se callback hell e jei seriall e ase seta somoy nie hole o siraally reke tarpor asve

// // hello func5
// // hello func2
// // hello func0
// // hello func1
// // hello func4
// // hello func3


// // know about W3scoll callback and callback w3school 

// /// so now we want fun5 value to func2 , func2 to func0 , func0 to func1 , func1 to func4 , func4 to func3 ?

// // lets give an example ;

// function xyz(){
//     let x = "Nishat";
//     return x ; 
// }

// let returnValue = xyz() // x er return value xyz() e save hocce
// console.log(returnValue);
// Nishat karon aeta synchronus tai ,
// then baki aynchronus gulo asve .
//hello func5
// hello func2
// hello func0
// hello func1
// hello func4
// hello func3

// oke now how to pass data in callback function ? 
