## 1.语言介绍

**Markdown** 是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。

## 2.兼容 HTML

Markdown 语法的目标是：成为一种适用于网络的书写语言。

## 3.特殊符号转化

在 HTML 文件中，有两个字符需要特殊处理： `<` 和 `&`。



&copy; 的写法如下：



代码如下：



```

&copy;

```

AT&T markdown会将其转换成



代码如下：



```

AT&amp;T

```

## 4.区块元素

### 段落和换行

一个 Markdown 段落是由一个或多个连续的文本行组成，它的前后要有一个以上的空行。普通段落不该用空格或制表符来缩进。



强制插入换行 `<br/>`先按入两个以上的空格然后回车。

### 4.1 标题



# 这是 H1

-------------

## 这是 H2

===========



###### 这是 H6



```

# 这是 H1

-------------



## 这是 H2

===========



###### 这是 H6

```



**语法：**



* 任何数量的 `=` 和 `-` 都可以有效果。

* 插入 1 到 6 个 `#` ，对应到标题 1 到 6 阶，可选尾加上 ，而行尾的 `#` 数量也不用和开头一样。



### 4.2 区域引用



> ## 这是一个标题。

>

> 1. 这是第一行列表项。

> 2. 这是第二行列表项。

> * 这个是列表展示

>

> 给出一些例子代码：

> > 这是第二行列表项。

>

> return shell_exec("echo $input | $markdown_script");



代码如下：



```

> ## 这是一个标题。

>

> 1. 这是第一行列表项。

> 2. 这是第二行列表项。

> * 这个是列表展示

>

> 给出一些例子代码：

> > 这是第二行列表项。

>

> return shell_exec("echo $input | $markdown_script");

```



**语法：**



* 引用的区块内也可以使用其他的 Markdown 语法，包括标题、列表、代码区块，如果嵌套引用模块，则需要前后哥家一个回车换行.

* Markdown 也允许你偷懒只在整个段落的第一行最前面加上 `>`。





### 4.3 列表



Markdown 支持有序列表和无序列表。



* Red

* Green

* Blue

+ Red

+ Green

+ Blue

- Red

- Green

- Blue



1. Bird

2. McHale



> 引用内容，列表中的引用，换行+加缩紧

> 引用内容，列表中的引用，换行+加缩紧

```

* Red

* Green

* Blue

+ Red

+ Green

+ Blue

- Red

- Green

- Blue



1. Bird

2. McHale



> 引用内容，列表中的引用，换行+加缩紧

> 引用内容，列表中的引用，换行+加缩紧

```

**语法：** 列表项目内放进引用，那 `>` 就需要缩进。



1. 这是一个段落，此部分是可以进行缩进的，输入对应的空格或是制表符即可缩进



这是一个缩进段落



2. 这是一个段落，此部分是可以进行缩进的，输入对应的空格或是制表符即可缩进



代码如下：



```

1. 这是一个段落，此部分是可以进行缩进的，输入对应的空格或是制表符即可缩进



这是一个缩进段落



2. 这是一个段落，此部分是可以进行缩进的，输入对应的空格或是制表符即可缩进

```

**语法：** 列表项目可以包含多个段落，每个项目下的段落都必须缩进 4 个空格或是 1 个制表符。



是在行首出现数字-句点-空白，要避免这样的状况，你可以在句点前面加上反斜杠，避免序列号。



1986\. What a great season.



代码如下：



```

1986\. What a great season.

```



### 4.4 代码区块



这是一个代码区块:



tell application "Foo"

beep

end tell

<div class="footer">

&copy; 2004 Foo Corporation

</div>

**语法：** Markdown 中建立代码区块，只要简单地缩进 4 个空格或是 1 个制表符就可以，一个代码区块会一直持续到没有缩进的那一行（或是文件结尾）。



```

Here is an example of AppleScript:



tell application "Foo"

beep

end tell

<div class="footer">

&copy; 2004 Foo Corporation

</div>

```

代码模块也可以用（```` ``` ````）、(`~~~`)或单(`` ` ``)，如果想输出三个（```` ``` ````）则用跟多的(`` ` ``)引用起来。



```

print('Hello world!')

```



~~~

print('Hello world!')

~~~



print('Hello world!')



### 4.5 分割线



* * *



***



*****



- - -



---------------------------------------



```

* * *



***



*****



- - -



---------------------------------------

```



### 4.6 区段元素

#### 4.6.1 链接



Markdown 支持两种形式的链接语法： 行内式和参考式两种形式。不管是哪一种，链接文字都是用 [方括号] 来标记。



**行内式的链接** 在方块括号后面紧接着圆括号并插入网址链接即可，如果你还想要加上链接的 title 文字，只要在网址后面，用双引号把 title 文字包起来即可，例如：



这是一个 [an example](Example Domain "Title") 行内链接.



[This link](Example Domain) 这个是五Title的联机.



可以使用相对路径[About](/about/).



代码如下：



```

这是一个 [an example](Example Domain "Title") 行内链接.



[This link](Example Domain) 这个是五Title的联机.



可以使用相对路径[About](/about/).

```



**参考式的链接** 是在链接文字的括号后面再接上另一个方括号，而在第二个方括号里面要填入用以辨识链接的标记。



这是一个参考试链接 [an example][id]，参考试链接必须有对应的id值，否则无法连接.



[id]: Example Domain "Optional Title Here"



代码如下：



`这是参考试链接 [an example][id] .`



`[id]: Example Domain "可选的title"`



`[id1]: <Example Domain> "可选的title"`



**语法：**



* 方括号（前面可以选择性地加上至多三个空格来缩进），里面输入链接文字

* 接着一个冒号

* 接着一个以上的空格或制表符

* 接着链接的网址

* 选择性地接着 title 内容，可以用单引号、双引号或是括弧包着

* 链接网址也可以用尖括号包起来



**隐式链接标记** 功能让你可以省略指定链接标记，这种情形下，链接标记会视为等同于链接文字，要用隐式链接标记只要在链接文字后面加上一个空的方括号，如果你要让 "Google" 链接到 google.com，你可以简化成：



[Google][]



[Google]: http://google.com/



`[Google][]`



`[Google]: http://google.com/&amp;#x60;



下面是一个参考式链接的范例：



在 [Google] [1] 中搜索超过 [Yahoo] [2] 或 [MSN] [3].



[1]: http://google.com/ "Google"

[2]: Yahoo Search - Web Search "Yahoo Search"

[3]: 微软 Bing 搜索 - 国内版 "MSN Search"



`在 [Google] [1] 的搜索超过 [Yahoo] [2] 或 [MSN] [3].`



`[1]: http://google.com/ "Google"`



`[2]: Yahoo Search - Web Search "Yahoo Search"`



`[2]: Yahoo Search - Web Search "Yahoo Search"`



如果改成用链接名称的方式写：



在 [Google][] 中搜索超过 [Yahoo][] 或 [MSN][].



[google]: http://google.com/ "Google"

[yahoo]: Yahoo Search - Web Search "Yahoo Search"

[msn]: 微软 Bing 搜索 - 国内版 "MSN Search"



`在 [Google][] 中搜索超过 [Yahoo][] 或 [MSN][].`



`[google]: http://google.com/ "Google"`



`[yahoo]: Yahoo Search - Web Search "Yahoo Search"`



`[msn]: 微软 Bing 搜索 - 国内版 "MSN Search"`

### 4.7 强调

1. *单星号*

2. _单下滑线_

3. **双星号**

4. __双下划线__



```

1. *单星号*

2. _单下滑线_

3. **双星号**

4. __双下划线__

```

**语法：** `*` 和 `_` **两边**都有**空白**的话，它们就只会被当成普通的符号,文字前后直接插入普通的星号或底线，你可以用反斜线，如下：



\*this text is surrounded by literal asterisks\*



代码如下：



```

\*this text is surrounded by literal asterisks\*

```





### 4.7 代码

Use the `printf()` function.



``There is a literal backtick (`) here.``



**语法：** 在代码区段内插入反引号，你可以用多个反引号来开启和结束代码区段。代码区段内，`&`和`<>`都会被自动地转成 HTML 实体



请不要在任何情况下使用 `<blink>` 标签.



### 4.8 图片



![Alt text](Markdown/img.jpg)



![Alt text](Markdown/img.jpg "Optional title")



![Alt text][id]



[id]: Markdown/img.jpg "Optional title attribute"



```

![Alt text](/Markdwon/img.jpg)



![Alt text](/Markdwon/img.jpg "Optional title")



![Alt text][id]



`[id]: url/to/image "Optional title attribute"`

```



* 一个惊叹号 !

* 接着一个方括号，里面放上图片的替代文字

* 接着一个普通括号，里面放上图片的网址，最后还可以用引号包住并加上 选择性的 'title' 文字。







### 4.9 自动链接



<Example Domain>



<address@example.com>



```

<Example Domain>

<address@example.com>

```



### 4.10 反斜杠转译字符



利用反斜杠来插入一些在语法中有其它意义的符号.



Markdown 支持以下这些符号前面加上反斜杠来帮助插入普通的符号：



```

\ 反斜线

` 反引号

* 星号

_ 底线

{} 花括号

[] 方括号

() 括弧

# 井字号

+ 加号

- 减号

. 英文句点

! 惊叹号

```



## 5. 高级使用实例



### 5.1 链接方式，可以在其中加粗：



You can specify extra HTML rendering options through the [**Rendering** preference pane](#rendering-pane).



```

You can specify extra HTML rendering options through the [**Rendering** preference pane](#rendering-pane).

```





### 5.2 列表缩进（主要针对Macdown工具）



* 列表必须后边紧跟一个空格

* 无序列表以 `*`

- `-`、`+` 也可以用

* 嵌套进行缩紧

1. 支持顺序编号

2. 起始于数字后跟点并在点后加入空格 like `1. `

42. 可以不用顺序, 自动顺序编号

1. 你可能想开始宇`1.` 使其自动编号



代码如下:



```

* 列表必须后边紧跟一个空格

* 无序列表以 `*`

- `-`、`+` 也可以用

* 嵌套进行缩紧

1. 支持顺序编号

2. 起始于数字后跟点并在点后加入空格 like `1. `

42. 可以不用顺序, 自动顺序编号

1. 你可能想开始宇`1.` 使其自动编号

```



### 引用及引用中引用



> 尖括号 `>` 被用做引用，一样中换行，后变跟两个以上空格.

语法上不是每个都需要一个 `>`

段落之间没有空行，否则会出现在换行引用.

> 引用中的引用，嵌套引用.

> > 嵌套引用这个是.

> > > 多嵌套医用

>

> 多嵌套引用后续

>

> * 列表

> * [嵌套联机](#fenced-code-block)，链接引用号必须有，否则会出现不能连接及显示问题

> * 等等.



代码如下:



```

> 尖括号 `>` 被用做引用，一样中换行，后变跟两个以上空格.

语法上不是每个都需要一个 `>`

段落之间没有空行，否则会出现在换行引用.

> 引用中的引用，嵌套引用.

> > 嵌套引用这个是.

> > > 多嵌套医用

>

> 多嵌套引用后续

>

> * 列表

> * [嵌套联机](#fenced-code-block)，链接引用号必须有，否则会出现不能连接及显示问题

> * 等等.

```



### 嵌套代码

`内嵌代码` 使用来表示: `` `内嵌代码` ``



如果你想显示单个``代码 `反引号` `` 内容, 使用两个反引号，并且用空格隔开`` ` ``，如果想想显示两个，则用三个`` ` ``，```` ``代码块 `反引号` `` ````，以此类推。



### 表格



以下表格:



First Header | Second Header

------------- | -------------

Content Cell | Content Cell

Content Cell | Content Cell



You can align cell contents with syntax like this:



| Left Aligned | Center Aligned | Right Aligned |

|:------------- |:---------------:| -------------:|

| col 3 is | some wordy text | $1600 |

| col 2 is | centered | $12 |

| zebra stripes | are neat | $1 |



为了美观短竖线 (`|`) 在开头和结尾加上, 费必须. 空格无影响. 使用 `:` 表示对齐方式，中间对齐使用两个，左对齐在左端，右对齐在右侧.



### 内嵌代码高亮显示

只有在设置-rendering-***Enable highlighting in code blocks***开启时才会有内嵌代码高亮显示（macdown支持，[查看地址](MacDown: The open source Markdown editor for macOS) ），可以在开头写上`~~~python`



~~~python

import urllib3

import ssl

import json

from pip._vendor import requests

ssl._create_default_https_context = ssl._create_unverified_context

def getList():

~~~



### 表格内的格式



Option name | Markup | Result if enabled |

--------------------|------------------|-----------------------|

Intra-word emphasis | So A\*maz\*ing | So A<em>maz</em>ing |

Strikethrough | \~~Much wow\~~ | <del>Much wow</del> |

Underline [^under] | \_So doge\_ | <u>So doge</u> |

Quote [^quote] | \"Such editor\" | <q>Such editor</q> |

Highlight | \==So good\== | <mark>So good</mark> |

Superscript | hoge\^(fuga) | hoge<sup>fuga</sup> |

Autolink | http://t.co | <http://t.co> |

Footnotes | [\^4] and [\^4]: | [^4] and footnote 4 |



[^4]: 角注可以使用数字`[^4]`. 也可以使用 `[^footy note4]`和 `[^footy note4]:` 此处带`:`号.无论如何标示都会在角注中以数字序列排列，无论备注在何处都会在底部显示. 不必特意编号，编辑器会自动为你按照角注顺序编号，并在底部显示角注可以放到引用地方，但是最后会显示在最后角注。

[^math]: 需要互联网支持。



### TeX-like 语法，数学计算式的表达

使用TeX-like数学语法, [^math] 可以使用: \\( 1 + 1 \\) 或是 in MathML: <math><mn>1</mn><mo>+</mo><mn>1</mn></math>, and block math:



\\[

A^T_S = B

\\]



或是 (in MathML)



<math display="block">

<msubsup><mi>A</mi> <mi>S</mi> <mi>T</mi></msubsup>

<mo>=</mo>

<mi>B</mi>

</math>



### 列表显示支持

1. [x] 设置中选择 task list syntax，才会生效

* [x] 支持嵌套

* [x] 支持顺序和非顺序方式

2. [ ] 不支持香html一样的checkbox选择



[^under]: 如果 **Underline** 被禁用 `_this_` 将以 *emphasized* 加粗强调显示，不显示下滑线.



[^quote]: **引号** 替换 `"` 符号使用 html `<q>` 标签. **Quote** 和 **Smartypants** 两者是冲突的. 如果两着都被弃用, **引号** 优先. 注意 **quote**引号与*blockquote*有区别的, 这也是标准的Markdown一部分.
