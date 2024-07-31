---
layout: article
title: In die Log Datei schreiben
menu_title: In die Log Datei schreiben
description: In die Log Datei schreiben
lang: de
weight: 164
ref: scr-164
redirect_from:
---

<div class="box-tip" markdown="1">
**Hinweis:**

In der Vorschau oder auf Peakboard Boxen kann die Log-Übersicht mit `Strg + L` geöffnet werden.
</div>

Bei der Entwicklung neuer Anwendungen ist es manchmal sehr hilfreich, Daten in ein Log zu schreiben. Hierzu kann folgender Code verwendet werden:

![Log](/assets/images/scripting/Scripting_Beispiele/logging/en-script-log.png)

```Lua
    peakboard.log(data.Text)
```
