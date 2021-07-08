// 阅读下面代码，我们只考虑浏览器环境下的输出结果，写出它们结果打印的先后顺序，并分析出原因
new Promise((resolve, reject) => {
  console.log("A");
  setTimeout(() => {
    console.log("B");
  }, 0);
  console.log("C");
  resolve();
  console.log("D");
})
  .then(() => {
    console.log("E");
    new Promise((resolve, reject) => {
      console.log("F");
      resolve();
      console.log("G");
    })
      .then(() => {
        setTimeout(() => {
          console.log("H");
        }, 0);
        console.log("I");
      })
      .then(() => {
        console.log("J");
      });
  })
  .then(() => {
    console.log("K");
  });

setTimeout(() => {
  console.log("L");
}, 0);

new Promise((resolve, reject) => {
  console.log("M");
  resolve();
}).then(() => {
  setTimeout(() => {
    new Promise((resolve, reject) => {
      console.log("N");
      resolve();
    })
      .then(() => {
        setTimeout(() => {
          console.log("O");
        }, 0);
      })
      .then(() => {
        console.log("P");
      });
  }, 0);
});

console.log("Q");

// 第1轮: 同步任务执行输出 A, C, D, M, Q  宏任务等待 && 微任务等待
// 宏任务列表: Promise-1:setTimeout, setTimeout,
// 微任务列表: Promise-1.then(第一个), Promise-2.then, Promise-1.then(第二个)

// 第2轮：Promise-1.then(第一个)执行输出 E, F, G 微任务执行, 宏任务等待
// 宏任务列表: Promise-1:setTimeout, setTimeout,
// 微任务列表: Promise-2.then, Promise-1.then(第一个)-Promise.then(第一个), Promise-1.then(第二个), Promise-1.then(第一个)-Promise.then(第二个)

// 第3轮：Promise-2.then执行-遇到宏任务，入队 微任务执行, 宏任务等待
// 宏任务列表: Promise-1:setTimeout, setTimeout, Promise-2.then-setTimeout
// 微任务列表: Promise-1.then(第一个)-Promise.then(第一个), Promise-1.then(第二个), Promise-1.then(第一个)-Promise.then(第二个)

// 第4轮：Promise-1.then(第一个)-Promise.then(第一个)执行输出 I  微任务执行, 宏任务等待
// 宏任务列表: Promise-1:setTimeout, setTimeout, Promise-2.then-setTimeout, Promise-1.then(第一个)-Promise.then(第一个)-setTimeout
// 微任务列表: Promise-1.then(第二个), Promise-1.then(第一个)-Promise.then(第二个)

// 第5轮：Promise-1.then(第二个)执行输出 K  微任务执行, 宏任务等待
// 宏任务列表: Promise-1:setTimeout, setTimeout, Promise-2.then-setTimeout, Promise-1.then(第一个)-Promise.then(第一个)-setTimeout
// 微任务列表: Promise-1.then(第一个)-Promise.then(第二个)

// 第6轮：Promise-1.then(第一个)-Promise.then(第二个)执行输出 J  微任务执行, 宏任务等待
// 宏任务列表: Promise-1:setTimeout, setTimeout, Promise-2.then-setTimeout, Promise-1-then-Promise-then-setTimeout

// 第7轮：Promise-1:setTimeout执行输出 B  宏任务执行
// 宏任务列表: setTimeout, Promise-2.then-setTimeout, Promise-1-then-Promise-then-setTimeout

// 第8轮：setTimeout执行输出 L  宏任务执行
// 宏任务列表: Promise-2.then-setTimeout, Promise-1-then-Promise-then-setTimeout

// 第9轮：Promise-2.then-setTimeout执行输出 N（遇到promise 创建微任务）  宏任务执行
// 宏任务列表: Promise-1-then-Promise-then-setTimeout
// 微任务列表: Promise-2.then-setTimeout.then.then

// 第10轮：Promise-2.then-setTimeout.then执行输出 （遇到宏任务，入队）  微任务执行, 宏任务等待
// 宏任务列表: Promise-1-then-Promise-then-setTimeout, Promise-2.then-setTimeout.then-setTimeout
// 微任务列表: Promise-2.then-setTimeout.then(第二个then)

// 第11轮：Promise-2.then-setTimeout.then(第二个then)执行输出 P  微任务执行, 宏任务等待
// 宏任务列表: Promise-1-then-Promise-then-setTimeout, Promise-2.then-setTimeout.then-setTimeout

// 第12轮：Promise-1-then-Promise-then-setTimeout执行输出 H  宏任务执行
// 宏任务列表: Promise-2.then-setTimeout.then-setTimeout

// 第13轮：Promise-2.then-setTimeout.then-setTimeout执行输出 O  宏任务执行

// A, C, D, M, Q, E, F, G, I, K, J, B, L, N, P, H, O
