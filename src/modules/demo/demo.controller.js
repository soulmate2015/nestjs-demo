import { 
  Get, Post, Res, Body, Req, Param,
  Controller, Bind, Dependencies,
  HttpStatus, UseFilters
} from '@nestjs/common';
import { DemoException } from '../@common/exceptions/demo.exception';
import { DemoExceptionFilter } from '../@common/filters/demo.filter';

@Controller('demo')
@Dependencies('DemoService')
export class DemoController {
  constructor(demoService) {
    this.demoService = demoService;
  }

  // POST /api/demo/create { value: xxx }
  @Post('create')
  @Bind(Body(), Res())
  async create(body, res) {
    const { value = 'defaultCreateValue' } = body;
    const ret = await this.demoService.create(value);
    res.status(HttpStatus.OK).json(ret);
  }

  // GET /api/demo/findAll
  @Get('findAll')
  @Bind(Res())
  async findAll(res) {
    const ret = await this.demoService.findAll();
    res.status(HttpStatus.OK).json(ret);
  }

  // GET /api/demo/findOne/:index
  @Get('/findOne/:index')
  @Bind(Param('index'), Res())
  async find(param, res) {
    const index = parseInt(param, 10);
    const ret = await this.demoService.findOne(index);
    res.status(HttpStatus.OK).json(ret);
  }

  // GET /api/demo/noFound  return {"statusCode":404,"message":"Demo no found"}
  @Get('/noFound')
  @Bind(Res())
  async noFound(res) {
    const ret = await this.demoService.noFound();
    res.status(HttpStatus.OK).json(ret);
  }

  // GET /api/demo/exception return {"statusCode":999,"status":"error","message":"It is a message from the exception filter."}
  @Get('/exception')
  @UseFilters(new DemoExceptionFilter())
  @Bind(Res())
  async exception(res) {
    throw new DemoException();
    // res.status(HttpStatus.OK).json({ status: 'OK' });
  }

  // GET /api/demo/needAuth
  @Get('/needAuth')
  @Bind(Req(), Res())
  async needAuth(req, res) {
    res.status(HttpStatus.OK).json({ status: 'OK' });
  }

  // GET /api/demo/login
  @Get('/login')
  @Bind(Req(), Res())
  async login(req, res) {
    const userInfo = {
      username: 'root',
      password: '123456',
    }
    const ret = await this.demoService.login(userInfo);
    const { access_token, expires_in } = ret;
    res.cookie('jwt', access_token, { maxAge: expires_in, httpOnly: true });
    res.status(HttpStatus.OK).json({ status: 'OK' });
  }
}