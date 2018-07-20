/*
路由分类: 前后路由, 后台路由
  // 注册后台路由
router.get('/xxx', funtion (req, res) {})
router.get('/yyy', funtion (req, res) {})
  // 注册前台路由
<Route path='/login' component={Login}/>
<Route path='/register' component={Register}/>

路由是什么?
  路由就是一个映射关系(key:value), key是path, value是callback或component
*/

/*
注册的异步action
  1. 执行异步代码(发ajax请求)
  2. 有了结果后, 根据结果不同分发不同的同步action
 */

/*
1. async/await的作用
  1). 简化promise的使用
  2). 使用同步编程实现异步流程效果
2. async/await如何使用
  await: 执行一个返回promise的函数, 想直接得到异步返回的结果, 在函数调用的左侧加await
  async: 包含await的语句所在函数定义的左侧加async
*/

/*
   组件的render什么时候执行?
   1. 初始显示
   2. 更新显示
       1). 自身状态变化 : this.setState()
       2). 接收的外部数据属性变化了
*/

/*
  使用mongoose操作mongodb的测试文件
    1. 连接数据库
      1.1. 引入mongoose
      1.2. 连接指定数据库(URL只有数据库是变化的)
      1.3. 获取连接对象
      1.4. 绑定连接完成的监听(用来提示连接成功)
    2. 得到对应特定集合的Model
      2.1. 字义Schema(描述文档结构)
      2.2. 定义Model(与集合对应, 可以操作集合)
    3. 通过Model或其实例对集合数据进行CRUD操作
      3.1. 通过Model实例的save()添加数据
      3.2. 通过Model的find()/findOne()查询多个或一个数据
      3.3. 通过Model的findByIdAndUpdate()更新某个数据
      3.4. 通过Model的remove()删除匹配的数据
*/

/*
 能操作集合数据的model模块
  1. 连接数据库
    1.1. 引入mongoose
    1.2. 连接指定数据库(URL只有数据库是变化的)
    1.3. 获取连接对象
    1.4. 绑定连接完成的监听(用来提示连接成功)
  2. 定义出对应特定集合的Model并向外暴露
    2.1. 字义Schema(描述文档结构)
    2.2. 定义Model(与集合对应, 可以操作集合)
    2.3. 向外暴露Model
*/

/*
  commonjs模块化: 向外暴露的永远是exports的值, 默认值是一个空对象
*/

/*
  1. 获取请求参数数据
  2. 处理数据
  3. 返回响应
*/

/*
  回调函数
    1. 你定义的
    2. 你没有调用
    3. 但最终它执行了
*/

/*
  redux 的三个部分
    1. reducer => 创建并更新state
       reducer 是个返回state的函数，由它更新state
    2. action => 要更新的数据
       action 是一个对象，里面存的是要更新的数据，当然你需要指定key去更新哪部分数据
    3. store => 数据库，里面放着state，这部分是核心
       store 是一个 redux 根据reducer生产的数据库对象，主要用来存放数据
  简单理解三者的关系：
    1. 通过多个reducer实例化store，并在store里产生初始的state
    2. 需要更新state时，调用store的方法传入action即可完成数据更新
*/

/*
    react-redux 库在 redux 中主要引入了
    action、reducer、store 这三个概念，
    action 用于定义一个请求，
    reducer 用于根据 action 产生新状态，
    store 用于存储和管理 state，监听 action，
    将 action 自动分配给 reducer 并根据 reducer 的执行结果更新 state
*/


/*
  chrome调试应用的常用功能：
    react redux
*/

/*
  组件的render什么时候执行?
    1. 初始显示
    2. 更新显示
       1). 自身状态变化 : this.setState()
       2). 接收的外部数据属性变化了
*/