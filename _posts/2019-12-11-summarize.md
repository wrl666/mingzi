---
title: 弹性盒子
category: css 
picture: /public/img/p11.png 

---
弹性盒子 相关属性


弹性盒子display: -webkit-flex; 容器的属性
flex-direction：决定主轴的方向，row：水平方向，起点在左端。row-reverse：水平右端。column垂直上沿。column-reverse：垂直下沿

lex-wrap：nowrap（默认）：不换行。（2）wrap：换行，第一行在上方。（3）wrap-reverse：换行，第一行在下方

flex-flow：flex-direction属性和flex-wrap属性的简写形式

justify-content定义了项目在主轴上的对齐方式，左对齐flex-end：右对齐center： 居中space-between：两端对齐，间隔相等。space-around：每个项目两侧的间隔相等

align-items项目在交叉轴上如何对齐


box-sizing：
content-box、padding-box、border-box


项目的属性：
1.order属性定义项目的排列顺序。数值越小，排列越靠前
2.flex-grow属性定义项目的放大比例
3.flex-shrink属性定义了项目的缩小比例
4flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间
5.flex属性是flex-grow, flex-shrink 和 flex-basis的简写
6.align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性