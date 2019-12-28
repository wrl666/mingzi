---
title: 加深数组知识
category: js
picture: /public/img/p6.jpg
---

数组 递归函数

##h2 数组：（数组最后的逗号会自动省略）
定义数组：
1.var list = [];
2.var list = new Array()

遍历数组：for循环

数组可省略元素：var list = [1,,,,,,2]

稀疏数组：
list.forEach(function (value,key) {
console.dir(key,value); 
});

删除数组元素：
1.delete 索引序号不会改变
2.list.splice(起始位置，删除个数)

添加元素：list.splice(开始位置，删除个数设为0，添加的元素)

清空数组：
1.list.length=0
2.list.splice(0,list.length);
3.list = []此方法为替代数组，不是清空



##h2 递归函数
自己调用自己
函数的每一次调用都是一个独立全新的空间
