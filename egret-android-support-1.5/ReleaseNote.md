##Egret Android Support Release Notes 
---

###Egret Android Support 1.5 Release Notes
--
更新时间：2014年12月12日

- **[新特性]** WebSocket接口支持
- **[改进]** 游戏入口文件的启动方式
- **[改进]** 重构graphics相关的JavaScript绑定代码部分
- **[改进]** APP崩溃后的错误的抛出
- **[变更]** 游戏资源搜索的优先级
- **[修复]** 触摸点坐标不正确的bug
- **[修复]** 5.0弹出键盘的bug
- **[修复]** 其它的bug

####已知问题
- 5.0 字体显示bug



###Egret Android Support 1.1.4 Release Notes
--
更新时间：2014年11月28日

- **[新特性]** 增加本地游戏以zip包的方式发布
- **[改进]** 游戏文件管理模块
- **[改进]** 重构EgretRuntime
- **[改进]** 重构错误和不当的变量名
- **[变更]** 游戏资源搜索的优先级
- **[修复]** Clip引发的触摸bug
- **[修复]** ColorTransform的bug
- **[修复]** 接入第三方sdk时的bug
- **[修复]** 游戏加载egret动态库的bug
- **[修复]** 其它的bug



###Egret Android Support 1.1.2 Release Notes
---
更新时间：2014年10月31日

- **[新特性]** 增加EGTView接口
- **[新特性]** 增加全局ColorTransform接口
- **[改进]** 使用裁切替换矩形蒙板的性能
- **[改进]** V8的垃圾回收
- **[变更]** setGlobalAlpha接口
- **[修复]** 下载中游戏退出的崩溃BUG
- **[修复]** 修复若干BUG


###Egret Android Support 1.1.1 ReleaseNote
---
更新时间：2014年10月17日

- **[新特性]** 增加设置全局Blend模式接口。
- **[改进]** 优化下载速度。
- **[改进]** 优化内存使用，减少内存占用。
- **[修复]** 修复Graphics相关接口，Alpha取值错误的BUG。
- **[修复]** 修复特定情况下，软键盘收回，导致崩溃的BUG。
- **[修复]** 修复LocalStorage相关BUG。
- **[修复]** 修复全屏模式下，多行输入，按完成键，文本接收异常的BUG。
- **[修复]** 修复文本输入，键盘弹出和收回异常的BUG。
- **[修复]** 修复插件接口相关BUG。


###Egret Android Support 1.1.0 ReleaseNote
---
更新时间：2014年9月26日

- **[新特性]** 使用全新的JavaScript引擎，性能提升至少75%，体积减少28%以上
- **[新特性]** 使用Android原生网络接口，扩展性更佳
- **[新特性]** 增加文本输入功能。
- **[改进]** 改Http访问为并发模式。
- **[改进]** Http访问放大JAVA端实现。
- **[修复]** 修正横屏游戏，关屏后，在回到游戏会死机的BUG。
- **[修复]** Http POST模式上传数据异常的BUG。
- **[修复]** 绘制矩形，线等。混合模式异常的BUG。
- **[修复]** 修复文本输入，获取已有文本出现乱码的BUG。
- **[修复]** 修复文本输入，键盘弹出和收回异常的BUG。


###Egret Android Support 1.0.6 ReleaseNote
---
更新时间：2014年9月12日

- **[新特性]** 自动去除UTF8文件BOM。
- **[新特性]** 增加Http post支持。
- **[改进]** 优化Http请求队列处理方式。
- **[改进]** 优化下载队列处理方式。
- **[修复]** 修正：下载文件到一半，再次进入游戏，不更新此文件的BUG。
- **[修复]** 修正下载队列卡死的BUG。
- **[修复]** 修正下载后回调有可能失败的BUG。
- **[修复]** 修正模板检测的BUG。

####已知问题
- 暂不支持 Graphics API
- 暂不支持 TextField 粗体/斜体


###Egret Android Support 1.0.5 ReleaseNote
---
更新时间：2014年8月29日

- **[新特性]** 新增原生插件接入功能。
- **[新特性]** 新增文件下载功能。
- **[改进]** 不再需要NDK编译。
- **[改进]** 优化游戏存档与游戏资源管理。
- **[改进]** 优化文字渲染模块。提升文字绘制速度。
- **[改进]** 同步创建同工程名的包，以区别每一项目apk打包
- **[修复]** 文字渲染批处理命令未正常释放的BUG。
- **[修复]** 批处理命令队列管理不当的BUG。
####已知问题
- 暂不支持 Graphics API
- 暂不支持 TextField 粗体/斜体


###Egret Android Support 1.0Final ReleaseNote
---

- **[新特性]** 新增读写文件的功能。
- **[新特性]** 新增画线功能。
- **[改进]** 实现自动批处理（AutoBatching）。提升了渲染速度。
- **[改进]** 优化文字处理速度。
- **[修复]** 修复特定状态下，图片旋转后绘制位置异常的BUG。
- **[修复]** 修复文字位置不准确的BUG。
- **[重构]** 重构矩阵模块。使用新的矩阵与向量处理模块。重构矩阵管理类。
- **[重构]** 重构渲染模块。为了实现自动批处理。重构渲染模块，以支持自动批处理。
- **[重构]** 重构文字模块。为了实现自动批处理。重构文字处理模块，以支持自动批处理，以及提高渲染速度。
####已知问题

- 暂不支持 Graphics API
- 暂不支持 TextField 粗体/斜体

----------

###Egret Android Support 1.0.1 (RC1) Release Note

- **[新特性]** 增加Android支持。提供了全新的Andorid项目模板，以便使用egret新的create_app命令创建新Eclipse项目。
- **[新特性]** 增加文字描边的功能。
- **[新特性]** 新增模板检测功能。
- **[新特性]** 主动弹窗提示JS运行时的错误。
- **[改进]** 优化字符串处理模块。减少内存的重复申请和释放。优化绘制速度。
- **[改进]** 简化字符串对齐方式。提高引擎层字符串处理灵活度。
- **[改进]** 简化字符串相关接口。降低引擎层对底层的依赖。
- **[改进]** 修改Javascript绑定相关代码以符合新版本SpiderMonkey要求。
- **[改进]** 读取第三方ttf字库失败时。自动获取系统默认字库。
- **[重构]** 更新freetype.lib。
- **[重构]** 替换Javascript引擎SpiderMonkey的版本。提高了脚本运行效率，优化了相关内存使用。
- **[修复]** 修改触摸功能的接口。解决触摸接口导致的运行速度下降的BUG。
- **[修复]** 全方位检测内存使用情况。解决多处内存溢出以及使用不当的BUG。
- **[修复]** 修复某些Android手机上，模板功能失效的BUG。

####已知问题

- 暂不支持 Graphics API

- 暂不支持 TextField 粗体/斜体