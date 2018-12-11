---
layout: article
title: 计算器脚本示例
menu_title: 计算器脚本示例
description: 计算器脚本示例
lang: cn
ref: scr-09
---
在该脚本示例中，解释了一个非常简单的计算器的结构，它能执行加减运算。


![image_1](/assets/images/scripting/Scripting_Beispiele/Taschenrechner.png)

要计算的数字在左侧和右侧文本字段中输入。
使用当前设置为“+”的按钮，可以确定计算类型：

```lua
if screens['Screen1'].PlusMinus.text == '+' then 
	screens['Screen1'].PlusMinus.text = '-'
else
	screens['Screen1'].PlusMinus.text = '+'
end

```

因此，应检查按钮中哪个文本是monentan（调用了哪个PlusMinus）。如果文本为‘+’，则设置为‘-’。
如果文本不是‘+’，则必须是‘-’，因此无需检查就将其设置为‘+’。

点击“Click me”按钮以开始计算：

```lua 
local result = 0 
--Check the text in the plus minus button
	
if screens['Screen1'].PlusMinus.text == '+' then 
	result = tonumber(screens['Screen1'].Left.text) + tonumber(screens['Screen1'].Right.text) 
else
	result = tonumber(screens['Screen1'].Left.text) - tonumber(screens['Screen1'].Right.text)
end

-- Show the result in a dialog 
screens['Screen1'].showdialog('Result', result)	

```

首先，为结果‘局部结果’创建局部变量。然后使用PlusMinus按钮来确定两个文本字段中的数字是应该相加还是相减。
然后，脚本中的计算结果会写入局部变量‘结果’，最后通过` `screens['Screen1'].showdialog('Result', result)`显示在屏幕上，作为弹出式通知


该示例可以在模板->脚本下的Peakboard Designer中找到，也可以通过该[链接](https://github.com/Peakboard/CoolStuff/raw/master/Scripts/Calculator/Calculator.pbmx)下载。