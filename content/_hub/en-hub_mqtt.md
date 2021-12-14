---
layout: article
title: MQTT Server
menu_title: MQTT Server
description: MQTT Server 
lang: en
weight: 400
ref: hub-400
redirect_from:
---
Peakboard Hub has an integrated MQTT server that you can use for communication between your Peakboard Boxes. 
Simply activate it under [Settings].

<div class="box-warning" markdown="1"> **Attention:**
Make sure that the port on Peakboard Hub server is enabled. This is 1883 by default.
</div>

Once the MQTT server is enabled and the Peakboard Designer is connected to Peakboard Hub, you can easily share a variable with other Peakboard Boxes that will have the same value for that variable. 
If a Peakboard Box changes the value of a shared variable, it will change for all Peakboard Boxes.

![MQTT Server](/assets/images/hub/hub_mqtt1.png) 