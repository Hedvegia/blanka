import React, {Component} from 'react'
import styled from 'styled-components'
import {Sidebar} from '../Components/Sidebar';
import first from '../assets/first.jpg'
import second from '../assets/second.png'
import third from '../assets/third.png'
import forth from '../assets/forth.png'
import fifth from '../assets/fifth.png'
import sixth from '../assets/6.png'
import seventh from '../assets/7.png'
import eighth from '../assets/8.png'
import nineth from '../assets/9.png'
import tenth from '../assets/10.png'
import eleventh from '../assets/11.png'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
`

const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  margin-bottom: 12em;
  width:  70%;
  text-align: justify;
  div {
    color: rgba(0, 0, 0, 0.8);
    letter-spacing: 1px;
    margin-bottom: 1em;
  }
  ul {
    li {
      color: rgba(0, 0, 0, 0.8);
      letter-spacing: 1px;
    }
  }
`

export class Essay extends Component {
    render() {
        return (
            <Container id="essay">
                <Sidebar move={(id) => this.props.moveOnPage(id)}/>
                <TextContainer>
                    <Text id="text">
                        <h2 id='lorem0'>Bevezetés</h2>
                        <div>
                            Miskolc 155 000 fős lakosságával Magyarország negyedik legnagyobb városa. A magas
                            népességszám fejlett közlekedési hálózatot igényel, ennek megfelelően az elmúlt években
                            elkezdődött a település közlekedés infrastruktúrájának fejlesztése, így a
                            kerékpárhálózat
                            kiépítése is. A kerékpározás napjainkban népszerű közlekedési eszköz, Magyarországon már
                            több helyen elérhetőek a kerékpáros közösségi közlekedési rendszerek, többek között
                            Budapest, Debrecen, Szeged, Pécs, Győr, Esztergom, Hévíz, Kaposvár, és Nagykanizsa is
                            rendelkezik működő közbringarendszerrel, egyedül az Észak-magyarországi régióban nincs
                            lehetőség erre. A kerékpározás népszerűsítése a közlekedés környezeti terhelésének
                            csökkentése és az élhetőbb Miskolc egyik alapfeltétele lehet, dolgozatomban ezért
                            foglalkozom a város kerékpáros infrastruktúrájával is.
                        </div>
                        <div>
                            A rendszerváltás óta hanyatló város megítélése országos szinten romlik, gyakran
                            megfeledkezünk az értékeiről. Így a térképet aszerint készítettem, hogy bemutassam a
                            település látványosságait, végig vezessem az olvasót a hegyek között húzódó város ˝négy
                            kapuján˝ át.
                        </div>
                        <div>
                            Munkámban kitérek a kerékpáros közlekedéssel foglalkozó statisztikai adatok elemzésére
                            az
                            Európai Unióban és Magyarországon készült felmérések alapján. Fontosnak tartom, hogy
                            információt adjunk a kerékpáros szokásainkról, ezzel segítve a kerékpáros közlekedést
                            vonzóbbá tenni, és rámutatni a fejlesztendő területekre.
                        </div>
                        <div>
                            A dolgozatban részletesen bemutatom a QGIS térinformatikai rendszerben készült térkép
                            szerkesztésének folyamatát, rétegeinek létrehozását és megjelenítését, és a közben
                            felmerülő
                            problémákat.
                        </div>
                        <h2 id='lorem1'>Miskolc, a nyitott kapuk városa</h2>
                        <div>
                            Miskolc a Bükkalján, a Bükk hegység keleti lábánál, a Szinva-patak és a Hejő völgyében
                            terül
                            el, határában folyik a Sajó, középpontjában az Avas hegy áll, különböző természeti és
                            gazdasági tájegységek találkozásánál, fontos kereskedőutak mentén épült.
                        </div>
                        <div>
                            Miskolc a Bükkalján, a Bükk hegység keleti lábánál, a Szinva-patak és a Hejő völgyében
                            terül
                            el, határában folyik a Sajó, középpontjában az Avas hegy áll, különböző természeti és
                            gazdasági tájegységek találkozásánál, fontos kereskedőutak mentén épült.
                            Miskolc Európa egyik legrégebben lakott városa, Herman Ottó -az utolsó magyar
                            polihisztor-
                            kutatásainak köszönhetően bizonyítható, hogy már a jégkorszakban is éltek emberek ezen a
                            területen. Miskolc belvárosában szakócák, azaz paleolitkori pattintott kőeszközök, míg a
                            Bükkben ősemberi csontleletek is tanúskodnak a terület 70 000 éves múltjáról (Dallos,
                            1982).
                            Nagy Lajos király uralkodásának idején, 1342-től indult el a város fejlődése. A
                            Diósgyőri
                            vár is a XIV. században vált királyi pompájú várrá, az elkövetkező uralkodóknak is
                            kedvelt
                            tartózkodási helye lett e terület.
                        </div>
                        <div>
                            Minden évszázad hagyott nyomot Miskolc történetében, műemlékeiben, ám sok balsors is
                            érte a
                            várost. Többek között az 1843-as tűzvész, amely felégette az épületeket, majd 1878-ban
                            árvíz
                            pusztította, s döntötte romba a települést. A jellegzetes épületek, zöld területek
                            ritkításában a II. Világháborút követő nehézipari fellendülés is közrejátszott, a
                            megnövekedő népességszám és az egyoldalú fejlesztés vonzata a városkép átalakulása volt,
                            így
                            mára jellegtelen panelházak uralják a település nagy részét. (Arnót et al., 2000).
                            Annak érdekében, hogy Miskolc az ország legnagyobb városai közé kerüljön Diósgyőrt
                            1945-ben
                            Miskolchoz csatolták Hejőcsabával együtt, majd ezt több településegyesítés is követte,
                            mai
                            kiterjedését 1981-ben nyerte el Bükkszentlászló csatlakozásával (Arnót et al., 2000).
                        </div>
                        <div>
                            Annak érdekében, hogy Miskolc az ország legnagyobb városai közé kerüljön Diósgyőrt
                            1945-ben
                            Miskolchoz csatolták Hejőcsabával együtt, majd ezt több településegyesítés is követte,
                            mai
                            kiterjedését 1981-ben nyerte el Bükkszentlászló csatlakozásával (Arnót et al., 2000).
                        </div>
                        <div>
                            Miskolc a II. világháborúig hagyományos kereskedő, kisiparos város volt, már a
                            középkorban
                            kiépült jelentősebb úthálózata. Vámépületek álltak a négy égtáj felől érkező főutak
                            mentén,
                            ezek a város igazgatásában játszottak fontos szerepet, többek között itt szedték be az
                            áruvámot, olykor katonai őrhelyként is szolgáltak. Ezeken a szigorúan őrzött kapukon át
                            lehetett bejutni Miskolcra. A kapuk között sánc húzódott, ez jelentette a város
                            kerítését.
                            Első említésük 1562-ből maradt fenn, a XVI. és a XVIII. század között alakulhattak meg.
                            A
                            vámházak a XX. század közepéig léteztek. A város határán álló négy bejáró a Szentpéteri
                            kapu, Győri kapu, Csabai kapu és a Zsolcai kapu voltak (Csanálossi, 2003).
                        </div>
                        <div>
                            Két kapu a város belső utcáinak határán állt -Fábián kapu, Meggyesaljai kapu- ezek
                            belterületi kapuk voltak, melyek a külső részek felé vezettek (Csanálossi, 2003).
                        </div>
                        <div>
                            Az egyetlen ma is meglévő kapu a Sötét kapu, amely a Szinva határvonaláig tartó Derék
                            piacot
                            választotta el a várostól (Zsadányi,1955). A lényegében a városból a városba vezető
                            boltíves
                            átjárót azonban az évek alatt annyiszor építették újra, hogy a helyiek elmondása alapján
                            a
                            kapuból csak a lyuk a régi.
                        </div>
                        <div>
                            A Fábián- és Meggyesalja kapu lassan feledésbe merül, a külső kapuk, azaz a
                            Szentpéteri-, a
                            Győri-, a Csabai- és a Zsolcai kapu pedig már csak elméleti határt képeznek, és csupán
                            nevüket őrzi egy-egy városrész. Északról a Szentpéteri kapu, keletről a Zsolcai kapu,
                            délről
                            a Csabai kapu, nyugatról a Győri kapu idézi fel az egykori kapurendszer emlékét.
                        </div>
                        <img src={first} alt=''/>
                        <div>
                            <strong>1 . ábra: </strong>Miskolc térképe a 16–17. században. A piros négyszögek a
                            kapukat,
                            a zöld vonalak a
                            városon átvezető országutakat jelölik.
                            Forrás: [x]
                        </div>
                        <div>
                            A Nagy-Miskolc koncepció gondolata a XIX-XX. század fordulóján fogalmazódott meg. A
                            mindenkori városvezetés programja a városrendezés volt, a környező települések:
                            Hejőcsaba,
                            Diósgyőr, Lillafüred, Ómassa, Pereces, Hámor, Szirma, Görömböly, Tapolca egyesítésével
                            Miskolc város területének növelése. Ez a város külső képének jelentős átalakulásával
                            járt,
                            ekkor, az 1900-as évek kezdetén épültek a ma is meglévő épületek számottevő része,
                            melyeket
                            a dolgozatom későbbi részeiben átfogóbban ismertetek. Az első világháború, a
                            Tanácsköztársaság, a trianoni békeszerződés és a második világháború a település
                            fejlődését
                            lassították, de nem befolyásolták nagymértékben, sőt paradox módon egyes tragikus
                            események
                            Miskolc életében pozitív változást hoztak. A kereskedővárosból hamarosan iparváros lett,
                            1950 és 1990 között élte a város virágkorát, majd a rendszerváltás után Miskolc
                            hanyatlásnak
                            indult, és mára a legnagyobb kihívás az elvándorlás megakadályozása (Révai Új Lexikona
                            XIV.
                            kötet).
                        </div>
                        <h2 id='lorem2'>Statisztikai adatok</h2>
                        <h3>Európa szinten kerékpáros nemzet</h3>
                        <div>
                            Az alábbi ábra azt mutatja, hogy az Eurobarométer kérdésére válaszolók aránya hogyan
                            alakult
                            országonként azok között, akik a kerékpárt választják a mindennapi közlekedési
                            eszközként.
                        </div>
                        <img src={second} alt=''/>
                        <div>
                            <strong>2. ábra: </strong>Elsősorban kerékpárral közlekedők aránya az Európai Unió
                            tagállamai között.
                            Háttértérkép: Dr. Irás Krisztina; Forrás: [x] alapján saját szerkesztés
                        </div>
                        <div>
                            A relatív-adatok a kerékpárt használók és a vonatkozási terület népességszámának
                            hányadosából jöttek létre. A vonatkozási országok az Európai Unióhoz 2014-ig
                            csatlakozott
                            tagállamokat öleli fel. Az ábra jól mutatja, hogy Magyarország a többi országhoz képest
                            az
                            élen áll, az Eurobarometer korábbi 2007-es és 2010-es felmérése alapján is ebben a
                            pozícióban foglal helyet, ebből adódóan jogosan nevezhetjük magunkat kerékpáros
                            nemzetnek.
                        </div>
                        <img src={third} alt=''/>
                        <div>
                            <strong>3. ábra: </strong>A közlekedési módszerek eloszlása az Európai Unió tagállamai
                            között és Magyarországon. Forrás: [x] alapján saját szerkesztés
                        </div>
                        <div>
                            A 3. ábra alapján az is megfigyelhető, hogy amíg Magyarországon az átlagosnál többen
                            választják a biciklizést, addig a gépjármű használata az utolsó helyen áll a többi
                            megkérdezett országhoz képest. A lakosság 33%-a autóval közlekedik, 28%-a a
                            tömegközlekedést
                            választja, amíg a megkérdezettek között 22% a kerékpározás mellett dönt, a fennmaradó
                            17%
                            egyéb közlekedési módszert alkalmaz. Ez az arány az Európai Unió 28 országát
                            összeségében
                            tekintve 54% autó, 19% tömegközlekedés, 8% kerékpár és 19% egyéb jármű használatára
                            oszlik.
                        </div>
                        <h3>Magyarország kerékpáros szokásai</h3>
                        <div>
                            A Magyar Kerékpárosklub és a Medián Közvélemény- és Piackutató Intézet 2018 júliusában
                            végzett egy hiánypótló kerékpáros kutatást, az Innovációs és Technológiai Minisztérium
                            támogatásával. 3000 fő vett részt a Magyarország felnőtt lakosságára reprezentatív,
                            online
                            mintavétellel készült statisztikai felmérésben.
                        </div>
                        <div>
                            A kérdések lehatárolják a kerékpáros szokásokat, hogy mennyien használnak ma
                            Magyarországon
                            biciklit és felmérik, hogy a kerékpárosok min változtatnának a biztonságosabb közlekedés
                            érdekében. Szakdolgozatomban az alábbi kérdésekkel foglalkoznék részletesebben:
                        </div>
                        <ul>
                            <li>Milyen gyakran használ kerékpárt?</li>
                            <li>Elsősorban kerékpárral közlekedők aránya régiónként</li>
                            <li>Elégedettség (1-5-ig)</li>
                            <li>Kerékpárral rendelkezők aránya</li>
                        </ul>
                        <div>
                            Milyen gyakran használ kerékpárt? Az eredményekből kiderül, hogy a válaszadók 70%-a
                            szokott
                            kerékpározni valamilyen gyakorisággal. Naponta biciklizik a kérdőívben résztvevők 17%-a,
                            27%-ban viszont csak ritkábban veszik elő a kerékpárt, mint hétvégenként.
                        </div>
                        <div>
                            <strong>1. táblázat: </strong>A kerékpárhasználat aránya Magyarországon különböző
                            gyakorisággal mérve. Forrás: [x] alapján saját szerkesztés
                        </div>
                        <table>
                            <tbody>
                            <tr>
                                <td>Naponta</td>
                                <td>17%</td>
                            </tr>
                            <tr>
                                <td>Hetente többször</td>
                                <td>12%</td>
                            </tr>
                            <tr>
                                <td>Hetente egyszer-kétszer</td>
                                <td>9%</td>
                            </tr>
                            <tr>
                                <td>Csak hétvégén</td>
                                <td>5%</td>
                            </tr>
                            <tr>
                                <td>Ritkábban</td>
                                <td>27%</td>
                            </tr>
                            <tr>
                                <td>Soha</td>
                                <td>30%</td>
                            </tr>
                            </tbody>
                        </table>
                        <div>
                            A felmérés elsősorban kerékpárral közlekedők aránya régiónként című kérdéséből arra
                            lehet
                            következtetni, hogy az alföldi tájakon többen használják a kerékpárt, mint a nagyobb
                            szintkülönbségekkel bíró területeken. A Dél-Alföldön és az Észak-Alföldön 30% feletti az
                            érték, amíg a többi régióban 20% alá csökken ez az arány. Miskolc régiójában,
                            Észak-Magyarországon 14%-ban választják a biciklis közlekedést elsőként. A többi régiót
                            tekintve ez az érték átlag alatti, viszont nem elhanyagolható az a tény sem, hogy az
                            Észak-magyarországi régión kívül az összes többi területen legalább egy város
                            rendelkezik
                            kerékpáros közösségi közlekedési rendszerrel. Megkeresésemre Riesz József és Kiss Bálint
                            -a
                            Cycleme Bérkerékpár Rendszerek Kft. projektvezetője- készséggel válaszoltak, levelükből
                            kiderült, hogy Miskolcon 2015-ben a Bagolyvárnál építettek ki bérkerékpár rendszert
                            kirándulási céllal, azonban ez egy demo változat 2 állomással, amely jelenleg nem
                            üzemel. A
                            városvezetés távlati tervei között szerepel a kölcsönzős hálózat kiépítése.
                        </div>
                        <div>
                            Az elégedettség tekintetében 1 és 5 közötti skálán a legkisebb értékelést a burkolat
                            minősége kapta, ez 2,6 pontos eredményt ért el. Az emberek a kerékpártárolási
                            lehetőségekkel
                            a legelégedettebbek, azonban ez az érték is csak 3,5 pontot kapott az elérhető 5-ből.
                        </div>
                        <img src={forth} alt=''/>
                        <div>
                            <strong>4. ábra: </strong>Elégedettség (1-5-ig) Forrás: [x] alapján saját szerkesztés
                        </div>
                        <div>
                            A Medián által készített felmérésben a válaszadók 67%-a rendelkezik saját kerékpárral,
                            azonban kiemelendő, hogy a felnőtt lakosság 84%-a hozzáfér működőképes biciklihez.
                            Többek
                            között ez is lehet az egyik oka a kerékpáros fejlesztéseket támogatók magas arányának.
                        </div>
                        <div>
                            Ennél a pontnál kiemelném Glász Attila a Városon belüli közlekedési és kerékpározási
                            szokások kérdőíves felmérésének eredményeit, a tanulmány egy online kérdőívre beérkezett
                            több, mint ezer válasz eredményét dolgozza fel, mely elsősorban a 19-59 éves
                            korosztályra
                            jellemző adatokat tükröz.
                        </div>
                        <img src={fifth} alt=' '/>
                        <div>
                            <strong>5. ábra: </strong>Kerékpár, személygépjármű és/vagy legalább „B” kategóriájú
                            gépjárművezetői engedély meglétének gyakorisága a válaszadók között. (fő) Forrás: [x]
                            Glász
                            Attila szerkesztése
                        </div>
                        <div>
                            Ennek a tanulmánynak az eredménye is alátámasztja, hogy az emberek többsége rendelkezik
                            kerékpárral. A kérdőívre válaszolók 86%-a, azaz 927 ember háztartásában található
                            bicikli,
                            közülük 601 résztvevőnek van jogosítványa és személygépjárműve is.
                        </div>
                        <div>
                            A kérdőív 19 kérdésből 4 foglalkozik konkrétan a kerékpározási szokásokkal. Ezt az
                            alfejezetet összesen 746-an töltötték ki, azok, akik saját bevallásuk szerint szoktak a
                            városon belül kerékpározni. A kérdésekből előszőr is választ kapunk a használati
                            gyakoriságra az időjárás függvényében. A válaszadók többsége télen nem használja a
                            kerékpárt, azonban a többi évszakban többségben vannak azok, akik a mindennapokban, vagy
                            heti több alkalommal is bicikliznek. Ehhez kapcsolható a felmérés következő eleme, mely
                            azt
                            vizsgálja, hogy bizonyos tényezők milyen szinten befolyásolják a kerékpárt, mint utazási
                            eszközt választók körét. Az előzményekből következtethetőként, nem meglepő módon az élen
                            az
                            időjárás végzett, de az utazási idő is befolyásolja a biciklis közlekedési mód
                            választását.
                            Harmadik helyen a kerékpáros infrastruktúra megléte fontos szempont.
                        </div>
                        <h2 id='lorem3'>Kerékpáros infrastruktúra Miskolcon</h2>
                        <div>
                            Miskolcon a kerékpározásnak hagyománya van, még a II. Világháború után is a biciklizés
                            volt
                            a jellemző közlekedési eszköz. Azonban a közösségi közlekedés fejlődésével, a település
                            képének átalakulásával, az autóra optimalizálódott közlekedéstervezés következtében
                            szinte
                            teljesen eltűnt a kerékpár, mint meghatározó módválasztási eszköz. Az 1990-es évek
                            elején
                            már nem volt kerékpáros létesítménye a településnek (MVK Zrt., 2013). A kerékpáros
                            közlekedés az infrastruktúra hiányosságai miatt nem vonzó Miskolcon, az utóbbi időkben
                            tettek lépéseket a kerékpárhálózat többé-kevésbé sikeres kiépítésére. Jelenleg is zajlik
                            a
                            kerékpáros infrastruktúra fejlesztése, a projekt 10 kilométernyi részben felfestéssel,
                            részben különálló kerékpárút építésével fog elkészülni, amely az ipari területet fogja
                            összekötni a belvárossal. A város tervei alapján a környezetbarát közlekedés és a zöld
                            Miskolc érdekében 2021-re minden városrész elérhető lesz biciklivel.
                        </div>
                        <div>
                            <strong>2. táblázat: </strong>Miskolc nyomvonalas kerékpárforgalmi létesítményeinek
                            átadási
                            év, helyszín, típus és megítélés szerinti listája
                            Forrás: [x], [y] és tapasztalat alapján saját szerkesztés
                        </div>
                        <div style={{overflowX: 'scroll'}}>
                            <table style={{width: '90%'}}>
                                <thead>
                                <tr>
                                    <th>Év</th>
                                    <th>Útvonal</th>
                                    <th>Típus</th>
                                    <th>Megítélés</th>
                                </tr>
                                </thead>
                                <tbody>

                                <tr>
                                    <td>1996-2001</td>
                                    <td>Tapolcai elágazás -Gyermekváros</td>
                                    <td>kerékpárút</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>2007</td>
                                    <td>Szinva terasz - Erzsébet tér</td>
                                    <td>kerékpárút</td>
                                    <td>műszaki paramértereit tekintve nem nevezhető kerékpárútnak</td>
                                </tr>
                                <tr>
                                    <td>2007</td>
                                    <td>Észak-Déli kerékpárút I. üteme (Csabai kapu - Ifjúság u. - Katalin u. -
                                        Bajcsy-Zsilinszky u)
                                    </td>
                                    <td>részben elválasztás nélküli, részben osztóvonallal elválasztott kétirányú,
                                        egyoldali
                                        gyalog- és kerékpárút
                                    </td>
                                    <td>baleseti gócpont</td>
                                </tr>
                                <tr>
                                    <td>2008-2009</td>
                                    <td>Metro áruház - Keleti Auchan</td>
                                    <td>kétirányú elválasztás nélküli gyalog- és kerékpárút</td>
                                    <td>a kitáblázáson kívül a teljes forgalomtechnikai kialakítás hiányzik</td>
                                </tr>
                                <tr>
                                    <td>2011-2012</td>
                                    <td>Tiszai pályaudvar - Vár utca</td>
                                    <td>többségében egyoldali, kétirányú kerékpárút és/vagy gyalog- és kerékpárút</td>
                                    <td>Nem korszerű és nem biztonságos, de 12 km hosszával a város legnagyobb
                                        kerékpárforgalmi nyomvonal
                                    </td>
                                </tr>
                                <tr>
                                    <td>2014</td>
                                    <td>Szirma – Martintelep</td>
                                    <td>elválasztás nélküli egyoldali kétirányú gyalog- és kerékpárút</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>2018-</td>
                                    <td>Katalin utca - Bosch</td>
                                    <td>kivitelezés alatt áll, többségében a járda átalakításával gyalog- és
                                        kerékpárút
                                    </td>
                                    <td>a szakasz jelenleg kivitelezés alatt áll</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            A miskolci kerékpárhálózat hossza csaknem 18 kilométer, körülbelül 24 helyszínen van
                            kihelyezett „P” alakú kerékpártámasz, mégsem biztosított a kerékpárok megfelelő
                            elhelyezése. A közlekedési csomópontoknál, átszállási helyeken a fedett tárolók hiánya
                            szembeötlő, de sok helyen kerékpártámasz sincs kihelyezve. A 2. táblázatban feltüntetett
                            kerékpárutaknak néhol felfestések, kerékpáros nyomvonalak vetnek véget, hiányoznak az
                            integrált, egymáshoz jól kapcsolódó szakaszok. A 2. táblázat adataiból is látható, hogy
                            túlnyomó többségben van a gyalogos-kerékpáros zóna, a kialakított kerékpárutakon
                            többnyire
                            ezzel a típussal találkozunk. Gyakori eset, hogy egyirányú forgalmú úton lehetővé teszik
                            a
                            kétirányú kerékpáros közlekedést, 2015-ig 34 utca vált mindkét irányból
                            kerékpározhatóvá,
                            szemléltetésül ilyen a Huba utca és a Görögszőlő utca is. 2012-től az autóbusz sávokon
                            is
                            közlekedhetünk biciklivel, például a Szemere utca az Uitz utca és a Mindszent tér
                            között,
                            vagy a Petőfi utcában. Néhol nyitott-, vagy zárt kerékpársávokat alakítottak ki az évek
                            során,
                            ilyen szeparációval találkozhatunk többek között a Hadirokkantak utcájában és az Andor
                            utcában is. Egy-két esetben a kijelölt útvonal zsákutcába torkollik, azonban néhány
                            ilyen
                            útvonalon van lehetőség a kerékpáros tovább haladásra. (Miskolc ITS., 2013)
                        </div>
                        <div>
                            Összeségében sok a hibás felfestés, kényelmetlenek a hirtelen végetérő szakaszok, néhol
                            követhetetlen a járás. A gyalogosokkal túl sok az érintkezési felület, gyakran zavaró
                            tényező,
                            hogy a kerékpárutat a járdák kárára építették, melynek hiányában az emberek a kerékpáros
                            létesítményeket használják közlekedési felületként. Jelentős számú hibájuk van,
                            korszerűtlenek és gyakori, hogy a felfestés a repedezett, kerékpárt nem kímélő
                            burkolatra
                            került rá, vagy, hogy a kijelölt utak szilárd burkolat nélküli utcákba torkollanak. A
                            2019-re
                            várt új kerékpárhálózat a Bosch és a Déli Ipari Park irányába főleg nyomvonalas
                            megoldásúak,
                            vagy a járda kettéosztásával járnak. Ottjártamkor kiépített, biztonságos kerékpárutat
                            nem
                            találtam.
                        </div>
                        <div>
                            A biciklis közlekedés pozitív előnye Miskolcon, hogy a villamoson díj fizetése ellenében
                            szállítható kerékpár, továbbá a Lillafüredi Állami Erdei Vasút szerelvényein is
                            engedélyezett
                            a biciklivel való utazás (MVK Zrt.) . Előny a sportolóknak, hogy különböző szintű
                            útvonalakat járhatnak be viszonylag jó minőségű úthálózaton, a kerékpáros turisták
                            könnyedén elérhetik a város nevezetességeit a kialakított nyomvonalon. A folyamatos
                            fejlődés
                            és bővülés is pozitívan hat a város közlekedési kultúrájára, az évek során a
                            kerékpáros klubbal való együttműködés is egyre jobb. A Kerékpáros Miskolc Egyesület
                            minden
                            évben végez forgalomszámlálást 2011-től, az eredmények itt is évről évre javuló
                            tendenciát mutatnak, egyre több számban ülnek az emberek kerékpárra Miskolcon. A
                            következő
                            ábra a 2018-ban mért forgalomszámlálást összegezi. A 34 nap alatt 24976
                            közlekedőt számolt össze az Eco-Counter forgalomszámláló berendezése, ebből 16008-an
                            kerékpárral haladtak át az eszközön, ami jól mutatja, hogy a gyalog- és kerékpárút
                            népszerűbb kerékpárral, mint gyalogosan. (Kunhalmi, 2019) (6. ábra)
                        </div>
                        <img src={sixth} alt=' '/>
                        <div>
                            <strong>6. ábra: </strong>2018. június 21-től július 24-ig a Petneházy bérházak előtt
                            mért
                            kerékpáros és gyalogos forgalomszámlálás összeeredménye.
                            Forrás: (Kerékpáros Miskolc Egyesület) és az Eco-Counter mérése és grafikonja
                        </div>
                        <h2 id='lorem4'>A terepi felmérés</h2>
                        <div>
                            A felmérés első szakaszát egy Garmin GPSmap 60Cx típusú gps-szel kezdtem 2018.
                            novemberében,
                            a második, harmadik és negyedik etapot tavasszal, 2019. március végén egy
                            Garmin GPSmap 62-es gps-szel végeztem el. A rögzítés módja idő szerint ment, az
                            intervallum
                            2 másodpercre volt állítva. A helyformátum EOV, míg a térképadat WGS 84 volt,
                            hogy a készülő térképemre tudjam szerkeszteni, amely vetületi rendszerének szintén a
                            WGS84
                            ellipszoid az alapfelülete. Az útvonaltervezésben figyelemmel voltam a
                            kerékpárhálózatra, továbbá szem előtt tartottam Miskolc város bemutatását, nevezetes
                            helyeinek, eldugott csendes zugainak, panorámás útjainak megismertetését, az egyes
                            szakaszok sportolási lehetőségként való ajánlását különböző nehézségi szintekkel a
                            szintkülönbség növekedésével, továbbá népszerűsíteni a kerékpárt, mint közlekedési
                            eszközt.
                            A felmérés során két különböző típusú kerékpárt használtam: egy több sebességes női
                            városi
                            kerékpárt és egy single speed/fixi biciklit.
                        </div>
                        <h3>Csabai kapu</h3>
                        <div>
                            Megtett útvonal: Soltész Nagy Kálmán utca – Avas városrész – Avasi kilátó – Avasi
                            Pincesor –
                            Kisavas – Csabai kapu – Miskolctapolcai út – Miskolctapolca – Bacsinszky András utca –
                            Görömböly – Hejőcsaba – Csabavezér út – Pesti út – Bogáncs utca – Szirma –
                            Martinkertváros -
                            Vörösmarty Mihály utca – Soltész Nagy Kálmán utca
                        </div>
                        <div>Útvonal hossza: 32,4 km</div>
                        <div>
                            Érintett pontok: Az útvonal Miskolc két nevezetes városrészén halad át: az Avason és
                            Miskolctapolcán. Ez a két terület rengeteg látnivalót sorakoztat fel, emellett az Avas
                            meredek
                            északi oldala és lankás lejtői, illetve a Bükk nyúlványán elterülő Tapolca is kihívást
                            jelenthetnek az erre tekerő sportolóknak. Az avasi városrészen található többek között
                            az
                            Avasi kilátó, a város egyik jelképe, lábánál húzódik a pincesor, több mint 900 pincével.
                            Itt, a város szívéhez közel áll az avasi templom harangtornya is, amely a belváros
                            legrégebbi
                            épülete. Miskolctapolca a város idegenforgalmi vonzereje, mindenki hallott már a
                            Barlangfürdőről, de a csónakázótó, a park és a Szikla-kápolna is a turisták kedvelt
                            helyei.
                            Görömböly és Hejőcsaba két nagy múltú település, a házak között megbúvó csend és
                            forgalommentesség kísér vissza a Csabai kapu városrészig. Ezen a körvonalon végig sok
                            étterem, presszó és vendéglő található, itt érintjük a Népkertet, a Sportcsarnokot, a
                            Kálváriát és régi műemlékeket is. A 7. ábra ismerteti a felvett pontokat.
                        </div>
                        <img src={seventh} alt=' '/>
                        <div>
                            <strong>7. ábra: </strong>A Csabai kapu útvonal érintett pontjai
                        </div>
                        <h3>Győri kapu</h3>
                        <div>
                            Megtett útvonal: Vörösmarty városrész - Széchenyi István út – Városház tér – Győri kapu
                            –
                            Újdiósgyőr – Kerekdomb – Kenderföldi-lakótelep – Diósgyőr – Berekalja – Majláth –
                            Majális-park – Csanyik-völgy – Majláth – Diósgyőri lakótelep – Előhegyi lakótelep –
                            Bulgárföld – Bodótető – Vologda városrész – Városház tér – Szinva terasz - Vörösmarty
                            városrész
                        </div>
                        <div>Útvonal hossza: 34,7 km</div>
                        <div>
                            Érintett pontok: Miskolcon 9 utca átszeli a város fő tengelyét. A 9 út:
                            Bajcsy-Zsilinszky út
                            – Széchenyi István út – Hunyadi utca – Tízeshonvéd utca – Győri kapu – Andrássy út –
                            Kiss
                            tábornok út – Árpád út – Hegyalja út. A belőlük ágazó utak száma több száz. Ezen utcák
                            töredékén jártam be a Csanyikig a nyugati városrészt (8. ábra). A Bükkig tartó út érinti
                            a
                            Diósgyőri várat a lovagi térrel, követi a Lillafüredi Állami Erdei kisvasút nyomvonalát,
                            végigmegy a sétálóutcán (Széchenyi István út), ahol minden épület más szolgáltatást
                            nyújt.
                            Éttermeket, múzeumokat, galériákat, szórakozóhelyeket sorakoztat fel, a háztömbök közt
                            pedig kapuk és terek húzódnak, többek között a Sötétkapu, vagy a Szinva terasz. A
                            főutcán
                            található az ország első kőszínháza, a Miskolci Nemzeti Színház, és a Bartók téren álló
                            Zenepalota is.
                        </div>
                        <img src={eighth} alt=' '/>
                        <div>
                            <strong>8. ábra: </strong>A nyugati tengelyt adó 9 utca és a belőlük ágazó utcák az
                            érintett
                            pontokkal és az útvonallal a Győri kapu városrészen (piros szaggatott vonal)
                            Forrás: Saját szerkesztés
                        </div>
                        <h3>Szentpéteri kapu és Zsolcai kapu</h3>
                        <div>
                            Megtett útvonal: Soltész Nagy Kálmán utca - Vörösmarty városrész – Centrum – Petőfi tér
                            –
                            Tetemvár – Szentpéteri kapu – Repülőtér – Zsarnaitelep – Miskolc-Gömöri vasútállomás –
                            József Attila utca - Soltész Nagy Kálmán utca – Selyemrét – Tiszai Pályaudvar – Fonoda
                            utca
                            - MIVÍZ Borsod szennyvíztisztító telep – Szirma – Martinkertváros - Soltész Nagy Kálmán
                            utca
                        </div>
                        <div>Útvonal hossza: 17 km</div>
                        <div>
                            Érintett pontok: A Szentpéteri kapu felé túlnyomó többségben lakótelepek vannak, a város
                            határában pedig végig ipari területek létesültek. A város középpontjában a Hősök terét,
                            a
                            Petőfi teret, és a Deszka templomot érintettem, onnan a város északi határában
                            elhelyezkedő
                            repülőtérig kerékpároztam. Az útvonal rövidsége és a nevezetes pontok hiányában ezt a
                            szakaszt a Zsolcai kapu útvonalával összekapcsolva vizsgáltam. A város keleti oldala
                            szintén
                            a település ipari feladatait látja el, de Miskolc egyik legszebb műemléke, a Tiszai
                            pályaudvar 1901-ben épült állomásépülete is itt áll. A két szakasz a turizmus
                            szempontjából
                            elhanyagolható látványossággal bír, a sík terület nem jelent kihívást, azonban a
                            közlekedésre kiváló, mivel a hátsó utak elkerülőútként tudnak működni a belváros
                            forgalmától
                            távol.
                        </div>
                        <h2 id='lorem5'>Térképszerkesztés</h2>
                        <div>
                            A kerékpáros Miskolc térkép a QGIS-ben készült, ez a program egy szabad és nyílt
                            forráskódú
                            térinformatikai rendszer, amely térinformatikai adatok létrehozására, szerkesztésére,
                            megjelenítésére és elemzésére ad lehetőséget. (CC BY-SA)
                        </div>
                        <div>
                            A térkép alapjául az OpenStreetMap térképe szolgált. A QGIS Plugin menüpontjában
                            elérhetőek
                            olyan bővítmények, amelyek további funkciók használatát biztosítják a
                            felhasználóknak. Ezek közvetlenül megnyithatók az Install Plugins-ból az alkalmazáson
                            belül.
                            Innen tölthető le az OpenLayers Plugin bővítmény is, melynek segítségével be tudjuk
                            hívni
                            többek között a Google Térkép, a Bing Maps, és az OpenStreetMap térképeit is rétegként.
                            Az
                            Install plugin gombbal telepíthető a modul. A letöltés után a bővítmény a Web menüből
                            érhető el. A megnyitást követően a megfelelő webes térkép kiválasztása után az meg is
                            jelenik a Layers Panelben, viszont a képek betöltéséhez internetkapcsolat szükséges,
                            ezért
                            célszerű a
                            térképet menteni TIF fájl-ként. Az OpenStreetMap rétegen egy jobb kattintás után
                            kiválasztjuk a listából a Save As pontot, majd a felugró ablakon tallózzuk a mentés
                            helyét.
                            Ezt
                            követően be kell állítani a kép kiterjedését az Extent pontban és az OK gombra kattintva
                            a
                            letöltés megkezdődik.
                        </div>
                        <div>
                            A vetület beállítását a Layer Properties ablak General pontjában végezzük el, amely a
                            Coordinate reference system listájából választható ki. Az én térképem vetülete
                            megegyezik a
                            felmérés során használt vetülettel, azaz WGS84-es ellipszoid (EPSG:3857). Erre
                            figyelemmel
                            kellett lenni az esetleges torzulások elkerülése miatt.
                        </div>
                        <div>
                            Ezt követően a rétegek létrehozása a feladat. A Layer menü legördülő listájában az első
                            pont
                            a Create Layer, amelyen belül a New Shapefile Layer-er lehet új réteget hozzáadni a
                            térképhez.
                            A felugró ablakban választható ki a geometria típusa a Type-ban. Pont, vonal és polygon
                            típusú állomány létrehozására van lehetőség. Itt tudjuk megadni az új rétegünk
                            koordinátáját
                            is. Ez az összes állománynál a WGS84, szintén az illeszkedés miatt. A New field-ben új
                            attribútum tábla is adható a réteghez. Meg tudjuk adni a nevét és az adat típusát, amely
                            lehet
                            szöveg (text), egész szám (whole number), tizedes tört (decimal number) és dátum. Az
                            oszlopok elnevezésekkor figyelemmel kell lenni az ékezetes betűkre, ezek használata
                            elkerülendő.
                        </div>
                        <div>
                            Ahhoz, hogy egy réteget szerkeszteni lehessen, aktiválni kell a Toggle Editing-et a
                            Plugin
                            Toolbar-ban. Ezt egy sárga színű ceruza jelöli. Az aktiválást követően az új elem
                            hozzáadása
                            az Add feature gombbal történik. Az adott komponens szerkesztésének befejeztével a
                            felugró
                            ablakban tudjuk kitölteni az attribútumokat a megadott rekordnál. A QGIS lehetőséget ad
                            az
                            elemek átszerkesztésére - csomópont mozgatására, beszúrására, törlésére - a Node
                            Tool-lal,
                            vagy mozdítására a Move Feature tool-lal. Bizonyos rétegeknél (például az utaknál)
                            szükséges
                            aktiválni a snapping opciót, hogy pontos legyen a köztük lévő illeszkedés. Ez a
                            funkció a Settings menü Snapping Options pontjában érhető el. Törésponthoz és/vagy
                            vonalszegmenshez lehetséges beállítani a snappinget, és itt tudjuk megadni a snap
                            távolságot
                            is. (Ungvári Zs.)
                        </div>
                        <h3>Pont típusú rétegek a Miskolc térképen</h3>
                        <div>
                            A pont típusú rétegek nagy részét a felmérés során jelölt pontok adták. Ezek
                            szerkesztéséhez
                            shp fájlba mentettem a POI-kat, majd egyesével szimbólumokat rendeltem hozzájuk. Ehhez a
                            Properties-ben a kategorizált stílust választottam a ˝név˝ oszlop alapján, majd a
                            Classify-jal berendeltem az összes pontomat. A Style fülön a Simple marker elemet SVG
                            markerre
                            változtattam, majd a listából kiválasztottam az adott pontokhoz alkalmas jeleket. Új
                            szimbólumokat a QGIS Resource Sharing plugin-nal rendeltem hozzá a jelkönyvtárhoz, így
                            több embléma közül tudtam a megfelelőt kiválasztani. Ebben a bővítményben a QGIS
                            felhasználók osztják meg a saját SVG gyűjteményüket, ami a program segítségével
                            elérhetővé
                            válik mindenki számára (Graser, 2016) . A terek, parkok, park centerek esetében a
                            Flaticon
                            weboldal vektoros ikon gyűjteményéből hoztam létre saját könyvtárat a QGIS Resource
                            Sharing mappájában, amit a program az SVG markerek közé importált. A felesleges POI-kat
                            kijelöltem a Select Feature-el, majd a delete-tel töröltem a térképfelületről őket. Az
                            új
                            elem
                            hozzáadásánál az Add Feature lehetőséget alkalmaztam. Minden szimbólum mögé egy fehé
                            négyzet
                            került a láthatóság kedvéért. A belvárosban a pontok alaposabb ismertetése miatt
                            elkészítettem az említett terület részletesebb kinagyított térképét. (9. ábra)
                        </div>
                        <img src={nineth} alt=' '/>
                        <div>
                            <strong>9. ábra: </strong>Miskolc belvárosát ábrázoló térkép, ahol a jelek tereket,
                            parkokat, iskolákat és nevezetes pontokat jelölnek
                            Forrás: Saját szerkesztés
                        </div>
                        <div>
                            Az OpenStreetMap-en jelölt csúcspontokat is jelöltem a térképen. Ehhez külön réteget
                            hoztam
                            létre kettő mezővel. Az egyik tábla a csúcsok neveit, a másik a hozzájuk tartozó
                            magasságszámot tartalmazza.
                        </div>
                        <h3>Vonal típusú rétegek a Miskolc térképen</h3>
                        <div>
                            Az utak.shp tartalmazza Miskolc úthálózatát. Az attribútum táblában két oszlopot adtam
                            meg:
                            név és fajta. A ˝név˝ az utcák elnevezését foglalja magában, a ˝fajta˝ pedig az
                            utcatípust
                            jelöli. Az utóbbi alapján történt a kategorizált adatábrázolás, melyet a 10. ábra
                            ismertet.
                            Ay autópálya 3 elemből áll, a többi úttípus 2 elemes. Ez azt jelenti, hogy 2 és 3 Simple
                            Line építi
                            fel a szimbólumokat. Ezek egymás fedésében állnak, az alsó vastagabb réteg határozza meg
                            a
                            külső vonalat, a felső pedig a belső színt jelöli. Az autópálya esetén a harmadik Simple
                            Line egy vékony középvonal formájában rajzolódik ki.
                        </div>
                        <img className='images' src={tenth} alt=' '/>
                        <div>
                            <strong>10. ábra: </strong>A mellékletben csatolt Miskolctérkép közlekedési elemeinek a
                            jelmagyarázata
                        </div>
                        <div>
                            A Layers Properties ablakban a Style fülön választható ki a Categorized. Ezen a
                            felületen
                            lehet kategóriákat felállítani a különböző objektumoknak. A Column mezőben beállítottam,
                            hogy a ˝fajta˝ alapján történjen a csoportosítás, ezt követően a Classify gombra
                            kattintva a
                            program behívta az összes eltérő szövegű elemet az adott oszlopból. Ezek mind
                            automatikus
                            jelet kaptak, azonban a szimbólum lecserélhető a jelre kattintva. Az utak
                            szerkesztésénél a
                            snapping opciót is használtam.
                        </div>
                        <div>
                            A vasut.shp és villamos.shp is a közlekedési elemekhez tartozik. Előbbi a vasútvonalat,
                            míg
                            az utóbbi a villamossíneket jelöli. A vasút esetében a Lillafüredi Állami Erdei Vasút
                            ugyanazt
                            a jelölést kapta, mint a nagytávolságú vonatok. A villamos az utcák sűrűsége miatt lett
                            sötétbordó színezésű, hogy láthatóvá váljon a vonala.
                        </div>
                        <div>
                            A patak.shp és folyo.shp a vízfolyások ábrázolására szolgálnak. Felépítésük egyszerű,
                            egyvonalas Simple Line-ból áll. Ezeket minkettő esetben ugyanazzal a kék színnel láttam
                            el,
                            csak szélességükben térnek el. A folyó 1 mm vonalvastagságú, ezzel szemben a patak
                            mindössze
                            0,5 mm.
                        </div>
                        <div>
                            A Properties ablakban a Style fülben lehet beállítani a stílusdefiníciókat. A Width adja
                            a
                            vonal vastagságát, a Color a vonal színét. Új Simple Line is a Style fülben adható a
                            réteghez a zöld
                            + nyílra kattintva. A vonalbeállításoknál a polyline-ok összecsatolásához,
                            egységesítéséhez
                            az Advanced-ben elérhető Symbol Levels-t használtam. Ez lehetőséget ad arra, hogy a
                            vonalak
                            folytonossá váljanak. (Ungvári Zs.)
                        </div>
                        <h3>Polygon típusú rétegek a Miskolc térképen</h3>
                        <div>
                            A felület adja meg a térkép alapját, a felszínborítottság uralja a legnagyobb
                            területeket a
                            térképen. A növényzet, a lakott terület, ipar- és kereskedelmi telepek majdnem
                            lehatárolják
                            az
                            egész várost, ezeknek hézagmentesen kell lefedniük a teret. Éppen ezért használtam a
                            felületi elemeknél is a snapping opciót. Törésponthoz és vonalszegmenshez, 6 pixelben
                            adtam
                            meg a snap távolságot.
                        </div>
                        <div>
                            A novenyzet.shp a felszín borítottságát kategorizálja. Elszeparálja egymástól az erdőt,
                            a
                            fiatal erdőt, a füves területet, a szántókat, egy-két bányát és a parkosított
                            helyszíneket.
                            Mind más felületszínezést kapott. Külön rétegben, de elkülönül még a lakott terület, az
                            ipar, a
                            kereskedelem, a közfeladatokat ellátó intézmények területe (iskolák, kórházak), a
                            temetők,
                            valamint az állóvizek. Az áttekinthetőség érdekében a 11. ábra bemutatja a polygonok
                            különböző rétegszínezését.
                        </div>
                        <img className='images' src={eleventh} alt=' '/>
                        <div>
                            <strong>11. ábra: </strong>A mellékletben csatolt Miskolctérkép felületborítottságának
                            jelmagyarázata
                        </div>
                        <div>
                            A temető és a bánya rétegben a kitöltéshez SVG marker-t használtam. Ekkor az egyszerű
                            kitöltés mellé hozzárendelünk egy SVG mintát, jelen esetben egy keresztet a temető, és
                            keresztbe rakott csákányokat a kőfejtő esetében. A Point pattern fill elemben állítható
                            be
                            ezek sűrűsége és egymáshoz való elhelyezkedésük.
                        </div>
                        <h3>Névanyag</h3>
                        <div>
                            A térképen a településneveket, igazgatási neveket, tájneveket, határneveket, vízneveket,
                            és
                            a közlekedési elemekre vonatkozó neveket jelöltem. A földrajzi nevek megjelenítéséhez –
                            a
                            közlekedési elemek, vízrajzi elemek és az ipari területeken kívül – új rétegeket hoztam
                            létre. A településnevek és az igazgatási nevek területegységeket, városrészeket neveznek
                            meg,
                            vízszintes elhelyezkedésük miatt pont típusú rétegként vettem fel őket. A
                            kistájrészletek és
                            határnevek vonal típusú rétegre kerültek, tekintve szigetszerű és nagyobb kiterjedésű
                            megjelenésükre. A névanyag ilyen módszer alapján való megjelenítésének az első lépése,
                            hogy
                            a Properties-ben a Style fülön a szimbólumoknak pont esetén se színt, se körvonalat,
                            vonal esetén vonalvastagságot nem szabad beállítani. Ezt követően a Labels-ben tudjuk
                            aktiválni a neveket, ehhez a megjelenítendő név mezőjét ki kell választani, majd meg
                            kell
                            szerkeszteni a megfelelő módon. A Text pontban a betűtípus, a betűstílus és a betűméret
                            változtatásával foglalkoztam nagyobb figyelemmel, a Spacing-et, azaz a betűk, vagy
                            szavak
                            közti távolságot csak néhány esetben alkalmaztam, mint például a tájneveknél. A
                            formázáson
                            kívül a szöveg elhelyezésével kellett foglalkoznom. A Placement pontban kiválasztottam
                            az
                            Offset from point-ot, és a pont közepére állítottam a név megjelenését. A kistájak
                            jelölését
                            a NYÍR-KARTA BT. kiadó Miskolc bor&amp;gasztro kerékpáros térképének névanyaga és EOTR
                            szelvények alapján készítettem. A különböző betűméretű megjelenítés miatt a nevek
                            kiíratásához szabályokat állítottam fel. Egy új táblában 0-val, 1-gyel és 2-vel jelöltem
                            a
                            földrajzi neveket, a kívánt méret alapján. Utána a Rule-based labeling-ben a Filter-nél
                            megadtam a 3 szabályt: ˝meret˝ = ’0’; ˝meret˝ = ’1’; ˝meret˝ = ’2’ , ahol a ’meret’ a
                            fejléc
                            címe. Ezt követően külön tudtam szerkeszteni ezt a három csoportot.
                        </div>
                        <div>
                            Az utak nevének megjelenítésénél közel 3000 adattal foglalkoztam, így szabály alapú
                            névmegjelenítés mellett döntöttem. A Properties menü Labels fülén a Rule-based labeling
                            kiválasztását követően határoztam meg a szabályokat az utcák típusa alapján. Kettő
                            csoportot
                            képeztem, az egyikben a mellékutcákat (˝fajta˝ = ’mellék’), a másikban az autópálya,
                            főút,
                            összekötőút, bekötőút és a sétálóutca neveit tudtam szerkeszteni. A kiemelt utcatípusok
                            6-os
                            betűméretet és fekete, telt betűstílust kaptak, amíg a mellékutak szintén 6 pontosak, de
                            normál betűtípusúak és fekete színűek lettek.
                        </div>
                        <h3>Kerékpáros nyomvonal és kerékpáros utak megjelenítése a térképen</h3>
                        <div>
                            A nyomvonalakat és POI-kat a GPS-ről elsőként a GPS TrackMaker nevű programban dolgoztam
                            fel. A Garmin Interface menüpontban azonnal elérhetőek a tracklogok. A betöltés
                            után és a hibapontok törlését követően gtm állományba exportáltam az adataim. A
                            MapSource
                            programban olvastam le a nyomvonalak hosszát. A QGIS-be való behívás után, hogy a
                            rétegek szerkeszthetővé váljanak egy jobb egérkattintást követően felugró listából a
                            Save as
                            lehetőséget alkalmaztam, hogy shp formátummá alakuljanak az adatok. A betöltést követően
                            a Node Tool segítségével a felesleges csomópontok eltüntetésével kezdtem, utána stílust
                            adtam a különböző útvonalaknak. Mindhárom nyomvonal két Simple Line-ból áll, ahol a
                            felső elem fehér színű és pontvonal (Dot Line) típusú, az alsó pedig egyszerű vonal. A
                            Csabai kapu kék, a Győri kapu piros, a Szentpéteri- és Zsolcai kapu pedig sárga színű
                            útvonalat kapott.
                        </div>
                        <div>
                            A térképen kizárólag a kiépített kerékpáros utakat jelenítettem meg, melyek a 2.
                            táblázatban
                            is felsorolásra kerültek. Így jól látható a szigetszerű megjelenésük, hiányosságuk.
                        </div>
                        <h3>Nyomtatási előkészítés</h3>
                        <div>
                            A QGIS-ben a Project menüben a New Print Composer fülön lehet nyomtatásra előkészíteni
                            egy
                            térképet. Elsőként a felugró párbeszédablakban el kell nevezni a térképet, ezután új
                            lapon
                            nyílik meg az üres felület, ahol a lehetőségekhez mérten lehet előállítani nyomtatásra a
                            munkánk. A jobb oldalon elhelyezkedő Composition-ben beállítottam a papírméretet A2-re,
                            majd behívtam a térképemet a bal menüsoron elérhető Add new map segítségével. A
                            közvetlenül
                            a Composition mellett elhelyezkedő Item properties fülön, a Scale alpontban a
                            méretarányt 1 : 43 000-nek határoztam meg. Ezt követően a térkép középre igazítása
                            következett. Ezután már csak a térkép címe, a jelmagyarázat, a méretarány és a kolofon
                            maradt. Az Add new title-vel új szöveges elemeket lehet hozzáadni a térképhez, így a
                            címet
                            is ezzel hoztam létre, amely a dolgozatom főcímét kapta. Az Add new legend pontban a
                            jelmagyarázat hozható létre. Elindításánál a térképen lévő összes elemet megjeleníti az
                            ablakon, azonban ezt szükségszerű leválogatni. Mivel a dolgozatom egyik eleme a pontok
                            jelölése volt, így az összes pont megnevezése és elhelyezése volt a feladatom a
                            nyomtatás
                            előkészítésénél. Az Items menü Legend items pontjában az Auto update inaktiválása után
                            válnak szerkeszthetővé az elemek, a név átírását duplakattintás után tehetjük meg. Én a
                            legtöbb rétegnél pontos adatbázist készítettem az elnevezésekről, így csak a csoportok
                            neveit
                            kellett megváltoztatnom. Kettő jelmagyarázatot hoztam létre, az egyikben a fedettség, az
                            útvonalak, a kiépített kerékpárút, villamos- és vasútvonal jelölése, magasságpont,
                            iskola-
                            és a
                            lépcső jele kapott helyet, a másikban az összes jelölt pont elnevezésére került sor. A
                            térkép bal sarkában a belvárosról készítettem egy részlettérképet. Az elkészült térképet
                            a
                            Composer- ben exportáltam PDF fájlba.
                        </div>
                        <h2 id='lorem6'>Összegzés</h2>
                        <div>
                            A skóciai Kirkpatrick Macmillan 1839-ben készített első kerékpárja óta a XXI. századig a
                            kerékpárok sokat változtak, az úthálózatokról nem is szólva. A fejlődés figyelemreméltó,
                            de
                            még van tennivaló. A felfestett nyomvonalas kerékpárút némi biztonságérzetet ad a
                            kerékpárral közlekedőknek, de még nem éri el a kívánt szintet. Amíg körülbelül kétszer
                            annyi
                            kerékpár van a világon, mint autó, a kerékpárutak kiépítése, fejlesztése, karbantartása
                            kiemelt figyelmet érdemel. Közlekedésbiztonságunk érdekében figyelmet kell fordítani a
                            közlekedéskultúra javításáért. Ezzel nem csak egészségünket, környezetünket is óvjuk.
                            Miskolc 2011 elején csatlakozott a Green City nevű mozgalomhoz, melynek célja az
                            élhetőbb
                            és fenntarthatóbb városok létrehozása. A mozgalom alapelveit követve a csatlakozás óta
                            új
                            kerékpárutak is létesültek.
                        </div>
                        <div>
                            Én Miskolc és a sport szeretete miatt választottam ezt a témát. A feladatom a
                            kerékpározás,
                            a város bemutatása és a térképkészítés összekötése volt. Ebből adódóan készült el
                            Miskolc
                            térképe az általam ajánlott túraútvonalakkal, amely a település valamennyi nevezetesebb
                            pontját is érinti, azonban elsődleges célom az volt, hogy egy átfogóbb képet tudjak
                            nyújtani
                            Miskolcról, a turisták által kevésbé ismert eldugott területekről és a kerékpározásra
                            alkalmas útvonalakról.
                        </div>
                        <h2 id='lorem7'>Felhasznált irodalom</h2>
                        <div>
                            Arnót, Á., Cseri, M., Joó, T., Kárpáti, L., Kishonti, Z., Mándoky, J., . . . Veres, L.
                            (2000). Védett épületek Miskolcon. (A. Újvári, Á. Albert, J. Mándoky, &amp; E. Fejér,
                            szerk.) Miskolc: Miskolc M. J. Város Polgármesteri Hiv.
                        </div>
                        <div>
                            Bálinger, J., Fűzfa, L., &amp; Kollega Tarsoly, I. (szerk.). (2004). Révai új lexikona
                            (XIV.. kötet). Szekszárd: Babits Kiadó Rt.
                        </div>
                        <div>
                            CC BY-SA. (dátum nélk.). Welcome to the QGIS project! Letöltés dátuma: 2019. május 09.
                            Forrás:<a href="https://qgis.org/hu/site/">qgis</a>
                        </div>
                        <div>
                            Coast, S. (dátum nélk.). OpenStreetMap. Letöltés dátuma: 2019. 05. 16.
                            Forrás:<a href="https://www.openstreetmap.org/#map=16/48.0509/20.7701&amp;layers=C">open
                            street map</a>
                        </div>
                        <div>
                            Csanálossi, B. (2003). Miskolc : várostörténeti kalauz. (L. Méhes, Szerk.) Miskolc: Bíbor
                            Kiadó.
                        </div>
                        <div>
                            Dallos, A. (1982). Miskolc. (A. Schiffer, Szerk.) Budapest: Panoráma.
                        </div>
                        <div>
                            Eurobarometer, S. (2014). QUALITY OF TRANSPORT. Európai Unió.
                            Forrás:<a
                            href="http://ec.europa.eu/commfrontoffice/publicopinion/archives/ebs/ebs_422a_en.pdf">ec
                            europa</a>
                        </div>
                        <div>
                            Freepik Company . (2013). FLATICON.
                            Forrás:<a href="https://www.flaticon.com/">flat icon</a>
                        </div>
                        <div>
                            Glász, A. (2017). Városon belüli közlekedési és kerékpározási szokások kérdőíves
                            felmérése.,
                            (old.: 537-543.). Győr.
                        </div>
                        <div>
                            Graser, A. (2016. 10 23). More icons &amp; symbols for QGIS. Letöltés dátuma: 2019. 05. 18.
                            Forrás:<a
                            href="https://anitagraser.com/2016/10/23/more-icons-symbols-for-qgis/">anitagraser</a>
                        </div>
                        <div>
                            Kerékpáros Miskolc Egyesület. (dátum nélk.). Letöltés dátuma: 2019. 05. 16.
                            Forrás:<a href="http://kerekparosmiskolc.net/">kerékpáros miskolc</a>
                        </div>
                        <div>
                            Kunhalmi, Z. (2019. január 21.). Ígértük, most megmutatjuk - forgalomszámlálási adatok.
                            Forrás:<a
                            href="http://kerekparosmiskolc.net/2019/01/igertuk-most-megmutatjuk-forgalomszamlalasi-adatok/">kerékpáros
                            miskolc</a>
                        </div>
                        <div>
                            Medián, M. k. (2018. július). (I. é. Minisztérium, Szerk.) Magyarország: Innovációs és
                            Technológiai Minisztérium.
                            Forrás:<a href="https://kerekparosklub.hu/kerekparoskutatas_2018">kerékpáros klub</a>
                        </div>
                        <div>
                            Miskolc bor&amp;gasztro kerékpáros térkép. (dátum nélk.). Nyíregyháza: NYÍR-KARTA BT.
                        </div>
                        <div>
                            Miskolc ITS. (2013). Miskolc kerékpárútjai. Miskolc Integrált Településfejlesztési Stratégia
                            mellékletek, 339-341. Miskolc.
                            Forrás:<a
                            href="http://miskolcvaros2020.hu/sites/default/files/dokumentumok/ivs-mellekletek.pdf"
                        >
                            miskolc város
                        </a>
                        </div>
                        <div>
                            MVK Zrt. (2013). Kerékpáros közlekedés. Miskolc Város Fenntartható Közlekedési Terve,
                            25-26.
                            (MVK Miskolc Városi Közlekedési Zrt., Szerk.) Miskolc. Forrás:
                            <a href="http://kerekparosmiskolc.net/wp-content/uploads/2013/12/Miskolc_SUMP_MVK_131030_végleges.pdf">kerékpáros
                                miskolc</a>
                        </div>
                        <div>
                            MVK Zrt. (2013). Kerékpáros közlekedés. Miskolc Város Fenntartható Közlekedési Terve,
                            25-26.
                            (MVK Miskolc Városi Közlekedési Zrt., Szerk.) Miskolc. Forrás:
                            <a href="http://kerekparosmiskolc.net/wp-content/uploads/2013/12/Miskolc_SUMP_MVK_131030_végleges.pdf">kerékpáros
                                miskolc</a>
                        </div>
                        <div>
                            MVK Zrt. (dátum nélk.). Kerékpárral a közösségi közlekedésben. Letöltés dátuma: 2019..
                            05.
                            09. Forrás:
                            <a href="http://mvkzrt.hu/kerekparral-kozossegi-kozlekedesben">mvk zrt</a>
                        </div>
                        <div>
                            Plevnik, A. (2016. augusztus 15.). Public awareness about the effects of transport on
                            the
                            environment. Szlovén Köztársaság Várostervezési Intézete. Forrás:
                            <a href="http://kos.arso.gov.si/en/content/public-awareness-about-effects-transport-environment-2">Arso.gov.si</a>
                        </div>
                        <div>
                            Ungvári Zs. (dátum nélk.). QGIS feladatgyűjtemény. Letöltés dátuma: 2019. május 09.
                            Forrás:<a href="http://mercator.elte.hu/~ungvarizs/">ELTE marcator</a>
                        </div>
                        <div>
                            Zsadányi, G. (1955). A miskolci Herman Ottó Múzeum közleményei. In H. O. (Miskolc), A
                            miskolci Herman Ottó Múzeum közleményei (old.: 27-29.). Miskolc: Herman Ottó Múzeum és a
                            Múzeumi Bizottság.
                        </div>
                        <h2 id='lorem8'>Köszönetnyilvánítás</h2>
                        <div>
                            Szeretnék köszönetet mondani elsőként konzulensemnek, Dr. Irás Krisztinának, aki a
                            dolgozat
                            írásának kezdetétől támogatott, segítette a munkámat, időt szánt rám és észrevételeivel,
                            tanácsaival ösztönözte előre haladásom.
                        </div>
                        <div>
                            Köszönöm Glász Attilának a rám szánt időt és az értékes statisztikai adatokat.
                        </div>
                        <div>
                            Továbbá szeretném megköszönni a Kerékpáros Miskolc Egyesület munkáját, akik szívükön
                            viselik
                            Miskolc kerékpáros sorsát.
                        </div>
                    </Text>
                </TextContainer>
            </Container>
        )
    }

}
