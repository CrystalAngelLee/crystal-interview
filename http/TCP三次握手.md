# TCP 建立连接的三次握手过程

参考： http://c.biancheng.net/view/6425.html

1. 客户端向服务器发送 SYN 报文（SEQ=x，SYN=1），并进入 SYN_SENT 状态，等待服务器确认
2. - 服务器收到了客户端的请求，向客户端回复一个确认信息（ACK=x+1）
   - 服务器再向客户端发送一个 SYN 包（SEQ=y）建立连接的请求，此时服务器进入 SYN_RECV 状态
3. 客户端收到服务器的回复（SYN+ACK 报文）。此时，客户端也要向服务器发送确认包（ACK）。此包发送完毕客户端和服务器进入 ESTABLISHED 状态，完成 3 次握手

# tcp 三次握手，一句话概括

客户端发送报文到服务端进行通信，客户端拿到报文然后返回一个组装后的报文给客户端，表示确认是否进行通信，客户端拿到报文后表示客户端和服务端通信没有问题，然后进行确认通信，也就是再次组装一个报文发送给服务端进行确认通信。

