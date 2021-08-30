worker主线程:

 1）通过 worker = new Worker( url ) 加载一个JS文件来创建一个worker，同时返回一个worker实例。

 2）通过worker.postMessage( data) 方法来向worker发送数据。

 3）绑定worker.onmessage方法来接收worker发送过来的数据。

 4）可以使用 worker.terminate() 来终止一个worker的执行。

WebSocket是Web应用程序的传输协议，它提供了双向的，按序到达的数据流。他是一个Html5协议，WebSocket的连接是持久的，他通过在客户端和服务器之间保持双工连接，服务器的更新可以被及时推送给客户端，而不需要客户端以一定时间间隔去轮询。

