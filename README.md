# 后台管理系统

> 这是一个 vue+vuex+vue-router+axios+elementUI搭建的一个后台管理系统天加了通过>从后台获取权限来控制路由权限的功能但是因为自己没有后台所以只能从本地获取假数>据来模拟从后台获取数据了其实可以从本地启用的node服务上设置假数据的但是为了给>大家介绍一个json-server的前端用来经常用来模拟假数据的一个包从而在其他的没有搭>建webpack的时候一个全局从来实现模拟假数据减少前后端进行调试的时间,所以要大家>要额外安装一个包带来的麻烦敬请谅解,但是也是可以给前端的以后工作带来很多的方便里边我还用了webpack去中心化思想的require.context(参数1,参数2,参数3)方法进行加载文件只需要添加相应规则的文件就可以了不需要再手动添加引入了,如果这个架子有什么好的建议或者不明白的可以希望加我微信号(1932488122).

## 运行项目

``` bash
# 先本地全局安装json-server包
npm install -g  json-server
# 再从新启用一个 命令行窗口 启动一个node的服务
json-server  --watch db.json 

# 安装项目的依赖包
npm install 
# 开始运行项目(开发环境可以通过config里的index.js文件的的proxyTable对象里边设置代理跨域)
npm run dev

# 上线部署的时候打包命令
npm run build
```