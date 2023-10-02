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
            "united kingdom": {
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
            belgium: {
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
            "north macedonia":{
                name: "North Macedonia",
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
            "bosnia and herzegovina":{
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
            czechia:{
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
    }
}

module.exports = {continentCountries}