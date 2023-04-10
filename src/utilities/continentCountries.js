const continentCountries = {
    'europe': {
        name: "Europe",
        geoInfo: {
            rotate: [-10.0, -53.0, 0],
            center: [5, 3.5],
            scale: 650
        },
        summary: "A diverse continent with a rich history and culture, offering an array of attractions from the Eiffel Tower in Paris to the canals of Venice. Visitors can explore ancient ruins, sample local cuisines, and take in stunning natural landscapes.",
        topCountries: ['France', 'Spain', 'Italy'],
        countries: {
            italy: {
                name: "Italy",
                summary: "Italy is known for its art, architecture, history, and delicious food. It is the home of the Roman Empire, the Vatican City, and landmarks such as the Colosseum and Leaning Tower of Pisa.",
                popularCities: ["Rome", "Florence", "Venice", "Milan"],
                visitable: true,
                url: 'italy'
            },
            germany: {
                name: "Germany",
                summary: "A country with a rich history and culture, known for its castles, beer gardens, and Christmas markets. Visitors can experience the bustling cities of Berlin and Munich, or take a scenic drive through the Bavarian Alps.",
                popularCities: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
                visitable: true,
                url: 'germany'
            },
            england: {
                name: "United Kingdom",
                summary: "Each of the countries of the United Kingdom - England, Scotland, Wales, and Northern Ireland - offer its own distinct history, culture, and attractions, from the bustling cities of London and Edinburgh, to the stunning landscapes of Snowdonia and the Highlands.",
                popularCities: ["London", "Manchester", "Edinburgh", "Cardiff", "Belfast"],
                visitable: true,
                url: 'united-kingdom'
            },
            scotland: {
                name: "United Kingdom",
                summary: "Each of the countries of the United Kingdom - England, Scotland, Wales, and Northern Ireland - offer its own distinct history, culture, and attractions, from the bustling cities of London and Edinburgh, to the stunning landscapes of Snowdonia and the Highlands.",
                popularCities: ["London", "Manchester", "Edinburgh", "Cardiff", "Belfast"],
                visitable: true,
                url: 'united-kingdom'
            },
            wales: {
                name: "United Kingdom",
                summary: "Each of the countries of the United Kingdom - England, Scotland, Wales, and Northern Ireland - offer its own distinct history, culture, and attractions, from the bustling cities of London and Edinburgh, to the stunning landscapes of Snowdonia and the Highlands.",
                popularCities: ["London", "Manchester", "Edinburgh", "Cardiff", "Belfast"],
                visitable: true,
                url: 'united-kingdom'
            },
            iceland: {
                name: "Iceland",
                summary: "A country known for its otherworldly landscapes, such as the Blue Lagoon and the Northern Lights. Visitors can explore glaciers, waterfalls, and volcanic landscapes, as well as take in the culture and history of Reykjavik, the country's capital city.",
                popularCities: ["Reykjavik", "Akureyri", "Vatnajökull", "Skaftafell"],
                visitable: true,
                url: 'iceland'
            },
            svalbard: {
                name: "Europe",
                summary: "A diverse continent with a rich history and culture, offering an array of attractions from the Eiffel Tower in Paris to the canals of Venice. Visitors can explore ancient ruins, sample local cuisines, and take in stunning natural landscapes.",
                popularCities: [],
                visitable: false,
                url: ''
            },
            russia: {
                name: "Russia",
                summary: "The largest country in the world, Russia is a land of contrasts, from the bustling cities of Moscow and St. Petersburg to the remote wilderness of Siberia. It's recommended to check the travel advice of the government before planning a trip to Russia.",
                popularCities: ["Moscow", "St. Petersburg", "Kazan", "Sochi"],
                visitable: false,
                url: ''
            },
            ireland: {
                name: "Ireland",
                summary: "An island country in northwest Europe known for its green landscapes, picturesque villages, and rich cultural heritage. Visitors can explore the Cliffs of Moher, the Ring of Kerry, and the city of Dublin.",
                popularCities: ["Dublin", "Cork", "Galway", "Killarney"],
                visitable: true,
                url: 'ireland'
            },
            northernireland: {
                name: "United Kingdom",
                summary: "Each of the countries of the United Kingdom - England, Scotland, Wales, and Northern Ireland - offer its own distinct history, culture, and attractions, from the bustling cities of London and Edinburgh, to the stunning landscapes of Snowdonia and the Highlands.",
                popularCities: ["London", "Manchester", "Edinburgh", "Cardiff", "Belfast"],
                visitable: true,
                url: 'united-kingdom'
            },
            portugal: {
                name: "Portugal",
                summary: "A country located in southwestern Europe, known for its historic cities such as Lisbon and Porto, as well as its picturesque villages, beaches, and wine regions. Visitors can explore historic castles and monasteries and sample traditional seafood dishes.",
                popularCities: ["Lisbon", "Porto", "Coimbra", "Albufeira"],
                visitable: true,
                url: 'portugal'
            },
            spain: {
                name: "Spain",
                summary: "A country located in southwestern Europe, known for its rich history and culture, delicious cuisine, and vibrant nightlife. Visitors can explore historic landmarks such as the Alhambra and the Sagrada Familia, and experience the local festivals and traditions.",
                popularCities: ["Madrid", "Barcelona", "Valencia", "Seville"],
                visitable: true,
                url: 'spain'
            },
            france: {
                name: "France",
                summary: "A country located in Western Europe, known for its iconic landmarks such as the Eiffel Tower and the Louvre, as well as its rich history, culture, and delicious cuisine. Visitors can explore famous wine regions, take in the local art and music scene, and indulge in traditional French dishes.",
                popularCities: ["Paris", "Marseille", "Lyon", "Nice"],
                visitable: true,
                url: 'france'
            },
            switzerland: {
                name: "Switzerland",
                summary: "Known for its natural beauty, history, and culture, Switzerland is a popular destination for outdoor activities such as skiing and hiking. Cities like Zurich and Geneva offer a mix of history and modern amenities.",
                popularCities: ["Zurich", "Geneva", "Bern", "Lucerne"],
                visitable: true,
                url: 'switzerland'
            },
            luxembourg: {
                name: "Luxembourg",
                summary: "Known for its history, culture, and natural beauty, Luxembourg is a small country with a lot to offer. The capital, Luxembourg City, is a UNESCO World Heritage Site with a rich history and beautiful architecture.",
                popularCities: ["Luxembourg City", "Esch-sur-Alzette", "Echternach", "Clervaux"],
                visitable: true,
                url: 'luxembourg'
            },
            walloonregion: {
                name: "Belgium",
                summary: "Known for its history, culture, and delicious chocolate and beer, Belgium is a great destination for foodies and history buffs alike. Cities like Brussels, Bruges, and Antwerp offer a mix of medieval architecture and modern amenities, while the picturesque countryside is perfect for cycling or hiking.",
                popularCities: ["Brussels", "Bruges", "Antwerp", "Ghent"],
                visitable: true,
                url: 'belgium'
            },
            flemishregion: {
                name: "Belgium",
                summary: "Known for its history, culture, and delicious chocolate and beer, Belgium is a great destination for foodies and history buffs alike. Cities like Brussels, Bruges, and Antwerp offer a mix of medieval architecture and modern amenities, while the picturesque countryside is perfect for cycling or hiking.",
                popularCities: ["Brussels", "Bruges", "Antwerp", "Ghent"],
                visitable: true,
                url: 'belgium'
            },
            netherlands: {
                name: "Netherlands",
                summary: "Known for its history, culture, and natural beauty, the Netherlands is a great destination for those interested in art, architecture, and history. Cities like Amsterdam, Rotterdam, and Utrecht offer a mix of medieval architecture and modern amenities, while the picturesque countryside is perfect for cycling or hiking.",
                popularCities: ["Amsterdam", "Rotterdam", "Utrecht", "The Hague"],
                visitable: true,
                url: 'netherlands'
            },
            greece: {
                name: "Greece",
                summary: "Known for its history, culture, and natural beauty, Greece is a popular destination for those interested in ancient history and mythology. The capital, Athens, is home to the iconic Acropolis and Parthenon, while the charming island of Santorini and the ancient city of Crete offer a mix of history and natural beauty.",
                popularCities: ["Athens", "Thessaloniki", "Crete", "Santorini"],
                visitable: true,
                url: 'greece'
            },
            albania:{
                name: "Albania",
                summary: "Known for its rugged mountains, beautiful beaches, and rich culture, Albania is a country that is still relatively undiscovered by tourists. The capital, Tirana, is a bustling city with a mix of Ottoman and communist-era architecture.",
                popularCities: ["Tirana", "Durrës", "Shkodër", "Vlorë"],
                visitable: true,
                url: 'albania'
            },
            macedonia:{
                name: "Macedonia",
                summary: "Known for its natural beauty, history, and culture, Macedonia is a small country that has a lot to offer. The capital, Skopje, is a bustling city with a mix of Ottoman and communist-era architecture.",
                popularCities: ["Skopje", "Ohrid", "Bitola", "Kumanovo"],
                visitable: true,
                url: 'macedonia'
            },
            bulgaria:{
                name: "Bulgaria",
                summary: "Known for its history, culture, and natural beauty, Bulgaria is a country that is still relatively undiscovered by tourists. The capital, Sofia, is a bustling city with a mix of Ottoman and communist-era architecture.",
                popularCities: ["Sofia", "Plovdiv,", "Varna", "Burgas"],
                visitable: true,
                url: 'bulgaria'
            },
            romania:{
                name: "Romania",
                summary: "Known for its history, culture, and natural beauty, Romania is a country that is still relatively undiscovered by tourists. The capital, Bucharest, is a bustling city with a mix of Ottoman and communist-era architecture.",
                popularCities: ["Bucharest", "Cluj-Napoca", "Timisoara", "Iasi"],
                visitable: true,
                url: 'romania'
            },
            serbia:{
                name: "Serbia",
                summary: "Known for its history, culture, and natural beauty, Serbia is a country that is still relatively undiscovered by tourists. The capital, Belgrade, is a bustling city with a mix of Ottoman and communist-era architecture.",
                popularCities: ["Belgrade", "Novi Sad", "Nis", "Kragujevac"],
                visitable: true,
                url: 'serbia'
            },
            kosovo:{
                name: "Europe",
                summary: "A diverse continent with a rich history and culture, offering an array of attractions from the Eiffel Tower in Paris to the canals of Venice. Visitors can explore ancient ruins, sample local cuisines, and take in stunning natural landscapes.",
                popularCities: [],
                visitable: false,
                url: ''
            },
            montenegro:{
                name: "Montenegro",
                summary: "Known for its natural beauty, history, and culture, Montenegro is a small country that has a lot to offer. The capital, Podgorica, is a bustling city with a mix of Ottoman and communist-era architecture.",
                popularCities: ["Podgorica", "Budva", "Kotor", "Ulcinj"],
                visitable: true,
                url: 'montenegro'
            },
            republicsrpska:{
                name: "Europe",
                summary: "A diverse continent with a rich history and culture, offering an array of attractions from the Eiffel Tower in Paris to the canals of Venice. Visitors can explore ancient ruins, sample local cuisines, and take in stunning natural landscapes.",
                popularCities: [],
                visitable: false,
                url: ''
            },
            bosniaandherzegovina:{
                name: "Bosnia and Herzegovina",
                summary: "Known for its history, culture, and natural beauty, Bosnia and Herzegovina is a country that is still relatively undiscovered by tourists. It's recommended to check the travel advice of the government before planning a trip to Bosnia and Herzegovina.",
                popularCities: ["Sarajevo", "Mostar", "Banja Luka", "Tuzla"],
                visitable: false,
                url: ''
            },
            croatia:{
                name: "Croatia",
                summary: "Croatia is a popular tourist destination known for its picturesque beaches, historic cities, and stunning landscapes.Dubrovnik, Split, and Rovinj are must-see destinations, while national parks like Plitvice Lakes offer stunning natural beauty.",
                popularCities: ["Zagreb", "Dubrovnik", "Split", "Rijeka"],
                visitable: true,
                url: 'croatia'
            },
            vojvodina:{
                name: "Vojvodina",
                summary: "Known for its rich cultural heritage, Vojvodina is a province in Serbia that is home to a diverse mix of ethnic groups. It's recommended to check the travel advice of the government before planning a trip to Vojvodina.",
                popularCities: ["Novi Sad", "Subotica", "Zrenjanin", "Kikinda"],
                visitable: false,
                url: ''
            },
            hungary:{
                name: "Hungary",
                summary: "Known for its rich culture, history, and thermal baths, Hungary is a popular destination for tourists. The capital, Budapest, is a bustling city with a mix of Gothic, Baroque, and Art Nouveau architecture.",
                popularCities: ["Budapest", "Debrecen", "Szeged", "Miskolc"],
                visitable: true,
                url: 'hungary'
            },
            slovenia:{
                name: "Slovenia",
                summary: "Known for its natural beauty, history, and culture, Slovenia is a small country that has a lot to offer. The capital, Ljubljana, is a vibrant city with a mix of Austro-Hungarian and Ottoman architecture.",
                popularCities: ["Ljubljana", "Maribor", "Celje", "Kranj"],
                visitable: true,
                url: 'slovenia'
            },
            austria:{
                name: "Austria",
                summary: "Known for its rich culture, history, and picturesque landscapes, Austria is a popular destination for tourists. The capital, Vienna, is a bustling city with a mix of Gothic, Baroque, and Art Nouveau architecture.",
                popularCities: ["Vienna", "Salzburg", "Graz", "Innsbruck"],
                visitable: true,
                url: 'austria'
            },
            czechrepublic:{
                name: "Czech Republic",
                summary: "Known for its rich culture, history, and picturesque landscapes, the Czech Republic is a popular destination for tourists. The capital, Prague, is a bustling city with a mix of Gothic, Baroque, and Art Nouveau architecture.",
                popularCities: ["Prague", "Brno", "Ostrava", "Plzen"],
                visitable: true,
                url: 'czech-republic'
            },
            slovakia:{
                name: "Slovakia",
                summary: "Known for its rich culture, history, and picturesque landscapes, Slovakia is a popular destination for tourists. The capital, Bratislava, is a bustling city with a mix of Gothic, Baroque, and Art Nouveau architecture.",
                popularCities: ["Bratislava", "Kosice", "Nitra", "Presov"],
                visitable: true,
                url: 'slovakia'
            },
            ukraine:{
                name: "Ukraine",
                summary: "Known for its rich culture, history, and picturesque landscapes, Ukraine is a country that is still relatively undiscovered by tourists. It is currently deemed not safe to travel to Ukraine.",
                popularCities: ["Kiev", "Lviv", "Odessa", "Kharkiv"],
                visitable: false,
                url: ''
            },
            moldova:{
                name: "Moldova",
                summary: "Known for its rich culture, history, and picturesque landscapes, Moldova is a country that is still relatively undiscovered by tourists. It's recommended to check the travel advice of the government before planning a trip to Moldova.",
                popularCities: ["Chisinau", "Tiraspol", "Balti", "Bender"],
                visitable: true,
                url: 'moldova'
            },
            poland:{
                name: "Poland",
                summary: "Known for its rich culture, history, and picturesque landscapes, Poland is a popular destination for tourists. The capital, Warsaw, is a bustling city with a mix of Gothic, Baroque, and Art Nouveau architecture.",
                popularCities: ["Warsaw", "Krakow", "Gdansk", "Poznan"],
                visitable: true,
                url: 'poland'
            },
            lithuania:{
                name: "Lithuania",
                summary: "Known for its rich culture, history, and picturesque landscapes, Lithuania is a country that is still relatively undiscovered by tourists. The capital, Vilnius, is a bustling city with a mix of Gothic, Baroque, and Art Nouveau architecture.",
                popularCities: ["Vilnius", "Kaunas", "Klaipeda", "Siauliai"],
                visitable: true,
                url: 'lithuania'
            },
            belarus:{
                name: "Belarus",
                summary: "Known for its rich culture and history, Belarus is a country that is still relatively undiscovered by tourists. The capital, Minsk, is a bustling city with a mix of Soviet-era and modern architecture. It is currently deemed not safe to travel to Belarus.",
                popularCities: ["Minsk", "Gomel", "Vitebsk", "Mogilev"],
                visitable: false,
                url: ''
            },
            latvia:{
                name: "Latvia",
                summary: "Known for its rich culture, history, and picturesque landscapes, Latvia is a popular destination for tourists. The capital, Riga, is a bustling city with a mix of Gothic, Baroque, and Art Nouveau architecture.",
                popularCities: ["Riga", "Daugavpils", "Liepaja", "Jelgava"],
                visitable: true,
                url: 'latvia'
            },
            estonia:{
                name: "Estonia",
                summary: "Known for its rich culture, history, and picturesque landscapes, Estonia is a popular destination for tourists. The capital, Tallinn, is a bustling city with a mix of Gothic, Baroque, and Art Nouveau architecture.",
                popularCities: ["Tallinn", "Tartu", "Narva", "Parnu"],
                visitable: true,
                url: 'estonia'
            },
            sweden:{
                name: "Sweden",
                summary: "Known for its natural beauty, history, and culture, Sweden is a popular destination for tourists. The capital, Stockholm, is a bustling city with a mix of Gothic, Baroque, and Art Nouveau architecture.",
                popularCities: ["Stockholm", "Gothenburg", "Malmö", "Uppsala"],
                visitable: true,
                url: 'sweden'
            },
            norway:{
                name: "Norway",
                summary: "Known for its natural beauty, history, and culture, Norway is a popular destination for tourists. The capital, Oslo, is a bustling city with a mix of Gothic, Baroque, and Art Nouveau architecture.",
                popularCities: ["Oslo", "Bergen", "Trondheim", "Stavanger"],
                visitable: true,
                url: 'norway'
            },
            finland:{
                name: "Finland",
                summary: "Known for its natural beauty, history, and culture, Finland is a popular destination for tourists. The capital, Helsinki, is a bustling city with a mix of Gothic, Baroque, and Art Nouveau architecture.",
                popularCities: ["Helsinki", "Espoo", "Tampere", "Vantaa"],
                visitable: true,
                url: 'finland'
            },
            denmark:{
                name: "Denmark",
                summary: "Known for its natural beauty, history, and culture, Denmark is a popular destination for tourists. The capital, Copenhagen, is a bustling city with a mix of Gothic, Baroque, and Art Nouveau architecture.",
                popularCities: ["Copenhagen", "Aarhus", "Odense", "Aalborg"],
                visitable: true,
                url: 'denmark'
            }
        }
    },
    'asia': {
        geoInfo: {
            rotate: [-80.0, -53.0, 0],
            center: [14, -8],
            scale: 300
        },
        name: "Asia",
        summary: "",
        topCountries: ['China', 'Thailand', 'Japan'],
        countries: {
            yemen:{
                name: "Yemen",
                summary: "Yemen is a country with a rich history and culture, but is currently facing a humanitarian crisis. It is not safe for tourists to visit at this time.",
                popularCities: []
            },
            oman:{
                name: "Oman",
                summary: "Oman offers a unique blend of traditional and modern culture, with beautiful beaches, deserts, and mountains to explore. It's recommended to check the travel advice of the government before planning a trip to Oman.",
                popularCities: ["Muscat", "Salalah", "Sur", "Nizwa"]
            },
            "united arab emirates":{
                name: "United Arab Emirates",
                summary: "The United Arab Emirates is known for its luxury shopping, modern architecture, and man-made islands. Cities like Dubai and Abu Dhabi offer a mix of cultures and experiences, from desert safaris to indoor skiing.",
                popularCities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"]
            },
            qatar:{
                name: "Qatar",
                summary: "Qatar is a small but wealthy country, known for its modern architecture, museums, and shopping. Visitors can also explore the desert and see traditional Bedouin life.",
                popularCities: ["Doha", "Al Wakrah", "Al Khor", "Al-Daayen"]
            },
            "saudi arabia":{
                name: "Saudi Arabia",
                summary: "Saudi Arabia is the birthplace of Islam and home to Islam's holiest sites, including Mecca and Medina. It is a country with a rich history and culture, but is not currently open to tourists.",
                popularCities: ["Mecca", "Medina", "Jeddah", "Riyadh"]
            },
            kuwait:{
                name: "Kuwait",
                summary: "Kuwait is a small country with a rich history and culture, known for its traditional souks and modern skyscrapers. Visitors can also explore the desert and see traditional Bedouin life.",
                popularCities: ["Kuwait City", "Salmiya", "Jahra", "Al Ahmadi"]
            },
            iraq:{
                name: "Iraq",
                summary: "Iraq is a country with a rich history, but is currently facing a humanitarian crisis. It is not safe for tourists to visit at this time.",
                popularCities: []
            },
            jordan:{
                name: "Jordan",
                summary: "Jordan is a small country with a rich history, known for its ancient ruins, such as Petra, and its natural beauty, including the Dead Sea and Wadi Rum. Visitors can also experience Bedouin culture.",
                popularCities: ["Amman", "Petra", "Wadi Rum", "Aqaba"]
            },
            "west bank":{
                name: "West Bank",
                summary: "The West Bank is a territory in the Middle East that is currently under Israeli occupation. It is not safe for tourists to visit at this time.",
                popularCities: []
            },
            israel:{
                name: "Israel",
                summary: "Israel is a small country with a rich history, known for its religious sites, such as the Western Wall and the Church of the Holy Sepulchre, as well as its beaches and modern cities like Tel Aviv.",
                popularCities: ["Jerusalem", "Tel Aviv", "Eilat", "Haifa"]
            },
            UNDOF:{
                name: "UNDOF",
                summary: "",
                popularCities: []
            },
            syria:{
                name: "Syria",
                summary: "Syria is a country with a rich history, but is currently facing a humanitarian crisis. It is not safe for tourists to visit at this time.",
                popularCities: []
            },
            lebanon:{
                name: "Lebanon",
                summary: "Lebanon is a small country with a rich history and culture, known for its delicious food, historic ruins, and beautiful beaches. It's recommended to check the travel advice of the government before planning a trip to Lebanon.",
                popularCities: []
            },
            turkey:{
                name: "Turkey",
                summary: "Turkey is a large country with a rich history, known for its ancient ruins, such as Ephesus, and its natural beauty, including the Blue Mosque and the hot springs of Pamukkale.",
                popularCities: ["Istanbul", "Antalya", "Kapadokya", "Bodrum "]
            },
            "northern cyprus":{
                name: "Northern Cyprus",
                summary: "",
                popularCities: []
            },
            cyprus:{
                name: "Cyprus",
                summary: "Cyprus is an island country in the Eastern Mediterranean known for its beaches, ancient ruins, and delicious cuisine. Visitors can explore the Greek and Turkish cultures on the island.",
                popularCities: ["Limassol", "Paphos", "Ayia Napa", "Larnaca"]
            },
            "dhekelia sovereign":{
                name: "Dhekelia Sovereign",
                summary: "",
                popularCities: []
            },
            "akrotiri sovereign":{
                name: "Akrotiri Sovereign",
                summary: "",
                popularCities: []
            },
            georgia:{
                name: "Georgia",
                summary: "A country with a unique blend of ancient history, stunning landscapes, and delicious cuisine. Visitors can explore the medieval Old Town of Tbilisi, discover the wine region of Kakheti, and hike in the Caucasus Mountains.",
                popularCities: ["Tbilisi", "Batumi", "Mtskheta", "Kazbegi"]
            },
            azerbaijan:{
                name: "Azerbaijan",
                summary: "Known for its rich culture and diverse landscapes, Azerbaijan offers visitors a chance to explore the Old City of Baku, the Gobustan National Park, and the natural wonders of the Absheron Peninsula.",
                popularCities: ["Baku", "Sheki", "Quba", "Ganja"]
            },
            iran:{
                name: "Iran",
                summary: "A destination steeped in history and culture, Iran offers visitors the chance to explore the ancient city of Persepolis and the natural beauty of the Alborz Mountains. It's recommended to check the travel advice of the government before planning a trip to Iran.",
                popularCities: ["Tehran", "Esfahan", "Shiraz", "Yazd"]
            },
            armenia:{
                name: "Armenia",
                summary: "A small country with a rich history and culture, Armenia offers visitors the chance to explore the ancient city of Erevan, the medieval monasteries of Noravank and Geghard, and the stunning landscapes of Lake Sevan.",
                popularCities: ["Yerevan", "Gyumri", "Dilijan", "Lake Sevan"]
            },
            "sri lanka":{
                name: "Sri Lanka",
                summary: "Known for its stunning beaches, lush rainforests and ancient cities, Sri Lanka offers visitors the chance to explore the ancient city of Sigiriya, the sacred city of Kandy and the diverse wildlife in national parks like Yala and Udawalawe.",
                popularCities: ["Colombo", "Kandy", "Sigiriya", "Galle"]
            },
            india:{
                name: "India",
                summary: "A land of vibrant culture, history and cuisine, India offers visitors the chance to explore the iconic Taj Mahal, the bustling streets of Mumbai, and the serene backwaters of Kerala.",
                popularCities: ["Agra", "Jaipur", "Mumbai", "Goa"]
            },
            pakistan:{
                name: "Pakistan",
                summary: "A land of stunning natural beauty and rich culture, Pakistan offers visitors the chance to explore the ancient city of Lahore, the Himalayan Mountains, and the diverse cultures of the northern regions.",
                popularCities: ["Karachi", "Lahore", "Islamabad", "Rawalpindi"]
            },
            afghanistan:{
                name: "Afghanistan",
                summary: "A country with a rich history and culture, Afghanistan offers visitors the chance to explore the ancient city of Bamiyan, the Minaret of Jam and the stunning Wakhan Corridor. It's recommended to check the travel advice of the government before planning a trip to Afghanistan.",
                popularCities: []
            },
            tajikistan:{
                name: "Tajikistan",
                summary: "Known for its rugged mountains, ancient architecture, and vibrant culture, Tajikistan offers a unique blend of adventure and history for travelers. It's recommended to check the travel advice of the government before planning a trip to Tajikistan.",
                popularCities: []
            },
            kyrgyzstan:{
                name: "Kyrgyzstan",
                summary: "A land of stunning natural beauty, Kyrgyzstan is home to snow-capped peaks, alpine lakes, and traditional nomadic culture.",
                popularCities: ["Bishkek", "Issyk-Kul", "Karakol", "Osh"]
            },
            uzbekistan:{
                name: "Uzbekistan",
                summary: "Boasting a rich history and a unique blend of Islamic and Central Asian cultures, Uzbekistan is home to some of the world's most iconic architecture and monuments.",
                popularCities: ["Samarkand", "Bukhara", "Tashkent", "Khiva"]
            },
            turkmenistan:{
                name: "Turkmenistan",
                summary: "Turkmenistan is a secretive and little-visited country with a unique culture and a landscape of deserts and ancient ruins. It's recommended to check the travel advice of the government before planning a trip to Turkmenistan.",
                popularCities: []
            },
            kazakhstan:{
                name: "Kazakhstan",
                summary: "The largest country in Central Asia, Kazakhstan offers a diverse array of landscapes, from snowy mountains to steppe grasslands, and a rich cultural heritage.",
                popularCities: ["Almaty", "Nur-Sultan", "Shymkent", "Aktau"]
            },
            russia:{
                name: "Russia",
                summary: "The largest country in the world, Russia is a land of contrasts, from the bustling cities of Moscow and St. Petersburg to the remote wilderness of Siberia. It's recommended to check the travel advice of the government before planning a trip to Russia.",
                popularCities: ["Vladivostok", "Irkutsk", "Khabarovsk", "Yakutsk"]
            }
// :{
//     name: "",
//     summary: "",
//     popularCities: ["", "", "", ""]
// }
        }
    },
    'africa': {
        geoInfo: {
            rotate: [-10.0, -53.0, 0],
            center: [20, -65],
            scale: 300
        },
        summary: "",
        topCountries: ['Morocco', 'Egypt', 'Tunisia'],
        countries: {
            // :{
//     name: "",
//     summary: "",
//     popularCities: ["", "", "", ""]
// }
        }
    },
    'north-america': {
        geoInfo: {
            rotate: [100, 0, 0],
            center: [-5, 40],
            scale: 325
        },
        summary: "",
        topCountries: ['USA', 'Mexico', 'Canada'],
        countries: {
// :{
//     name: "",
//     summary: "",
//     popularCities: ["", "", "", ""]
// }
        }
    },
    'south-america': {
        geoInfo: {
            rotate: [60, 0, 0],
            center: [-10, -25],
            scale: 400
        },
        summary: "",
        topCountries: ['Argentina', 'Brazil', 'Chile'],
        countries: {
            // :{
//     name: "",
//     summary: "",
//     popularCities: ["", "", "", ""]
// }
        }
    },
    'australia-oceania': {
        geoInfo: {
            rotate: [-20, 140, 150],
            center: [-40, 15],
            scale: 350
        },
        summary: "",
        topCountries: ['Australia', 'New Zealand', 'Fiji'],
        countries: {
            // :{
//     name: "",
//     summary: "",
//     popularCities: ["", "", "", ""]
// }
        }
    }
}


module.exports = {continentCountries}