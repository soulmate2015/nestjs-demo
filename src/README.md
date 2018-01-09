### Nest 框架优势

1. nest采用模块隔离原则，标准引入输出，将以前无序的文档结构组织整理为有序的节点分布，减小50%的内存消耗，为模块化开发过程提供了环境
2. nest采用依赖注入，IOC控制反转等技术，将业务代码部分和流程控制部分高度解耦，针对不同开发组织暴露不同的接口环境，大大降低了依赖程度
3. nest使用编译型构建，在编译之初就能将存在的代码问题检测分析出来，减小了线上生产的风险
4. nest移植性能高，可以无缝切换node使用场景，不用改动代码即可切换web模式和微服务模式
5. 最为重要的一点，nest改进了开发人员之间的资源共享模式，大大提升了模块复用率，一方面提高了模块的高可用性，另一方面也减小了重复开发工作量，模块之间的即插即用使得业务的组合更为灵活

### Nest 提供了一组自定义的装饰器，你可以使用它们来标记参数

| *Nest*                      | *Express*                         |
| :-------------------------- | :-------------------------------- |
| `@Request()`                | `req`                             |
| `@Response()`               | `res`                             |
| `@Next()`                   | `next`                            |
| `@Session()`                | `req.session`                     |
| `@Param(param?: string)`    | `req.params / req.params[param]`  |
| `@Body(param?: string)`     | `req.body / req.body[param]`      |
| `@Query(param?: string)`    | `req.query / req.query[param]`    |
| `@Headers(param?: string)`  | `req.headers / req.headers[param]`|


### HttpStatus 字典

| <状态码> | <状态标识>                        | <状态描述>        |
| ------- | :-------------------------------- | :--------------- |
|   100   | `CONTINUE`                        |  |
|   101   | `SWITCHING_PROTOCOLS`             |  |
|   102   | `PROCESSING`                      |  |
|   200   | `OK`                              | `成功` |
|   201   | `CREATED`                         |  |
|   202   | `ACCEPTED`                        |  |
|   203   | `NON_AUTHORITATIVE_INFORMATION`   |  |
|   204   | `NO_CONTENT`                      |  |
|   205   | `RESET_CONTENT`                   |  |
|   206   | `PARTIAL_CONTENT`                 |  |
|   300   | `AMBIGUOUS`                       |  |
|   301   | `MOVED_PERMANENTLY`               |  |
|   302   | `FOUND`                           |  |
|   303   | `SEE_OTHER`                       |  |
|   304   | `NOT_MODIFIED`                    |  |
|   307   | `TEMPORARY_REDIRECT`              |  |
|   308   | `PERMANENT_REDIRECT`              |  |
|   400   | `BAD_REQUEST`                     |  |
|   401   | `UNAUTHORIZED`                    |  |
|   402   | `PAYMENT_REQUIRED`                |  |
|   403   | `FORBIDDEN`                       |  |
|   404   | `NOT_FOUND`                       | `找不到资源` |
|   405   | `METHOD_NOT_ALLOWED`              |  |
|   406   | `NOT_ACCEPTABLE`                  |  |
|   407   | `PROXY_AUTHENTICATION_REQUIRED`   |  |
|   408   | `REQUEST_TIMEOUT`                 |  |
|   409   | `CONFLICT`                        |  |
|   410   | `GONE`                            |  |
|   411   | `LENGTH_REQUIRED`                 |  |
|   412   | `PRECONDITION_FAILED`             |  |
|   413   | `PAYLOAD_TOO_LARGE`               |  |
|   414   | `URI_TOO_LONG`                    |  |
|   415   | `UNSUPPORTED_MEDIA_TYPE`          |  |
|   416   | `REQUESTED_RANGE_NOT_SATISFIABLE` |  |
|   417   | `EXPECTATION_FAILED`              |  |
|   422   | `UNPROCESSABLE_ENTITY`            |  |
|   429   | `TOO_MANY_REQUESTS`               |  |
|   500   | `INTERNAL_SERVER_ERROR`           | `系统错误` |
|   501   | `NOT_IMPLEMENTED`                 |  |
|   502   | `BAD_GATEWAY`                     |  |
|   503   | `SERVICE_UNAVAILABLE`             |  |
|   504   | `GATEWAY_TIMEOUT`                 |  |
|   505   | `HTTP_VERSION_NOT_SUPPORTED`      |  |
