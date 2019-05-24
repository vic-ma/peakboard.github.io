---
layout: article
title: Google Analytics（分析）报告
menu_title: Google Analytics（分析）报告
description: Peakboard Designer中Google Analytics（分析）报告控件相关信息。
lang: cn
weight: 1300
ref: con-1300
redirect_from:
  - /controls/13-cn-google-analytics.html
---

创建Google Analytics（分析）报告必须设立一个Peakboard.io帐户。在[Peakboard.io门户](/data_sources/PeakboardIO/32-cn-intro-peakboard-io.html)中定义GA报告，然后使用相应的控件嵌入到Designer中。

在Peakboard.io门户中，转到菜单中的“GA图表”。如果您还没有将账户关联到Google账户，请点击相应的按钮（见下一截图）。将打开Google登录屏幕，必须在其中输入凭证。这是一个典型的OAuth2认证，允许Peakboard访问您的Google Analytics（分析）数据。您可以随时在Google个人资料中撤销此权限。成功关联后，可以创建任意数量的报告。只需要关联一次，然后就可以保留。

![image_1](/assets/images/Controls/google-analytics/Controls_GA_01.png)

成功关联后，左侧有许多输入字段可用于建立数据基础和设计GA报告。根据GA帐户，必须选择属性和视图。其确切方式取决于GA账户。请勿忘记正确命名对象，并添加简短的描述文本。

![image_1](/assets/images/Controls/google-analytics/Controls_GA_02.png)

接下来，必须选择开始和结束日期以及其他属性。所需的指标和维度是必填字段。排序、过滤和分割均自动进行。请注意，Google Analytics（分析）提供了无数的可能性。因此，正确设置这些属性并不容易，需要更深入的专业知识。有关维度、指标和其他属性的更多详细信息，请参考Google文档。

![image_1](/assets/images/Controls/google-analytics/Controls_GA_03.png)

最后一部分中，只需指定可视化的详情。图表的标题、类型和大小。单击“运行查询”以使用选定属性执行查询。然后，您将看到图表的预览。最后，像其他Peakboard.io对象一样保存您的报告。

![image_1](/assets/images/Controls/google-analytics/Controls_GA_04.png)

Peakboard Designer对这些GA报告有自己的控件。像往常一样输入API密钥和用户名后，从选择列表中选择相应的图表对象。无需进行其他操作。

![image_1](/assets/images/Controls/google-analytics/Controls_GA_05.png)