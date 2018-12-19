---
layout: article
title: Peakboard API
menu_title: Peakboard API
description: Peakboard API
lang: de
ref: misc-07
---

Um Daten aus einer Variablen oder List Datenquelle über die API abgreifen zu können werden nachfolgende Informationen benötigt.

* Authentifizierungsverfahren: [Basic Authentication](https://de.wikipedia.org/wiki/HTTP-Authentifizierung#Basic_Authentication)

* BoxIP: IP der Peakboard Box im Netzwerk, alternativ auch DNS der Box möglich
* PeakboardID: ID der Visualisierung, diese findet sich über den Menü Button Settings (1). Anschließend kann die ID (2) aus dem entsprechenden Feld in den Zwischenspeicher kopiert werden.
* ListName: Name der List Datenquelle (3)
* VarName: Name einer Variablen

![API01](/assets/images/misc/API/API01.png)

Lesen aus einer Liste:

```lua
GET: http://[BoxIP]/api/dataread?id=[PeakboardID]&datakey=[ListName]
```

![API02](/assets/images/misc/API/API02.png)

Schreiben in eine Variable:

```lua
POST: http://[BoxIP]/api/datapush?id=[PeakboardID]&datakey=[VarName]
```

![API03](/assets/images/misc/API/API03.png)