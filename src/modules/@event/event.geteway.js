import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { setInterval } from 'timers';

@WebSocketGateway()
export class IoGateway {
  @WebSocketServer()

  // 获取io
  afterInit(io) {
    this.io = io;
  }
  
  // 连接事件
  handleConnection(socket) {
    // console.log(`连接 - ${socket.id}`);
    socket.emit('CONNECT');
    setInterval(() => {
      socket.emit('TEST_MSG', `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`);
    }, 1000);
  }

  // 断开连接事件
  handleDisconnect(socket) {
    // console.log(`断开连接 - ${socket.id}`);
    socket.emit('DISCONNECT');
  }

}