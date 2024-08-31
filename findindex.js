//findIndex()


// if (null)
//     console.log("1")
// if ({})
// if ([])
// if (42)
// if ("0")
// if ("false")
// if (new Date())
// if (-42)
// if (12n)
// if (3.14)
// if (-3.14)
// if (Infinity)
// if (-Infinity)

// let array1 = [6, 5, 13, 14, 15];
// let isLargeNumber = (element) => element > 10;
// console.log(isLargeNumber(2))
// console.log(array1.find(isLargeNumber));

// let arr = [10, 20, 20, 30, 10, 60];
// let arr = [10, 20, 20, 30, 10, 60];

// function test(element)  {
//     console.log("element : " + element)
    // return "HEllo";
//   }
// console.log(
//   arr.findIndex(test)
// );

// console.log(arr.find(element => element === 30));

// let arr1 = [100, 200, 300, 400, 500, 600];
// arr1.forEach(test)
// console.log(arr1.forEach(test))

// console.log(
//   arr.findIndex((element, index) => {
//     return element == 60;
//   })
// );

// console.log(
//   arr.findIndex((element, index) => {
//     return element === 100;
//   })
// );

// arr.splice(
//   arr.findIndex((element, index) => {
//     return element == 20;
//   }),
//   1
// );

// console.log(arr);
// arr.splice(
//   arr.findIndex((element, index) => {
//     return element == 50;
//   }),
//   1
// );

// console.log(arr);

let arr1 = [
    { cost: "100 INR" },
    { cost: "200 INR" },
    { cost: "400 INR" },
    { cost: "300 $" },
    { cost: "500 INR" },
    { cost: "600 INR" },
    { cost: "700 INR" },
  ];
  arr1.splice(
  //   arr1.findIndex((element, index) => {
  //     return element.cost == "300 $";
  //   })
  
    
  );
  console.log(arr1);
  
  /*
      //map()
      console.log(
          [1,2,3,4,5].map((element,index)=>{
              return element*100;   
          })
      );
      //[ 100, 200, 300, 400, 500 ]
  
      console.log(
          [1,2,3,4,5].map(element=>element*10)
      );
      //[ 10, 20, 30, 40, 50 ]
  */
  
  /*
      //filter()
      console.log(
          [1,2,3,4,5].filter((element,index)=>{
              return element>=3;
          })
      );
      //[ 3, 4, 5 ]
  
      console.log(
          [1,2,3,4,5].map((element,index)=>{
              return element*100;
          }).filter((element,index)=>{
              return element>=600;
          })
      );
  */
  
  /*
  console.log(
      [1,2,3,4,5].reduce((firstElement,nextElement)=>{
          return firstElement+nextElement;
      })
  );
  //15
  
  
  console.log(
      [1,2,3,4,5].reduce((firstElement,nextElement)=>{
          return firstElement+nextElement;
      },100)
  );
  //115
  
  
  
  console.log(
      [1,2,3,4,5].map((element,index)=>{
          return element*100;
      }).filter((element,index)=>{
          return element>=300;
      }).reduce((firstElement,nextElement)=>{
          return firstElement+nextElement;
      })
  );
  
  //1200
  */
  
  /*
  //reduceRight()
  console.log(
      ["ES11","To","Welcome"].reduceRight((firstElement,nextElement)=>{
          return firstElement+" "+nextElement;      
      })
  );
  //Welcome To ES11
  */
  
  /*
  console.log(
      [1,[2],[3],[4]].flat(1)
  );
  
  //[ 1, 2, 3, 4 ]
  
  console.log(
      [[[[1]]],[[[[[[[2]]]]]]],[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]].flat(Infinity)
  );
  
  //[ 1, 2, 3 ]
  */
  
  /*
  let arr1 = [1,2,3];
  let arr2 = ["one","two","three"]
  //[[1,"one"],[2,"two"],[3,"three"]]
  //[1,"one",2,"two",3,"three"]
  
  console.log(
      arr1.flatMap((element,index)=>{
          return [ element,arr2[index] ]
      })
  );
  //[ 1, 'one', 2, 'two', 3, 'three' ]
  */
  
  /*
  let arr1 = [1,2,3,1,2,3];
  // arr1.forEach((element,index)=>{
  //     console.log( arr1.indexOf(element) );
  // })
  
  console.log(
      arr1.filter((element,index)=>{
          return arr1.indexOf(element) === index;
      })
  );
  */
  
  /*
      //sort()
      //ascending / descending
      console.log(
          [1,5,2,4,3].sort((arg1,arg2)=>{
              return arg1-arg2;
          })
      );
  
      //[ 1, 2, 3, 4, 5 ]
  
  
      console.log(
          [5,1,2,4,3].sort((arg1,arg2)=>{
              return arg2-arg1;
          })
      );
      //[ 5, 4, 3, 2, 1 ]
  
  
      console.log(
          [1,5,2,4,3].sort((arg1,arg2)=>{
              return arg1-arg2
          })[1]
      );          //2
  
  
      console.log(
          [1,5,2,4,3].sort((arg1,arg2)=>{
              return arg2-arg1;
          })[1]
      );          //4 
  */
  
  /*
  
  //reverse()
  //used to reverse the array elements
  console.log(
      [1,2,3,4,5].reverse()
  );
  //[ 5, 4, 3, 2, 1 ]
  
  
  console.log(
      Array.from("Hello").reverse().toString().replaceAll(",","")
  );
  
  //[ 'H', 'e', 'l', 'l', 'o' ]
  //[ 'o', 'l', 'l', 'e', 'H' ]
  //o,l,l,e,H
  //ol,l,e,H
  //olleH
  
  
  let arr = ["Angular","React","NodeJS","VueJS"];
  //Res 1: ["VueJS","NodeJS","React","Angular"]
  //Res 2: ["ralugnA","tcaeR","SJedoN","SJeuV"]
  //Res 3: ["SJeuV","SJedoN","tcaeR","ralugnA"]
  
  */
  
  /*
  console.log(
      "welcome to fullstack ui".substr(0,7)
  );
  
  //welcome
  
  
  
  console.log(
      "welcome to fullstack ui".substr(1,2)
  );
  
  //el
  
  console.log(
      "welcome to fullstack ui".substr(-2,2)
  );
  
  //ui
  
  
  
  console.log(
      "welcome to es6".substring(0,7)
  );
  //welcome
  
  
  console.log(
      "welcome to es6".substring(8,10)
  );
  
  
  
  console.log(
      "welcome to es6".substring(11)
  );          //es6
  
  
  
  
  //forEach()
  ["Hello_1","Hello_2"].forEach((element,index)=>{
      console.log(element);
  });
  
  
  for(let element of ["Hello_1","Hello_2"]){
      console.log(element);
  }
  
  
  let obj = {
      "key1":"Hello_1",
      "key2":"Hello_2",
      "key3":"Hello_3"
  };
  
  for(let key in obj){
      console.log( obj[key] );
  }
  */
  
  /*
  let arr1 = [10,20,30,40,50,60,70,80,90,100];
  arr1.copyWithin(2);
  console.log(arr1);          //[10,20,10,20,30,40,50,60,70,80]
  
  
  let arr2 = [10,20,30,40,50,60,70,80,90,100];
  arr2.copyWithin(5);
  console.log(arr2);  //[10,20,30,40,50,10,20,30,40,50]
  
  
  let arr3 = [10,20,30,40,50,60,70,80,90,100]
  arr3.copyWithin(8);
  console.log(arr3);    //[10,20,30,40,50,60,70,80,10,20]
  
  
  let arr4 = [10,20,30,40,50,60,70,80,90,100];
  arr4.copyWithin(2,4);
  console.log(arr4);          //[10,20,50,60,70,80,90,100,90,100]
  
  
  let arr5 = [10,20,30,40,50,60,70,80,90,100];
  arr5.copyWithin(3,6);
  console.log(arr5);    //[10,20,30,70,80,90,100,80,90,100]
  
  
  let arr6 = [10,20,30,40,50,60,70,80,90,100];
  arr6.copyWithin(2,4,7);
  console.log(arr6);      //[10,20,50,60,70,60,70,80,90,100]
  
  
  let arr7 = [10,20,30,40,50,60,70,80,90,100];
  arr7.copyWithin(1,5,8);
  console.log(arr7);          //[10,60,70,80,50,60,70,80,90,100]
  */
  
  /*
  let arr = [10,20,30,40,50];
  let arr1 = arr.fill(100);                    
  console.log(arr1);                      //[ 100, 100, 100, 100, 100 ]
  
  let arr2 = arr1.fill(200,1);
  console.log(arr2);                      //[ 100, 200, 200, 200, 200 ]
  
  let arr3 = arr2.fill(300,2);
  console.log( arr3 );                    //[ 100, 200, 300, 300, 300 ]
  
  let arr4 = arr3.fill(400,3,4);
  console.log(arr4);                      //[ 100, 200, 300, 400, 300 ]
  
  let arr5 = arr4.fill(500,4);
  console.log(arr5);                      //[ 100, 200, 300, 400, 500 ]
  */
  
  //some()
  // console.log(
  //   [10, 20, 30, 40, 50].some((element, index) => {
  //     return element >= 50;
  //   })
  // );
  //true
  
  //every()
  // console.log(
  //   [1, 2, 3, 4, 5].every((element, index) => {
  //     return element >= 1;
  //   })
  // );
  //true
  
  //includes()
  // console.log(["hello_1", "hello_2"].includes("hello_1"));
  
  //true
  
  // console.log(["hello_1", "hello_2"].includes("hello"));
  
  //false
  
  //find()
  // console.log(
  //   [1, 2, 3, 4, 5].find((element, index) => {
  //     return element == 10;
  //   })
  // );
  