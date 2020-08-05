(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{418:function(e,t,r){e.exports=r.p+"assets/img/http-req.a65eb429.png"},419:function(e,t,r){e.exports=r.p+"assets/img/tcp-conn.a4199f02.png"},420:function(e,t,r){e.exports=r.p+"assets/img/http2-con.f8b394df.png"},502:function(e,t,r){"use strict";r.r(t);var n=r(11),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"传输链路"}},[e._v("传输链路")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("传输链路优化（Transmission Optimization）")]),e._v(" "),n("p",[e._v("今天的传输链路链路优化原则，在若干年后的未来再回头看它们时，其中多数已经成了奇技淫巧，有些甚至成了"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%8F%8D%E9%9D%A2%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[e._v("反模式"),n("OutboundLink")],1),e._v("。")])]),e._v(" "),n("p",[e._v("在开始本节的讨论前，笔者先列一些在网络上很容易就能找到的，对Web进行链路性能优化的原则（譬如"),n("a",{attrs:{href:"https://developer.yahoo.com/performance/rules.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("雅虎YSlow23条规则"),n("OutboundLink")],1),e._v("），这些原则在今天大多仍是（暂时）有一定价值的，至少也算是曾经（可能现在也还算是）广泛地流行过，但大概率在若干年后的未来再回头看它们时，其中多数已经成了奇技淫巧，有些甚至成了反模式。趁着当今的Web在传输链路这一块正处于新老交替之际，我们来说一下两代HTTP协议下的链路优化的问题。")]),e._v(" "),n("ol",[n("li",[e._v("利用客户端缓存：缓存总是有益的，这点第一节中详细介绍过，本节不再涉及。")]),e._v(" "),n("li",[e._v("减少请求数量：请求每次都需要建立通信链路进行数据传输，这些开销很昂贵，减少请求的数量可有效的提高访问性能。\n"),n("ul",[n("li",[e._v("雪碧图（"),n("a",{attrs:{href:"https://en.wikipedia.org/w/index.php?title=CSS_Sprites&redirect=no",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS Sprites"),n("OutboundLink")],1),e._v("）")]),e._v(" "),n("li",[e._v("CSS、JS文件合并/内联（Concatenation / Inline）")]),e._v(" "),n("li",[e._v("分段文档（"),n("a",{attrs:{href:"https://www.w3.org/Protocols/rfc1341/7_2_Multipart.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Multipart Document"),n("OutboundLink")],1),e._v("）")]),e._v(" "),n("li",[e._v("媒体（图片、音频）内联（"),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Data_URI_scheme",target:"_blank",rel:"noopener noreferrer"}},[e._v("Data Base64 URI"),n("OutboundLink")],1),e._v("）")]),e._v(" "),n("li",[e._v("异步请求合并（Batch Ajax Request）")]),e._v(" "),n("li",[e._v("……")])])]),e._v(" "),n("li",[e._v("扩大并发请求数：现代浏览器一般对每个域名支持6个（IE为8-13个）并发请求，如果希望更快地加载大量图片或其他资源，需要进行域名分片（Domain Sharding），将图片同步到不同主机或者同一个主机的不同域名上（YSlow：Split Components Across Domains）。")]),e._v(" "),n("li",[e._v("避免页面重定向：当页面发生了重定向，就会延迟整个文档的传输。在HTML文档到达之前，页面中不会呈现任何东西，降低了用户体验。")]),e._v(" "),n("li",[e._v("按重要性调节资源优先级：将重要的、马上就要使用的、对客户端展示影响大的资源，放在HTML的头部，以便优先下载。")]),e._v(" "),n("li",[e._v("启用压缩传输：启用压缩能够大幅度减少需要在网络上传输内容的大小，节省网络流量。")]),e._v(" "),n("li",[e._v("…………")])]),e._v(" "),n("p",[e._v("如同之前介绍客户端缓存时提到的那样，HTTP要得到无状态的好处，就必须相应承受网络效率降低的代价。在其他方面，HTTP协议设计和应用中也经历过了类似的权衡取舍，现在看来那些需要用户去优化的内容，往往都是当时技术现状下权衡取舍的结果。我们就从优化原则中条目最多的针对HTTP请求数量的措施说起。")]),e._v(" "),n("h2",{attrs:{id:"连接数优化"}},[e._v("连接数优化")]),e._v(" "),n("p",[e._v("我们都知道HTTP是基于TCP协议的，必须在"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E4%BC%A0%E8%BE%93%E6%8E%A7%E5%88%B6%E5%8D%8F%E8%AE%AE#%E5%BB%BA%E7%AB%8B%E9%80%9A%E8%B7%AF",target:"_blank",rel:"noopener noreferrer"}},[e._v("TCP三次握手"),n("OutboundLink")],1),e._v("完成之后才能进行数据传输，这是一个通常以“百毫秒”为计时尺度的事件；此外，TCP还有"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E6%85%A2%E5%90%AF%E5%8A%A8",target:"_blank",rel:"noopener noreferrer"}},[e._v("慢启动"),n("OutboundLink")],1),e._v("的特性，使得刚刚建立连接时传输速度是最低的，后面再逐步加快直至稳定。由于TCP协议本身是面向于长时间、大数据传输来设计的，在长时间尺度下，它连接建立的成本高昂才不至于成为瓶颈，它的稳定性和可靠性的优势才能展现出来，那显然HTTP over TCP这种搭配，在目标倾向上就多少产生了一些矛盾，以至于HTTP/1.x时代，大量短而小的TCP连接确实造成了网络性能的瓶颈。为了缓解HTTP在这个问题上的缺陷，聪明的程序员们一面致力于减少发出的请求数量，另外一方面也致力于增加客户端到服务端的连接数量，就是上面2、3点所提到的优化措施。这些Tricks的确减少消耗TCP连接数量，下面两张图片是来自于"),n("a",{attrs:{href:"https://httparchive.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP Archive"),n("OutboundLink")],1),e._v("对最近五年来数百万个URL地址采样得出的结论，页面平均请求没有改变的情况下，TCP连接在持续地下降（当然，后面说的HTTP/2.0其实占了很大功劳）。")]),e._v(" "),n("div",{staticClass:"custom-block center"},[n("p",[n("img",{attrs:{src:r(418),alt:""}}),e._v("\nHTTP平均请求数量，70余个，没有明显变化")]),e._v(" "),n("p",[n("img",{attrs:{src:r(419),alt:""}}),e._v("\nTCP连接数量，约15个，有明显下降趋势")])]),e._v(" "),n("p",[e._v("但是，上述这些节省TCP连接的优化措施但也带来了诸多不良的副作用：")]),e._v(" "),n("ul",[n("li",[e._v("如果你用CSS Sprites将多张图片合并，意味着任何场景下哪怕只用到其中一张小图，也必须完整加载整个大图片；任何场景下哪怕一张小图要进行修改，都会导致整个缓存失效，类似地，样式、脚本等其他文件的合并也会造成同样的问题。")]),e._v(" "),n("li",[e._v("如果你使用了媒体内嵌，除了要承受Base64编码导致传输容量膨胀1/3的代价外（Base64以8 bit表示6 bit数据），也将无法有效利用缓存。")]),e._v(" "),n("li",[e._v("如果你合并了异步请求，这就会导致所有请求返回时间都受最慢的那个请求的拖累，整体响应速度下降.")]),e._v(" "),n("li",[e._v("如果你把图片放到不同子域下面，将会导致更大的DNS解析负担，而且浏览器对两个不同子域下的同一图片必须持有两份缓存，也使得缓存效率的下降。")]),e._v(" "),n("li",[e._v("……")])]),e._v(" "),n("p",[e._v("由此可见，一旦技术根基上出现的缺陷，依赖使用者通过各种Tricks去解决，无论如何都难以摆脱“两害相权取其轻”的权衡困境，否则这就不是Tricks而是会成为一种标准的设计模式了。")]),e._v(" "),n("p",[e._v("在另一方面，HTTP的设计者们并非没有尝试过在基础设施层面去解决连接成本过高的问题，即使是HTTP协议的最初版本（指HTTP/1.0，忽略非正式的HTTP/0.9版本）也是支持（不是默认，HTTP/1.1中变为默认）连接复用的，即今天大家所熟知的"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/HTTP%E6%8C%81%E4%B9%85%E8%BF%9E%E6%8E%A5",target:"_blank",rel:"noopener noreferrer"}},[e._v("持久连接"),n("OutboundLink")],1),e._v("（Persistent Connection）或者叫连接"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Keepalive",target:"_blank",rel:"noopener noreferrer"}},[e._v("Keep-Alive机制"),n("OutboundLink")],1),e._v("。其大致原理是让客户端可以对一个域名长期持有一个（或多个）TCP连接，在客户端维护一个FIFO队列，每次取完数据（如何在不断开连接下判断取完数据将会放到稍后压缩部分去讨论）之后不断开连接，以便下一个资源需要获取时备用，避免创建TCP连接的成本。而在2014年，IETF发布的"),n("a",{attrs:{href:"https://tools.ietf.org/html/rfc7230#section-6.3.2",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 7230"),n("OutboundLink")],1),e._v("中提出了名为“"),n("a",{attrs:{href:"%5Bhttps://zh.wikipedia.org/wiki/HTTP%E7%AE%A1%E7%B7%9A%E5%8C%96%5D(https://zh.wikipedia.org/wiki/HTTP%E7%AE%A1%E7%B7%9A%E5%8C%96)"}},[e._v("HTTP管道")]),e._v("”（HTTP Pipelining）复用技术试图在服务端也建立类似的队列，以进一步提高效率，客户端一次过将所有请求发给服务端，由服务端来管理队列的话，可以保证队列中两项工作之间没有空隙，甚至可能进行并行化处理，提升了服务端的效率。不过，HTTP管道需要多方共同支持，推广得并不算成功。")]),e._v(" "),n("p",[e._v("不幸的是，连接复用仍然存在它的副作用，最主要的一项副作用是“"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E9%98%9F%E5%A4%B4%E9%98%BB%E5%A1%9E",target:"_blank",rel:"noopener noreferrer"}},[e._v("队首阻塞"),n("OutboundLink")],1),e._v("”（Head-of-Line Blocking）问题，请设想以下场景：浏览器有10个资源需要从服务器中获取，此时它将10个资源放入队列，入列顺序只能是按照浏览器预见这些资源的先后顺序来决定的。但如果这10个资源中的第1个就让服务器陷入长时间运算状态那会怎样？当它的请求被发送到服务端之后，服务端开始计算，而运算结果出来之前TCP连接中并没有任何数据返回，此时后面9个资源都必须阻塞等待。无论队列维护在服务端还是客户端，其实都无法解决这个问题，因为服务端虽然很可能可以并行处理另外9个请求（譬如第1个是复杂运算请求，消耗CPU资源，第2个是数据库访问，消耗数据库资源，第3个是访问某张图片，消耗磁盘IO资源，等等，这就很适合并行），但处理结果却无法发回给客户端，服务端既不能哪个请求先完成就返回哪个，更不可能将所有要返回的资源混杂到一起交叉传输……显然，TCP连接带来的问题，本质上是传输链路上的问题，无论在服务端还是客户端，涉及到传输方面都显得无能为力。")]),e._v(" "),n("p",[e._v("队首阻塞问题一直持续到第二代的HTTP协议，即HTTP/2.0发布后才算是被比较完美地解决。在HTTP/1.x中，“请求”就是传输过程中最小粒度的信息单位了，所以如果将多个请求切碎，再混杂在一块传输，客户端势必难以分辨重组出有效信息。而在HTTP/2.0中，帧（Frame）才是最小粒度的信息单位，它可以用来描述各种数据，譬如请求的Header、Body，或者用来做控制标识，譬如打开流、关闭流。这里说的流（Stream）是一个逻辑数据通道的概念，每个帧都附带有一个流ID以标识这个帧属于哪个流。这样，在同一个TCP连接中传输的多个数据帧就可以根据流ID轻易区分出开来，在客户端毫不费力地将不同流中的数据重组出HTTP的请求、响应报文来。这项设计是HTTP/2.0的重点技术特征之一，被称为"),n("a",{attrs:{href:"https://tools.ietf.org/html/rfc7540#page-15",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP/2.0 多路复用"),n("OutboundLink")],1),e._v("（HTTP/2.0 Multiplexing）")]),e._v(" "),n("div",{staticClass:"custom-block center"},[n("p",[n("img",{attrs:{src:r(420),alt:""}}),e._v("\nHTTP2的多路复用（图片来自："),n("a",{attrs:{href:"https://hpbn.co/http2",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hpbn.co/http2"),n("OutboundLink")],1),e._v("）")])]),e._v(" "),n("p",[e._v("有了多路复用的支持，HTTP/2.0就可以对每个域名只维持一个TCP连接（One Connection Per Origin），既减轻了服务器的连接压力，开发者也不用去考虑域名分片这种事情来突破浏览器对每个域名最多6个连接数限制了。而更重要的是，没有了TCP连接数的逼迫，所有通过合并/内联文件（无论是图片、样式、脚本）以减少请求数的需求就不再成立了，甚至反而是徒增副作用的反模式了——可能还有人会反驳说：不至于吧，减少请求数量，不是至少还减少了传输中耗费的Header吗？先得承认一个事实，在HTTP协议中，Header的成本所占的比重相当的大，以至于在HTTP/2.0中需要专门考虑如何进行Header压缩的问题。但是，以下几个因素导致了通过合并资源文件减少请求数，对节省Header成本也几乎没有帮助：")]),e._v(" "),n("ul",[n("li",[e._v("Header的传输成本在Ajax（尤其是只返回少量数据的请求）请求中可能是比重很大的开销，但在图片、样式、脚本这些静态资源的请求中，通常并不占主要。")]),e._v(" "),n("li",[e._v("在HTTP/2.0中Header压缩的原理是基于字典编码的信息复用，简而言之是同一个连接上产生的请求和响应越多，动态字典积累得越全，头部压缩效果也就越好。所以HTTP/2.0是单域名单连接的机制，合并资源和域名分片反而对性能提升不利。")]),e._v(" "),n("li",[e._v("与HTTP/1.x相反，HTTP/2.0本身反而变得更适合传输小资源了，譬如传输1000张10K的小图，HTTP/2.0要比HTTP/1.x快，但传输10张1000K的大图，则应该HTTP/1.x会更快。这一方面是TCP连接数量（相当于多点下载）的影响，更多的是由于TCP协议丢包重传机制导致的，一个丢失的TCP包会导致所有的流都必须等待这个包重传成功，这个问题就是HTTP/3.0要解决的目标了。因此，把小文件合并成大文件，在HTTP/2.0下是毫无好处的。")])]),e._v(" "),n("h2",{attrs:{id:"传输压缩"}},[e._v("传输压缩")]),e._v(" "),n("p",[e._v("我们接下来再花一点点篇幅来讨论链路优化中除了缓存、连接之外另一个主要话题：压缩。很多人都知道HTTP协议是支持"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Gzip",target:"_blank",rel:"noopener noreferrer"}},[e._v("GZip"),n("OutboundLink")],1),e._v("压缩的，由于HTTP传输的主要内容，譬如HTML、CSS、Script等，都是文本数据，对于这些文本数据启用压缩的收益是非常高的，传输量一般会降至原有的20%左右。而对于那些不适合压缩的资源，Web服务器则能根据MINE类型来自动判断是否对响应进行压缩，这样，已经采用过压缩算法存储的资源，如JPEG、PNG图片，便不会被二次压缩，空耗性能。")]),e._v(" "),n("p",[e._v("不过，大概就没有多少人想过压缩与之前提到的用于节约TCP的持久连接机制是存在一些冲突的。在古代，服务器处理能力还很差的时候，通常是把静态资源先预先压缩为.gz文件的形式存放起来，当客户端可以接受压缩版本的资源时（请求的Header中包含Accept-Encoding: gzip）就返回压缩后的版本（响应的Header中包含Content-Encoding: gzip），否则就返回未压缩的原版，这种方式被称为“"),n("a",{attrs:{href:"http://nginx.org/en/docs/http/ngx_http_gzip_static_module.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("静态预压缩"),n("OutboundLink")],1),e._v("”（Static Pre-compression）。而现代的Web服务器处理能力有了大幅提升，已经没有人再采用麻烦的预压缩方式了，都是由服务器对符合条件的请求将在输出时进行“"),n("a",{attrs:{href:"https://www.usenix.org/legacy/publications/library/proceedings/jvm01/full_papers/hovemeyer/hovemeyer_html/node7.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("即时压缩"),n("OutboundLink")],1),e._v("”（On-The-Fly Compression），整个压缩过程全部在内存的数据流中完成，不必等资源压缩完成再返回响应，这样可以显著提高“"),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Time_to_first_byte",target:"_blank",rel:"noopener noreferrer"}},[e._v("首字节时间"),n("OutboundLink")],1),e._v("”（Time To First Byte，TTFB），改善Web性能体验。而这个过程中唯一不好的地方就是服务器再没有办法给出Content-Length这个响应Header了，因为输出Header时服务器还不知道压缩后资源的确切大小。")]),e._v(" "),n("p",[e._v("到这里，大家想明白即时压缩与持久链接的冲突在哪了吗？持久链接机制不再依靠TCP连接是否关闭来判断资源请求是否结束，它会重用同一个连接以便向同一个域名请求多个资源，这样，客户端就必须要有除了关闭连接之外的其他机制来判断一个资源什么时候算传递完毕，这个机制最初（在HTTP/1.0时）就只有Content-Length，即靠着请求头中明确给出资源的长度，传输到达该长度即宣告一个请求响应的结束。由于启用即时压缩后就无法给出Content-Length了，如果是HTTP/1.0的话，持久链接和即时压缩只能二选其一（HTTP/1.0中两者默认都是不开启的）。其实Content-Length的缺陷不仅仅在于即时压缩这一种场景，譬如对于动态内容（Ajax、PHP、JSP等输出），服务器也同样无法事项得知Content-Length。")]),e._v(" "),n("p",[e._v("HTTP/1.1版本中修复了这个缺陷，增加了另一种“"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%88%86%E5%9D%97%E4%BC%A0%E8%BE%93%E7%BC%96%E7%A0%81",target:"_blank",rel:"noopener noreferrer"}},[e._v("分块传输编码"),n("OutboundLink")],1),e._v("”（Chunked Transfer Encoding）的资源结束判断机制，解决Content-Length与持久链接的冲突问题。分块编码原理相当简单：在响应Header中加入“Transfer-Encoding: chunked”之后，就代表这个响应报文将采用分块编码。此时，报文中的Body需要改为用一系列“分块”来传输。每个分块包含十六进制的长度值和对应长度的数据内容，长度值独占一行，数据从下一行开始。最后以一个长度值为0的分块来表示资源结束。举个例子（来自于前面维基百科中的页面，为便于观察，只分块，未压缩）：")]),e._v(" "),n("div",{staticClass:"language-http extra-class"},[n("pre",{pre:!0,attrs:{class:"language-http"}},[n("code",[n("span",{pre:!0,attrs:{class:"token response-status"}},[e._v("HTTP/1.1 "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v("200 OK")])]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Date:")]),e._v(" Sat, 11 Apr 2020 04:44:00 GMT\n"),n("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Transfer-Encoding:")]),e._v(" chunked\n"),n("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Connection:")]),e._v(" keep-alive\n\n25\nThis is the data in the first chunk\n\n1C\nand this is the second one\n\n3\ncon\n\n8\nsequence\n\n0\n")])])]),n("p",[e._v("根据分块长度可知，前两个分块包含显式的回车换行符（CRLF，即\\r\\n字符）")]),e._v(" "),n("div",{staticClass:"language-txt extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('"This is the data in the first chunk\\r\\n"      (37 字符 => 十六进制: 0x25)\n"and this is the second one\\r\\n"               (28 字符 => 十六进制: 0x1C)\n"con"                                          (3  字符 => 十六进制: 0x03)\n"sequence"                                     (8  字符 => 十六进制: 0x08)\n')])])]),n("p",[e._v("所以解码后的内容为：")]),e._v(" "),n("div",{staticClass:"language-txt extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("This is the data in the first chunk\nand this is the second one\nconsequence\n")])])]),n("p",[e._v("一般来说，Web服务器给出的数据分块大小是一致的（但并不强制），而不是如例子中那样随意。HTTP/1.1通过分块传输解决了即时压缩与持久连接并存的问题，到了HTTP/2.0，由于多路复用和单域名单连接的设计，已经无需再刻意强去提久链接机制了，但数据压缩仍然有节约传输带宽的重要价值。")])])}),[],!1,null,null,null);t.default=a.exports}}]);