const questions = [
  {
    "id": "AF_AV_001",
    "question": "Wie hoch darf die Spitzenleistung beim Senderausgang auf der Frequenz 14295 kHz für eine Amateurfunkzulassung (HB9) sein?",
    "answers": {
      "a": "100 Watt",
      "b": "1000 Watt",
      "c": "25 Watt",
      "d": "keine Beschränkung"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_002",
    "question": "Wie hoch darf die Spitzenleistung beim Senderausgang für eine Amateurfunkzulassung NOVICE (HB3) auf der Frequenz 21324 kHz sein?",
    "answers": {
      "a": "100 Watt",
      "b": "1000 Watt",
      "c": "25 Watt",
      "d": "keine Beschränkung"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_003",
    "question": "Wem werden Bewilligung für unbediente Funkanlagen erteilt?",
    "answers": {
      "a": "Natürlichen Personen und Amateurfunkvereinen",
      "b": "Nur Amateurfunkvereinen",
      "c": "Nur der USKA",
      "d": "Jeder Funkamateur mit einen zugeteilten Rufzeichen darf eine unbediente Funkanlage errichten und betreiben"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_004",
    "question": "Wem darf für das Erstellen und Betreiben unbedienter Funkanlagen ei ne Bewilligung erteilt werden?",
    "answers": {
      "a": "Nur Amateurfunkvereinen",
      "b": "Es braucht keine Rufzeichenzuteilung",
      "c": "Nur Funkamateuren mit einem Radiotelegrafistenausweis",
      "d": "Nur an Funkamateure mit spezieller Bewilligung des Bundesamtes für Kommunikation BAKOM"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_005",
    "question": "Was muss der Funkamateur unter anderem zur Verhinderung von Störungen vorsehen?",
    "answers": {
      "a": "Unnötige Aussendungen vermeiden",
      "b": "Die Leistung für Sendeversuche um 50% reduzieren",
      "c": "Es braucht keine speziellen Vorkehrungen",
      "d": "Der Antennendraht muss isoliert sein 6"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_006",
    "question": "Was muss der Funkamateur zur Verhinderung von Störungen vorkehren?",
    "answers": {
      "a": "Keine speziellen Vorkehrungen treffen",
      "b": "Nur so viel Leistung abstrahlen, wie erforderlich ist, um eine zufri eden stellende Verbindung zu gewährleisten und unnötige Übermittlungen vermeiden",
      "c": "Die vom BAKOM zugeteilten Frequenzen nur benützen, wenn sie frei sind; unnötige Aussendungen vermeiden; reine Sendeversuche sind nicht zulässig",
      "d": "Den Antennendraht möglichst gut isolieren"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_007",
    "question": "Wie oft muss das Rufzeichen ausgesendet werden?",
    "answers": {
      "a": "Drei Mal bei der Verbindungsaufnahme, danach nicht mehr",
      "b": "Ein Mal bei der Verbindungsaufnahme, danach alle zwei Minuten",
      "c": "Nur wenn eine Station QRZ? fragt",
      "d": "Bei der Verbindungsaufnahme, danach alle 10 Minuten"
    },
    "correct": "d"
  },
  {
    "id": "AF_AV_008",
    "question": "Wie oft muss das Rufzeichen während einer Verbindung ausgesendet werden?",
    "answers": {
      "a": "Bei der Verbindungsaufnahme, danach alle 10 Minuten",
      "b": "Alle 10 Minuten",
      "c": "Ca. alle 5 Minuten",
      "d": "Es genügt, wenn das Rufzeichen bei der Verbindungsaufnahme ausgesendet wird"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_009",
    "question": "Wann muss das Rufzeichen einer Amateurfunkanlage ausgesendet werden?",
    "answers": {
      "a": "Wenn es von der Station, mit welcher ich in Verbindung bin, verlan gt wird",
      "b": "Jedes Mal, wenn ich wieder am Senden bin",
      "c": "Nur bei der Verbindungsaufnahme",
      "d": "Bei der Verbindungsaufnahme und danach alle 10 Minuten"
    },
    "correct": "d"
  },
  {
    "id": "AF_AV_010",
    "question": "Welche der beiden Amateurfunkzulassungen erlaubt die Benutzung aller für den Amateurfunk vorgesehener Bänder?",
    "answers": {
      "a": "Die Amateurfunkzulassung NOVICE (HB3)",
      "b": "Die Amateurfunkzulassung (HB9)",
      "c": "Beide Amateurfunkzulassungen",
      "d": "Inhaber des Fähigkeitszeugnisses für den Amateurfunk dürfen die Bänder ohne Zulassung (Rufzeichenzuteilung) benutzen 7"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_011",
    "question": "Mit welcher Zulassung darf eine Amateurfunkanlage auf dem Frequenzband 144 – 146 MHz mit höchstens 50 Watt Senderausgangsleistung betrieben werden?",
    "answers": {
      "a": "Mit der Amateurfunkzulassung (HB9)",
      "b": "Mit der Amateurfunkzulassung NOVICE (HB3)",
      "c": "Mit beiden Amateurfunkzulassungen",
      "d": "Das Betreiben der Bänder über 30 MHz braucht keine Amateurfunkzulassun g"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_012",
    "question": "Mit welcher Zulassung darf eine Amateurfunkanlage auf dem Frequenzband 430 – 440 MHz mit einer Senderausgangsleistung bis zu 1000 Watt betrieben werden?",
    "answers": {
      "a": "Für dieses Frequenzband braucht es keine Amateurfunkzulassung",
      "b": "Mit der Amateurfunkzulassung NOVICE (HB3)",
      "c": "Mit der Amateurfunkzulassung (HB9)",
      "d": "Mit der Amateurfunkzulassung (HB9) und der Amateurfunkzulassung NOVIC E (HB3)"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_013",
    "question": "Darf das Frequenzband 50.000 bis 52.000 MHz von einem Inhaber einer Amateurfunkzulassung NOVICE (HB3) verwendet werden?",
    "answers": {
      "a": "Ja",
      "b": "Nein",
      "c": "Nein, nur Betreiber einer Klubstation dürfen dieses Band verwenden",
      "d": "Ja, aber nur mit einer Bewilligung des BAKOM"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_014",
    "question": "Wie darf das Frequenzband 7.100 bis 7.200 MHz verwendet werden?",
    "answers": {
      "a": "Uneingeschränkt mit der Amateurfunkzulassung (HB9)",
      "b": "Nur mit einer Sendeleistung von max. 100 W; das Band ist mit anderen Anwendern geteilt, die in der Benützung Vorrang haben",
      "c": "Das Band steht Funkamateuren nicht zur Verfügung",
      "d": "Das Band darf nur mit einer Bewilligung des BAKOM verwend et werden"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_015",
    "question": "Darf das Frequenzband 50.000 bis 52.000 MHz von einem Inhaber einer Amateurfunkzulassung (HB9) verwendet werden?",
    "answers": {
      "a": "Nein",
      "b": "Ja, mit einer maximalen Senderausgangsleistung von 100 Watt",
      "c": "Ja, aber nur mit einer Bewilligung des BAKOM",
      "d": "Das Band ist Inhabern einer Amateurfunkzulassung NOVICE (HB3) vorenthalten 8"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_016",
    "question": "Darf ein Inhaber einer Amateurfunkzulassung (HB9) eine Anlage auf der Frequenz 24.15 GHz betreiben?",
    "answers": {
      "a": "Nein",
      "b": "Ja, andere Benützer haben aber Vorrang",
      "c": "Nur mit einer Bewilligung des BAKOM",
      "d": "Ja, nach vorgängiger Meldung an das BAKOM"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_017",
    "question": "Sie besitzen eine Amateurfunkzulassung (HB9). Dürfen Sie eine Amateurfunkanlag e auf der Frequenz 24.010 GHz betreiben?",
    "answers": {
      "a": "Nein",
      "b": "Nur mit Bewilligung des BAKOM",
      "c": "Ja",
      "d": "Ja, das Frequenzband steht aber auch anderen Funkanwendern zur Verf ügung, die in der Benützung Vorrang haben"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_018",
    "question": "Welches der nachstehenden Frequenzbänder darf nur mit Bewilligung des BAKOM benützt werden?",
    "answers": {
      "a": "431.000 - 438.000 MHz",
      "b": "1.260 - 1.300 GHz",
      "c": "2.312 - 2.450 GHz",
      "d": "10.000 - 10.500 GHz"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_019",
    "question": "Sie stören mit Ihrer Amateurstation eine kommerzielle Fernsteuerung auf der Frequenz 433.5 MHz. Wer hat Vorrang?",
    "answers": {
      "a": "Die kommerzielle Fernsteuerung",
      "b": "Die Amateurfunkstation",
      "c": "Niemand",
      "d": "Die Anlage mit der schwächeren Sendeleistung"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_020",
    "question": "Was ist zu beachten, bevor Versuche im Frequenzband 1.240 bis 1.260 GHz durchgeführ t werden?",
    "answers": {
      "a": "Es muss eine Bewilligung des BAKOM eingeholt werden",
      "b": "Die zulässige Sendeleistung ist eingeschränkt",
      "c": "Es bestehen keine Einschränkungen",
      "d": "Beim BAKOM muss eine zusätzliche Funkversuchskonzession beantragt werden 9"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_021",
    "question": "Welches der nachstehenden Frequenzbänder steht auch anderen Benutzern zur Verfügung, die in der Benützung Vorrang haben?",
    "answers": {
      "a": "438.000 - 440.000 MHz",
      "b": "1.240 - 1.260 GHz",
      "c": "7.000 - 7.100 MHz",
      "d": "24.000 - 24.050 GHz"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_022",
    "question": "Welches der nachstehenden Frequenzbänder darf nur mit Bewilligung des BAKOM benützt werden?",
    "answers": {
      "a": "144.000 - 146.000 MHz",
      "b": "1.240 - 1.260 GHz",
      "c": "47.000 - 47.200 GHz",
      "d": "248.000 - 250.000 GHz"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_023",
    "question": "Welche der folgenden Aussagen stimmt für den Frequenzbereich 430 – 435 MHz?",
    "answers": {
      "a": "der Frequenzbereich darf nur von Inhaberinnen und Inhabern einer Amateurfunkzulassung NOVICE (HB3) benützt werden",
      "b": "das Frequenzband darf nur mit Bewilligung des BAKOM benützt werde n",
      "c": "dieses Frequenzband steht auch anderen Benützern zur Verfügung; diese hab en in der Benützung Vorrang",
      "d": "die zulässige Leistung in diesem Frequenzband beträgt maximal 1 Watt ERP"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_024",
    "question": "Welche Informationen dürfen mit einer Amateurfunkanlage übermittelt werden?",
    "answers": {
      "a": "Rechtsgeschäftliche Mitteilungen",
      "b": "Informationen von Dritten oder an Dritte",
      "c": "Jegliche Art von Informationen",
      "d": "Technische Informationen über Sende- und Empfangsversuche, persönliche Mitteilungen und Mitteilungen in Notfällen"
    },
    "correct": "d"
  },
  {
    "id": "AF_AV_025",
    "question": "Darf eine Meldung von Dritten von einem Funkamateur an einen anderen Funkamateu r weitergeleitet werden?",
    "answers": {
      "a": "Ja, Meldungen von einem Funkamateur an einen anderen Funkamateur dürfen im mer weitergeleitet werden",
      "b": "Nein, Informationen von Dritten oder an Dritte dürfen im Am ateurfunk nicht übermittelt werden; ausgenommen bei Notfällen",
      "c": "Nein, Meldungen von einem Funkamateur an einen anderen Funkamateur dürfen nicht weitergeleitet werden 10",
      "d": "Ja, im Amateurfunk dürfen alle Arten von Meldungen, darunte r auch persönliche, übermittelt werden"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_026",
    "question": "Dürfen Sie von einem anderen Funkamateur eine Meldung mit rechtsgeschäftlichem Inhalt empfangen, um sie an einen anderen Funkamateur weiterzuleiten?",
    "answers": {
      "a": "Ja, Informationen eines Funkamateurs, die für einen anderen Funkamateur bestimmt sind, dürfen an diesen weitergeleitet werden",
      "b": "Ja, weil die Meldung nicht für mich bestimmt ist",
      "c": "Nein, Informationen mit rechtsgeschäftlichem Inhalt dürfen im Amat eurfunk nicht übermittelt werden",
      "d": "Nein, Informationen eines Funkamateurs, die für einen anderen Funkamateur be stimmt sind, dürfen nicht weitergeleitet werden"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_027",
    "question": "Welche Mitteilungen sind zur Übertragung auf einer Amateurfunkanlage zulässig?",
    "answers": {
      "a": "Alle Arten von Mitteilungen sind zulässig, mit Ausnahme von persönlichen Mitteilungen",
      "b": "Alle Arten von Mitteilungen sind zulässig, inklusive rechtsgeschäftliche Mitteilungen",
      "c": "Nur Mitteilungen zur Übertragung technischer Nachrichten über Sende- und Empfangsversuche sowie persönliche Mitteilungen und Mitteilungen in Notfällen",
      "d": "Alle Arten von Mitteilungen sind zulässig, inklusive die Übertragung von Nachrichten, die von Dritten stammen oder für Dritte bestimmt sind"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_028",
    "question": "Darf eine Amateurfunkanlage in einem Luftfahrzeug betrieben werden?",
    "answers": {
      "a": "Ja",
      "b": "Nein",
      "c": "Nur bis zu einer Höhe von 300 Metern",
      "d": "Nur mit dem Einverständnis des Luftfahrzeugführers"
    },
    "correct": "d"
  },
  {
    "id": "AF_AV_029",
    "question": "Darf eine Amateurfunkanlage in einem Sportflugzeug kurz nach dem Start betrieben werden?",
    "answers": {
      "a": "Ja, aber erst wenn das Flugzeug mindestens 300 Meter über Boden ist",
      "b": "Nein, Amateurfunkanlagen dürfen in Flugzeugen nicht betrieben werden",
      "c": "Ja, wenn es der Pilot erlaubt",
      "d": "Nein, das ist viel zu gefährlich"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_030",
    "question": "Darf eine Amateurfunkanlage in einem Sportflugzeug kurz vor dem Aufsetzen zur Landung betrieben werden?",
    "answers": {
      "a": "Ja, das Benützen von Amateurfunkanlagen in Luftfahrzeugen ist in all en Höhen erlaubt",
      "b": "Nein, das ist viel zu gefährlich 11",
      "c": "Ja, wenn der Pilot sein Einverständnis gegeben hat",
      "d": "Nein, Amateurfunkanlagen dürfen in Flugzeugen nicht betrieben wer den"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_031",
    "question": "Darf bei einer Amateurfunkanlage im Senderteil etwas geändert werden?",
    "answers": {
      "a": "Ja, aber nur bei Anlagen von Inhabern einer Amateurfunkzulassung(HB9)",
      "b": "Nein",
      "c": "Nur nach vorheriger Bewilligung durch das BAKOM",
      "d": "Ja, aber nur zur Reparatur"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_032",
    "question": "Dürfen Inhaberinnen und Inhaber einer Amateurfunkzulassung NOVICE (HB3) ei nen Sender selber bauen?",
    "answers": {
      "a": "Nein, sie dürfen nur im Handel erhältliche Funkanlagen betreiben",
      "b": "Ja",
      "c": "Nur nach vorheriger Bewilligung durch das BAKOM",
      "d": "Nur unter Anleitung eines Radiotechnikers"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_033",
    "question": "Dürfen Inhaberinnen und Inhaber einer Amateurfunkzulassung NOVICE (HB3) Anpassungen an ihren Geräten vornehmen?",
    "answers": {
      "a": "Ja, uneingeschränkt",
      "b": "Nein",
      "c": "Ja, aber nicht am Senderteil",
      "d": "Nur nach vorheriger Bewilligung durch das BAKOM"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_034",
    "question": "Welcher Rufzeichenzusatz kann verwendet werden, wenn eine Amateurfunkanlage an einem anderen Standort als dem üblichen betrieben wird?",
    "answers": {
      "a": "/P",
      "b": "/A",
      "c": "/EXT",
      "d": "/M"
    },
    "correct": "d"
  },
  {
    "id": "AF_AV_035",
    "question": "Welcher Rufzeichenzusatz kann verwendet werden, wenn eine Amateurfunkanlage auf einem Schiff auf dem Meer betrieben wird?",
    "answers": {
      "a": "/MM",
      "b": "/M",
      "c": "/P 12",
      "d": "/SF"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_036",
    "question": "Welcher Rufzeichenzusatz kann verwendet werden, wenn eine Amateurfunkanlage in einem Luftfahrzeug betrieben wird?",
    "answers": {
      "a": "/AM",
      "b": "/LFZ",
      "c": "/P",
      "d": "/M"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_037",
    "question": "Welcher Rufzeichenzusatz kann verwendet werden, wenn eine Amateurfunkanlage in einem Landfahrzeug betrieben wird?",
    "answers": {
      "a": "/LFZ",
      "b": "/M",
      "c": "/P",
      "d": "/MM"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_038",
    "question": "Welcher Rufzeichenzusatz kann verwendet werden, wenn eine Amateurfunkanlage auf einem Binnenschiff betrieben wird?",
    "answers": {
      "a": "/BS",
      "b": "/M",
      "c": "/MM",
      "d": "/SM"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_039",
    "question": "Wie muss das Rufzeichen HB9XYZ verwendet werden, wenn die Amateurfunkanlage im Fürstentum Liechtenstein betrieben wird?",
    "answers": {
      "a": "FL/HB9XYZ",
      "b": "HB9XYZ/FL",
      "c": "HBØ/HB9XYZ",
      "d": "HB9/HBØXYZ"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_040",
    "question": "Was bedeutet das Rufzeichen HBØ/HB9XYZ?",
    "answers": {
      "a": "Ein Liechtensteiner Funkamateur betreibt seine Amateurfunkanlage in der Schweiz",
      "b": "Ein Schweizer Funkamateur betreibt seine Amateurfunkanlage im Fürst entum Liechtenstein",
      "c": "Ein solches Rufzeichen existiert nicht",
      "d": "Es wird über ein Relais gearbeitet 13"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_041",
    "question": "Was bedeutet das Rufzeichen HBØ/HB9XYZ?",
    "answers": {
      "a": "Eine solche Kombination ist nicht erlaubt",
      "b": "Ein Liechtensteiner Amateurfunker betreibt seine Amateurfunkanlage in der Schweiz",
      "c": "Ein Liechtensteiner Amateurfunker sucht eine Verbindung mit einer schweizerisch en Amateurfunkstelle",
      "d": "Ein Schweizer Amateurfunker betreibt seine Amateurfunkanlage i m Fürstentum Liechtenstein"
    },
    "correct": "d"
  },
  {
    "id": "AF_AV_042",
    "question": "Die Amateurfunkstelle HB9XX wird im Fürstentum Liechtenstein betriebe n. Wie lautet ihr Rufzeichen?",
    "answers": {
      "a": "HB9XX",
      "b": "HB9XX / FL",
      "c": "FL9XX",
      "d": "HBØ / HB9XX"
    },
    "correct": "d"
  },
  {
    "id": "AF_AV_043",
    "question": "Sie werden von HB9BPK/M gerufen. Wo wird die Anlage betrieben?",
    "answers": {
      "a": "Die Anlage wird möglicherweise auf einem Schiff auf einem Schwei zer See betrieben",
      "b": "Die Anlage wird auf einer Hochseeyacht, die zum Beispiel im M ittelmeer unterwegs ist, betrieben",
      "c": "Die Anlage wird in einem Ballon betrieben",
      "d": "Die Anlage wird an einem anderen Standort als üblich betrieb en"
    },
    "correct": "d"
  },
  {
    "id": "AF_AV_044",
    "question": "Sie werden von HB9BPK/AM gerufen. Wo wird die Anlage betrieben?",
    "answers": {
      "a": "Die Anlage wird auf einem Schiff auf einem Schweizer See betri eben",
      "b": "Die Anlage wird auf einer Hochseeyacht, die zum Beispiel im M ittelmeer unterwegs ist, betrieben",
      "c": "Die Anlage wird beispielsweise in einem Ballon (Gas- oder Heissluft-) betrieben",
      "d": "Die Anlage wird an einem anderen Standort als üblich betrieb en"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_045",
    "question": "Sie werden von HB9BPK/MM gerufen. Wo wird die Anlage betrieben?",
    "answers": {
      "a": "Die Anlage wird an einem anderen Standort als üblich betrieb en",
      "b": "Die Anlage wird in einem Ballon betrieben",
      "c": "Die Anlage wird auf einer Hochseeyacht, die zum Beispiel auf dem Mittelmeer unterwegs ist, betrieben",
      "d": "Die Anlage wird auf einem Schiff auf einem Schweizer See betri eben 14"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_046",
    "question": "HB9XX betreibt seine Amateurfunkstelle auf einem Motorboot auf dem Zü richsee. Wie kann der Zusatz zu seinem Rufzeichen lauten?",
    "answers": {
      "a": "Maritime mobile",
      "b": "Mobil",
      "c": "Portabel",
      "d": "Es sind keine Zusätze erlaubt"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_047",
    "question": "Sind Funkamateure verpflichtet, ein Logbuch zu führen?",
    "answers": {
      "a": "Ja, jede Verbindung muss darin aufgezeichnet werden",
      "b": "Nur während Wettbewerben",
      "c": "Nein",
      "d": "Das BAKOM kann einen Funkamateur verpflichten, ein Logbuch zu führen"
    },
    "correct": "d"
  },
  {
    "id": "AF_AV_048",
    "question": "Ist die Logbuchführung obligatorisch?",
    "answers": {
      "a": "Ja, aber nur für Verbindungen von festen Stationen aus",
      "b": "Nein",
      "c": "Ja",
      "d": "Nein, das BAKOM kann jedoch den Funkamateur verpflichten, Aufzeichnungen über seinen Funkverkehr zu machen"
    },
    "correct": "d"
  },
  {
    "id": "AF_AV_049",
    "question": "Wie wird eine Bandbreite von 7 kHz ausgedrückt?",
    "answers": {
      "a": "7K00",
      "b": "7KH",
      "c": "K700",
      "d": "0.7K"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_050",
    "question": "Wie wird eine Bandbreite von 1.8 kHz ausgedrückt?",
    "answers": {
      "a": "1,8K",
      "b": "1K80",
      "c": "1K8",
      "d": "0M00018"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_051",
    "question": "Wie wird eine Bandbreite von 10.4 kHz ausgedrückt?",
    "answers": {
      "a": "10K 15",
      "b": "10K4",
      "c": "K104",
      "d": "10,4KH"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_052",
    "question": "Wie wird eine Bandbreite von 12 MHz ausgedrückt?",
    "answers": {
      "a": "12M",
      "b": "12MH",
      "c": "12M0",
      "d": "M12"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_053",
    "question": "Wie wird eine Bandbreite von 3 MHz ausgedrückt?",
    "answers": {
      "a": "3MH",
      "b": "MH3",
      "c": "3000K",
      "d": "3M00"
    },
    "correct": "d"
  },
  {
    "id": "AF_AV_054",
    "question": "Mit welchem Kennzeichen wird die Modulationsart des Hauptträgers bezeichnet bei der Übermittlung mit Zweiseitenband?",
    "answers": {
      "a": "A",
      "b": "B",
      "c": "C",
      "d": "D"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_055",
    "question": "Mit welchem Kennzeichen wird die Modulationsart des Hauptträgers bezeichnet bei der Übermittlung mit Einseitenband und unterdrücktem Träger?",
    "answers": {
      "a": "R",
      "b": "H",
      "c": "J",
      "d": "Z"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_056",
    "question": "Mit welchem Kennzeichen wird die Modulationsart des Hauptträgers bezeichnet bei der Übermittlung mit Frequenzmodulation?",
    "answers": {
      "a": "F",
      "b": "G",
      "c": "H 16",
      "d": "J"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_057",
    "question": "Mit welchem Kennzeichen wird die Modulationsart des Hauptträgers bezeichnet bei der Übermittlung mit voneinander unabhängigen Seitenbändern?",
    "answers": {
      "a": "C",
      "b": "B",
      "c": "A",
      "d": "D"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_058",
    "question": "Mit welchem Kennzeichen wird die Art der zu übertragenden Informa tion bezeichnet bei Telegrafie für Hörempfang?",
    "answers": {
      "a": "A",
      "b": "B",
      "c": "C",
      "d": "D"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_059",
    "question": "Mit welchem Kennzeichen wird die Art der zu übertragenden Informa tion bezeichnet bei Datenübertragung, Fernmessen, Fernsteuern?",
    "answers": {
      "a": "D",
      "b": "A",
      "c": "B",
      "d": "C"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_060",
    "question": "Mit welchem Kennzeichen wird die Art der zu übertragenden Informa tion bezeichnet bei Fernsehen (Video)?",
    "answers": {
      "a": "E",
      "b": "A",
      "c": "F",
      "d": "V"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_061",
    "question": "Welchem Frequenzbereich entspricht die Abkürzung HF?",
    "answers": {
      "a": "300 bis 3000 kHz",
      "b": "30 bis 300 MHz",
      "c": "3 bis 30 GHz",
      "d": "3 bis 30 MHz 17"
    },
    "correct": "d"
  },
  {
    "id": "AF_AV_062",
    "question": "Welchem Frequenzbereich entspricht die Abkürzung VHF?",
    "answers": {
      "a": "30 bis 300 kHz",
      "b": "30 bis 300 MHz",
      "c": "3 bis 3000 kHz",
      "d": "300 bis 3000 GHz"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_063",
    "question": "Welchem Frequenzbereich entspricht die Abkürzung UHF?",
    "answers": {
      "a": "300 bis 3000 GHz",
      "b": "300 bis 3000 MHz",
      "c": "300 bis 3000 kHz",
      "d": "3 bis 30 kHz"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_064",
    "question": "Welchem Frequenzbereich entspricht die Abkürzung SHF?",
    "answers": {
      "a": "3 bis 30 GHz",
      "b": "30 bis 300 GHz",
      "c": "300 bis 3000 GHz",
      "d": "300 bis 3000 MHz"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_065",
    "question": "Wie wird der Frequenzbereich von 3 bis 30 MHz bezeichnet?",
    "answers": {
      "a": "MF",
      "b": "LF",
      "c": "HF",
      "d": "VHF"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_066",
    "question": "Wie wird der Frequenzbereich von 30 bis 300 MHz bezeichnet?",
    "answers": {
      "a": "LF",
      "b": "VHF",
      "c": "EHF",
      "d": "keine Bezeichnung"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_067",
    "question": "Wie wird der Frequenzbereich von 300 bis 3000 MHz bezeichnet?",
    "answers": {
      "a": "Dezimillimeterwellen",
      "b": "UHF 18",
      "c": "VHF",
      "d": "VLF"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_068",
    "question": "Wie wird der Frequenzbereich von 3 bis 30 GHz bezeichnet?",
    "answers": {
      "a": "VHF",
      "b": "UHF",
      "c": "SHF",
      "d": "EHF"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_069",
    "question": "Wie heisst die metrische Unterteilung für den Frequenzabschnitt 300 bis 3000 MHz?",
    "answers": {
      "a": "Dezimeter-Wellen",
      "b": "Zentimeter-Wellen",
      "c": "Millimeter-Wellen",
      "d": "Meter-Wellen"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_070",
    "question": "Wie wird der Frequenzbereich benannt, in dem die Frequenz 3560 kHz liegt?",
    "answers": {
      "a": "MF (Mittelwellen)",
      "b": "HF (Kurzwellen)",
      "c": "VHF (Ultrakurzwellen)",
      "d": "UHF"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_071",
    "question": "Wie wird der Frequenzbereich benannt, in dem die Frequenz 144.5 MHz liegt?",
    "answers": {
      "a": "MF (Mittelwellen)",
      "b": "HF (Kurzwellen)",
      "c": "VHF (Ultrakurzwellen)",
      "d": "UHF"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_072",
    "question": "Welcher Betriebsart entspricht die Bezeichnung A1A?",
    "answers": {
      "a": "Morsetelegrafie",
      "b": "Fernschreibtelegrafie",
      "c": "Faksimile",
      "d": "Fernwirken 19"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_073",
    "question": "Welcher Betriebsart entspricht die Bezeichnung A1B?",
    "answers": {
      "a": "Morsetelegrafie",
      "b": "Fernschreibtelegrafie",
      "c": "Faksimile",
      "d": "Fernwirken"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_074",
    "question": "Welcher Betriebsart entspricht die Bezeichnung J3E?",
    "answers": {
      "a": "Fernsehen (Video)",
      "b": "Fernsprechen (Telefonie)",
      "c": "Faksimile",
      "d": "Fernschreibtelegrafie"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_075",
    "question": "Welcher Betriebsart entspricht die Bezeichnung R3E?",
    "answers": {
      "a": "Fernsehen (Video)",
      "b": "Fernsprechen (Telefonie)",
      "c": "Faksimile",
      "d": "Fernschreibtelegrafie"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_076",
    "question": "Welcher Betriebsart entspricht die Bezeichnung F3E?",
    "answers": {
      "a": "Morsetelegrafie",
      "b": "Fernsprechen (Telefonie)",
      "c": "Faksimile",
      "d": "Fernsehen (Video)"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_077",
    "question": "Was heisst J3E?",
    "answers": {
      "a": "Telefonie, Zweiseitenband",
      "b": "Fernsehen (Video), Einseitenband, unterdrückter Träger, ein einziger Kanal, der analoge Information enthält",
      "c": "Faksimile, Einseitenband, unterdrückter Träger, ein einziger Kanal, der analoge Information enthält",
      "d": "Telefonie, Einseitenband, unterdrückter Träger, ein einziger Kanal, der analoge Information enthält 20"
    },
    "correct": "d"
  },
  {
    "id": "AF_AV_078",
    "question": "Wie wird eine Aussendung in Fernschreibtelegrafie bezeichnet, wenn deren Hauptträger amplitudenmoduliert ist und kein modulierender Hilfsträger verwendet wird?",
    "answers": {
      "a": "A1A",
      "b": "A1B",
      "c": "A1C",
      "d": "A1D"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_079",
    "question": "Wie wird eine Aussendung in Morsetelegrafie bezeichnet, wenn deren H auptträger frequenzmoduliert ist und kein modulierender Hilfsträger verwendet wird?",
    "answers": {
      "a": "F1A",
      "b": "F1B",
      "c": "F1C",
      "d": "F1D"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_080",
    "question": "Wie wird eine Aussendung in Fernschreibtelegrafie bezeichnet, wenn deren Hauptträger frequenzmoduliert ist und ein modulierender Hilfsträger verwendet wird?",
    "answers": {
      "a": "F2A",
      "b": "F2B",
      "c": "F2C",
      "d": "F2D"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_081",
    "question": "Wie wird eine Aussendung in Telefonie (Fernsprechen) mit einem einzigen Kanal mit analogen Informationen bezeichnet, wenn deren Hauptträger frequenzmoduliert ist?",
    "answers": {
      "a": "F3C",
      "b": "F3E",
      "c": "F3F",
      "d": "F3A"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_082",
    "question": "Was heisst 16KØF3E?",
    "answers": {
      "a": "Telefonie, Frequenzmodulation, Kanalabstand 16 kHz",
      "b": "Telefonie, Frequenzmodulation, Bandbreite 16 kHz",
      "c": "Telefonie, Frequenzmodulation, 16 Kilowatt Sendeleistung",
      "d": "Telefonie, Amplitudenmodulation, Kanalabstand 25 kHz 21"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_083",
    "question": "Was bedeutet QRM?",
    "answers": {
      "a": "Ich werde gestört",
      "b": "Ich werde nicht gestört",
      "c": "Ich werde durch atmosphärische Störungen beeinträchtigt",
      "d": "Ich bin mobil unterwegs"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_084",
    "question": "Was bedeutet QRN?",
    "answers": {
      "a": "Ich werde gestört",
      "b": "Ich werde nicht gestört",
      "c": "Ich werde durch atmosphärische Störungen beeinträchtigt",
      "d": "Ich bin nicht unterwegs"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_085",
    "question": "Was bedeutet QRO?",
    "answers": {
      "a": "Erhöhen Sie die Sendeleistung",
      "b": "Vermindern Sie die Sendeleistung",
      "c": "Ich werde an … vermitteln",
      "d": "Ich werde nicht an … vermitteln"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_086",
    "question": "Was bedeutet QRP?",
    "answers": {
      "a": "Erhöhen Sie die Sendeleistung",
      "b": "Vermindern Sie die Sendeleistung",
      "c": "Ich werde an … vermitteln",
      "d": "Ich werde nicht an … vermitteln"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_087",
    "question": "Was bedeutet QRT?",
    "answers": {
      "a": "Die genaue Uhrzeit ist …",
      "b": "Stellen Sie die Übermittlung ein",
      "c": "Ich bin bereit",
      "d": "Mein Standort ist …"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_088",
    "question": "Was bedeutet QRV?",
    "answers": {
      "a": "Ich bin nicht bereit",
      "b": "Senden Sie eine Reihe V 22",
      "c": "Ich bin bereit",
      "d": "Stellen Sie die Übermittlung ein"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_089",
    "question": "Was bedeutet QRX?",
    "answers": {
      "a": "Ich höre auf … (Frequenz)",
      "b": "Gehen Sie zum Senden auf … (Frequenz)",
      "c": "Sie werden gerufen von … (Rufzeichen)",
      "d": "Ich werde Sie um … Uhr wieder rufen"
    },
    "correct": "d"
  },
  {
    "id": "AF_AV_090",
    "question": "Was bedeutet QRZ?",
    "answers": {
      "a": "Geben Sie jedes Wort oder jede Gruppe zweimal",
      "b": "Ich bin bereit",
      "c": "Sie werden gerufen von … (Rufzeichen)",
      "d": "Gehen Sie zum Senden auf … (Frequenz)"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_091",
    "question": "Was bedeutet QSB?",
    "answers": {
      "a": "Ich werde an … vermitteln",
      "b": "Die Stärke Ihrer Zeichen schwankt",
      "c": "Übermitteln Sie auf „Single Side Band“",
      "d": "Ihr Geben ist mangelhaft"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_092",
    "question": "Was bedeutet QSL?",
    "answers": {
      "a": "Ich bin beschäftigt. Bitte nicht stören",
      "b": "Ich gebe Ihnen Empfangsbestätigung",
      "c": "Geben Sie langsamer",
      "d": "Geben Sie schneller"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_093",
    "question": "Was bedeutet QSO?",
    "answers": {
      "a": "Erhöhen Sie die Sendeleistung",
      "b": "Vermindern Sie die Sendeleistung",
      "c": "Ich gebe Ihnen Empfangsbestätigung",
      "d": "Ich kann mit … unmittelbar verkehren 23"
    },
    "correct": "d"
  },
  {
    "id": "AF_AV_094",
    "question": "Was bedeutet QSY?",
    "answers": {
      "a": "Sie sind als Nummer … an der Reihe, bitte warten",
      "b": "Senden Sie eine Reihe V",
      "c": "Gehen Sie zum Senden auf … (Frequenz)",
      "d": "Meine Station ist auf einer Segelyacht"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_095",
    "question": "Was bedeutet QTH?",
    "answers": {
      "a": "Ich wohne in …",
      "b": "Mein Standort ist …",
      "c": "Ihre Frequenz schwankt",
      "d": "Stellen Sie die Übermittlung ein"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_096",
    "question": "Wie lautet der Q-Code für „Ich werde gestört“?",
    "answers": {
      "a": "QRM",
      "b": "QSM",
      "c": "QSA",
      "d": "QRN"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_097",
    "question": "Wie lautet der Q-Code für „Ich werde durch atmosphärische Störungen beeinträchtigt“?",
    "answers": {
      "a": "QRM",
      "b": "QSM",
      "c": "QSA",
      "d": "QRN"
    },
    "correct": "d"
  },
  {
    "id": "AF_AV_098",
    "question": "Wie lautet der Q-Code für „Erhöhen Sie die Sendeleistung“?",
    "answers": {
      "a": "QRH",
      "b": "QRP",
      "c": "QRO",
      "d": "QRC"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_099",
    "question": "Wie lautet der Q-Code für „Vermindern Sie die Sendeleistung“?",
    "answers": {
      "a": "QRH",
      "b": "QRP 24",
      "c": "QRO",
      "d": "QRC"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_100",
    "question": "Wie lautet der Q-Code für „Stellen Sie die Übermittlung ein“?",
    "answers": {
      "a": "QRT",
      "b": "QRV",
      "c": "QRU",
      "d": "QRL"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_101",
    "question": "Wie lautet der Q-Code für „Ich bin bereit“?",
    "answers": {
      "a": "QRT",
      "b": "QRV",
      "c": "QRU",
      "d": "QRL"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_102",
    "question": "Wie lautet der Q-Code für „Ich werde Sie um 1500 Uhr wieder rufen“?",
    "answers": {
      "a": "QRA 1500",
      "b": "QRT 1500",
      "c": "QRX 1500",
      "d": "QRL 1500"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_103",
    "question": "Wie lautet der Q-Code für „Sie werden von HB9XYZ gerufen“?",
    "answers": {
      "a": "QRA HB9XYZ",
      "b": "QSO HB9XYZ",
      "c": "QRX HB9XYZ",
      "d": "QRZ HB9XYZ"
    },
    "correct": "d"
  },
  {
    "id": "AF_AV_104",
    "question": "Wie lautet der Q-Code für „Die Stärke Ihrer Zeichen schwankt“?",
    "answers": {
      "a": "QSP",
      "b": "QSB",
      "c": "QRB",
      "d": "QSD 25"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_105",
    "question": "Wie lautet der Q-Code für „Ich gebe Ihnen Empfangsbestätigung“?",
    "answers": {
      "a": "QRL",
      "b": "QSL",
      "c": "QRX",
      "d": "QTH"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_106",
    "question": "Wie lautet der Q-Code für „Ich kann mit … unmittelbar verkehren“?",
    "answers": {
      "a": "QRV",
      "b": "QSZ",
      "c": "QSO",
      "d": "QRO"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_107",
    "question": "Was bedeutet die Abkürzung „UR“?",
    "answers": {
      "a": "Der Standort der Station ist im Kanton Uri",
      "b": "Unstabile Radioverbindung",
      "c": "Ihr",
      "d": "Union of Radioamateurs"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_108",
    "question": "Was bedeutet die Abkürzung „RX“?",
    "answers": {
      "a": "Danke",
      "b": "Sender",
      "c": "Empfänger",
      "d": "Tonqualität 26"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_109",
    "question": "Was bedeutet die Abkürzung „RST“?",
    "answers": {
      "a": "Readability, Signal strength, Tone quality",
      "b": "Report of silent traffic",
      "c": "Receiver seems to be in trouble",
      "d": "Received several transmissions"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_110",
    "question": "Was bedeutet die Abkürzung „TX“?",
    "answers": {
      "a": "Danke",
      "b": "Sender",
      "c": "Empfänger",
      "d": "Tonqualität"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_111",
    "question": "Wie wird das Wort November buchstabiert?",
    "answers": {
      "a": "Niklaus Otto Veronika Emil Michael Bern Emil Roger",
      "b": "November Oscar Victor Echo Mike Bravo Echo Romeo",
      "c": "November Oscar Venice Echo Miami Bristol Echo Roma",
      "d": "November Olympia Victor Ever Mike Berne Ever Romeo"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_112",
    "question": "Wie wird das Wort Foxtrott buchstabiert?",
    "answers": {
      "a": "Foxtrott Olympia Xaver Theodor Roma Olympia Theodor Theodor",
      "b": "Foxtrott Oscar Xylophon Trudi Romeo Oscar Trudi Trudi",
      "c": "Foxtrott Oscar X-Ray Tango Romeo Oscar Tango Tango",
      "d": "Foxtrott Olma X-Ray Tango Romeo Olma Tango Tango"
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_113",
    "question": "Wie wird das Wort Whiskey buchstabiert?",
    "answers": {
      "a": "Whiskey Help Ida Sierra Karl Echo Yankee",
      "b": "Whiskey Hotel Iris Sophie Karl Emil Yankee",
      "c": "Whiskey Hans Ida Sophie Karl Echo Yvonne",
      "d": "Whiskey Hotel India Sierra Kilo Echo Yankee"
    },
    "correct": "d"
  },
  {
    "id": "AF_AV_114",
    "question": "Wie wird das Wort Charlie buchstabiert?",
    "answers": {
      "a": "Charlie Hotel Anna Roger Lima Ida Echo",
      "b": "Charlie Hotel Alpha Romeo Lima India Echo 27",
      "c": "Charlie Hotel Annapolis Roger Leopold Ida Emil",
      "d": "Charlie Hans Anna Rudolf Leopold India Emil 28"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_115",
    "question": "Wie wird die Gruppe OLTEN buchstabiert?",
    "answers": {
      "a": "October, Lima, Tango, Echo, November",
      "b": "Oscar, Lima, Tango, Echo, November",
      "c": "Oscar, Lima, Tanga, Emil, November",
      "d": "Oscar, London, Tango, Echo, Nova"
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_116",
    "question": "Wie wird die Gruppe HLCEP buchstabiert?",
    "answers": {
      "a": "Hotel, Lima, Charlie, Echo, Papa",
      "b": "Hypolit, Lima, Carlo, Echo, Papa",
      "c": "Hypolit, Lima, Charlie, Echo, Papa",
      "d": "Hotel, Lima, Charlie, Emil, Papa"
    },
    "correct": "a"
  },
  {
    "id": "AF_AV_117",
    "question": "Worauf muss ein Funkamateur achten, wenn er ein Funkgerät aus dem Ausland direkt importiert ohne die Inanspruchnahme eines Händlers mit Firmensitz in der Schweiz?",
    "answers": {
      "a": "Der Funkamateur ist frei und darf grundsätzlich jedes Funkgerät frei importieren, wei l er eine Amateurfunkprüfung abgelegt hat und über spezielle technische Kenntnisse verfügt.",
      "b": "Der Funkamateur muss nichts Spezielles beachten, weil ja in der Schweiz grundsätzlich durch das Gesetz die Handels- und Gewerbefreiheit garantiert ist. Er m uss lediglich anfallende Zollgebühren beim Import sowie die Mehrwertsteuer bezahlen.",
      "c": "Wenn der Funkamateur ein Gerät aus dem Ausland direkt importiert, gilt er recht lich als Importeur und ist somit auch für die Einhaltung der Vorschriften über die Konform ität der importierten Produkte verantwortlich. Bei Nichteinhaltung dieser kann der Impor teur (in diesem Fall der Funkamateur) allenfalls durch das BAKOM wegen Verstosses gegen das Fernmeldegesetz rechtlich belangt werden.",
      "d": "Nach dem Import darf ein Funkamateur auch in der Schweiz ein nichtkonformes Funkgerät grundsätzlich in Betrieb nehmen, weil Funkamateure grundsätzlich sämtliche Funkgeräte ohne Typenprüfung betreiben dürfen."
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_118",
    "question": "Was stellt aus rechtlicher Sicht für einen Funkamateur einen Unterschied dar zwischen Kauf von Funkgeräten bei einem offiziellen Händler mit Firmensitz in der Schweiz un d einem Direktimport (z. B. Direktbestellung aus Fernost im Internet)?",
    "answers": {
      "a": "Es gibt grundsätzlich keinen Unterschied. Es gilt die weltweite Handels- u nd Gewerbefreiheit für Schweizer.",
      "b": "Sollte das Funkgerät technisch nicht konform sein und bei einer Stichprobe durch das BAKOM die Geräteprüfung nicht bestehen, so haftet grundsätzlich immer der Importeur. Somit ist im ersten Fall der Händler mit Firmensitz in der Schweiz rechtlich verantwortlich. Im zweiten Fall der Funkamateur, welcher mit der Direktbestellung im Int ernet bei der Firma in Fernost rechtlich als Importeur gilt.",
      "c": "Haftbar ist einzig und allein immer der Hersteller des Funkgerätes. 29",
      "d": "Sollte eine offizielle Firma in der Schweiz andere Geräte vom gleichen Her steller bereits anbieten, so darf ich das Gerät problemlos auch selbst importieren und bei einer allfälligen Beanstandung durch das BAKOM wäre dann der offizielle Schweizer Händler verantwortlich und nicht ich als Funkamateur."
    },
    "correct": "b"
  },
  {
    "id": "AF_AV_119",
    "question": "Darf ein Funkamateur mit einer Amateurfunkzulassung HB9 eine Funkanlage modifizieren und danach betreiben, welche auf der Liste der nicht konform en Geräte des BAKOM aufgeführt ist?",
    "answers": {
      "a": "Ja, denn er hat die nötigen Kenntnisse, weil er Inhaber eines entsprechenden Fähigkeitszeugnisses für Funkamateure ist.",
      "b": "Ja, diese Liste betrifft lizenzierte Funkamateure nicht.",
      "c": "Nein, er ist den gleichen Regeln unterstellt wie auch Nicht-Funkamateure bzw. Personen ohne Funklizenz.",
      "d": "Ja, aber er darf nur maximal drei Geräte modifizieren."
    },
    "correct": "c"
  },
  {
    "id": "AF_AV_120",
    "question": "Darf ein Funkamateur mit einer Amateurfunkzulassung HB9 eine selbst gebaute Sendeanlage an einen Funkamateur mit einer Einsteigerlizenz (HB3) weiterverkaufen",
    "answers": {
      "a": "Ja, unter der Bedingung, dass die für die Einsteigerlizenz (HB3) vorgesehenen Frequenzbereiche gesperrt sind.",
      "b": "Nein, ein Funkamateur mit einer Einsteigerlizenz (HB3) darf nur im Handel erhältliche, konforme Sendeanlagen benutzen.",
      "c": "Ja, unter der Bedingung, dass sich der verkaufende Funkamateur (HB9) vergewissert, dass der Käufer (HB3) einen Fähigkeitsausweis besitzt.",
      "d": "Ja, sämtliche Funkamateure aller Lizenzklassen dürfen alle Geräte selbst bauen und modifizieren."
    },
    "correct": "b"
  }
];
globalThis.HB3_QUESTIONS = questions;
globalThis.questions = questions;
console.log("data.js geladen:", questions.length, "Fragen");
