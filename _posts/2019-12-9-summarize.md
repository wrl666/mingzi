---
title: 9号总结
category: css
picture: /public/img/p0.jpg     
---
定位 布局 边距

定位：
绝对定位：position:absolute（1）如果没有TRBL，以父级的左上角，在没有父级的时候，他是参照浏览器左上角（2）如果设定TRBL，并且父级没有设定position 属性，那么以浏览器左上角为原始点进行定位，位置将由TRBL 决定。 （3）如果设定TRBL，并且父级设定position 属性(无论是absolute 还是relative)，则以父级的左上角为原点进行定位，位置由TRBL 决定。

相对定位：position:relative 无论父级存在不存在，无论有没有TRBL，均是以父级的左上角进行定位，如果父级有Padding 属性，那么就以内容区域的左上角为原点，进行定位。
如果用position来布局页面，父级元素的position属性必须为relative，而定位于父级内部某个位置的元素，最好用absolute布局页面
定位尽量使用Float为主 ，Position为辅


布局：
圣杯布局 双飞翼布局
双飞翼布局和圣杯布局相同点在于让三列进行浮动实现    然后设置外边距为负值


边距问题：
（1）任何图片都会存在一默认3px的下边距，解决方案display: block; 或者vertical-align: top
（2）margin改变边界不改变位置，只有position能改变位置
（3）父子嵌套关系，子标签有margin-top,父标签也会跟着动 解决方案：给父级加边框 不好 因为添加了多余的样式;    父级overflow: auto; 