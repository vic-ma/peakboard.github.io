---
layout: article
title: Screenshot über HTTP Request
menu_title: Screenshot über HTTP Request
description: Screenshot über HTTP Request
lang: de
ref: misc-09
---

Werden beispielsweise am Shopfloor Entscheidungen auf Grundlage einer Visualisierung getroffen, so ist es Notwendig die Entscheidungsgrundlage zu dokumentieren.
Dies kann beispielsweise über einen Screenshot der Visualisierung realisiert werden.

Technisch kann so ein Screenshot über einen HTTP Get Request direkt von der Box extrahiert werden.

Dieser Befehl sieht wie folgendermaßen aus:

![HTTP Get Request](/assets/images/misc/Screenshot/Screenshot01.png)

Die Request URL gestaltet sich dabei wie folgt, wobei als Methode GET verwendet wird:

```
[Name der Box]/api/iot/screenshot
```

Wie in der Darstellung ersichtlich erfolgt die Authorisierung Base64 encoded. Einen entsprechenden Encoder finden sie beispielsweise [hier](https://www.base64encode.org/). 
Der Authorisierungsstring setzt sich wie folgt zusammen:

```
Administrator:Ihr_Gerätepasswort
```

Bei erfolgreichem Request erhalten Sie einen Screenshot von der aktuellen Anzeige zur beliebigen Weiterverarbeitung von der Box geliefert