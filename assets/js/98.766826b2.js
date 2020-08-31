(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{550:function(t,e,r){"use strict";r.r(e);var i=r(11),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"分布式共识算法"}},[t._v("分布式共识算法")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("前置知识")]),t._v(" "),r("p",[t._v("关于分布式中CAP问题，请先阅读“"),r("RouterLink",{attrs:{to:"/architect-perspective/general-architecture/transaction/distributed.html"}},[t._v("分布式事务")]),t._v("”中的介绍，后文中提及的一致性、可用性、网络分区等概念，均在此文中有过介绍。")],1)]),t._v(" "),r("p",[t._v("在本章正式开始探讨各种分布式环境中面临的技术问题和解决方案之前，笔者先安排一篇“纯理论”的文章，来分析分布式环境中对共享数据操作的本质。分布式系统里，如果准备在各个分布式节点中进行一致的操作，并且期望获得一致的结果，均可以理解为是一种“"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/State_machine_replication",target:"_blank",rel:"noopener noreferrer"}},[t._v("状态机复制"),r("OutboundLink")],1),t._v("”（State Machine Replication）过程，无论这个操作是新增、修改、删除抑或是其他可能的程序行为，都可以理解为要将一连串的操作日志正确地复制到各个分布式节点上，如果分布式系统各个节点的初始状态一致，接受到的操作序列都相同，那各个节点最终都能得到一致的状态。这句话听起来颇为抽象，如果你现在暂时不能理解的话，不妨先在心中回想一下经典数据库中的重做和回滚日志的做法，然后跟后续的讲解进行类比。")]),t._v(" "),r("div",{staticClass:"quote"},[r("p",{staticClass:"title"},[t._v("额外知识：状态机复制")]),r("p",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Finite-state_machine",target:"_blank",rel:"noopener noreferrer"}},[t._v("状态机"),r("OutboundLink")],1),t._v("（State Machine）有一个特性：任何初始状态一样的状态机，如果执行的命令序列一样，则最终达到的状态也一样。如果将此特性应用在多参与者进行协商共识上，可以理解为系统中存在多个具有完全相同的状态机（参与者），这些状态机能最终保持一致的关键就是起始状态完全一致和执行命令序列完全一致。")])]),r("p",[t._v("为了解释清楚分布式环境中共享数据所面临的问题，笔者先从一个最浅显的场景开始说起：")]),t._v(" "),r("blockquote",[r("p",[t._v("如果你有一份很重要的数据，要确保它长期存储在电脑上不会丢失，你会怎么做？")])]),t._v(" "),r("p",[t._v("这不是什么脑筋急转弯的古怪问题，答案就是去买几块硬盘，把数据在不同磁盘上多备份几个副本。假设一块硬盘每年损坏的概率是5%，那把文件复制到另一块备份盘上，由于两块磁盘同时损坏而丢失数据的概率就只有0.25%，如果使用三块硬盘存储则是0.00125%，四块是0.0000625%，换而言之，这已经保证了数据超过99.9999%的概率是不会丢失的。")]),t._v(" "),r("p",[t._v("在软件系统里，要保障系统的可靠性，采用的办法也和那几个备份磁盘大体上并无区别，单个节点的系统宕机无法提供服务的原因可能有很多，譬如程序出错、硬件损坏、网络分区、电源断电，等等，往往一年中出现系统宕机的概率要远高于5%，这更加决定了软件系统也必须有多台机器能够拥有一致的数据，才能对外提供一致的服务。但分布式的软件系统与备份磁盘又有着本质的区别，磁盘之间是孤立的，不需要互相通讯，备份数据初始化后状态就是不变的，由人工完成的文件复制操作保障了数据各个副本的一致；而分布式系统里面，我们必须考虑数据如何在可能出现分区的网络环境下在各个节点之间正确复制的问题：")]),t._v(" "),r("blockquote",[r("p",[t._v("如果你有一份很重要的数据，要确保它正确地存储于网络中的几台不同机器之上，你会怎么做？")])]),t._v(" "),r("p",[t._v("一个最容易想到的答案是“同步”（Synchronous）：每当数据有变化，把变化情况在各个节点间的复制视作一种原子性的操作，只有系统里每一台机器都反馈成功地完成磁盘写入后，数据的变化才宣告成功，我们在"),r("a",{attrs:{href:"/architect-perspective/general-architecture/transaction/global"}},[t._v("前文")]),t._v("中曾经讲解过，可以使用2PC/3PC来实现这种同步操作。同步的其中一种真实应用场景是数据库中的主从全同步复制（Fully Synchronous Replication），譬如MySQL Cluster，进行全同步复制时，会等待所有Slave的Binlog都完成写入后，Master的事务才进行提交。这里有一个显而易见的问题，尽管可以确保Master和Slave中的数据是是绝对一致的，但任何一个Slave节点因为任何原因未响应均都会阻塞整个事务，每增加一个Slave，都导致造成整个系统可用性风险增加一分。显然这种简单的一致性保障手段，是以完全牺牲可用性为代价的，我们在建设分布式系统的时候，往往不能承受这种代价，一些关键系统，在要求数据正确的前提下，对可用性的要求也非常苛刻，譬如要达到99.99999%可用的程度，这就引出了我们的第三个问题：")]),t._v(" "),r("blockquote",[r("p",[t._v("如果你有一份很重要的数据，要确保它正确地存储于网络中的几台不同机器之上，并且要尽可能保证及时地应用到正确的数据，你会怎么做？")])]),t._v(" "),r("p",[t._v("在网络分区不可能消除的前提下，一致性与可用性的矛盾造成了增加机器数量反而带来可用性的降低，为缓解这个矛盾，我们不再追求系统内所有节点在任何情况下的数据状态都一致，改为采用“少数服从多数”的原则，一旦数据变化在系统中过半数的节点中完成了复制，就认为数据的变化已经正确地存储在系统当中，这样就可以容忍少数（不超过半数）的机器形成网络分区，使得增加机器数量对系统整体的可用性变成是有益的。此模式在分布式中被称为“"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Quorum_(distributed_computing)",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quorum机制"),r("OutboundLink")],1),t._v("”，或者可以直接形象地称其为“多数派机制”（Majority）。在这个前提下，我们需要设计一种算法，能够让分布式系统内部可以暂时容忍存在不同的状态，但最终全部节点的状态均能够达成一致；同时能够让分布式系统外部看来，始终表现出整体一致的结果，这个过程，我们称其为“协商共识”（Consensus）。")]),t._v(" "),r("p",[t._v("请注意共识与一致性（Consistency）的区别，一致性指的是数据不同副本之间的差异，而共识是指达成一致性的方法与过程。由于翻译的关系，很多中文资料把Consensus同样翻译为“一致性”，导致网络上大量的二手中文资料把这两个概念混淆起来，如果你在网上看到“分布式一致性算法”，应明白其所指其实是“Distributed Consensus Algorithm”。")])])}),[],!1,null,null,null);e.default=n.exports}}]);