---
title: 分类
---

{% for category in site.categories %}
<h2>123</h2>
<h2>{{ category | first }}</h2>
<span>{{ category | last | size }}</span>
<ul class="arc-list">
	{% for post in category.last %}
	    <li>{{ post.date | date:"%d-%m-%Y"  }}<a href = "{{ post.url }}">{{ post.title }}</a></li>
	    {% endfor %}
</ul>
{% endfor %}