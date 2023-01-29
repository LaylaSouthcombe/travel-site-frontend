const continentInfo = {
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
                popularCities: ["Rome", "Florence", "Venice", "Milan"]
            },
            germany: {
                name: "Germany",
                summary: "A country with a rich history and culture, known for its castles, beer gardens, and Christmas markets. Visitors can experience the bustling cities of Berlin and Munich, or take a scenic drive through the Bavarian Alps.",
                popularCities: ["Berlin", "Munich", "Hamburg", "Frankfurt"]
            },
            england: {
                name: "England",
                summary: "A country known for its historic landmarks, such as Buckingham Palace and Stonehenge, as well as its vibrant cities like London and Manchester. Visitors can explore medieval castles, take in a Shakespeare play, or indulge in traditional fish and chips.",
                popularCities: ["London", "Manchester", "Bristol", "Liverpool"]
            },
            scotland: {
                name: "Scotland",
                summary: "A country known for its stunning landscapes, such as the Isle of Skye and the Loch Ness, as well as its rich cultural heritage. Visitors can explore ancient castles, hike through the highlands, or take a scenic drive on the North Coast 500.",
                popularCities: ["Edinburgh", "Glasgow", "Inverness", "Dundee"]
            },
            wales: {
                name: "Wales",
                summary: "A country known for its rugged landscapes and natural beauty, such as Snowdonia National Park and the Brecon Beacons. Visitors can explore medieval castles, hike through the mountains, or sample traditional Welsh cuisine like Welsh lamb and cawl.",
                popularCities: ["Cardiff", "Swansea", "Wrexham", "Newport"]
            },
            iceland: {
                name: "Iceland",
                summary: "A country known for its otherworldly landscapes, such as the Blue Lagoon and the Northern Lights. Visitors can explore glaciers, waterfalls, and volcanic landscapes, as well as take in the culture and history of Reykjavik, the country's capital city.",
                popularCities: ["Reykjavik", "Akureyri", "Vatnajökull", "Skaftafell"]
            },
            svalbard: {
                name: "Svalbard",
                summary: "An Arctic archipelago located between Norway and the North Pole. Known for its rugged wilderness and unique wildlife, such as polar bears, reindeer and arctic foxes. Visitors can experience dog sledding, snowmobiling, and ice caving, as well as the historic mining towns.",
                popularCities: ["Longyearbyen", "Barentsburg", "Ny-Ålesund", "Sveagruva"]
            },
            russia: {
                name: "Russia",
                summary: "The largest country in the world, Russia is a land of contrasts, from the bustling cities of Moscow and St. Petersburg to the remote wilderness of Siberia. It's recommended to check the travel advice of the government before planning a trip to Russia.",
                popularCities: ["Moscow", "St. Petersburg", "Kazan", "Sochi"]
            },
            ireland: {
                name: "Ireland",
                summary: "An island country in northwest Europe known for its green landscapes, picturesque villages, and rich cultural heritage. Visitors can explore the Cliffs of Moher, the Ring of Kerry, and the city of Dublin.",
                popularCities: ["Dublin", "Cork", "Galway", "Killarney"]
            },
            northernireland: {
                name: "Northern Ireland",
                summary: "A country located in the northeastern part of the island of Ireland, known for its rugged landscapes and historic landmarks, such as the Giant's Causeway and the Dark Hedges. Visitors can also explore the city of Belfast.",
                popularCities: ["Belfast", "Derry", "Newry", "Coleraine"]
            },
            portugal: {
                name: "Portugal",
                summary: "A country located in southwestern Europe, known for its historic cities such as Lisbon and Porto, as well as its picturesque villages, beaches, and wine regions. Visitors can explore historic castles and monasteries and sample traditional seafood dishes.",
                popularCities: ["Lisbon", "Porto", "Coimbra", "Albufeira"]
            },
            spain: {
                name: "Spain",
                summary: "A country located in southwestern Europe, known for its rich history and culture, delicious cuisine, and vibrant nightlife. Visitors can explore historic landmarks such as the Alhambra and the Sagrada Familia, and experience the local festivals and traditions.",
                popularCities: ["Madrid", "Barcelona", "Valencia", "Seville"]
            },
            france: {
                name: "France",
                summary: "A country located in Western Europe, known for its iconic landmarks such as the Eiffel Tower and the Louvre, as well as its rich history, culture, and delicious cuisine. Visitors can explore famous wine regions, take in the local art and music scene, and indulge in traditional French dishes.",
                popularCities: ["Paris", "Marseille", "Lyon", "Nice"]
            },
            switzerland: {
                name: "Switzerland",
                summary: "Known for its natural beauty, history, and culture, Switzerland is a popular destination for outdoor activities such as skiing and hiking. Cities like Zurich and Geneva offer a mix of history and modern amenities.",
                popularCities: ["Zurich", "Geneva", "Bern", "Lucerne"]
            },
            luxembourg: {
                name: "Luxembourg",
                summary: "Known for its history, culture, and natural beauty, Luxembourg is a small country with a lot to offer. The capital, Luxembourg City, is a UNESCO World Heritage Site with a rich history and beautiful architecture.",
                popularCities: ["Luxembourg City", "Esch-sur-Alzette", "Echternach", "Clervaux"]
            },
            walloonregion: {
                name: "Belgium",
                summary: "Known for its history, culture, and delicious chocolate and beer, Belgium is a great destination for foodies and history buffs alike. Cities like Brussels, Bruges, and Antwerp offer a mix of medieval architecture and modern amenities, while the picturesque countryside is perfect for cycling or hiking.",
                popularCities: ["Brussels", "Bruges", "Antwerp", "Ghent"]
            },
            flemishregion: {
                name: "Belgium",
                summary: "Known for its history, culture, and delicious chocolate and beer, Belgium is a great destination for foodies and history buffs alike. Cities like Brussels, Bruges, and Antwerp offer a mix of medieval architecture and modern amenities, while the picturesque countryside is perfect for cycling or hiking.",
                popularCities: ["Brussels", "Bruges", "Antwerp", "Ghent"]
            },
            netherlands: {
                name: "Netherlands",
                summary: "Known for its history, culture, and natural beauty, the Netherlands is a great destination for those interested in art, architecture, and history. Cities like Amsterdam, Rotterdam, and Utrecht offer a mix of medieval architecture and modern amenities, while the picturesque countryside is perfect for cycling or hiking.",
                popularCities: ["Amsterdam", "Rotterdam", "Utrecht", "The Hague "]
            },
            greece: {
                name: "Greece",
                summary: "Known for its history, culture, and natural beauty, Greece is a popular destination for those interested in ancient history and mythology. The capital, Athens, is home to the iconic Acropolis and Parthenon, while the charming island of Santorini and the ancient city of Crete offer a mix of history and natural beauty.",
                popularCities: ["Athens", "Thessaloniki", "Crete", "Santorini"]
            },
            albania:{
                name: "Albania",
                summary: "Known for its rugged mountains, beautiful beaches, and rich culture, Albania is a country that is still relatively undiscovered by tourists. The capital, Tirana, is a bustling city with a mix of Ottoman and communist-era architecture.",
                popularCities: ["Tirana", "Durrës", "Shkodër", "Vlorë"]
            },
            macedonia:{
                name: "Macedonia",
                summary: "Known for its natural beauty, history, and culture, Macedonia is a small country that has a lot to offer. The capital, Skopje, is a bustling city with a mix of Ottoman and communist-era architecture.",
                popularCities: ["Skopje", "Ohrid", "Bitola", "Kumanovo"]
            },
            bulgaria:{
                name: "Bulgaria",
                summary: "Known for its history, culture, and natural beauty, Bulgaria is a country that is still relatively undiscovered by tourists. The capital, Sofia, is a bustling city with a mix of Ottoman and communist-era architecture.",
                popularCities: ["Sofia", "Plovdiv,", "Varna", "Burgas"]
            },
            romania:{
                name: "Romania",
                summary: "Known for its history, culture, and natural beauty, Romania is a country that is still relatively undiscovered by tourists. The capital, Bucharest, is a bustling city with a mix of Ottoman and communist-era architecture.",
                popularCities: ["Bucharest", "Cluj-Napoca", "Timisoara", "Iasi"]
            },
            serbia:{
                name: "Serbia",
                summary: "Known for its history, culture, and natural beauty, Serbia is a country that is still relatively undiscovered by tourists. The capital, Belgrade, is a bustling city with a mix of Ottoman and communist-era architecture.",
                popularCities: ["Belgrade", "Novi Sad", "Nis", "Kragujevac"]
            },
            kosovo:{
                name: "Kosovo",
                summary: "Known for its history, culture, and natural beauty, Kosovo is a country that is still relatively undiscovered by tourists. The capital, Pristina, is a bustling city with a mix of Ottoman and communist-era architecture. It's recommended to check the travel advice of the government before planning a trip to Kosovo.",
                popularCities: ["Pristina", "Prizren", "Peja", "Gjakova"]
            },
            montenegro:{
                name: "Montenegro",
                summary: "Known for its natural beauty, history, and culture, Montenegro is a small country that has a lot to offer. The capital, Podgorica, is a bustling city with a mix of Ottoman and communist-era architecture.",
                popularCities: ["Podgorica", "Budva", "Kotor", "Ulcinj"]
            },
            republicsrpska:{
                name: "Republic Srpska",
                summary: "Known for its history, culture, and natural beauty, Republic Srpska is a country that is still relatively undiscovered by tourists. The capital, Banja Luka, is a bustling city with a mix of Ottoman and communist-era architecture.",
                popularCities: ["Banja Luka", "Bijeljina", "Prijedor", "Trebinje"]
            },
            bosniaandherzegovina:{
                name: "Bosnia and Herzegovina",
                summary: "Known for its history, culture, and natural beauty, Bosnia and Herzegovina is a country that is still relatively undiscovered by tourists. It's recommended to check the travel advice of the government before planning a trip to Bosnia and Herzegovina.",
                popularCities: ["Sarajevo", "Mostar", "Banja Luka", "Tuzla"]
            },
            croatia:{
                name: "Croatia",
                summary: "Croatia is a popular tourist destination known for its picturesque beaches, historic cities, and stunning landscapes.Dubrovnik, Split, and Rovinj are must-see destinations, while national parks like Plitvice Lakes offer stunning natural beauty.",
                popularCities: ["Zagreb", "Dubrovnik", "Split", "Rijeka"]
            },
            vojvodina:{
                name: "Vojvodina",
                summary: "Known for its rich cultural heritage, Vojvodina is a province in Serbia that is home to a diverse mix of ethnic groups. It's recommended to check the travel advice of the government before planning a trip to Vojvodina.",
                popularCities: ["Novi Sad", "Subotica", "Zrenjanin", "Kikinda"]
            },
            Hungary:{
                name: "Hungary",
                summary: "Known for its rich culture, history, and thermal baths, Hungary is a popular destination for tourists. The capital, Budapest, is a bustling city with a mix of Gothic, Baroque, and Art Nouveau architecture.",
                popularCities: ["Budapest", "Debrecen", "Szeged", "Miskolc"]
            },
            slovenia:{
                name: "Slovenia",
                summary: "Known for its natural beauty, history, and culture, Slovenia is a small country that has a lot to offer. The capital, Ljubljana, is a vibrant city with a mix of Austro-Hungarian and Ottoman architecture.",
                popularCities: ["Ljubljana", "Maribor", "Celje", "Kranj"]
            },
            austria:{
                name: "Austria",
                summary: "Known for its rich culture, history, and picturesque landscapes, Austria is a popular destination for tourists. The capital, Vienna, is a bustling city with a mix of Gothic, Baroque, and Art Nouveau architecture.",
                popularCities: ["Vienna", "Salzburg", "Graz", "Innsbruck"]
            },
            czechrepublic:{
                name: "Czech Republic",
                summary: "Known for its rich culture, history, and picturesque landscapes, the Czech Republic is a popular destination for tourists. The capital, Prague, is a bustling city with a mix of Gothic, Baroque, and Art Nouveau architecture.",
                popularCities: ["Prague", "Brno", "Ostrava", "Plzen"]
            },
            slovakia:{
                name: "Slovakia",
                summary: "Known for its rich culture, history, and picturesque landscapes, Slovakia is a popular destination for tourists. The capital, Bratislava, is a bustling city with a mix of Gothic, Baroque, and Art Nouveau architecture.",
                popularCities: ["Bratislava", "Kosice", "Nitra", "Presov"]
            },
            ukraine:{
                name: "Ukraine",
                summary: "Known for its rich culture, history, and picturesque landscapes, Ukraine is a country that is still relatively undiscovered by tourists. It is currently deemed not safe to travel to Ukraine.",
                popularCities: ["Kiev", "Lviv", "Odessa", "Kharkiv"]
            },
            moldova:{
                name: "Moldova",
                summary: "Known for its rich culture, history, and picturesque landscapes, Moldova is a country that is still relatively undiscovered by tourists. It's recommended to check the travel advice of the government before planning a trip to Moldova.",
                popularCities: ["Chisinau", "Tiraspol", "Balti", "Bender"]
            },
            poland:{
                name: "Poland",
                summary: "Known for its rich culture, history, and picturesque landscapes, Poland is a popular destination for tourists. The capital, Warsaw, is a bustling city with a mix of Gothic, Baroque, and Art Nouveau architecture.",
                popularCities: ["Warsaw", "Krakow", "Gdansk", "Poznan"]
            },
            lithuania:{
                name: "Lithuania",
                summary: "Known for its rich culture, history, and picturesque landscapes, Lithuania is a country that is still relatively undiscovered by tourists. The capital, Vilnius, is a bustling city with a mix of Gothic, Baroque, and Art Nouveau architecture.",
                popularCities: ["Vilnius", "Kaunas", "Klaipeda", "Siauliai"]
            },
            belarus:{
                name: "Belarus",
                summary: "Known for its rich culture and history, Belarus is a country that is still relatively undiscovered by tourists. The capital, Minsk, is a bustling city with a mix of Soviet-era and modern architecture. It is currently deemed not safe to travel to Belarus.",
                popularCities: ["Minsk", "Gomel", "Vitebsk", "Mogilev"]
            },
            latvia:{
                name: "Latvia",
                summary: "Known for its rich culture, history, and picturesque landscapes, Latvia is a popular destination for tourists. The capital, Riga, is a bustling city with a mix of Gothic, Baroque, and Art Nouveau architecture.",
                popularCities: ["Riga", "Daugavpils", "Liepaja", "Jelgava"]
            },
            estonia:{
                name: "Estonia",
                summary: "Known for its rich culture, history, and picturesque landscapes, Estonia is a popular destination for tourists. The capital, Tallinn, is a bustling city with a mix of Gothic, Baroque, and Art Nouveau architecture.",
                popularCities: ["Tallinn", "Tartu", "Narva", "Parnu"]
            },
            sweden:{
                name: "Sweden",
                summary: "Known for its natural beauty, history, and culture, Sweden is a popular destination for tourists. The capital, Stockholm, is a bustling city with a mix of Gothic, Baroque, and Art Nouveau architecture.",
                popularCities: ["Stockholm", "Gothenburg", "Malmö", "Uppsala"]
            },
            norway:{
                name: "Norway",
                summary: "Known for its natural beauty, history, and culture, Norway is a popular destination for tourists. The capital, Oslo, is a bustling city with a mix of Gothic, Baroque, and Art Nouveau architecture.",
                popularCities: ["Oslo", "Bergen", "Trondheim", "Stavanger"]
            },
            finland:{
                name: "Finland",
                summary: "Known for its natural beauty, history, and culture, Finland is a popular destination for tourists. The capital, Helsinki, is a bustling city with a mix of Gothic, Baroque, and Art Nouveau architecture.",
                popularCities: ["Helsinki", "Espoo", "Tampere", "Vantaa"]
            },
            denmark:{
                name: "Denmark",
                summary: "Known for its natural beauty, history, and culture, Denmark is a popular destination for tourists. The capital, Copenhagen, is a bustling city with a mix of Gothic, Baroque, and Art Nouveau architecture.",
                popularCities: ["Copenhagen", "Aarhus", "Odense", "Aalborg"]
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


module.exports = {continentInfo}