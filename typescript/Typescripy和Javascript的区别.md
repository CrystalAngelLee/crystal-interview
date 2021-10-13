什么是TypeScript
TypeScript是微软开发的，javascript的超集，遵循ES6规范（2015年推出）

javascript实现了ES5规范，TypeScript实现了ES6规范

es6属于js的规范实现，浏览器会去适配，ts不会

以后浏览器升级，就会按照ES6的方向类适配

然而typscript只是说我们开发人员用的语言，到时候还是要编译成ES5、ES6的规范的，才能在浏览器跑

js理论上可以在任何环境跑，但是es6离开了浏览器就不能跑了
你在浏览器运行，浏览器知道他是个啥，在安卓跑他就不知道这是啥
TypeScript是Angular2的开发语言，通俗的说angular2是用TypeScript编写的。

TypeScript 的优势
下面列举 TypeScript 相比于 JavaScript 的显著优势：

静态输入
静态类型化是一种功能，可以在开发人员编写脚本时检测错误。查找并修复错误是当今开发团队的迫切需求。有了这项功能，就会允许开发人员编写更健壮的代码并对其进行维护，以便使得代码质量更好、更清晰。

大型的开发项目
有时为了改进开发项目，需要对代码库进行小的增量更改。这些小小的变化可能会产生严重的、意想不到的后果，因此有必要撤销这些变化。使用TypeScript工具来进行重构更变的容易、快捷。

更好的协作
当发开大型项目时，会有许多开发人员，此时乱码和错误的机也会增加。类型安全是一种在编码期间检测错误的功能，而不是在编译项目时检测错误。这为开发团队创建了一个更高效的编码和调试过程。

更强的生产力
干净的 ECMAScript 6 代码，自动完成和动态输入等因素有助于提高开发人员的工作效率。这些功能也有助于编译器创建优化的代码。

JavaScript 的优势
相比于 TypeScript，JavaScript 也有一些明显优势。

人气
JavaScript 的开发者社区仍然是巨大而活跃的，在社区中可以很方便地找到大量成熟的开发项目和可用资源。

学习曲线
由于 JavaScript 语言发展的较早，也较为成熟，所以仍有一大批开发人员坚持使用他们熟悉的脚本语言 JavaScript，而不是学习 TypeScript。

本地浏览器支持
TypeScript 代码需要被编译（输出 JavaScript 代码），这是 TypeScript 代码执行时的一个额外的步骤。

不需要注释
为了充分利用 TypeScript 特性，开发人员需要不断注释他们的代码，这可能会使项目效率降低。

灵活性
有些开发人员更喜欢 JavaScript 的灵活性。

**TypeScript和JavaScript的区别**
TypeScript 可以使用 JavaScript 中的所有代码和编码概念，TypeScript 是为了使 JavaScript 的开发变得更加容易而创建的。例如，TypeScript 使用类型和接口等概念来描述正在使用的数据，这使开发人员能够快速检测错误并调试应用程序
TypeScript 从核心语言方面和类概念的模塑方面对 JavaScript 对象模型进行扩展。
JavaScript 代码可以在无需任何修改的情况下与 TypeScript 一同工作，同时可以使用编译器将 TypeScript 代码转换为 JavaScript。
TypeScript 通过类型注解提供编译时的静态类型检查。
TypeScript 中的数据要求带有明确的类型，JavaScript不要求。
TypeScript 为函数提供了缺省参数值。
TypeScript 引入了 JavaScript 中没有的“类”概念。
TypeScript 中引入了模块的概念，可以把声明、数据、函数和类封装在模块中。

