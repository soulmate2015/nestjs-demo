import { Catch } from '@nestjs/common';
import { DemoException } from '../exceptions/demo.exception';

@Catch(DemoException)
export class DemoExceptionFilter {
  catch(exception, response) {
    const status = exception.getStatus();

    response.status(status).json({
      status: 'error',
      message: 'It is a message from the exception filter.',
    });
  }
}