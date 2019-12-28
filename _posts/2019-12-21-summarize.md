---
title: jq选择器
category: jq
picture: /public/img/p7.jpg
---

选择器


## jq基本选择器
1.标签选择器$('li')
2.class选择器$('.class')
3.id选择器$（'#id'）
4.通配符

## 层级选择器
1.（div)下所有(p)标签  $('#t1 p')
2.子标签    $('#t1 > p')
3.邻居标签   $('#t1 + p')
4.兄弟标签   $('#t1 ~ p')


## 属性选择器
1.存在该属性时获取  $('div[id]')
2.当属性存在且属性值等于某个值的时候获取  $('div[class=dd]')
3.当属性存在且属性值不等于某个值的时候获取  $('div[class!=dd]')
4.当属性值开头等于某个值就获取  $('div[id^=d]')
5.当属性值结尾等于某个值就获取  $('div[id$=1]')
6.当属性值存在某个值就获取  $('div[id* =d]')
7.复合属性选择器，并且条件

## 内容选择器
1.元素包含某个内容的时候就获取 $('.t1 span:contains(23)')
2.当标签没有内容的时候就获取  $('.e:empty')
3.当标签包含某个元素的时候就获取  $('div:has(span)')
4.标签有内容则获取   $('div:parent')


## 过滤选择器
1.获取第一个  $('.t1 span:first')
2.获取最后一个  $('.t1 span:last')
3.除了选择选中其他的都要  $('.t1 span:not(.pc)')
4.匹配偶数的元素  $('.t1 span:even')
5.匹配奇数  $('.t1 span:odd')
6.获取指定索引的元素  $('.t1 span:eq(2)')
7.获取大于指定索引的元素  $('.t1 span:gt(2)')
8.获取小于指定索引的元素  $('.t1 span:lt(4)')


## 子元素选择器
1.获取某个子元素  $('div span:nth-child(1)')
2.获取第一个子元素  $('div span:first-child')
3.获取最后一个  $('div span:last-child')
4.只有一个子元素则获取  $('div p:only-child')


## 表单过滤选择器
1.获取选中的多选框   $('form input:checked')
2.获取选中的option :selected  $('form select option:selected')
3.获取禁用元素  $('form input:disabled')
4.获取启用元素  $('form input[type=checkbox]:enabled')







