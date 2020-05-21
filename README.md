# im node端

### 安装依赖
```
npm install
```

### 启动node服务端
```
npm run serve // 用nodemon启动
npm start // 用pm2启动
npm stop // 停掉pm2启动的服务
```

#### 启动MongoDB
```
mongod
```

### 使用MongoDB命令行查找和操作
```
mongo // 进入mongodb命令行
use chat // 进入chat库
db.messages.find() // 查找messages表
db.messages.remove({}) // 清除messages表
```

### 启动Redis
```
redis-server
```

### 用命令行查找redis数据
```
redis-cli // 进入
del myhash // 删除key
hgetall myhash // 获取在哈希表中指定 key 的所有字段和值
```
