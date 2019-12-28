---
title: js常用属性、DOM树与节点的操作
category: js
picture: /public/img/p8.jpg
---

常用属性 节点操作 DOM树

## 常用属性
(1)offsetWidth,offsetHeight获取元素宽高, 内边距, 边框, 不包括外边距
(2)offsetTop,offsetLeft获取元素在浏览器中位置
(3)document.documentElement.clientHeight,document.documentElement.clientWidth获取到html标签,获取可视区域的宽度和高度
(4)document.documentElement.scrollHeight,document.documentElement.scrollWidth获取整个文档高度和宽度
(5)document.documentElement.scrollTop,document.documentElement.scrollLeft获取滚动条的位置


## 节点操作
(1)创建节点var divObj = document.createElement('div');
(2)克隆节点var newObj = p.cloneNode(true)
(3)修改节点内容newObj.inne rHTML = new Date();
(4)插入节点，只能给子节点插入document.body.appendChild(newObj)
(5)删除节点，只能是父级删除子级b.parentNode.removeChild(b)


## DOM树
1. 整个文档是一个 文档节点 (document)
2. 每一个 html标签 是一个元素节点
3. 包含在 html中间的内容(文字) 文本节点
4. 每一个 html标签里面的属性 属性节点 attributes
5. 注释 叫做 注释节点