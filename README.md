# 软件架构探索：The Fenix Project

<p align="center">
  <a href="http://icyfenix.cn" target="_blank">
    <img width="180" src="http://icyfenix.cn/images/logo-color.png" alt="logo">
  </a>
</p>
<p align="center">
    <a href="https://iycfenix.cn"  style="display:inline-block"><img src="http://icyfenix.cn/images/Release-v1.png"></a>
  <a href="https://travis-ci.com/fenixsoft/awesome-fenix" target="_blank"  style="display:inline-block"><img src="https://api.travis-ci.com/fenixsoft/awesome-fenix.svg?branch=master" alt="Travis-CI"></a>
  <a href="https://creativecommons.org/licenses/by/4.0/"  target="_blank" style="display:inline-block"><img src="http://icyfenix.cn/images/DocLicense-CC-red.png" alt="Document License"></a>
    <a href="https://www.apache.org/licenses/LICENSE-2.0"  target="_blank" style="display:inline-block"><img src="http://icyfenix.cn/images/License-Apache.png" alt="License"></a>
    <a href="mailto:icyfenix@gmail.com" target="_blank" style="display:inline-block"><img src="http://icyfenix.cn/images/Author-IcyFenix-blue.png" alt="Mail to Author"></a>
</p>



## 这是什么？

简单地说，这是针对软件开发中不同架构、技术方案（如单体架构、微服务、服务网格、无服务架构、云原生等等）的演示程序。包含可以作为实际项目开发参考的样例代码（[PetStore-Like-Project](https://www.oracle.com/technetwork/cn/java/javaee/overview/index-136650.html)），以及作者对这些架构的使用方法、优劣等的个人理解。

这篇文章《[什么是“The Fenix Project”](http://icyfenix.cn/introduction/about-the-fenix-project.html)》详细解释了此项目的意义和目标，如感兴趣，建议先行阅读。



## 如何使用？

项目中主要包括了程序与知识两部分。

- 关于"知识"部分，以OpenDocument的形式发行，可以直接通过浏览器访问此[链接](http://icyfenix.cn )以获得最新的内容。目前项目刚刚开始，暂时将已完成的内容在目录中标记为“:white_check_mark:”，以示区分，后期完成后会统一移除。

- 关于“程序”部分，其中包括前、后端工程与运行示例三部分内容。后端工程是其中重点，它已包含了前端工程编译后的输出结果，如果你并不关心前端（一个典型的vue.js 2.0工程）的实现，直接选择你希望了解的架构模式相关的后端运行即可。如果你对开发、运行构建运行环境有所疑问，在[知识](http://icyfenix.cn/deployment/deployment-env-setup/)部分也包括了详细的启动文档，能够解决环境依赖的问题。另外，这些工程也通过Travis CI提供的持续集成服务输出到Docker镜像库，如果你只想了解运维方面的知识，可以直接运行镜像而无需关心代码部分。
> - 前端工程地址：[https://github.com/fenixsoft/fenix-bookstore-frontend](https://github.com/fenixsoft/fenix-bookstore-frontend)
> - 后端工程地址：[https://github.com/fenixsoft/fenix-bookstore-backend](https://github.com/fenixsoft/fenix-bookstore-backend)
> - 前端工程演示：[http://bookstore.icyfenix.cn](https://bookstore.icyfenix.cn)（国内浏览 <-> 腾讯云CDN <-> GitHub Pages）



## 协议

本作品代码部分采用[Apache 2.0协议](https://www.apache.org/licenses/LICENSE-2.0)进行许可。

您同样自由地对代码进行修改，再发布，可以用作商业用途。

只要您遵守许可协议中保留作者署名、保留Apache License即可。

本作品文档部分采用[知识共享署名 4.0 国际许可协议](http://creativecommons.org/licenses/by/4.0/)进行许可。 

您可以自由地：

- 共享 — 在任何媒介上以任何形式复制、发行本作品
- 演绎 — 修改、转换或以本作品为基础进行二次创作

只要您遵守许可协议条款中署名、非商业性使用、相同方式共享的条件，许可人就无法收回您的这些权利。



## 备案

网站备案信息：[粤ICP备18088957号-1](http://beian.miit.gov.cn/)