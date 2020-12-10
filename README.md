# WeihnachtsfeierLicht
## ~avatar avatar @unplugged
![PartyStern](https://github.com/r00b1nh00d/weihnachtsfeierlicht/blob/master/PartyStern3.gif?raw=true)

## ~ @unplugged
Du kannst für dieses Projekt den bereits gebauten Weihnachtsstern oder einen anderen Streifen des RGB-LED Bands nutzen. Beginnen wir erstmal mit einer einfachen Variante, bei der ein Lautstärkebalken vom ersten bis zum letzten Pixel gezeichnet wird.



## Variante 1
Dazu musst du ``||basic:beim Start||`` dem Calliope wieder beibringen, wo der Neopixel angeschlossen ist. <br>
In die ``||basic:dauerhaft||``- Schleife kannst du den Block ``||neopixel.strip:zeige Balkendiagramm||`` und eine ``||basic:Pause||`` einfügen. <br>
Das Balkendiagramm soll von der gemessenen ``||inputs: lautstärke||`` bis zu einem Maximalwert gezeichnet werden (bei mir war 90 ein guter Maximalwert, diesen kannst du von 255 langsam verringern und experimentell herausfinden).

```blocks
let strip = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
basic.forever(function () {
    strip.clear()
    strip.showBarGraph(input.soundLevel(), 70)
    strip.show()
    basic.pause(10)
})

```

##  ~ @unplugged Variante 2
Die zweite Variante, wie sie auch in der Anfangsanimation zu sehen war ist etwas aufwendiger zu programmieren. Hier wird automatisch eine Liste von Messwerten erstellt und daraus ein Maximalwert gebildet. In abhängigkeit zur Lautstärke werden dann dauerhaft vom ersten und vom letzten Pixel aus bis zur Mitte die Pixel angesteuert.<br>
Um dies zu programmieren musst du dieses Tutorial verlassen und [hier im nächsten Tutorial ](https://makecode.calliope.cc/#tutorial:https://github.com/r00b1nh00d/weihnachtsfeierlicht2) weiter arbeiten.










> Diese Seite bei [https://r00b1nh00d.github.io/weihnachtsparty/](https://r00b1nh00d.github.io/weihnachtsparty/) öffnen

## Als Erweiterung verwenden

Dieses Repository kann als **Erweiterung** in MakeCode hinzugefügt werden.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Neues Projekt**
* klicke auf **Erweiterungen** unter dem Zahnrad-Menü
* nach **https://github.com/r00b1nh00d/weihnachtsparty** suchen und importieren

## Dieses Projekt bearbeiten ![Build Status Abzeichen](https://github.com/r00b1nh00d/weihnachtsparty/workflows/MakeCode/badge.svg)

Um dieses Repository in MakeCode zu bearbeiten.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Importieren** und dann auf **Importiere URL**
* füge **https://github.com/r00b1nh00d/weihnachtsparty** ein und klicke auf Importieren

## Blockvorschau

Dieses Bild zeigt den Blockcode vom letzten Commit im Master an.
Die Aktualisierung dieses Bildes kann einige Minuten dauern.

![Eine gerenderte Ansicht der Blöcke](https://github.com/r00b1nh00d/weihnachtsparty/raw/master/.github/makecode/blocks.png)

#### Metadaten (verwendet für Suche, Rendering)

* for PXT/calliopemini
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
