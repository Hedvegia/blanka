import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import first from '../images/first.jpg'
import second from '../images/second.png'
import third from '../images/third.png'
import forth from '../images/forth.png'
import fifth from '../images/fifth.png'

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const Contents = styled.ul`
  margin-top: 1em;
  position: sticky;
  top: 2em;
  width: 15%;
  height: 25%;
  background: rgba(229, 127, 165, 0.5);
  color: #f8f9f8;
  border: 0px solid rgba(229, 127, 165, 0);
  border-radius: 0 5px 5px 0;
  padding: 0;
  li {
    margin: 0;
    padding: 1em;
    padding-left: 1.5em;
    list-style-type: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9em;
    :hover {
      background: rgba(140, 116, 130, 0.5)
    }
  }
`

const Text = styled.div`
  margin: 8em;
  margin-top: 0;
  margin-bottom: 12em;
  width:  55%;
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

const Box = styled.div`
  position: absolute;
  height: 95%;
  right: 1.5em;
  top: 0.3em;
  border-left: 2px dotted #f8f9f8;
  .fa-bicycle {
    transform: ${props => props.theme.up};
    position: absolute;
    top: ${props => props.theme.topMargin}
  }
`


export class Essey extends Component {

  componentDidMount = () => {
    window.addEventListener('scroll', () => {
      const fullHeight = document.querySelector('#text').getBoundingClientRect().height - document.querySelector('#footer').getBoundingClientRect().height - document.querySelector('.fas').getBoundingClientRect().height
      const topHeight = document.querySelector('#text').getBoundingClientRect().top

      if (window.pageYOffset > this.state.top && topHeight < 0 && (Math.abs(topHeight) / fullHeight) * 100 < 94.5) {
        this.setState({ up: false, top: window.pageYOffset, topMargin: (Math.abs(topHeight) / fullHeight) * 100 })
      } else if (window.pageYOffset < this.state.top && topHeight < 0 && (Math.abs(topHeight) / fullHeight) * 100 < 94.5) {
        this.setState({ up: true, top: window.pageYOffset, topMargin:  (Math.abs(topHeight) / fullHeight) * 100 })
      }

      const options = {
        root: null,
        rootMargin: '0% 0% -45% 0%',
        threshold: 0.9
      }

      const changeContent = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target.id !== this.state.title) {
            this.setState({ title: entry.target.id })
          }
        })
      }
      const observer = new IntersectionObserver(changeContent, options);

      document.querySelectorAll('h2').forEach(targ => observer.observe(targ))
    })
  }

  state = {
    title: 'lorem1',
    top: 0,
    up: false,
    topMargin: 0
  }

  choseTitle = (id) => {
    this.setState({ title: id })
    this.props.moveOnPage(`#${id}`)
  }

  render() {
    const listOfContent = ['Miskolc, a nyitott kapuk városa', 'Statisztikai adatok', 'Kerékpáros infrastruktúra Miskolcon']

    const theme = {
      up: this.state.up ? 'rotate(-90deg)' : 'rotate(90deg)',
      topMargin: `${ this.state.topMargin }%`,
    }

    return (
      <ThemeProvider theme={theme}>
        <Container id="essey">
          <Contents id="contents">
            {listOfContent.map((title, index) => {
              return `lorem${index + 1}` === this.state.title
              ? (
                <li
                  key={index}
                  style={{ background: 'rgba(140, 116, 130, 0.5)' }}
                  onClick={() => this.choseTitle(`lorem${index + 1}`)}
                >
                  {title}
                </li>
              )
              : (
                <li
                  key={index}
                  onClick={() => this.choseTitle(`lorem${index + 1}`)}
                >
                  {title}
                </li>
              )
              })}
              <Box><i className="fas fa-bicycle" /></Box>
          </Contents>
          <Text id="text">
            <h2 id='lorem1'>Miskolc, a nyitott kapuk városa</h2>
            <div>
              Miskolc a Bükkalján, a Bükk hegység keleti lábánál, a Szinva-patak és a Hejő völgyében terül el, határában folyik a Sajó, középpontjában az Avas hegy áll, különböző természeti és gazdasági tájegységek találkozásánál, fontos kereskedőutak mentén épült.
            </div>
            <div>
              Miskolc a Bükkalján, a Bükk hegység keleti lábánál, a Szinva-patak és a Hejő völgyében terül el, határában folyik a Sajó, középpontjában az Avas hegy áll, különböző természeti és gazdasági tájegységek találkozásánál, fontos kereskedőutak mentén épült.
              Miskolc Európa egyik legrégebben lakott városa, Herman Ottó -az utolsó magyar polihisztor- kutatásainak köszönhetően bizonyítható, hogy már a jégkorszakban is éltek emberek ezen a területen. Miskolc belvárosában szakócák, azaz paleolitkori pattintott kőeszközök, míg a Bükkben ősemberi csontleletek is tanúskodnak a terület 70 000 éves múltjáról (Dallos, 1982). Nagy Lajos király uralkodásának idején, 1342-től indult el a város fejlődése. A Diósgyőri vár is a XIV. században vált királyi pompájú várrá, az elkövetkező uralkodóknak is kedvelt tartózkodási helye lett e terület.
            </div>
            <div>
              Minden évszázad hagyott nyomot Miskolc történetében, műemlékeiben, ám sok balsors is érte a várost. Többek között az 1843-as tűzvész, amely felégette az épületeket, majd 1878-ban árvíz pusztította, s döntötte romba a települést. A jellegzetes épületek, zöld területek ritkításában a II. Világháborút követő nehézipari fellendülés is közrejátszott, a megnövekedő népességszám és az egyoldalú fejlesztés vonzata a városkép átalakulása volt, így mára jellegtelen panelházak uralják a település nagy részét. (Arnót et al., 2000).
              Annak érdekében, hogy Miskolc az ország legnagyobb városai közé kerüljön Diósgyőrt 1945-ben Miskolchoz csatolták Hejőcsabával együtt, majd ezt több településegyesítés is követte, mai kiterjedését 1981-ben nyerte el Bükkszentlászló csatlakozásával (Arnót et al., 2000).
            </div>
            <div>
              Annak érdekében, hogy Miskolc az ország legnagyobb városai közé kerüljön Diósgyőrt 1945-ben Miskolchoz csatolták Hejőcsabával együtt, majd ezt több településegyesítés is követte, mai kiterjedését 1981-ben nyerte el Bükkszentlászló csatlakozásával (Arnót et al., 2000).
            </div>
            <div>
              Miskolc a II. világháborúig hagyományos kereskedő, kisiparos város volt, már a középkorban kiépült jelentősebb úthálózata. Vámépületek álltak a négy égtáj felől érkező főutak mentén, ezek a város igazgatásában játszottak fontos szerepet, többek között itt szedték be az áruvámot, olykor katonai őrhelyként is szolgáltak. Ezeken a szigorúan őrzött kapukon át lehetett bejutni Miskolcra.  A kapuk között sánc húzódott, ez jelentette a város kerítését. Első említésük 1562-ből maradt fenn, a XVI. és a XVIII. század között alakulhattak meg. A vámházak a XX. század közepéig léteztek. A város határán álló négy bejáró a Szentpéteri kapu, Győri kapu, Csabai kapu és a Zsolcai kapu voltak (Csanálossi, 2003).
            </div>
            <div>
              Két kapu a város belső utcáinak határán állt -Fábián kapu, Meggyesaljai kapu- ezek belterületi kapuk voltak, melyek a külső részek felé vezettek (Csanálossi, 2003).
            </div>
            <div>
              Az egyetlen ma is meglévő kapu a Sötét kapu, amely a Szinva határvonaláig tartó Derék piacot választotta el a várostól (Zsadányi,1955). A lényegében a városból a városba vezető  boltíves átjárót azonban az évek alatt annyiszor építették újra, hogy a helyiek elmondása alapján a kapuból csak a lyuk a régi.
            </div>
            <div>
              A Fábián- és  Meggyesalja kapu lassan feledésbe merül, a külső kapuk, azaz a Szentpéteri-, a Győri-, a Csabai- és a Zsolcai kapu pedig már csak elméleti határt képeznek, és csupán nevüket őrzi egy-egy városrész. Északról a Szentpéteri kapu, keletről a Zsolcai kapu, délről a Csabai kapu, nyugatról a Győri kapu idézi fel az egykori kapurendszer emlékét.
            </div>
            <img src={first} alt='' />
            <div>
              <strong>1 . ábra: </strong>Miskolc térképe a 16–17. században. A piros négyszögek a kapukat, a zöld vonalak a
              városon átvezető országutakat jelölik.
              Forrás: [x]
            </div>
            <div>
              A Nagy-Miskolc koncepció gondolata a XIX-XX. század fordulóján fogalmazódott meg. A mindenkori városvezetés programja a városrendezés volt, a környező települések: Hejőcsaba, Diósgyőr, Lillafüred, Ómassa, Pereces, Hámor, Szirma, Görömböly, Tapolca egyesítésével Miskolc város területének növelése. Ez a város külső képének jelentős átalakulásával járt, ekkor, az 1900-as évek kezdetén épültek a ma is meglévő épületek számottevő része, melyeket a dolgozatom későbbi részeiben átfogóbban ismertetek. Az első világháború, a Tanácsköztársaság, a trianoni békeszerződés és a második világháború a település fejlődését lassították, de nem befolyásolták nagymértékben, sőt paradox módon egyes tragikus események Miskolc életében pozitív változást hoztak. A kereskedővárosból hamarosan iparváros lett, 1950 és 1990 között élte a város virágkorát, majd a rendszerváltás után Miskolc hanyatlásnak indult, és mára a legnagyobb kihívás az elvándorlás megakadályozása (Révai Új Lexikona XIV. kötet).
            </div>
            <h2 id='lorem2'>Statisztikai adatok</h2>
            <h3>Európa szinten kerékpáros nemzet</h3>
            <div>
              Az alábbi ábra azt mutatja, hogy az Eurobarométer kérdésére válaszolók aránya hogyan alakult országonként azok között, akik a kerékpárt választják a mindennapi közlekedési eszközként.
            </div>
            <img src={second} alt='' />
            <div>
              <strong>2. ábra: </strong>Elsősorban kerékpárral közlekedők aránya az Európai Unió tagállamai között.
              Háttértérkép: Dr. Irás Krisztina; Forrás: [x] alapján saját szerkesztés
            </div>
            <div>
              A relatív-adatok a kerékpárt használók és a vonatkozási terület népességszámának hányadosából jöttek létre. A vonatkozási országok az Európai Unióhoz 2014-ig csatlakozott tagállamokat öleli fel. Az ábra jól mutatja, hogy Magyarország a többi országhoz képest az élen áll, az Eurobarometer korábbi 2007-es és 2010-es felmérése alapján is ebben a pozícióban foglal helyet, ebből adódóan jogosan nevezhetjük magunkat kerékpáros nemzetnek.
            </div>
            <img src={third} alt='' />
            <div>
              <strong>3. ábra: </strong>A közlekedési módszerek eloszlása az Európai Unió tagállamai között és Magyarországon.  Forrás: [x] alapján saját szerkesztés
            </div>
            <div>
              A 3. ábra alapján az is megfigyelhető, hogy amíg Magyarországon az átlagosnál többen választják a biciklizést, addig a gépjármű használata az utolsó helyen áll a többi megkérdezett országhoz képest. A lakosság 33%-a autóval közlekedik, 28%-a a tömegközlekedést választja, amíg a megkérdezettek között 22% a kerékpározás mellett dönt, a fennmaradó 17% egyéb közlekedési módszert alkalmaz. Ez az arány az Európai Unió 28 országát összeségében tekintve 54% autó, 19% tömegközlekedés, 8% kerékpár és 19% egyéb jármű használatára oszlik.
            </div>
            <h3>Magyarország kerékpáros szokásai</h3>
            <div>
              A Magyar Kerékpárosklub és a Medián Közvélemény- és Piackutató Intézet 2018 júliusában végzett egy hiánypótló kerékpáros kutatást, az Innovációs és Technológiai Minisztérium támogatásával. 3000 fő vett részt a Magyarország felnőtt lakosságára reprezentatív, online mintavétellel készült statisztikai felmérésben.
            </div>
            <div>
              A kérdések lehatárolják a kerékpáros szokásokat, hogy mennyien használnak ma Magyarországon biciklit és felmérik, hogy a kerékpárosok min változtatnának a biztonságosabb közlekedés érdekében. Szakdolgozatomban az alábbi kérdésekkel foglalkoznék részletesebben:
            </div>
            <ul>
              <li>Milyen gyakran használ kerékpárt?</li>
              <li>Elsősorban kerékpárral közlekedők aránya régiónként</li>
              <li>Elégedettség (1-5-ig)</li>
              <li>Kerékpárral rendelkezők aránya</li>
            </ul>
            <div>
              Milyen gyakran használ kerékpárt? Az eredményekből kiderül, hogy a válaszadók 70%-a szokott kerékpározni valamilyen gyakorisággal. Naponta biciklizik a kérdőívben résztvevők 17%-a, 27%-ban viszont csak ritkábban veszik elő a kerékpárt, mint hétvégenként.
            </div>
            <div>
              <strong>1. táblázat: </strong>A kerékpárhasználat aránya Magyarországon különböző gyakorisággal mérve. Forrás: [x] alapján saját szerkesztés
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
              A felmérés elsősorban kerékpárral közlekedők aránya régiónként című kérdéséből arra lehet következtetni, hogy az alföldi tájakon többen használják a kerékpárt, mint a nagyobb szintkülönbségekkel bíró területeken. A Dél-Alföldön és az Észak-Alföldön 30% feletti az érték, amíg a többi régióban 20% alá csökken ez az arány. Miskolc régiójában, Észak-Magyarországon 14%-ban választják a biciklis közlekedést elsőként.  A többi régiót tekintve ez az érték átlag alatti, viszont nem elhanyagolható az a tény sem, hogy az Észak-magyarországi régión kívül az összes többi területen legalább egy város rendelkezik kerékpáros közösségi közlekedési rendszerrel. Megkeresésemre Riesz József és Kiss Bálint -a Cycleme Bérkerékpár Rendszerek Kft. projektvezetője- készséggel válaszoltak, levelükből kiderült, hogy Miskolcon 2015-ben a Bagolyvárnál építettek ki bérkerékpár rendszert kirándulási céllal, azonban ez egy demo változat 2 állomással, amely jelenleg nem üzemel. A városvezetés távlati tervei között szerepel a kölcsönzős hálózat kiépítése.
            </div>
            <div>
              Az elégedettség tekintetében 1 és 5 közötti skálán a legkisebb értékelést a burkolat minősége kapta, ez 2,6 pontos eredményt ért el. Az emberek a kerékpártárolási lehetőségekkel a legelégedettebbek, azonban ez az érték is csak 3,5 pontot kapott az elérhető 5-ből.
            </div>
            <img src={forth} alt='' />
            <div>
              <strong>4. ábra: </strong>Elégedettség (1-5-ig) Forrás: [x] alapján saját szerkesztés
            </div>
            <div>
              A Medián által készített felmérésben a válaszadók 67%-a rendelkezik saját kerékpárral, azonban kiemelendő, hogy a felnőtt lakosság 84%-a hozzáfér működőképes biciklihez. Többek között ez is lehet az egyik oka a kerékpáros fejlesztéseket támogatók magas arányának.
            </div>
            <div>
              Ennél a pontnál kiemelném Glász Attila a Városon belüli közlekedési és kerékpározási szokások kérdőíves felmérésének eredményeit, a tanulmány egy online kérdőívre beérkezett több, mint ezer válasz eredményét dolgozza fel, mely elsősorban a 19-59 éves korosztályra jellemző adatokat tükröz.
            </div>
            <img src={fifth} alt=' ' />
            <div>
              <strong>5. ábra: </strong>Kerékpár, személygépjármű és/vagy legalább „B” kategóriájú gépjárművezetői engedély meglétének gyakorisága a válaszadók között. (fő) Forrás: [x] Glász Attila szerkesztése
            </div>
            <div>
              Ennek a tanulmánynak az eredménye is alátámasztja, hogy az emberek többsége rendelkezik kerékpárral. A kérdőívre válaszolók 86%-a, azaz 927 ember háztartásában található bicikli, közülük 601 résztvevőnek van jogosítványa és személygépjárműve is.
            </div>
            <div>
              A kérdőív 19 kérdésből 4 foglalkozik konkrétan a kerékpározási szokásokkal. Ezt az alfejezetet összesen 746-an töltötték ki, azok, akik saját bevallásuk szerint szoktak a városon belül kerékpározni. A kérdésekből előszőr is választ kapunk a használati gyakoriságra az időjárás függvényében. A válaszadók többsége télen nem használja a kerékpárt, azonban a többi évszakban többségben vannak azok, akik a mindennapokban, vagy heti több alkalommal is bicikliznek. Ehhez kapcsolható a felmérés következő eleme, mely azt vizsgálja, hogy bizonyos tényezők milyen szinten befolyásolják a kerékpárt, mint utazási eszközt választók körét. Az előzményekből következtethetőként, nem meglepő módon az élen az időjárás végzett, de az utazási idő is befolyásolja a biciklis közlekedési mód választását. Harmadik helyen a kerékpáros infrastruktúra megléte fontos szempont.
            </div>
            <h2 id='lorem3'>Kerékpáros infrastruktúra Miskolcon</h2>
            <div>
              Miskolcon a kerékpározásnak hagyománya van, még a II. Világháború után is a biciklizés volt a jellemző közlekedési eszköz. Azonban a közösségi közlekedés fejlődésével, a település képének átalakulásával, az autóra optimalizálódott közlekedéstervezés következtében szinte teljesen eltűnt a kerékpár, mint meghatározó módválasztási eszköz. Az 1990-es évek elején már nem volt kerékpáros létesítménye a településnek (MVK Zrt., 2013). A kerékpáros közlekedés az infrastruktúra hiányosságai miatt nem vonzó Miskolcon, az utóbbi időkben tettek lépéseket a kerékpárhálózat többé-kevésbé sikeres kiépítésére. Jelenleg is zajlik a kerékpáros infrastruktúra fejlesztése, a projekt 10 kilométernyi részben felfestéssel, részben különálló kerékpárút építésével fog elkészülni, amely az ipari területet fogja összekötni a belvárossal. A város tervei alapján a környezetbarát közlekedés és a zöld Miskolc érdekében 2021-re minden városrész elérhető lesz biciklivel.
            </div>
            <div>
              <strong>2. táblázat: </strong>Miskolc nyomvonalas kerékpárforgalmi létesítményeinek átadási év, helyszín, típus és megítélés szerinti listája
              Forrás: [x], [y] és tapasztalat alapján saját szerkesztés
            </div>
            <table style={{ width: '90%' }}>
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
                  <td>Észak-Déli kerékpárút I. üteme (Csabai kapu - Ifjúság u. - Katalin u. - Bajcsy-Zsilinszky u)</td>
                  <td>részben elválasztás nélküli, részben osztóvonallal elválasztott kétirányú, egyoldali gyalog- és kerékpárút</td>
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
                  <td>Nem korszerű és nem biztonságos, de 12 km hosszával a város legnagyobb kerékpárforgalmi nyomvonal</td>
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
                  <td>kivitelezés alatt áll, többségében a járda átalakításával gyalog- és kerékpárút</td>
                  <td>a szakasz jelenleg kivitelezés alatt áll</td>
                </tr>
              </tbody>
            </table>
          </Text>
        </Container>
      </ThemeProvider>
    )
  }

}
