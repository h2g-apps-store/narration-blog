import usePagination from "../../hooks/usePaginnation";
import ItemArticle from "./ItemArticle";

function ArticleList() {
  const data = [
    {
      _id: "article-numero-2001",
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Gabrielle Olya",
      title: "8 Electric Cars You May Regret Buying",
      description:
        "Whether you want to save money on gas or want to be more environmentally friendly, an electric vehicle can be an appealing option. But with so many EV models...",
      url: "https://finance.yahoo.com/news/8-electric-cars-may-regret-210013014.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/YHqm_HvpSxsScuQD0Tdvwg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/gobankingrates_644/cc0b11b5206080f220b78f915b9fb1e3",
      publishedAt: "2023-04-04T21:30:09Z",
      content:
        "Whether you want to save money on gas or want to be more environmentally friendly, an electric vehicle can be an appealing option. But with so many EV models on the market, it can be hard to know whi… [+4384 chars]",
    },
    {
      _id: "article-numero-2002",
      source: {
        id: "the-washington-times",
        name: "The Washington Times",
      },
      author: "Jennifer Harper",
      title:
        "Forbes' 'Billionaire List' comes out -- a bit slimmer than last year",
      description:
        'Could one of the most elite populations on the planet be losing members? It looks like that way, according to Forbes\' annual "World Billionaires List," which was released Tuesday. "Globally, we counted 2,640 ten-figure fortunes, down from 2,668 last year. Alt…',
      url: "https://www.washingtontimes.com/news/2023/apr/4/inside-beltway-forbes-world-billionaire-list-bit-s/",
      urlToImage:
        "https://twt-thumbs.washtimes.com/media/image/2023/04/04/BELTWAY_bb0f7b2edf09c41c5a0f6a7067009f77_c0-219-3918-2504_s1200x700.jpg?b51f1677e80f4be69fa5eb805c1f7f53ff045474",
      publishedAt: "2023-04-04T21:28:18Z",
      content:
        "NEWS AND OPINION:\r\nCould one of the most elite populations on the planet be losing members? It looks like that way, according to Forbes annual World Billionaires List, which was released Tuesday.\r\nGl… [+5868 chars]",
    },
    {
      _id: "article-numero-2003",
      source: {
        id: null,
        name: "Www.df.cl",
      },
      author: "Diario Financiero, Benjamín Pescio",
      title:
        "Dogecoin llega a máximos de 2023 gracias al sorpresivo cambio de logo en Twitter",
      description:
        "La criptodivisa se disparó 25,5% desde que el Shiba Inu reemplazó al pájaro azul de Twitter.",
      url: "https://www.df.cl/mercados/bolsa-monedas/dogecoin-llega-a-maximos-de-2023-gracias-al-sorpresivo-cambio-de-logo-en",
      urlToImage:
        "https://www.df.cl/noticias/site/artic/20230404/imag/foto_0000001420230404171628/397127213.jpg",
      publishedAt: "2023-04-04T21:25:00Z",
      content:
        "Dogecoin, la criptomoneda inspirada en el meme de Shiba Inu, se negocia con un alza de más de 25% desde que el empresario Elon Musk puso la imagen del perro en la página inicial de Twitter, red socia… [+1779 chars]",
    },
    {
      _id: "article-numero-2004",
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title: "Joe Biden Says Tech Companies Must Ensure AI Products Are Safe",
      description:
        "President Joe Biden said at a meeting of advisors on the rapidly emerging artificial intelligence sector Tuesday that the jury is still out on whether AI poses a danger to society.",
      url: "https://www.ndtv.com/world-news/joe-biden-says-tech-companies-must-ensure-ai-products-are-safe-3921118",
      urlToImage:
        "https://c.ndtvimg.com/2023-01/avicoqro_joe-biden-snl_625x300_23_January_23.jpg",
      publishedAt: "2023-04-04T21:23:49Z",
      content:
        "Joe Biden said that Tech companies should make sure that AI products are safe.\r\nWashington: President Joe Biden said at a meeting of advisors on the rapidly emerging artificial intelligence sector Tu… [+1461 chars]",
    },
    {
      _id: "article-numero-2005",
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "fortune.com",
      title:
        "Morgan Stanley analysts forecast something ‘worse than in the Great Financial Crisis’ for commercial real estate",
      description:
        "After the banking crisis, could the next domino be all those empty office buildings in your downtown? Investors and economists are sounding the alarm about the commercial real estate market, seeing trouble ahead with refinancing. This sector has been hit hard…",
      url: "https://biztoc.com/x/fd571f6fae23cf7c",
      urlToImage: "https://c.biztoc.com/p/fd571f6fae23cf7c/og.webp",
      publishedAt: "2023-04-04T21:16:12Z",
      content:
        "After the banking crisis, could the next domino be all those empty office buildings in your downtown? Investors and economists are sounding the alarm about the commercial real estate market, seeing t… [+308 chars]",
    },
    {
      _id: "article-numero-2006",
      source: {
        id: null,
        name: "heise online",
      },
      author: "Daniel AJ Sokolov",
      title:
        'Tesla darf mit "0g CO2/km" werben – Umweltbilanz der Firma ist egal',
      description:
        "Tesla verkauft Abgaszertifikate, damit Autos anderer Hersteller mehr ausstoßen dürfen. Das muss Tesla in der Werbung nicht offenlegen, urteilt das LG Berlin.​",
      url: "https://www.heise.de/news/Tesla-darf-mit-0g-CO2-km-werben-Umweltbilanz-der-Firma-ist-egal-8545868.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/1/0/6/2/4/Tesla_Sonnenenergie-0bbd83cd0952f040.jpg",
      publishedAt: "2023-04-04T21:13:00Z",
      content:
        '"CO2-Emissionen 0g/km" führt der Elektroauto-Hersteller Tesla auf seiner Webseite auf. Das sei irreführend, meint der Bundesverband der Verbraucherzentralen (VZBV). Er hat Tesla wegen Unlauteren Wett… [+3026 chars]',
    },
    {
      _id: "article-numero-2007",
      source: {
        id: null,
        name: "Cointelegraph",
      },
      author: "Adrian J. Permal",
      title: "¿Llega Dogecoin a Twitter? Mira The Market Report",
      description:
        "En el episodio de esta semana de The Market Report, el experto residente de Cointelegraph explica por qué Dogecoin ha estado subiendo y qué tiene que ver con Twitter y Elon Musk.\n \nEsta semana en The Market Report, el analista y escritor de Cointelegraph, Mar…",
      url: "https://es.cointelegraph.com/news/is-dogecoin-coming-to-twitter-watch-the-market-report",
      urlToImage:
        "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2023-04/a874e362-ec4c-4a83-9148-9882d22540ca.jpg",
      publishedAt: "2023-04-04T21:05:00Z",
      content:
        "Esta semana en The Market Report, el analista y escritor de Cointelegraph, Marcel Pechman, desglosa todo lo que ha estado sucediendo entre Twitter, Elon Musk y Dogecoin (DOGE). También cubre los rumo… [+3715 chars]",
    },
    {
      _id: "article-numero-2008",
      source: {
        id: null,
        name: "Motley Fool",
      },
      author: "newsfeedback@fool.com (Parkev Tatevosian, CFA)",
      title: "Best Stock to Buy: Tesla vs. SoFi",
      description:
        "Let's compare two of the most popular stocks in the market today.",
      url: "https://www.fool.com/investing/2023/04/04/best-stock-to-buy-tesla-vs-sofi/",
      urlToImage:
        "https://g.foolcdn.com/editorial/images/727128/coffee-please-19.jpg",
      publishedAt: "2023-04-04T20:55:41Z",
      content:
        "Parkev Tatevosian, CFA has no position in any of the stocks mentioned. The Motley Fool has positions in and recommends Tesla. The Motley Fool has a disclosure policy.\r\nParkev Tatevosian is an affilia… [+247 chars]",
    },
    {
      _id: "article-numero-2009",
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "chicagotribune.com",
      title:
        "Latest Forbes list shows Musk, Trump, and others are worth less, while Illinois lost its wealthiest resident",
      description:
        "Forbes published its annual billionaires list Tuesday and for the first time in years, hedge fund manager Ken Griffin is not the richest person in Illinois. That’s because Griffin, 54, is now the richest person in Florida after moving his investment firm Cita…",
      url: "https://biztoc.com/x/825441eb75110bae",
      urlToImage: "https://c.biztoc.com/p/825441eb75110bae/og.webp",
      publishedAt: "2023-04-04T20:50:30Z",
      content:
        "Forbes published its annual billionaires list Tuesday and for the first time in years, hedge fund manager Ken Griffin is not the richest person in Illinois.Thats because Griffin, 54, is now the riche… [+303 chars]",
    },
    {
      _id: "article-numero-2010",
      source: {
        id: null,
        name: "MobileSyrup",
      },
      author: "Karandeep Oberoi",
      title: "Cybertruck production line gets Musk’s stamp of approval",
      description:
        "Late in March, Tesla’s Cybertruck was spotted on the roads, undergoing a stringent steering test. Now, a week later, Tesla CEO Elon Musk is hyping up the long-delayed truck. According to a tweet, Musk recently toured the Cybertruck production line in the Texa…",
      url: "https://mobilesyrup.com/2023/04/04/cybertruck-production-line-gets-musks-stamp-of-approval/",
      urlToImage:
        "https://cdn.mobilesyrup.com/wp-content/uploads/2022/07/cybertruck-1.jpg",
      publishedAt: "2023-04-04T20:49:16Z",
      content:
        "Late in March, Tesla’s Cybertruck was spotted on the roads, undergoing a stringent steering test.\r\nNow, a week later, Tesla CEO Elon Musk is hyping up the long-delayed truck.\r\nAccording to a tweet, M… [+1202 chars]",
    },
    {
      _id: "article-numero-2011",
      source: {
        id: null,
        name: "Eldiario.es",
      },
      author: "Kari Paul",
      title:
        "Un extrabajador negro recibe 3,2 millones de dólares en una demanda por acoso racial en una fábrica de Tesla",
      description:
        "Tesla deberá pagar alrededor de 3,2 millones de dólares (2,93 millones de euros) a un exempleado negro después de que un jurado federal de San Francisco dictaminara que el fabricante de vehículos eléctricos no impidió un caso grave de acoso racial en su plant…",
      url: "https://www.eldiario.es/economia/extrabajador-negro-recibe-3-2-millones-dolares-demanda-acoso-racial-fabrica-tesla_1_10096439.html",
      urlToImage:
        "https://static.eldiario.es/clip/d8c5a479-cb59-4bb4-be04-c9b4e516cc5d_facebook-watermarked-aspect-ratio_default_0.jpg",
      publishedAt: "2023-04-04T20:47:29Z",
      content:
        "Tesla deberá pagar alrededor de 3,2 millones de dólares (2,93 millones de euros) a un exempleado negro después de que un jurado federal de San Francisco dictaminara que el fabricante de vehículos elé… [+107 chars]",
    },
    {
      _id: "article-numero-2012",
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "foxbusiness.com",
      title: "Billionaires Bezos, Musk slide in Forbes World's Richest list",
      description:
        "Amazon founder Jeff Bezos and Tesla CEO Elon Musk reportedly both saw their net worths decrease by tens of billions of dollars, causing their rankings on Forbes’ yearly list of the world’s richest people to slide by one spot in 2023. The world has a total of …",
      url: "https://biztoc.com/x/4f0723816e182db1",
      urlToImage: "https://c.biztoc.com/p/4f0723816e182db1/og.webp",
      publishedAt: "2023-04-04T20:46:05Z",
      content:
        "Amazon founder Jeff Bezos and Tesla CEO Elon Musk reportedly both saw their net worths decrease by tens of billions of dollars, causing their rankings on Forbes yearly list of the worlds richest peop… [+316 chars]",
    },
    {
      _id: "article-numero-2013",
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "businessinsider.com",
      title:
        "Jeff Bezos was the biggest net-worth loser in the last year, with his fortune dropping $57 billion, according to Forbes",
      description:
        "Of all tech billionaires, Amazon founder Jeff Bezos saw the biggest hit to his net worth in the past 12 months, according to a new Forbes ranking. Pablo Martinez Monsivais, File/Associated Press Forbes' annual ranking of the world's richest people has some bi…",
      url: "https://biztoc.com/x/961408bb50499755",
      urlToImage: "https://c.biztoc.com/p/961408bb50499755/og.webp",
      publishedAt: "2023-04-04T20:36:05Z",
      content:
        "Of all tech billionaires, Amazon founder Jeff Bezos saw the biggest hit to his net worth in the past 12 months, according to a new Forbes ranking.Pablo Martinez Monsivais, File/Associated PressForbes… [+328 chars]",
    },
    {
      _id: "article-numero-2014",
      source: {
        id: null,
        name: "Chicago Tribune",
      },
      author: "Robert Channick",
      title:
        "Latest Forbes list shows Musk, Trump, and others are worth less, while Illinois lost its wealthiest resident",
      description:
        "For the first time in years, hedge fund billionaire Ken Griffin is the not the richest person in Illinois on the annual Forbes list",
      url: "https://www.chicagotribune.com/business/ct-biz-forbes-billionaire-list-illinois-20230404-2umj4jfs75dmviyxuxezeeukcm-story.html",
      urlToImage:
        "https://www.chicagotribune.com/resizer/cp33gGowGoZyZRiG6XtVzJ2SdVE=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/tronc/S6ODPL3SXBDXDD2FV4MNW53TXU",
      publishedAt: "2023-04-04T20:35:28Z",
      content:
        "Forbes published its annual billionaires list Tuesday and for the first time in years, hedge fund manager Ken Griffin is not the richest person in Illinois.\r\nThats because Griffin, 54, is now the ric… [+2770 chars]",
    },
    {
      _id: "article-numero-2015",
      source: {
        id: null,
        name: "Terra.com.br",
      },
      author: "Redação Byte",
      title: "Tesla deve pagar R$ 15 milhões a ex-funcionário por racismo",
      description:
        "Empresa é acusada de não agir quando recebeu reclamações de palavras racistas e suásticas desenhadas em fábrica na Califórnia",
      url: "https://www.terra.com.br/byte/tesla-deve-pagar-r-15-milhoes-a-ex-funcionario-por-racismo,c95adc195bf9e64d45bdadeaf556603bf1k0rbih.html",
      urlToImage:
        "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2023/04/04/1024px-new_teslas_at_the_factory-1hrs2ge888x88.jpg",
      publishedAt: "2023-04-04T20:34:47Z",
      content:
        "A montadora Tesla foi condenada pela Justiça dos Estados Unidos a pagar cerca de US$ 3,2 milhões (algo em torno de R$ 15 milhões) a um ex-funcionário por conta de episódios de racismo em sua unidade … [+2105 chars]",
    },
    {
      _id: "article-numero-2016",
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "entrepreneur.com",
      title: "Why Did the Twitter Logo Change to the Doge Meme?",
      description:
        "Many eagle-eyed Twitter fans noticed on Monday that the social media platform's standard blue bird icon had been swapped out for the ever-popular Doge meme. The illustration of the Shiba Inu dog, which has become the unofficial symbol for the Musk-backed cryp…",
      url: "https://biztoc.com/x/6ba96f99070d4166",
      urlToImage: "https://c.biztoc.com/p/6ba96f99070d4166/og.webp",
      publishedAt: "2023-04-04T20:30:05Z",
      content:
        "Many eagle-eyed Twitter fans noticed on Monday that the social media platform's standard blue bird icon had been swapped out for the ever-popular Doge meme.The illustration of the Shiba Inu dog, whic… [+290 chars]",
    },
    {
      _id: "article-numero-2017",
      source: {
        id: null,
        name: "Jalopnik",
      },
      author: "Erik Shilling",
      title: "Nikola Is Still Desperate",
      description:
        "It was on Wednesday when Nikola, the highly-troubled startup electric truck startup, filed paperwork with the Securities and Exchange Commission indicating that they were selling up to $100 million worth of stock to Antara Capital, a fund that has previously …",
      url: "https://jalopnik.com/nikola-needs-money-sells-100-million-stock-at-discount-1850299353",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/82cea9f9c02fc10cd951d83b2c88d3f5.jpg",
      publishedAt: "2023-04-04T20:30:00Z",
      content:
        "It was on Wednesday when Nikola, the highly-troubled startup electric truck startup, filed paperwork with the Securities and Exchange Commission indicating that they were selling up to $100 million w… [+2397 chars]",
    },
    {
      _id: "article-numero-2018",
      source: {
        id: null,
        name: "FRANCE 24 English",
      },
      author: "FRANCE24",
      title:
        "Wall Street termine en légère baisse, distraite par l'affaire Trump",
      description:
        "L'indice Dow Jones a cédé 0,59% à 33.402,38 points, le Nasdaq, à dominante technologique 0,52% à 12.126,33 points et l'indice élargi S&P 500 0,58% à 4.100,60 points.\n\n\"Il y avait moins d'activité sur le marché aujourd'hui parce qu'on est tous un peu distraits…",
      url: "https://www.france24.com/fr/info-en-continu/20230404-wall-street-termine-en-l%C3%A9g%C3%A8re-baisse-distraite-par-l-affaire-trump",
      urlToImage:
        "https://s.france24.com/media/display/c39f6748-c1e1-11ed-bf53-005056bf30b7/w:1280/p:16x9/a6dfb92c1f0e8d6575e11007244e49b16196085f.jpg",
      publishedAt: "2023-04-04T20:28:09Z",
      content:
        "New York (AFP) Wall Street a clôturé légèrement dans le rouge mardi après des prises de bénéfices dans un marché sans guère de volume, un peu distrait par la saga judiciaire de l'ancien président Don… [+3721 chars]",
    },
    {
      _id: "article-numero-2019",
      source: {
        id: null,
        name: "Motley Fool",
      },
      author: "newsfeedback@fool.com (Matthew Frankel, CFP®)",
      title: "What Is an Accredited Investor?",
      description:
        "Accredited investors get access to investments not available to the general public. Here's how to tell if you meet the criteria.",
      url: "https://www.fool.com/terms/a/accredited-investor/",
      urlToImage:
        "https://m.foolcdn.com/media/dubs/images/10-older-investor.width-600.jpg",
      publishedAt: "2023-04-04T20:26:59Z",
      content:
        "There are some investment opportunities that are open to the public, such as the stock market. But there are also some investments that not everyone can participate in, such as private equity deals, … [+4996 chars]",
    },
    {
      _id: "article-numero-2020",
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "u.today",
      title: "Ancient Dogecoin Wallet Suddenly Awakens After 9 Years: Details",
      description:
        "A long-dormant Dogecoin wallet has suddenly sprung to life after 9.3 years, sending ripples through the community A dormant address holding 1,215,614 DOGE ($116,460) has been activated after 9.3 years of inactivity, causing a stir in the Dogecoin community. T…",
      url: "https://biztoc.com/x/1da514e4e89669a1",
      urlToImage: "https://c.biztoc.com/p/1da514e4e89669a1/og.webp",
      publishedAt: "2023-04-04T20:20:09Z",
      content:
        "A long-dormant Dogecoin wallet has suddenly sprung to life after 9.3 years, sending ripples through the communityA dormant address holding 1,215,614 DOGE ($116,460) has been activated after 9.3 years… [+268 chars]",
    },
    {
      _id: "article-numero-2021",
      source: {
        id: null,
        name: "U.Today",
      },
      author: "U.Today",
      title: "Ancient Dogecoin Wallet Suddenly Awakens After 9 Years: Details",
      description:
        "A long-dormant Dogecoin wallet has suddenly sprung to life after 9.3 years, sending ripples through the community",
      url: "https://u.today/ancient-dogecoin-wallet-suddenly-awakens-after-9-years-details",
      urlToImage:
        "https://u.today/sites/default/files/styles/twitter/public/2023-04/21580.jpeg",
      publishedAt: "2023-04-04T20:17:13Z",
      content:
        "A dormant address holding 1,215,614 DOGE ($116,460) has been activated after 9.3 years of inactivity, causing a stir in the Dogecoin community.\r\nThis awakening coincides with a recent spike in global… [+1023 chars]",
    },
    {
      _id: "article-numero-2022",
      source: {
        id: null,
        name: "Tech Xplore",
      },
      author: "Science X",
      title: "GM passes Ford to take No. 2 spot in EV sales behind Tesla",
      description:
        "General Motors rode strong first-quarter sales of the Chevrolet Bolt to bump crosstown rival Ford out of second place in the U.S. electric vehicle sales race.",
      url: "https://techxplore.com/news/2023-04-gm-ford-ev-sales-tesla.html",
      urlToImage:
        "https://scx2.b-cdn.net/gfx/news/hires/2023/gm-passes-ford-to-take.jpg",
      publishedAt: "2023-04-04T20:15:22Z",
      content:
        "General Motors rode strong first-quarter sales of the Chevrolet Bolt to bump crosstown rival Ford out of second place in the U.S. electric vehicle sales race.\r\nBut GM's EV sales of 20,670 were still … [+2166 chars]",
    },
    {
      _id: "article-numero-2023",
      source: {
        id: null,
        name: "Uol.com.br",
      },
      author: null,
      title: null,
      description:
        "Lemann perde posto de maior bilionário do Brasil para Vicky Safra, diz Forbes",
      url: "https://www1.folha.uol.com.br/mercado/2023/04/lemann-perde-posto-de-maior-bilionario-do-brasil-para-vicky-safra-diz-forbes.shtml",
      urlToImage:
        "https://f.i.uol.com.br/fotografia/2023/04/04/1680629175642c5db75aa0e_1680629175_3x2_rt.jpg",
      publishedAt: "2023-04-04T20:08:18Z",
      content:
        "Vicky Safra, 70, e seus quatro filhos ocupam, pela primeira vez, o topo da lista de bilionários brasileiros, divulgada pela Forbes nesta terça (4).\r\nA fortuna herdada por eles do banqueiro Joseph Saf… [+2503 chars]",
    },
    {
      _id: "article-numero-2024",
      source: {
        id: null,
        name: "Motley Fool",
      },
      author: "newsfeedback@fool.com (Matthew DiLallo)",
      title: "What Is the Fortune 100?",
      description:
        "The Fortune 100 are the top 100 companies in Fortune's annual list of the 500 companies by revenue.",
      url: "https://www.fool.com/terms/f/fortune-100/",
      urlToImage:
        "https://m.foolcdn.com/media/dubs/images/original_imageshttpsg.foolcdn.comeditorialimag.width-600_u2jxuZQ.jpg",
      publishedAt: "2023-04-04T20:05:16Z",
      content:
        "The Fortune 100 are the top 100 companies within the Fortune 500, an annual list published by Fortune magazine of the 500 largest U.S. companies. The magazine ranks companies in the Fortune 500 by re… [+17454 chars]",
    },
    {
      _id: "article-numero-2025",
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "seattletimes.com",
      title: "Jury awards $3.2 million to ex-Tesla worker for racial abuse",
      description:
        "A federal jury has awarded nearly $3.2 million in damages to a Black former worker at a Tesla factory in California. #tesla",
      url: "https://biztoc.com/x/d4f286752a29f574",
      urlToImage: "https://c.biztoc.com/p/d4f286752a29f574/og.webp",
      publishedAt: "2023-04-04T20:05:13Z",
      content:
        "A federal jury has awarded nearly $3.2 million in damages to a Black former worker at a Tesla factory in California. \r\n#tesla\r\n This story appeared on seattletimes.com, 2023-04-04.",
    },
    {
      _id: "article-numero-2026",
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "zerohedge.com",
      title:
        'Gordon Johnson: Despite Positive China Numbers, Tesla\'s Q1 Earnings Setting Up For "Epic Disaster"',
      description:
        "Gordon Johnson: Despite Positive China Numbers, Tesla's Q1 Earnings Setting Up For \"Epic Disaster\" Tesla's 35% rise in sales in China for the month of March may be good news for today, but it likely won't change what will be a disappointing Q1 for the company…",
      url: "https://biztoc.com/x/799e09d4bf3b1589",
      urlToImage: "https://c.biztoc.com/p/799e09d4bf3b1589/og.webp",
      publishedAt: "2023-04-04T20:04:05Z",
      content:
        "Gordon Johnson: Despite Positive China Numbers, Tesla's Q1 Earnings Setting Up For \"Epic Disaster\"\r\nTesla's 35% rise in sales in China for the month of March may be good news for today, but it likely… [+280 chars]",
    },
    {
      _id: "article-numero-2027",
      source: {
        id: null,
        name: "Challenges",
      },
      author: "AFP",
      title:
        "Wall Street termine en légère baisse, distraite par l'affaire Trump",
      description:
        "Wall Street a clôturé légèrement dans le rouge mardi après des prises de bénéfices dans un marché sans guère de volume, un peu distrait par la saga judiciaire de l'ancien président Donald Trump à New York.\nL'indice Dow Jones a cédé 0,59% à 33.402,38 points, l…",
      url: "https://www.challenges.fr/economie/wall-street-termine-en-legere-baisse-distraite-par-l-affaire-trump_851254",
      urlToImage:
        "https://www.challenges.fr/img/cha/placeholders/placeholder_1000x750.jpg",
      publishedAt: "2023-04-04T20:01:12Z",
      content:
        "Wall Street a clôturé légèrement dans le rouge mardi après des prises de bénéfices dans un marché sans guère de volume, un peu distrait par la saga judiciaire de l'ancien président Donald Trump à New… [+3694 chars]",
    },
    {
      _id: "article-numero-2028",
      source: {
        id: null,
        name: "Cointelegraph",
      },
      author: "Cointelegraph By Adrian J. Permal",
      title: "Is Dogecoin coming to Twitter? Watch The Market Report",
      description:
        "On this week’s episode of The Market Report, Cointelegraph’s resident expert explains why Dogecoin has been pumping and what it has to do with Twitter and Elon Musk.",
      url: "https://cointelegraph.com/news/is-dogecoin-coming-to-twitter-watch-the-market-report",
      urlToImage:
        "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2023-04/a874e362-ec4c-4a83-9148-9882d22540ca.jpg",
      publishedAt: "2023-04-04T20:00:00Z",
      content:
        "This week on The Market Report, Cointelegraph analyst and writer Marcel Pechman breaks down everything that has been happening between Twitter, Elon Musk and Dogecoin (DOGE). He also covers the Chang… [+2576 chars]",
    },
    {
      _id: "article-numero-2029",
      source: {
        id: null,
        name: "Vnexpress.net",
      },
      author: "VnExpress",
      title: "10 người giàu nhất thế giới năm 2023",
      description:
        "Ông chủ LVMH Bernard Arnault dẫn đầu danh sách của Forbes năm nay và là người duy nhất có tài sản trên 200 tỷ USD.",
      url: "https://vnexpress.net/10-nguoi-giau-nhat-the-gioi-nam-2023-4589519.html",
      urlToImage:
        "https://vcdn1-kinhdoanh.vnecdn.net/2023/04/04/bernard-arnault-7907-168062322-2249-3450-1680623565.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=UustW_BeZcYM1XOvQbzL9Q",
      publishedAt: "2023-04-04T20:00:00Z",
      content:
        "Ông ch LVMH Bernard Arnault dn u danh sách ca Forbes nm nay và là ngi duy nht có tài sn trên 200 t USD.1. Bernard Arnault\r\nTài sn: 211 t USD\r\nNgun tài sn: LVMH\r\nQuc tch: Pháp\r\nBernard Arnault nm nay … [+3093 chars]",
    },
    {
      _id: "article-numero-2030",
      source: {
        id: null,
        name: "Cheezburger.com",
      },
      author: "Ada Elder, Ada Elder",
      title: "Funny Tweets That Are Fresh, Never Frozen (April 4, 2023)",
      description:
        "At this point we're all well aware that social media has become a powerful tool for driving cultural trends and shaping popular discourse. From political movements to pop culture crazes, social media has played a central role in many of the most significant e…",
      url: "https://cheezburger.com/20002821/funny-tweets-that-are-fresh-never-frozen-april-4-2023",
      urlToImage:
        "https://i.chzbgr.com/thumb1200/20002821/h7DE77EFD/humor-jokes-lol-twitter-memes-funny-tweets-funny-20002821",
      publishedAt: "2023-04-04T20:00:00Z",
      content:
        "At this point we're all well aware that social media has become a powerful tool for driving cultural trends and shaping popular discourse. From political movements to pop culture crazes, social media… [+1320 chars]",
    },
    {
      _id: "article-numero-2031",
      source: {
        id: null,
        name: "OilPrice.com",
      },
      author: "Julianne Geiger",
      title:
        "Ford Gets Outsold By GM In EV Market As The Two Duke It Out For No. 2 Spot",
      description:
        "GM outsold Ford when it comes to electric vehicles by almost two-to-one in the first quarter of 2023 as production troubles plagued the former No. 2 EV seller behind Tesla. Ford sold 10,866 EVs in Q1 this year. While that’s up 41% from Q1 2022, it’s about 50%…",
      url: "https://oilprice.com/Latest-Energy-News/World-News/Ford-Gets-Outsold-By-GM-In-EV-Market-As-The-Two-Duke-It-Out-For-No-2-Spot.html",
      urlToImage:
        "https://d32r1sh890xpii.cloudfront.net/news/718x300/2023-04-04_x25vys0lgy.jpg",
      publishedAt: "2023-04-04T20:00:00Z",
      content:
        "Energy companies are increasingly turning…\r\nChina's top lithium producers agree…\r\nBy Julianne Geiger - Apr 04, 2023, 3:00 PM CDTGM outsold Ford when it comes to electric vehicles by almost two-to-one… [+1682 chars]",
    },
    {
      _id: "article-numero-2032",
      source: {
        id: null,
        name: "El Financiero",
      },
      author: "Keith Naughton",
      title:
        "Ventas de autos eléctricos en EU: General Motors desbanca a Ford del segundo sitio; va por Tesla",
      description:
        "General Motors vendió 20 mil 670 autos eléctricos en Estados Unidos entre enero y marzo de este año, mientras que Ford logró colocar 10 mil 886 vehículos eléctricos en el mismo periodo.",
      url: "https://www.elfinanciero.com.mx/empresas/2023/04/04/ventas-de-autos-electricos-en-eu-general-motors-desbanca-a-ford-del-segundo-sitio-va-por-tesla/",
      urlToImage:
        "https://www.elfinanciero.com.mx/resizer/seOBsQQcL4y351UUeDEnnirJ27U=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/R4X2R34WKJE7PJP7C6JADCO2HQ.jpeg",
      publishedAt: "2023-04-04T19:57:17Z",
      content:
        "General Motors superó a Ford Motor en ventas de autos eléctricos en Estados Unidos a un ritmo de casi dos a uno en los primeros tres meses de este  año, al tiempo que los fabricantes de automóviles i… [+2206 chars]",
    },
    {
      _id: "article-numero-2033",
      source: {
        id: null,
        name: "Electrek",
      },
      author: "Michelle Lewis",
      title:
        "This pioneering floating offshore wind platform will be piloted in Portugal",
      description:
        "Dublin-based floating offshore wind platform developer Gazelle Wind Power is teaming up with Portuguese renewable energy developer WAM Horizon to pilot its platform in Portugal – a country aiming to achieve 10 gigawatts (GW) of offshore wind by 2030. \n more…\n…",
      url: "https://electrek.co/2023/04/04/floating-offshore-wind-portugal/",
      urlToImage:
        "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/04/Gazelle-floating-wind.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-04-04T19:56:08Z",
      content:
        "Dublin-based floating offshore wind platform developer Gazelle Wind Power is teaming up with Portuguese renewable energy developer WAM Horizon to pilot its platform in Portugal a country aiming to ac… [+1985 chars]",
    },
    {
      _id: "article-numero-2034",
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "thestreet.com",
      title:
        "Here's Why GM Only Sold 2 of Their Hotly Anticipated Tesla-Killers in Q1",
      description:
        "The vehicle has had some setbacks, but GM is predicting big things for its EVs in the second half of the year. It's been a hard road for the Hummer. A civilian version of the M998 Humvee, the Hummer was first marketed in 1992 and quickly became an environment…",
      url: "https://biztoc.com/x/041f1eb1f08010cb",
      urlToImage: "https://c.biztoc.com/p/041f1eb1f08010cb/og.webp",
      publishedAt: "2023-04-04T19:56:05Z",
      content:
        "The vehicle has had some setbacks, but GM is predicting big things for its EVs in the second half of the year.It's been a hard road for the Hummer.A civilian version of the M998 Humvee, the Hummer wa… [+311 chars]",
    },
    {
      _id: "article-numero-2035",
      source: {
        id: null,
        name: "Investing.com",
      },
      author: "Investing.com",
      title:
        "Stellantis and BMW in talks with Panasonic to build battery plants",
      description:
        "Stellantis and BMW in talks with Panasonic to build battery plants",
      url: "https://www.investing.com/news/stock-market-news/stellantis-and-bmw-in-talks-with-panasonic-to-build-battery-plants-432SI-3048994",
      urlToImage: "https://i-invdn-com.investing.com/news/LYNXNPEC6B0G9_L.jpg",
      publishedAt: "2023-04-04T19:55:48Z",
      content:
        "By Michael Elkins \r\nThe Wall Street Journal reports Tuesday, citing people familiar with the matter, that Stellantis (NYSE:STLA) and BMW (ETR:BMWG) are in talks with Panasonic (TYO:6752) about teamin… [+1069 chars]",
    },
    {
      _id: "article-numero-2036",
      source: {
        id: null,
        name: "Hyperallergic",
      },
      author: "Annabel Keenan",
      title: "Minerva Cuevas Strikes the Gods of Environmental Destruction",
      description:
        "In taking aim at contemporary corporations, especially oil companies, Cuevas draws a connection between colonization, trade, and the devastation of the natural world.",
      url: "http://hyperallergic.com/812385/minerva-cuevas-strikes-the-gods-of-environmental-destruction/",
      urlToImage:
        "https://hyperallergic-newspack.s3.amazonaws.com/uploads/2023/04/KM-Cuevas-19.jpg",
      publishedAt: "2023-04-04T19:54:17Z",
      content:
        "Minerva Cuevass solo show, In Gods We Trust at kurimanzutto, centers on The Trust (202223), a mural wall relief consisting of 126 panels. As is typical for Cuevas, the work concerns economic and envi… [+4358 chars]",
    },
    {
      _id: "article-numero-2037",
      source: {
        id: null,
        name: "BMWBLOG",
      },
      author: "Horatiu Boeriu",
      title:
        "Report: BMW Allegedly Talks to Access Panasonic’s 4680 battery cells",
      description:
        "According to a report by The Wall Street Journal, BMW has entered into early discussions with Panasonic to provide cylindrical battery cells for their electric vehicles. While Panasonic has been a major supplier of cylindrical-type...",
      url: "https://www.bmwblog.com/2023/04/04/bmw-in-talks-panasonics-4680/",
      urlToImage:
        "https://cdn.bmwblog.com/wp-content/uploads/2022/09/gen6-battery-cylindrical-03.jpg",
      publishedAt: "2023-04-04T19:53:56Z",
      content:
        "According to a report by The Wall Street Journal, BMW has entered into early discussions with Panasonic to provide cylindrical battery cells for their electric vehicles. While Panasonic has been a ma… [+2929 chars]",
    },
    {
      _id: "article-numero-2038",
      source: {
        id: null,
        name: "Slashdot.org",
      },
      author: "feedfeeder",
      title:
        "GM overtakes Ford as second-best seller of EVs in U.S. but still trails Tesla by a wide margin - CNBC",
      description:
        "GM overtakes Ford as second-best seller of EVs in U.S. but still trails Tesla by a wide marginCNBC GM only sold 2 Hummer EVs in Q1. Here's whyFox Business Stellantis Post It's Sales Numbers For The United States In Q1 2023!Mopar Insiders Ford's first-quarter …",
      url: "https://slashdot.org/firehose.pl?op=view&amp;id=170691108",
      urlToImage: null,
      publishedAt: "2023-04-04T19:52:52Z",
      content:
        "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way.",
    },
    {
      _id: "article-numero-2039",
      source: {
        id: null,
        name: "Montevideo.com.uy",
      },
      author: "Montevideo Portal",
      title:
        "Las ventas de Tesla vehículos eléctricos hechos en China aumentaron un 35% en marzo",
      description:
        "Por otro lado, la compañía automotriz aumentó las entregas de coches un 36% en el primer trimestre del año.",
      url: "https://www.montevideo.com.uy/Ciencia-y-Tecnologia/Las-ventas-de-Tesla-vehiculos-electricos-hechos-en-China-aumentaron-un-35-en-marzo-uc850245",
      urlToImage:
        "https://imagenes.montevideo.com.uy/imgnoticias/202302/_W933_80/835121.jpg",
      publishedAt: "2023-04-04T19:52:00Z",
      content:
        "Tesla vendió en marzo 88.869 vehículos eléctricos hechos en su fábrica en China, según información publicada por la Asociación China de Autos de Pasajeros (CPCA) y consignada por el portal Seeking Al… [+2021 chars]",
    },
    {
      _id: "article-numero-2040",
      source: {
        id: null,
        name: "Iasql.com",
      },
      author: "pombo",
      title: "Show HN: Deploy Stable Diffusion in EC2 Using a SQL Query",
      description:
        "Stable Diffusion is a deep learning, text-to-image model initially released in 2022. It is primarily used to generate detailed images conditioned on text descriptions, though it can also be applied to other tasks such as inpainting, outpainting, and generatin…",
      url: "https://iasql.com/blog/deploy-stable-diffusion/",
      urlToImage:
        "https://iasql.com/img/deploy-stable-diffusion/stable-diffusion-screenshot.png",
      publishedAt: "2023-04-04T19:51:53Z",
      content:
        "Stable Diffusion is a deep learning, text-to-image model initially released in 2022. It is primarily used to generate detailed images conditioned on text descriptions, though it can also be applied t… [+7808 chars]",
    },
    {
      _id: "article-numero-2041",
      source: {
        id: "globo",
        name: "Globo",
      },
      author: null,
      title:
        "Sobe e desce: veja quem está mais rico e quem perdeu dinheiro entre os bilionários de tecnologia em 2023",
      description:
        "Ranking da Forbes mostra que os poderosos da tecnologia estão 'mais pobres' em 2023. De oito nomes, apenas um ganhou mais dinheiro. Montagem com fotos dos bilionários da tecnologia Elon Musk, Jeff Bezos, Larry Ellison, Bill Gates, Larry Page e Sergey Brin\nReu…",
      url: "https://g1.globo.com/tecnologia/noticia/2023/04/04/sobe-e-desce-veja-quem-esta-mais-rico-e-quem-perdeu-dinheiro-entre-os-bilionarios-de-tecnologia-em-2023.ghtml",
      urlToImage:
        "https://s2.glbimg.com/uZI_0NcTz2ng7HBgJ_0znulZiRY=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/N/C/CxFbCNSR2WsDD5shWAfw/montagem-com-bilionarios-da-tecnologia.jpg",
      publishedAt: "2023-04-04T19:50:44Z",
      content:
        "Segundo a publicação, o clube dos bilionários está mais pobre, devido ao aumento das taxas de juros e a desvalorização das ações. \r\nSó na tecnologia, dos oito primeiros colocados, apenas um ganhou ma… [+4987 chars]",
    },
    {
      _id: "article-numero-2042",
      source: {
        id: null,
        name: "CNET",
      },
      author: "Amanda Kooser",
      title: "Twitter Check Marks: What All the Different Colors Mean - CNET",
      description:
        "Blue check mark. Gold check mark. Gray check mark. Let's clear up the confusion over Twitter's rainbow of check marks.",
      url: "https://www.cnet.com/tech/services-and-software/twitter-check-marks-what-all-the-different-colors-mean/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/e624b17f7cdf064bd5ac08596ced938bb25d87b9/hub/2022/11/29/5e957d8e-e043-4ebd-bcdd-7a96c6b3d3b6/twitter-blue-question-mark.jpg?auto=webp&fit=crop&height=630&width=1200",
      publishedAt: "2023-04-04T19:48:00Z",
      content:
        "Twitter has been in a state of flux ever since Tesla and SpaceX CEO Elon Musk paid out $44 billion to take over the social media site in October last year. Big changes are still happening, including … [+4305 chars]",
    },
    {
      _id: "article-numero-2043",
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "washingtonpost.com",
      title: "Jury awards $3.2 million to ex-Tesla worker for racial abuse",
      description:
        "SAN FRANCISCO — A federal jury has awarded nearly $3.2 million in damages to a Black former worker at a Tesla factory in California that has been at the epicenter of racial discrimination allegations hanging over the automaker run by billionaire Elon Musk. Th…",
      url: "https://biztoc.com/x/ae9677f9f631fc21",
      urlToImage: "https://c.biztoc.com/p/ae9677f9f631fc21/og.webp",
      publishedAt: "2023-04-04T19:46:22Z",
      content:
        "SAN FRANCISCO A federal jury has awarded nearly $3.2 million in damages to a Black former worker at a Tesla factory in California that has been at the epicenter of racial discrimination allegations h… [+309 chars]",
    },
    {
      _id: "article-numero-2044",
      source: {
        id: null,
        name: "redmondpie.com",
      },
      author: "Oliver Haslam",
      title: "Tesla Is Running An Earth Day Promo, Here Are The Details",
      description:
        "Tesla is running an Earth Day promo. Here is everything you need to know about it.\nThe post Tesla Is Running An Earth Day Promo, Here Are The Details first appeared on Redmond Pie.",
      url: "https://www.redmondpie.com/tesla-is-running-an-earth-day-promo-here-are-the-details/",
      urlToImage:
        "https://cdn.redmondpie.com/wp-content/uploads/2023/04/tesla-02.jpg",
      publishedAt: "2023-04-04T19:44:10Z",
      content:
        "Tesla has announced a new promotion that will see owners of its cars send in photos of them. The contest will see people win 3,500 Supercharger credits.\r\nNotaTeslaApp reports that the company invited… [+1531 chars]",
    },
    {
      _id: "article-numero-2045",
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "yahoo.com",
      title: "GM passes Ford to take No. 2 spot in EV sales behind Tesla",
      description:
        "General Motors rode strong first-quarter sales of the Chevrolet Bolt to bump crosstown rival Ford out of second place in the U.S. electric vehicle sales race. But GM's EV sales of 20,670 were still far below those of industry leader Tesla, which delivered mor…",
      url: "https://biztoc.com/x/3b1b242a8fea42cf",
      urlToImage: "https://c.biztoc.com/p/3b1b242a8fea42cf/og.webp",
      publishedAt: "2023-04-04T19:44:04Z",
      content:
        "General Motors rode strong first-quarter sales of the Chevrolet Bolt to bump crosstown rival Ford out of second place in the U.S. electric vehicle sales race.But GM's EV sales of 20,670 were still fa… [+317 chars]",
    },
    {
      _id: "article-numero-2046",
      source: {
        id: null,
        name: "Yenicaggazetesi.com.tr",
      },
      author: "Yeniçağ",
      title:
        "﻿O eski halinden eser yok şimdi. Twitter sevdası Elon Musk'ı yaktı",
      description:
        "<table><tr><td>﻿Dünyaca ünlü ekonomi dergisi, milyarderler listesini yayınladı. Listeye göre; bu yıl dünya çapındaki milyarder sayısı 28 kişi azalırken, Tesla ve Twitter'ın sahibi Elon Musk'ın listedeki yeri şaşkınlığa uğrattı.</td></tr></table>",
      url: "https://www.yenicaggazetesi.com.tr/twitter-sevdasi-elon-muski-yakti-650151h.htm",
      urlToImage:
        "https://cdn.yenicaggazetesi.com.tr/news/2023/04/40420232202093441018.jpg",
      publishedAt: "2023-04-04T19:42:00Z",
      content:
        "Amerikan i dünyas dergisi Forbes, Milyarderler Listesi'nde yer alanlarn says bu yl 28 kiilik kayp ile 2 bin 640'a geriledi. Milyarderlerin toplam serveti ise 500 milyar dolar düüle 12,2 trilyon dolar… [+1929 chars]",
    },
    {
      _id: "article-numero-2047",
      source: {
        id: null,
        name: "Snarfed.org",
      },
      author: "Ryan Barrett",
      title: "So long, Twitter API, and thanks for all the fish",
      description:
        "Ryan Barrett, \n\nApr 04, 2023\n\n\n \n \r\nI'm still waiting for the services Twitter says will be cancelled to actually b cancelled, but it does appear it's coming (once the Tesla engineers figure out the code). This article documents the impact on Bridgy, along wi…",
      url: "https://snarfed.org/2023-04-03_so-long-twitter-api-and-thanks-for-all-the-fish",
      urlToImage: "https://snarfed.org/twitter_logo_upside_down.png",
      publishedAt: "2023-04-04T19:40:00Z",
      content:
        "Well, it’s come to this. Twitter is burning, a billionaire owes money, an API will soon get lobotomized, so Bridgy‘s Twitter support will die within the month. Granary‘s and twitter-atom too. The Twi… [+1655 chars]",
    },
    {
      _id: "article-numero-2048",
      source: {
        id: null,
        name: "Www.df.cl",
      },
      author: "Diario Financiero, Bloomberg",
      title:
        "Qué significan los precios más altos del petróleo para la lucha contra el cambio climático",
      description:
        "Luego de que la OPEP+ tomó la decisión de reducir la producción de petróleo, hay una serie de factores que podrían afectar en el proceso de descarbonización, como la guerra de Ucrania, una baja en los costos de las materias primas para producir energías renov…",
      url: "https://www.df.cl/df-lab/sostenibilidad/que-significan-los-precios-mas-altos-del-petroleo-para-la-lucha-contra",
      urlToImage:
        "https://www.df.cl/noticias/site/artic/20230404/imag/foto_0000001220230404084152/IMG_1585.jpeg",
      publishedAt: "2023-04-04T19:40:00Z",
      content:
        "La reacción inmediata a una decisión sorpresa de la OPEP+ de reducir la producción fue bastante sencilla: los precios del petróleo aumentaron al máximo en más de un año. Sin embargo, no está tan clar… [+3929 chars]",
    },
    {
      _id: "article-numero-2049",
      source: {
        id: "time",
        name: "Time",
      },
      author: "Associated Press",
      title:
        "GM Beats Ford To Take Second Spot in U.S. Electric Vehicles Sales Behind Tesla",
      description:
        "General Motors beats out Ford for the second highest number of electric vehicles sales in the U.S., first quarter numbers for 2023 reveal.",
      url: "https://time.com/6268599/gm-beats-ford-ev-2023-first-quarter-sales/",
      urlToImage:
        "https://api.time.com/wp-content/uploads/2023/04/gm-ford-ev-sales-2023-first-quarter-chevrolet-bolt.jpg?quality=85&w=1024&h=628&crop=1",
      publishedAt: "2023-04-04T19:38:34Z",
      content:
        "(DETROIT) — General Motors rode strong first-quarter sales of the Chevrolet Bolt to bump crosstown rival Ford out of second place in the U.S. electric vehicle sales race.\r\nBut GM’s EV sales of 20,670… [+1723 chars]",
    },
    {
      _id: "article-numero-2050",
      source: {
        id: null,
        name: "seattlepi.com",
      },
      author: "By MICHAEL LIEDTKE, AP Technology Writer",
      title: "Jury awards $3.2 million to ex-Tesla worker for racial abuse",
      description:
        "A federal jury has awarded nearly $3.2 million in damages to a Black former worker at a Tesla factory in California. The factory has been at the epicenter of racial discrimination allegations hanging over the automaker run by billionaire Elon Musk. The verdic…",
      url: "https://www.seattlepi.com/business/article/jury-awards-3-2-million-to-ex-tesla-worker-for-17878490.php",
      urlToImage: "https://www.seattlepi.com/img/modules/siteheader/brand.png",
      publishedAt: "2023-04-04T19:36:20Z",
      content:
        "FILE - Vehicles are parked outside the Tesla plant, in Fremont, Calif., on May 12, 2020. A federal jury on Monday, April 3, 2023, has awarded nearly $3.2 million in damages to a former Black worker a… [+3436 chars]",
    },
    {
      _id: "article-numero-2051",
      source: {
        id: null,
        name: "TechSpot",
      },
      author: "TechSpot Trivia",
      title: "Which of these was the most expensive domain name sale?",
      description:
        "According to information released in 2015 by domain name investor George Kirikos, back in 2005 Vegas.com paid $12 million in cash to acquire LasVegas.com and agreed to...",
      url: "https://www.techspot.com/trivia/83-which-most-expensive-domain-name-sale/",
      urlToImage: null,
      publishedAt: "2023-04-04T19:36:00Z",
      content:
        "According to information released in 2015 by domain name investor George Kirikos, back in 2005 Vegas.com paid $12 million in cash to acquire LasVegas.com and agreed to part with a total of $90 millio… [+1497 chars]",
    },
    {
      _id: "article-numero-2052",
      source: {
        id: "independent",
        name: "Independent",
      },
      author: "Michael Liedtke",
      title: "Jury awards $3.2 million to ex-Tesla worker for racial abuse",
      description:
        "A federal jury has awarded nearly $3.2 million in damages to a Black former worker at a Tesla factory in California",
      url: "https://www.independent.co.uk/news/ap-elon-musk-california-san-francisco-gavin-newsom-b2314187.html",
      urlToImage:
        "https://static.independent.co.uk/2023/04/04/20/Tesla_Discrimination_Verdict_42330.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2023-04-04T19:31:06Z",
      content:
        "For free real time breaking news alerts sent straight to your inbox sign up to our breaking news emails\r\nSign up to our free breaking news emails\r\nA federal jury has awarded nearly $3.2 million in da… [+3054 chars]",
    },
    {
      _id: "article-numero-2053",
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "MICHAEL LIEDTKE",
      title: "Jury awards $3.2 million to ex-Tesla worker for racial abuse",
      description:
        "A federal jury has awarded nearly $3.2 million in damages to a Black former worker at a Tesla factory in California that has been at the epicenter of racial ...",
      url: "https://news.yahoo.com/jury-awards-3-2-million-193105706.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/oHZwC.M1loYjj6hS7uTe4Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NDA-/https://media.zenfs.com/en/ap.org/c593e6939cb77349cc49fd22edbf2666",
      publishedAt: "2023-04-04T19:31:05Z",
      content:
        "SAN FRANCISCO (AP) A federal jury has awarded nearly $3.2 million in damages to a Black former worker at a Tesla factory in California that has been at the epicenter of racial discrimination allegati… [+2925 chars]",
    },
    {
      _id: "article-numero-2054",
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "fortune.com",
      title:
        "Morgan Stanley analysts forecast something ‘worse than in the Great Financial Crisis’ for commercial real estate",
      description:
        "After the banking crisis, could the next domino be all those empty office buildings in your downtown? Investors and economists are sounding the alarm about the commercial real estate market, seeing trouble ahead with refinancing. This sector has been hit hard…",
      url: "https://biztoc.com/x/94df4bc448f6ddc1",
      urlToImage: "https://c.biztoc.com/p/94df4bc448f6ddc1/og.webp",
      publishedAt: "2023-04-04T19:28:04Z",
      content:
        "After the banking crisis, could the next domino be all those empty office buildings in your downtown? Investors and economists are sounding the alarm about the commercial real estate market, seeing t… [+308 chars]",
    },
    {
      _id: "article-numero-2055",
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "benzinga.com",
      title:
        "Here's How Much $100 In Dogecoin Could Be Worth If DOGE Hits New All-Time Highs",
      description:
        "Dogecoin DOGE/USD was one of the most popular cryptocurrencies to take the world by storm in 2021. During that time, the meme coin was a trending topic as much as it saw its valuation rise. But since its peak, the value of the coin has fallen back to earth. T…",
      url: "https://biztoc.com/x/8e794631ae487517",
      urlToImage: "https://c.biztoc.com/p/8e794631ae487517/og.webp",
      publishedAt: "2023-04-04T19:26:09Z",
      content:
        "Dogecoin DOGE/USD was one of the most popular cryptocurrencies to take the world by storm in 2021. During that time, the meme coin was a trending topic as much as it saw its valuation rise. But since… [+315 chars]",
    },
    {
      _id: "article-numero-2056",
      source: {
        id: "the-irish-times",
        name: "The Irish Times",
      },
      author: "Colin Gleeson",
      title:
        "Ireland’s nine billionaires have lost a third of their wealth - Forbes",
      description:
        "Turmoil in international markets wipes €17bn off the net wealth of our richest men, Forbes annual list shows",
      url: "https://www.irishtimes.com/business/2023/04/04/irelands-nine-billionaires-have-lost-a-third-of-their-wealth-forbes/",
      urlToImage:
        "https://www.irishtimes.com/resizer/m29ausUU0rFOejJRSJRmbeSTnkE=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/H4MVRVQLQIRG26ZVCRROGTDEAU.jpg",
      publishedAt: "2023-04-04T19:25:49Z",
      content:
        "The party may not be over for Irelands nine billionaires but it is perhaps being dialled down after their collective wealth plummeted by more than a third over the past year, according to the latest … [+4953 chars]",
    },
    {
      _id: "article-numero-2057",
      source: {
        id: null,
        name: "Chip.com.tr",
      },
      author: "CHIP Online",
      title: "Samsung Galaxy Z Flip 5’in kapak ekranı dev gibi olacak",
      description:
        "Samsung’un merakla beklenen telefınu Galaxy Z Flip 5’in arka ekranı ortaya çıktı. Görünüşe göre Samsung, ekranı devasa boyuta çıkaracak.",
      url: "https://www.chip.com.tr/haber/galaxy-z-flip-5in-kapak-ekrani-dev-gibi-olacak_156870.html",
      urlToImage:
        "https://img.chip.com.tr/rcman/Cw1280h720q95gm/storage/files/images/2023/04/04/samsung-galaxy-z-flip-5in-arka-ekrani-ortaya-cikti-dev-gibi-olacak-I8TJ.jpg",
      publishedAt: "2023-04-04T19:22:10Z",
      content:
        "Samsung'un katlanabilir serisi bu yıl Galaxy Z Fold 5 ve Galaxy Z Flip 5'in eklenmesiyle daha da büyüyecek. Her 2 model de hiç şüphesiz Samsung'un katlanabilir telefonlarının 2 taraf arasında boşluk … [+1585 chars]",
    },
    {
      _id: "article-numero-2058",
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "foxbusiness.com",
      title:
        "Bill Gates weighs in on proposed AI pause: Won't 'solve' challenges",
      description:
        'Microsoft co-founder Bill Gates doesn\'t believe that a temporary pause on artificial intelligence (AI) development will do much to "solve the challenges" ahead. In his first public comments since Tesla CEO Elon Musk and more than 1,000 tech leaders and innova…',
      url: "https://biztoc.com/x/9e102c45030150b2",
      urlToImage: "https://c.biztoc.com/p/9e102c45030150b2/og.webp",
      publishedAt: "2023-04-04T19:20:06Z",
      content:
        'Microsoft co-founder Bill Gates doesn\'t believe that a temporary pause on artificial intelligence (AI) development will do much to "solve the challenges" ahead.In his first public comments since Tesl… [+295 chars]',
    },
    {
      _id: "article-numero-2059",
      source: {
        id: "cbc-news",
        name: "CBC News",
      },
      author: "David Fraser",
      title:
        "Federal privacy watchdog probing OpenAI, ChatGPT following complaint",
      description:
        "The federal privacy commissioner has launched an investigation into the company behind ChatGPT, an explosively popular artificial intelligence-powered chatbot.",
      url: "https://www.cbc.ca/news/politics/privacy-commissioner-investigation-openai-chatgpt-1.6801296",
      urlToImage:
        "https://i.cbc.ca/1.6801323.1680635066!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/privacy-home-depot-20230126.JPG",
      publishedAt: "2023-04-04T19:19:55Z",
      content:
        "The federal privacy commissioner has launched an investigation into the company behind ChatGPT, an explosively popular artificial intelligence-powered chatbot.\r\nThe watchdog's office announced Tuesda… [+3528 chars]",
    },
    {
      _id: "article-numero-2060",
      source: {
        id: null,
        name: "Motley Fool",
      },
      author: "newsfeedback@fool.com (Chris Neiger)",
      title: "Why Nikola, Lordstown, and Hyzon Stocks Were Volatile Today",
      description:
        "There's a lot going on in the automotive industry right now.",
      url: "https://www.fool.com/investing/2023/04/04/why-nikola-lordstown-and-hyzon-stocks-were-volatil/",
      urlToImage:
        "https://g.foolcdn.com/editorial/images/727113/gettyimages-1354070884.jpg",
      publishedAt: "2023-04-04T19:18:45Z",
      content:
        "What happened \r\nShares of electric vehicle (EV) makersNikola Corporation(NKLA -6.20%) and Lordstown Motors(RIDE -5.31%), as well as fuel cell electric vehicle company Hyzon Motors(HYZN 2.06%), fell e… [+2914 chars]",
    },
    {
      _id: "article-numero-2061",
      source: {
        id: "the-washington-times",
        name: "The Washington Times",
      },
      author: "Vaughn Cockayne",
      title: "Elon Musk ordered to delete tweet threatening pro-union workers",
      description:
        "A federal appeals court ruled Friday that Elon Musk violated federal labor laws when he tweeted that employees who joined a union would not receive stock options.",
      url: "https://www.washingtontimes.com/news/2023/apr/4/elon-musk-ordered-delete-tweet-threatening-pro-uni/",
      urlToImage:
        "https://twt-thumbs.washtimes.com/media/image/2023/01/13/Musk-Tesla_Tweet_Trial_94820--e15b5_c0-449-5388-3592_s1200x700.jpg?675d080ed437cd286e0e48a3409b9b042cb1ae10",
      publishedAt: "2023-04-04T19:17:55Z",
      content:
        "A federal appeals court ruled Friday that Elon Musk violated federal labor laws when he tweeted that employees who joined a union would not receive stock options.\r\nThe 5th Circuit Appeals Court said … [+3149 chars]",
    },
    {
      _id: "article-numero-2062",
      source: {
        id: "fortune",
        name: "Fortune",
      },
      author: "Alena Botros",
      title:
        "Morgan Stanley analysts forecast something ‘worse than in the Great Financial Crisis’ for commercial real estate",
      description:
        "Over $1.4 trillion of CRE mortgages have to be refinanced in the next two years, and a huge amount is owed to regional banks, Morgan Stanley says.",
      url: "https://fortune.com/2023/04/04/how-bad-commercial-real-estate-banking-crisis-svb-morgan-stanley-outlook/",
      urlToImage:
        "https://content.fortune.com/wp-content/uploads/2023/04/GettyImages-1207663571-e1680635077699.jpg?resize=1200,600",
      publishedAt: "2023-04-04T19:13:35Z",
      content:
        "After the banking crisis, could the next domino be all those empty office buildings in your downtown? Investors and economists are sounding the alarm about the commercial real estate market, seeing t… [+2528 chars]",
    },
    {
      _id: "article-numero-2063",
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Alena Botros",
      title:
        "Morgan Stanley analysts are forecasting something ‘worse than in the Great Financial Crisis’ for commercial real estate",
      description:
        "Over $1.4 trillion of CRE mortgages have to be refinanced in the next two years, and a huge amount is owed to regional banks, Morgan Stanley says.",
      url: "https://finance.yahoo.com/news/morgan-stanley-analysts-forecasting-something-191335936.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/EaNgWhviXp5WH34RLSOseA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDE-/https://media.zenfs.com/en/fortune_175/afb3cd47b76cc10c74a249cd511e2e29",
      publishedAt: "2023-04-04T19:13:35Z",
      content:
        "After the banking crisis, could the next domino be all those empty office buildings in your downtown? Investors and economists are sounding the alarm about the commercial real estate market, seeing t… [+2607 chars]",
    },
    {
      _id: "article-numero-2064",
      source: {
        id: null,
        name: "Gagadget.com",
      },
      author: "gagadget.com",
      title:
        "Акции Tesla упали на 6% – инвесторы опасаются дальнейшего удешевления электромобилей",
      description:
        "Компания Tesla установила новый рекорд поставок электромобилей. По итогам первого квартала 2023 года был отгружено более 400 000 транспортных средств. Одной из причин роста спроса стало снижение цен, но из-за этого курс акций упал.",
      url: "https://gagadget.com/ru/232220-aktsii-tesla-upali-na-6-investoryi-opasayutsya-dalnejshego-udeshevleniya-elektromobilej/",
      urlToImage:
        "https://gagadget.com/media/cache/a0/25/a0257a9f5508be82f9661bf29c54eb79.jpg",
      publishedAt: "2023-04-04T19:10:41Z",
      content:
        "Tesla . 2023 400 000 . , - .\r\n, (Elon Musk) . , 1,8-2 2023 .\r\n , 2023 20%. , 2022 29%. Tesla 6%.\r\n , . 50% . , Tesla .\r\n: Reuters",
    },
    {
      _id: "article-numero-2065",
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "coindesk.com",
      title:
        "Real-World Tokenization Is Surging as TradFi Grows More Receptive to Blockchain",
      description:
        "Jenny will discuss developing crypto-linked investment products in a bear market, the mood among her clients and her lon... Jenny will discuss developing crypto-linked investment products in a bear market, the mood among her clients and her lon... Jenny will …",
      url: "https://biztoc.com/x/6b6b45be95602ca2",
      urlToImage: "https://c.biztoc.com/p/6b6b45be95602ca2/og.webp",
      publishedAt: "2023-04-04T19:10:06Z",
      content:
        "Jenny will discuss developing crypto-linked investment products in a bear market, the mood among her clients and her lon...Jenny will discuss developing crypto-linked investment products in a bear ma… [+297 chars]",
    },
    {
      _id: "article-numero-2066",
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "go.com",
      title: "GM passes Ford to take No. 2 spot in EV sales behind Tesla",
      description:
        "DETROIT -- General Motors rode strong first-quarter sales of the Chevrolet Bolt to bump crosstown rival Ford out of second place in the U.S. electric vehicle sales race. But GM's EV sales of 20,670 were still far below those of industry leader Tesla, which de…",
      url: "https://biztoc.com/x/b9afcadd42114809",
      urlToImage: "https://c.biztoc.com/p/b9afcadd42114809/og.webp",
      publishedAt: "2023-04-04T19:10:05Z",
      content:
        "DETROIT -- General Motors rode strong first-quarter sales of the Chevrolet Bolt to bump crosstown rival Ford out of second place in the U.S. electric vehicle sales race.But GM's EV sales of 20,670 we… [+294 chars]",
    },
    {
      _id: "article-numero-2067",
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "seattletimes.com",
      title: "GM passes Ford to take No. 2 spot in EV sales behind Tesla",
      description:
        "General Motors has ridden strong first-quarter sales of the Chevrolet Bolt to bump crosstown rival Ford out of second place in the U.S. electric vehicle sales race.#generalmotors #chevroletbolt #ford",
      url: "https://biztoc.com/x/6b165dc8768a019f",
      urlToImage: "https://c.biztoc.com/p/6b165dc8768a019f/og.webp",
      publishedAt: "2023-04-04T19:06:35Z",
      content:
        "General Motors has ridden strong first-quarter sales of the Chevrolet Bolt to bump crosstown rival Ford out of second place in the U.S. electric vehicle sales race. \r\n#generalmotors#chevroletbolt#for… [+55 chars]",
    },
    {
      _id: "article-numero-2068",
      source: {
        id: "rt",
        name: "RT",
      },
      author: "RT",
      title: "Bill Gates challenges AI moratorium",
      description:
        "Bill Gates told Reuters that a pause on AI development would be difficult to enforce and wouldn’t fix any issues with the technology Read Full Article at RT.com",
      url: "https://www.rt.com/news/574185-bill-gates-ai-pause/",
      urlToImage:
        "https://mf.b37mrtl.ru/files/2023.04/article/642c742b85f54072731e40c6.jpg",
      publishedAt: "2023-04-04T19:06:14Z",
      content:
        "Microsoft co-founder Bill Gates has broken with hundreds of AI researchers and tech leaders and opposed a worldwide pause on the development of powerful artificial intelligence. The software tycoon t… [+2215 chars]",
    },
    {
      _id: "article-numero-2069",
      source: {
        id: null,
        name: "CoinDesk",
      },
      author: "Jocelyn Yang",
      title:
        "Real-World Tokenization Is Surging as TradFi Grows More Receptive to Blockchain",
      description:
        "A number of banks and other big brands are turning to RWA in the form of digital tokens on the blockchain as they look to bring more efficiency to transactions. Industry watchers say the trend will grow.",
      url: "https://www.coindesk.com/markets/2023/04/04/real-world-tokenization-is-surging-as-tradfi-grows-more-receptive-to-blockchain/",
      urlToImage:
        "https://www.coindesk.com/resizer/s2kE__fOCK4SY_9s_m1IMva-UoE=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/KAMV3OBRMVGKDCOCUK32BFEEUY.jpg",
      publishedAt: "2023-04-04T19:03:27Z",
      content:
        "Blockchain-based tokenization of real-world assets (RWA) is gaining traction among major financial service firms and other big brands. That makes a number of industry watchers upbeat about the trend … [+5158 chars]",
    },
    {
      _id: "article-numero-2070",
      source: {
        id: null,
        name: "Kommersant.ru",
      },
      author: null,
      title:
        "Билл Гейтс призвал не останавливать эксперименты с искусственным интеллектом",
      description:
        "Сооснователь Microsoft Билл Гейтс считает, что остановка исследований искусственного интеллекта не решит возможных проблем, которые могут ожидать человечество. Так Билл Гейтс ответил на открытое письмо сооснователей Apple, Skype и Pinterest, гендиректора Spac…",
      url: "https://www.kommersant.ru/doc/5914341",
      urlToImage:
        "https://iv.kommersant.ru/SocialPics/5914341_26_2354120_550067244",
      publishedAt: "2023-04-04T19:01:23Z",
      content:
        "Microsoft , , . Apple, Skype Pinterest, SpaceX Tesla .\r\n« , , . »,— , Reuters.\r\n Microsoft, . , , .\r\n , , 29 . , GPT-4. , , «» , . Tesla SpaceX Apple .",
    },
    {
      _id: "article-numero-2071",
      source: {
        id: null,
        name: "Montevideo.com.uy",
      },
      author: "Montevideo Portal",
      title:
        "Twitter: ¿dónde están las etiquetas de retweet y por qué Doge reemplazó al pájaro?",
      description:
        "Ambos cambios se aplican solo a la interfaz del usuario web, no a sus apps.",
      url: "https://www.montevideo.com.uy/Ciencia-y-Tecnologia/Twitter--donde-estan-las-etiquetas-de-retweet-y-por-que-Doge-reemplazo-al-pajaro--uc850238",
      urlToImage:
        "https://imagenes.montevideo.com.uy/imgnoticias/202105/_W933_80/761138.jpg",
      publishedAt: "2023-04-04T19:01:00Z",
      content:
        "Twitter cambió. Entre otras cosas, dejó de etiquetar los retweets. Antes, cuando alguien a quien seguías retuiteaba algo, el tuit tenía una nota encima que decía quién era el responsable de que apare… [+1517 chars]",
    },
    {
      _id: "article-numero-2072",
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "thestreet.com",
      title: "The Billionaires Are Having a Great Year",
      description:
        "The wealth of the world's wealthiest has continued to rise this year despite inflation fears and tremors in financial markets. Economic slowdown? What economic slowdown? Recession fear? What's that? The first three months of the year have been a kind of giant…",
      url: "https://biztoc.com/x/0e8a68693b5e2796",
      urlToImage: "https://c.biztoc.com/p/0e8a68693b5e2796/og.webp",
      publishedAt: "2023-04-04T19:00:07Z",
      content:
        "The wealth of the world's wealthiest has continued to rise this year despite inflation fears and tremors in financial markets.Economic slowdown? What economic slowdown? Recession fear? What's that? T… [+314 chars]",
    },
    {
      _id: "article-numero-2073",
      source: {
        id: null,
        name: "Korrespondent.net",
      },
      author: "1023",
      title: "За год Германия увеличила экспорт электромобилей на 65%",
      description:
        "За границу  было поставлено около 300 тысяч  электромобилей стоимостью 24,2 миллиарда евро.",
      url: "https://korrespondent.net/business/auto/4578093-za-hod-hermanyia-uvelychyla-eksport-elektromobylei-na-65",
      urlToImage: "https://kor.ill.in.ua/m/190x120/2817461.jpg",
      publishedAt: "2023-04-04T19:00:00Z",
      content:
        "2022 358 10,5 , 22,2% (293 7,6 ).\r\n,  . ,  - 2022 2923 ., 23,5%.Tesla \r\n.net Telegram. https://t.me/korrespondentnet",
    },
    {
      _id: "article-numero-2074",
      source: {
        id: null,
        name: "International Business Times",
      },
      author: "Joseph BOYLE",
      title: "Cryptocurrency Surges As Musk Changes Twitter Logo To 'Meme Dog'",
      description:
        "Cryptocurrency surges as Musk changes Twitter logo to 'meme dog'",
      url: "https://www.ibtimes.com/cryptocurrency-surges-musk-changes-twitter-logo-meme-dog-3683287",
      urlToImage:
        "https://d.ibtimes.com/en/full/4441792/elon-musk-bought-twitter-late-last-year-has-since-slashed-workforce-introduced-paid-accounts.jpg",
      publishedAt: "2023-04-04T18:57:33Z",
      content:
        "Elon Musk bought Twitter late last year and has since slashed the workforce, introduced paid-for accounts and reinstated banned usersAFP\r\nA meme-inspired cryptocurrency's price jumped on Tuesday afte… [+2759 chars]",
    },
    {
      _id: "article-numero-2075",
      source: {
        id: null,
        name: "Slashdot.org",
      },
      author: "feedfeeder",
      title: "GM is now the second-largest EV maker in the US",
      description:
        "General Motors just pulled ahead of Ford to become the country’s second-leading seller of all-electric vehicles. According to sales numbers obtained by CNBC, Ford sold just under 11,000 EVs during the first quarter of this year, while GM sold twice that, at n…",
      url: "https://slashdot.org/firehose.pl?op=view&amp;id=170690884",
      urlToImage: null,
      publishedAt: "2023-04-04T18:54:24Z",
      content:
        "General Motors just pulled ahead of Ford to become the country’s second-leading seller of all-electric vehicles. According to sales numbers obtained by CNBC, Ford sold just under 11,000 EVs during th… [+2041 chars]",
    },
    {
      _id: "article-numero-2076",
      source: {
        id: null,
        name: "Uol.com.br",
      },
      author: "Jorge Moraes",
      title: null,
      description:
        "Brasil e México são países estratégicos para a BYD por serem dois grandes mercados onde a gigante chinesa possui operação própria. Em evento na Cidade do México a fabricante apresentou os carros que já rodam no Brasil, mas os planos são estruturados e bem",
      url: "https://www.uol.com.br/carros/colunas/jorge-moraes/2023/04/04/byd-inicia-operacao-no-mexico-e-deve-ter-eletrico-popular-no-brasil.htm",
      urlToImage:
        "https://conteudo.imguol.com.br/c/entretenimento/2f/2018/06/01/byd-baterias-1527878531101_v2_615x300.jpg",
      publishedAt: "2023-04-04T18:52:40Z",
      content:
        "Brasil e México são países estratégicos para a BYD por serem dois grandes mercados onde a gigante chinesa possui operação própria. Em evento na Cidade do México a fabricante apresentou os carros que … [+1435 chars]",
    },
    {
      _id: "article-numero-2077",
      source: {
        id: null,
        name: "seattlepi.com",
      },
      author: null,
      title: "GM passes Ford to take No. 2 spot in EV sales behind Tesla",
      description:
        "General Motors has ridden strong first-quarter sales of the Chevrolet Bolt to bump crosstown rival Ford out of second place in the U.S. electric vehicle sales race. But GM’s EV sales of 20,670 remained far below those of industry leader Tesla, which delivered…",
      url: "https://www.seattlepi.com/business/article/gm-passes-ford-to-take-no-2-spot-in-ev-sales-17878359.php",
      urlToImage: "https://www.seattlepi.com/img/modules/siteheader/brand.png",
      publishedAt: "2023-04-04T18:50:45Z",
      content:
        "FILE - Chevrolet shows off their Chevrolet Bolt at the North American International Auto Show on Jan. 9, 2017, in Detroit. General Motors rode strong 2023 first-quarter sales of the Chevrolet Bolt to… [+2067 chars]",
    },
    {
      _id: "article-numero-2078",
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "washingtonpost.com",
      title: "GM passes Ford to take No. 2 spot in EV sales behind Tesla",
      description:
        "DETROIT — General Motors rode strong first-quarter sales of the Chevrolet Bolt to bump crosstown rival Ford out of second place in the U.S. electric vehicle sales race. But GM’s EV sales of 20,670 were still far below those of industry leader Tesla, which del…",
      url: "https://biztoc.com/x/33638ee48865d6ca",
      urlToImage: "https://c.biztoc.com/p/33638ee48865d6ca/og.webp",
      publishedAt: "2023-04-04T18:50:25Z",
      content:
        "DETROIT General Motors rode strong first-quarter sales of the Chevrolet Bolt to bump crosstown rival Ford out of second place in the U.S. electric vehicle sales race. But GMs EV sales of 20,670 were … [+303 chars]",
    },
    {
      _id: "article-numero-2079",
      source: {
        id: null,
        name: "Donanimhaber.com",
      },
      author: "Metin Akpınar",
      title:
        "Bill Gates’ten Elon Musk’a yapay zeka cevabı: Durdurmak sorunları çözmeyecek",
      description:
        "Geçtiğimiz günlerde Elon Musk ve binden fazla yapay zeka uzmanı, bu alandaki geliştirmelerin durdurulması gerektiğini açıklamıştı. Bill Gates ise bu isimlerle aynı fikirde değil.",
      url: "https://www.donanimhaber.com/bill-gates-ten-elon-musk-a-yapay-zeka-cevabi--162277",
      urlToImage:
        "https://www.donanimhaber.com/images/images/haber/162277/src_340x1912xbill-gates-ten-elon-musk-a-yapay-zeka-cevabi.jpg",
      publishedAt: "2023-04-04T18:50:00Z",
      content:
        "a').click(); event.preventDefault();\"&gt;Tam Boyutta GörElon Musk ve sektörün önde gelen yapay zeka uzmanlar, OpenAI tarafndan daha yeni piyasaya sürülen GPT-4 yapay zeka modelinden daha güçlü modell… [+1806 chars]",
    },
    {
      _id: "article-numero-2080",
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "The Associated Press",
      title: "GM passes Ford to take No. 2 spot in EV sales behind Tesla",
      description:
        "General Motors has ridden strong first-quarter sales of the Chevrolet Bolt to bump crosstown rival Ford out of second place in the U.S. electric vehicle sales race",
      url: "https://abcnews.go.com/Technology/wireStory/gm-passes-ford-2-spot-ev-sales-tesla-98356513",
      urlToImage:
        "https://s.abcnews.com/images/Business/wirestory_2687c93bf562aaeb6581cc4efea20d4a_16x9_992.jpg",
      publishedAt: "2023-04-04T18:48:08Z",
      content:
        "DETROIT -- General Motors rode strong first-quarter sales of the Chevrolet Bolt to bump crosstown rival Ford out of second place in the U.S. electric vehicle sales race.\r\nBut GM's EV sales of 20,670 … [+1622 chars]",
    },
    {
      _id: "article-numero-2081",
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "The Associated Press",
      title: "GM passes Ford to take No. 2 spot in EV sales behind Tesla",
      description:
        "General Motors has ridden strong first-quarter sales of the Chevrolet Bolt to bump crosstown rival Ford out of second place in the U.S. electric vehicle sales race",
      url: "https://abcnews.go.com/Business/wireStory/gm-passes-ford-2-spot-ev-sales-tesla-98356511",
      urlToImage:
        "https://s.abcnews.com/images/Business/wirestory_2687c93bf562aaeb6581cc4efea20d4a_16x9_992.jpg",
      publishedAt: "2023-04-04T18:47:58Z",
      content:
        "DETROIT -- General Motors rode strong first-quarter sales of the Chevrolet Bolt to bump crosstown rival Ford out of second place in the U.S. electric vehicle sales race.\r\nBut GM's EV sales of 20,670 … [+1622 chars]",
    },
    {
      _id: "article-numero-2082",
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "apnews.com",
      title: "GM passes Ford to take No. 2 spot in EV sales behind Tesla",
      description:
        "General Motors rode strong first-quarter sales of the Chevrolet Bolt to bump crosstown rival Ford out of second place in the U.S. electric vehicle sales race. But GM's EV sales of 20,670 were still far below those of industry leader Tesla, which delivered mor…",
      url: "https://biztoc.com/x/2278d0571d8e436e",
      urlToImage: "https://c.biztoc.com/p/2278d0571d8e436e/og.webp",
      publishedAt: "2023-04-04T18:46:06Z",
      content:
        "General Motors rode strong first-quarter sales of the Chevrolet Bolt to bump crosstown rival Ford out of second place in the U.S. electric vehicle sales race.But GM's EV sales of 20,670 were still fa… [+318 chars]",
    },
    {
      _id: "article-numero-2083",
      source: {
        id: null,
        name: "Terra.com.br",
      },
      author: "Reuters",
      title:
        "Dogecoin dispara após Musk colocar cachorro símbolo da criptomoeda como ícone do Twitter",
      description:
        "O cachorro Shiba Inu, da dogecoin, substituiu o pássaro azul do Twitter como logotipo da empresa ...",
      url: "https://www.terra.com.br/byte/dogecoin-dispara-apos-musk-colocar-cachorro-simbolo-da-criptomoeda-como-icone-do-twitter,7c8505fc6960c4628da0e1c3fe4db325ffsi2k6j.html",
      urlToImage:
        "https://s1.trrsf.com/fe/zaz-mod-t360-icons/svg/logos/terra-16x9-borda.png",
      publishedAt: "2023-04-04T18:45:51Z",
      content:
        "O cachorro Shiba Inu, da dogecoin, substituiu o pássaro azul do Twitter como logotipo da empresa de mídia social na segunda-feira, ajudando a aumentar o valor de mercado do token, que surgiu como uma… [+1291 chars]",
    },
    {
      _id: "article-numero-2084",
      source: {
        id: null,
        name: "The Root",
      },
      author: "Noah A. McGee",
      title:
        "What Did Tesla Do to This Black Man To Be Forced To Pay Him Millions?",
      description:
        "In 2015, Owen Diaz started working at Tesla’s factory in Fremont, Calif. as an elevator operator. He claimed he was called racial slurs by his supervisor and co-workers for the next year and that his co-workers would draw racial epithets and symbols around th…",
      url: "https://www.theroot.com/what-did-tesla-do-to-this-black-man-to-be-forced-to-pay-1850298804",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/04e3a2d444a9a359845b7bbe871dc7fc.jpg",
      publishedAt: "2023-04-04T18:45:00Z",
      content:
        "In 2015, Owen Diaz started working at Teslas factory in Fremont, Calif. as an elevator operator. He claimed he was called racial slurs by his supervisor and co-workers for the next year and that his … [+2845 chars]",
    },
    {
      _id: "article-numero-2085",
      source: {
        id: "t3n",
        name: "T3n",
      },
      author: "Jörn Brien",
      title:
        "Klage gegen Tesla-Wächtermodus: Verbraucherschützer mit Erfolg vor Gericht",
      description:
        "Bei seiner Klage gegen Tesla wegen irreführender Werbung beim Wächtermodus konnte der Verbraucherzentrale Bundesverband einen Erfolg verbuchen. Bei den ebenfalls monierten Werbeaussagen zur CO2-Ersparnis behielt Tesla die Oberhand.\nIm Juli 2022 hatte der Verb…",
      url: "https://t3n.de/news/klage-tesla-waechtermodus-verbraucherschuetzer-urteil-1545713/",
      urlToImage:
        "https://t3n.de/news/wp-content/uploads/2022/07/Bildschirmfoto-2022-07-20-um-13.17.01.jpg",
      publishedAt: "2023-04-04T18:44:54Z",
      content:
        "Im Juli 2022 hatte der Verbraucherzentrale Bundesverband (VZBV) Tesla wegen irreführender Werbung verklagt. Die Klage hatte zwei Aspekte. Zum einen ging es um den Wächtermodus (Sentry Mode), speziell… [+2055 chars]",
    },
    {
      _id: "article-numero-2086",
      source: {
        id: null,
        name: "Fark.com",
      },
      author: null,
      title:
        "Tesla is selling beer in Cybertruck-inspired bottles, hopefully with stronger glass [Stupid]",
      description:
        "Tesla is selling beer in Cybertruck-inspired bottles, hopefully with stronger glass",
      url: "https://www.fark.com/comments/12810942/Tesla-is-selling-beer-in-Cybertruck-inspired-bottles-hopefully-with-stronger-glass",
      urlToImage:
        "https://usrimg-full.fark.net/A/AZ/fark_AZp7d3aCTf9tF6iQPJhLYr6AyyI.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1681099200&Signature=8hVy%2BhE8feE0pjsowP8q%2BOtUVvU%3D",
      publishedAt: "2023-04-04T18:40:27Z",
      content:
        "<li>Links are submitted by members of the Fark community.\r\n</li><li>When community members submit a link, they also write a custom headline for the story.\r\n</li><li>Other Farkers comment on the links… [+177 chars]",
    },
    {
      _id: "article-numero-2087",
      source: {
        id: "independent",
        name: "Independent",
      },
      author: "Via AP news wire",
      title: "GM passes Ford to take No. 2 spot in EV sales behind Tesla",
      description:
        "General Motors has ridden strong first-quarter sales of the Chevrolet Bolt to bump crosstown rival Ford out of second place in the U.S. electric vehicle sales race",
      url: "https://www.independent.co.uk/news/ford-ap-tesla-chevrolet-volkswagen-b2314156.html",
      urlToImage:
        "https://static.independent.co.uk/2023/04/04/19/Electric_Vehicles_GM_vs_Ford_90835.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2023-04-04T18:38:07Z",
      content:
        "For free real time breaking news alerts sent straight to your inbox sign up to our breaking news emails\r\nSign up to our free breaking news emails\r\nGeneral Motors rode strong first-quarter sales of th… [+1758 chars]",
    },
    {
      _id: "article-numero-2088",
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Associated Press",
      title: "GM passes Ford to take No. 2 spot in EV sales behind Tesla",
      description:
        "General Motors rode strong first-quarter sales of the Chevrolet Bolt to bump crosstown rival Ford out of second place in the U.S. electric vehicle sales race...",
      url: "https://news.yahoo.com/gm-passes-ford-no-2-183806007.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/s9txaMQnoWB1oEh_YB_WPA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NzY-/https://media.zenfs.com/en/ap.org/f508e0c191cae1fef9be0616ff2bef62",
      publishedAt: "2023-04-04T18:38:06Z",
      content:
        "DETROIT (AP) General Motors rode strong first-quarter sales of the Chevrolet Bolt to bump crosstown rival Ford out of second place in the U.S. electric vehicle sales race.\r\nBut GM's EV sales of 20,67… [+1621 chars]",
    },
    {
      _id: "article-numero-2089",
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "AP Finance",
      title: "GM passes Ford to take No. 2 spot in EV sales behind Tesla",
      description:
        "General Motors rode strong first-quarter sales of the Chevrolet Bolt to bump crosstown rival Ford out of second place in the U.S. electric vehicle sales race...",
      url: "https://finance.yahoo.com/news/gm-passes-ford-no-2-183806886.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/zMQjoq.ZFGN3kv4lyFVMhA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NzY-/https://media.zenfs.com/en/ap_finance_articles_694/5f81558a47ce42f1d60d97a6b7d3de4a",
      publishedAt: "2023-04-04T18:38:06Z",
      content:
        "DETROIT (AP) General Motors rode strong first-quarter sales of the Chevrolet Bolt to bump crosstown rival Ford out of second place in the U.S. electric vehicle sales race.\r\nBut GM's EV sales of 20,67… [+1621 chars]",
    },
    {
      _id: "article-numero-2090",
      source: {
        id: null,
        name: "CleanTechnica",
      },
      author: "Arthur Frederick (Fritz) Hasler",
      title:
        "More Adventures in Winter Driving During Utah Record Snow Winter 2022–2023",
      description:
        "As I’m writing this on March 26, 2023, Brighton Ski Resort where I teach Alpine Skiing has recorded a new all-time record of 772 inches fallen this 2022–23 winter season. Brighton is at the end of Big Cottonwood Canyon, only 14 miles east of Salt Lake City. T…",
      url: "https://cleantechnica.com/2023/04/04/more-adventures-in-winter-driving-during-utah-record-snow-winter-2022-2023/",
      urlToImage:
        "http://cleantechnica.com/files/2023/03/SnowOnCarAltaUtah_Larger_13March2023.jpg",
      publishedAt: "2023-04-04T18:35:50Z",
      content:
        "As I’m writing this on March 26, 2023, Brighton Ski Resort where I teach Alpine Skiing has recorded a new all-time record of 772 inches fallen this 202223 winter season. Brighton is at the end of Big… [+6795 chars]",
    },
    {
      _id: "article-numero-2091",
      source: {
        id: null,
        name: "Elmostrador.cl",
      },
      author: "Mesa de noticias de El Mostrador/Agencias",
      title:
        "El cambio del logo de Twitter provoca un alza en el valor de la criptomoneda dogecoin",
      description:
        "La criptodivisa inspirada en un meme del perro Shiba Inu se convirtió en la séptima con mayor valor, según los expertos. Elon Musk, dueño de Twitter, es un gran impulsor de las criptomonedas, especialmente la dogecoin.",
      url: "https://www.elmostrador.cl/mercados/2023/04/04/el-cambio-del-logo-de-twitter-provoca-un-alza-en-el-valor-de-la-criptomoneda-dogecoin/",
      urlToImage: "https://www.elmostrador.cl/media/2023/04/58012805_303.jpg",
      publishedAt: "2023-04-04T18:34:15Z",
      content:
        "El logo de Twitter, que representaba hasta hace poco a un pájaro azul, fue cambiado por la imagen del perro Shiba Inu de la criptomoneda dogecoin, lo que significó un aumento en un 20% del valor de l… [+1798 chars]",
    },
    {
      _id: "article-numero-2092",
      source: {
        id: null,
        name: "Slashdot.org",
      },
      author: "feedfeeder",
      title:
        "GM overtakes Ford as second best-seller of EVs in U.S. but still trails Tesla by a wide margin - CNBC",
      description:
        "GM overtakes Ford as second best-seller of EVs in U.S. but still trails Tesla by a wide marginCNBC GM only sold 2 Hummer EVs in Q1. Here's whyFox Business Honda sales rebound continues with best month in nearly two years - Columbus Business FirstThe Business …",
      url: "https://slashdot.org/firehose.pl?op=view&amp;id=170690734",
      urlToImage: null,
      publishedAt: "2023-04-04T18:33:13Z",
      content:
        "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way.",
    },
    {
      _id: "article-numero-2093",
      source: {
        id: null,
        name: "Naftemporiki.gr",
      },
      author: "Κατερίνα Άτση",
      title:
        "Λίστα Forbes: Για ποιους «τελείωσε το πάρτι» – Οι πλουσιότεροι του κόσμου – Η εθνικότητά τους – Οι ηλικίες τους",
      description:
        "Το πάρτι έχει τελειώσει για πολλούς από τους πλουσιότερους ανθρώπους του κόσμου, γράφει το Forbes που δημοσιοποίησε την ετήσια λίστα με τους πλουσιότερους ανθρώπους στον κόσμο.\nΣτους ταραχώδεις καιρούς, για…\nΛίστα Forbes: Για ποιους «τελείωσε το πάρτι» – Οι π…",
      url: "https://www.naftemporiki.gr/finance/world/1457957/lista-forbes-gia-poioys-teleiose-to-parti-oi-ploysioteroi-toy-kosmoy-i-ethnikotita-toys-oi-ilikies-toys/",
      urlToImage:
        "https://www.naftemporiki.gr/wp-content/uploads/2023/04/billionaires.jpg",
      publishedAt: "2023-04-04T18:32:05Z",
      content:
        ", Forbes .\r\n , , 2.668 2022 2.640 500 - 12,2 .\r\n , .\r\n 254 – , , , 19 “” .\r\n : Yvon Chouinard, Patagonia 1973 - 2022, .\r\n , . 1 . , Leviathan LVMH Louis Vuitton, Christian Dior Tiffany . 211 , 53 LVM… [+273 chars]",
    },
    {
      _id: "article-numero-2094",
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Javier Marquez",
      title:
        '"No resolverá los desafíos": Bill Gates también reacciona a la carta de Elon Musk sobre el riesgo de la IA',
      description:
        "Bill Gates tiene algo que decir sobre el pedido de Elon Musk y otras personalidades del mundo tecnológico de pausar el desarrollo de sistemas de inteligencia artificial superiores a GPT-4. Para el filántropo y cofundador de Microsoft, empresa que ha invertido…",
      url: "https://www.xataka.com/robotica-e-ia/no-resolvera-desafios-bill-gates-tambien-reacciona-a-carta-elon-musk-riesgo-ia",
      urlToImage:
        "https://i.blogs.es/3a84cb/bill-gates-elon-musl-inteligencia-artificial-1/840_560.jpeg",
      publishedAt: "2023-04-04T18:30:57Z",
      content:
        "Bill Gates tiene algo que decir sobre el pedido de Elon Musk y otras personalidades del mundo tecnológico de pausar el desarrollo de sistemas de inteligencia artificial superiores a GPT-4. Para el fi… [+3790 chars]",
    },
    {
      _id: "article-numero-2095",
      source: {
        id: null,
        name: "OilPrice.com",
      },
      author: "OilPrice.com",
      title: "Tesla Continues To Slide Despite Jump In Chinese Sales",
      description:
        "Shares of Tesla continue to dip despite news that the company's deliveries in China rose 19% in March.  According to the China Passenger Car Association (CPCA) on Tuesday, Tesla sold 88,869 units of China-made electric vehicles for the month of March, a 35% i…",
      url: "https://oilprice.com/Latest-Energy-News/World-News/Tesla-Continues-To-Slide-Despite-Jump-In-Chinese-Sales.html",
      urlToImage:
        "https://d32r1sh890xpii.cloudfront.net/news/718x300/2023-04-04_zju7bpnwrt.jpg",
      publishedAt: "2023-04-04T18:30:00Z",
      content:
        "China's top lithium producers agree…\r\nRussia still depends on Western…\r\nBy ZeroHedge - Apr 04, 2023, 1:30 PM CDTShares of Tesla continue to dip despite news that the company's deliveries in China ros… [+1981 chars]",
    },
    {
      _id: "article-numero-2096",
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Jury orders Tesla to pay former worker in racism case | Latest English News | WION - WION",
      description:
        "<ol><li>Jury orders Tesla to pay former worker in racism case | Latest English News | WION  WION\r\n</li><li>Tesla's racism penalty was cut by 98%, but Elon Musk still thinks it's paying too much  Yahoo Finance\r\n</li><li>Tesla worker who rejected $15M award in …",
      url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CCAiC2VlMWNIZmFKT1RjmAEB?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      urlToImage: null,
      publishedAt: "2023-04-04T18:27:45Z",
      content:
        "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
    },
    {
      _id: "article-numero-2097",
      source: {
        id: null,
        name: "Haber7.com",
      },
      author: "Emrullah Koçin",
      title: "Milyarderlerin sayısı da servetleri de azaldı",
      description:
        "Amerikan iş dünyası dergisi Forbes'un Milyarderler Listesi'nde yer alanların sayısı bu yıl 2 bin 640'a gerilerken, milyarderlerin toplam serveti de 500 milyar dolar düşüşle 12,2 trilyon dolara indi.",
      url: "https://ekonomi.haber7.com/ekonomi/haber/3314986-milyarderlerin-sayisi-da-servetleri-de-azaldi",
      urlToImage:
        "https://i20.haber7.net/resize/1280x720//haber/haber7/photos/2023/14/milyarderlerin_sayisi_da_servetleri_de_azaldi_1680632754_2682.jpg",
      publishedAt: "2023-04-04T18:26:00Z",
      content:
        "Forbes'un bu yl 37'nci kez yaymlad Milyarderler Listesi'ne göre dünya çapndaki milyarder says bir önceki yla göre 28 azalarak 2 bin 640'a düerken üst üste ikinci azaln kaydetti.\r\nEkonomik türbülansn … [+1739 chars]",
    },
    {
      _id: "article-numero-2098",
      source: {
        id: null,
        name: "Phonandroid",
      },
      author: "Pierre-Edouard Laurent",
      title:
        "Coup de génie ou de folie d’Elon Musk avec le nouveau logo de Twitter ?",
      description:
        "Depuis hier soir, la communauté Twitter peut voir une tête de chien à la place du célèbre oiseau bleu. Ce changement soudain a immédiatement fait grimper une cryptomonnaie à l’histoire sulfureuse. Elon Musk, nouveau patron de Twitter a-t-il pété un...",
      url: "https://www.phonandroid.com/coup-de-genie-ou-de-folie-delon-musk-avec-le-nouveau-logo-de-twitter.html",
      urlToImage:
        "https://img.phonandroid.com/2023/04/dogecoin-crash-plainte.jpg",
      publishedAt: "2023-04-04T18:24:38Z",
      content:
        "Depuis hier soir, la communauté Twitter peut voir une tête de chien à la place du célèbre oiseau bleu. Ce changement soudain a immédiatement fait grimper une cryptomonnaie à lhistoire sulfureuse. Elo… [+4820 chars]",
    },
    {
      _id: "article-numero-2099",
      source: {
        id: null,
        name: "Questdb.io",
      },
      author: "Yitaek Hwang",
      title: "Processing Time Series Data With QuestDB and Apache Kafka",
      description:
        "Apache Kafka is a battle-tested distributed stream-processing platform popular in the financial industry to handle mission-critical transactional workloads. Kafka’s ability to handle large volumes of real-time market data makes it a core infrastructure compon…",
      url: "https://questdb.io/blog/processing-time-series-with-questdb-apache-kafka/",
      urlToImage:
        "https://dz2cdn1.dzone.com/storage/article-thumb/16811632-thumb.jpg",
      publishedAt: "2023-04-04T18:24:16Z",
      content:
        "Apache Kafka is a battle-tested distributed stream-processing platform popular in the financial industry to handle mission-critical transactional workloads. Kafkas ability to handle large volumes of … [+10002 chars]",
    },
    {
      _id: "article-numero-2100",
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "cnbc.com",
      title:
        "GM overtakes Ford as second best-seller of EVs in U.S. but still trails Tesla by a wide margin",
      description:
        "DETROIT – General Motors pulled ahead of Ford Motor to become the country's second best-seller of all-electric vehicles during the first quarter, trailing only industry leader Tesla . GM on Monday said it sold 20,670 EVs during the first three months of the y…",
      url: "https://biztoc.com/x/745721d1885ea622",
      urlToImage: "https://c.biztoc.com/p/745721d1885ea622/og.webp",
      publishedAt: "2023-04-04T18:22:14Z",
      content:
        "DETROIT General Motors pulled ahead of Ford Motor to become the country's second best-seller of all-electric vehicles during the first quarter, trailing only industry leader Tesla .GM on Monday said … [+319 chars]",
    },
  ];

  const itemsPerPage = 12;
  const { currentData, currentPage, pages, nextPage, prevPage, goToPage } =
    usePagination(data, itemsPerPage);

  return (
    <>
      <section className="py-10 grid sx:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
        {currentData &&
          currentData.map((item) => {
            return <ItemArticle article={item} />;
          })}
      </section>
      <div className="flex items-center xs:gap-3 sm:gap-4 justify-center mb-5">
        {/* Afficher les boutons de pagination */}
        <button
          className="bg-gray-50 border border-blue-400 hover:bg-blue-200 cursor-pointer sm:p-2 p-1"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Précédent
        </button>
        {Array.from({ length: pages }, (_, i) => (
          <button
            className={
              currentPage === i + 1
                ? "bg-blue-500 border border-blue-400 hover:bg-blue-200 cursor-pointer sm:p-2 p-1"
                : "bg-gray-50 border border-blue-400 hover:bg-blue-200 cursor-pointer sm:p-2 p-1"
            }
            key={i}
            onClick={() => goToPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="bg-gray-50 border border-blue-400 hover:bg-blue-200 cursor-pointer sm:p-2 p-1"
          onClick={nextPage}
          disabled={currentPage === pages}
        >
          Suivant
        </button>
      </div>
    </>
  );
}

export default ArticleList;
