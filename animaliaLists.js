const BIRDS = [
    'Alcid',
    'Bee-eater',
    'Cassowary',
    'Coly',
    'Cormorant',
    'Cuckoo-Roller',
    'Cuckoo',
    'Falcon',
    'Frigatebird',
    'Grebe',
    'Heron',
    'Hornbill',
    'Hummingbird',
    'Kiwi',
    'Loon',
    'Ostrich',
    'Owl',
    'Oystercatcher',
    'Pelican',
    'Penguin',
    'Plover',
    'Water Rail',
    'Corn crake',
    'Moorhen',
    'Sandgrouse',
    'Seriema',
    'Stork',
    'Swan',
    'Goose',
    'Duck',
    'Swift',
    'Tinamou',
    'Tody',
    'Tropicbird',
    'Trogon'
];

const INSECTS = [
    'ant lion',
    'ant',
    'cicada',
    'cockroach',
    'daddy-longleg',
    'damselfly',
    'dragonfly',
    'grasshopper',
    'humpbacked fly',
    'katydid',
    'locust',
    'Mantis',
    'Mecynorrhina ugandensis',
    'mosquito',
    'Chrysina aurigans',
    'moth',
    'scorpion',
    'Caterpiller bug',
    'spider',
    'stick insect',
    'Bumblebee',
    'webspinner',
    'Picasso Bug',
];

const FISH = [
    'shrimp',
    'mantis shrimp',
    'bullhead shark',
    'bowfin',
    'bonytongue',
    'catfish',
    'chimaera',
    'cod',
    'cow shark',
    'cowfish',
    'damselfly',
    'dory',
    'filefish',
    'flatfish',
    'flying gurnard',
    'garfish',
    'grenadier',
    'hake',
    'john dory',
    'killifish',
    'lamprey',
    'milkfish',
    'minnow',
    'needlefish',
    'opah',
    'pikeperch',
    'piranha',
    'puffer',
    'salmon',
    'saw shark',
    'sea horse',
    'skate fish',
    'snipefish',
    'sole',
    'stickleback',
    'stingray',
    'surgeonfish',
    'tarpon',
    'trunkfish',
    'Oceanic dolphin',
    'Porpoise',
    'Beluga',
    'narwhal',
    'Sperm whale',
    'Beaked whale',
    'Blue whale',
    'Humpback Whale',
    'Gray whale',
    'bowhead whale',
    'Walrus',
    'Eared seal',
    'sea lion',
    'True seal'
];
    
const MAMMALS = 
[
    'cuscuse',
    'Red panda',
    "Leadbeater's possum",
    'Dog',
    'wolf',
    'fox',
    'coyote',
    'jackal',
    'Cat',
    'Lynx',
    'Jaguar',
    'Leopard',
    'Tiger',
    'Lion',
    'Puma',
    'Cheetah',
    'Caracal',
    'Hyena',
    'Mongoose',
    'Weasel',
    'ferret',
    'badger',
    'otter',
    'Raccoon',
    'coati',
    'kinkajou',
    'Bear',
    'Three-toed sloth',
    'Armadillo',
    'Two-toed sloth',
    'Anteater',
    'tamandua',
    'Pronghorn',
    'Cattle',
    'goat',
    'sheep',
    'antelope',
    'Gazelle',
    'Wildebeest',
    'Impala',
    'Bison',
    'Muskox',
    'Water Buffalo',
    'Camel',
    'llama',
    'alpaca',
    'vicuña',
    'Deer',
    'Giraffe',
    'okapi',
    'Musk deer',
    'Pig',
    'hog',
    'Peccaries',
    'Hyraxe',
    'Hedgehog',
    'gymnure',
    'Solenodon',
    'Tenrecs',
    'Golden mole',
    'Mole',
    'shrew Mole',
    'desman',
    'Shrew',
    'water shrew',
    'Desman',
    'mole',
    'Rabbit',
    'hare',
    'Pika',
    'Marsupial mole',
    'Opossum',
    'Monito del monte',
    'Shrew opossum',
    'Quoll',
    'dunnart',
    'Tasmanian devil',
    'Numbat',
    'Bandicoot',
    'bilbies',
    'Bilby',
    'Koala',
    'Wombat',
    'Kangaroo',
    'wallabie',
    'tree-kangaroo',
    'pademelon',
    'quokka',
    'Ringtail possum',
    'greater glider',
    'Rat-kangaroo',
    'Platypus',
    'Echidna',
    'Sac-winged bat',
    'Mouse-tailed bat',
    'Bumblebee bat',
    'False vampire bat',
    'Horseshoe bat',
    'Leaf-nosed bat',
    'Vesper bat',
    'Free-tailed bat'
];

const REPTILES = [
    'Agama',
    'chameleon',
    'Gecko',
    'Anole',
    'iguana',
    'Skink',
    'Whiptail',
    'tegus',
    'Monitor lizard'
];

const FILM = [
    'Action',
    'Animation',
    'Biography',
    'Comedy',
    'Comic',
    'Crime',
    'Documentary',
    'Drama',
    'Fantasy',
    'Horror',
    'Martial-arts',
    'Musical',
    'new wave',
    'Romance',
    'Sci-fi',
    'Silent',
    'Sports',
    'Thriller',
    'War',
    'Western'
];

const ENVIRONMENTS = [
    'Forest paintings',
    'Mountain landscapes',
    'Ocean seascapes',
    'Waterfall paintings',
    'River scenes',
    'Desert paintings',
    'Fantasy landscapes',
    'Coastal landscapes',
    'Tropical landscapes',
    'Arctic landscapes',
    'Urban cityscapes',
    'Rural landscapes',
    'Rainforest paintings',
    'Sunset scenes',
    'Stormy weather',
    'Autumn landscapes',
    'Winter scenes',
    'Spring blossoms',
    'Summer fields',
    'Night skies',
    'Foggy landscapes',
    'Volcanic scenes',
    'Canyon paintings',
    'Underwater seascapes',
    'Wildlife habitats',
    'Marshland paintings',
    'Rolling hills',
    'Prairie landscapes',
    'Mangrove forests',
    'Savannah scenes',
    'Island seascapes',
    'Abstract landscapes',
    'Misty mountains',
    'Aerial views',
    'Garden scenes',
    'Rocky shores',
    'Tundra landscapes',
    'Swamp scenes',
    'Bamboo forests',
    'Moonlit landscapes',
    'Jungle paintings',
    'Geothermal areas',
    'Plateau landscapes',
    'Coastal cliffs',
    'Tropical beaches',
    'Lighthouse scenes',
    'Sand dunes',
    'River delta landscapes',
    'Alpine meadows',
    'Glacier paintings'
];

const FASHION = [
    'Hypebeast Style',
    'Cottagegore Style',
    '2000s Style',
    'Y2K Style',
    'Grunge Style',
    'Bohemian Style',
    'Streetwear Style',
    'Vintage Style',
    'Minimalist Style',
    'Normcore Style',
    'Athleisure Style',
    'Preppy Style',
    'Punk Style',
    'Gothic Style',
    'Hipster Style',
    'Retro Style',
    'Rockabilly Style',
    'Mod Style',
    'Steampunk Style',
    'Romantic Style',
    'Harajuku Style',
    '1980s Style',
    '1970s Style',
    '1960s Style',
    '1950s Style',
    '1940s Style',
    '1930s Style',
    'Art Deco Style',
    'Dapper Style',
    'Flapper Style',
    'New Romantic Style',
    'Cyberpunk Style',
    'Rave Style',
    'Festival fashion Style',
    'Business casual Style',
    'Gatsby Style',
    'Androgynous Style',
    'Pop art Style',
    'Glam rock Style',
    'Workwear Style',
    'Safari Style',
    'Nautical Style',
    'Hippie Style',
    'Eco-friendly Style',
    'Military-inspired Style',
    'Western Style',
    'Futuristic Style',
    'Deconstructed Style'
];

const ARCHITECTURE = [
    'Roman Architecture',
    'Gothic Architecture',
    'Neoclassical Architecture',
    'Modern Architecture',
    'Renaissance Architecture',
    'Baroque Architecture',
    'Art Deco Architecture',
    'Brutalist Architecture',
    'Bauhaus Architecture',
    'Victorian Architecture',
    'Georgian Architecture',
    'Art Nouveau Architecture',
    'Greek Revival Architecture',
    'Colonial Architecture',
    'Postmodern Architecture',
    'Ancient Egyptian Architecture',
    'Byzantine Architecture',
    'Islamic Architecture',
    'Romanesque Architecture',
    'Traditional Japanese Architecture',
    'Tudor Architecture',
    'Prairie Style Architecture',
    'Futurist Architecture',
    'Expressionist Architecture'
];

const STILL_LIFES = [
    'Flower pieces still life',
    'Animal pieces still life',
    'Banquet pieces still life',
    'Symbolic still life'
]

const PORTRAITS = [
    'Traditional portraits',
    'Candid portraits',
    'Lifestyle portraits',
    'Glamour portraits',
    'Conceptual portraits',
    'Close up portraits',
    'Group portraits',
    'Environmental portraits',
    'Pet portraits',
    'Profile View portraits',
    'Full Face View portraits',
    'Troonie portraits',
    'Three Quarter View portraits'
]

const WEIRD_ANIMALS = [
    'Tufted Deer',
    'Fossa',
    'Blue Parrotfish',
    'Sunda Colugo',
    'Red-Lipped Batfish',
    'Irrawaddy Dolphin',
    'Dumbo Octopus',
    'Honduran White Bat',
    'Japanese Spider Crab',
    'Saiga Antelope',
    'Dik-Dik',
    'Lilac-Breasted Roller',
    'Mata Mata Turtle',
    'Sea Pig',
    'Superb Bird-Of-Paradise',
    'Satanic Leaf-Tailed Gecko',
    'Halitrephes Jellyfish',
    'Pink Fairy Armadillo',
    'Okapi',
    'Maned Wolf',
    'Blobfish',
    'Golden Tortoise Beetle',
    'Gobi Jerboa',
    'Sea Pen',
    'Axolotl',
    'Narwhal',
    'Mantis Shrimp',
    'Shoebill',
    'Patagonian Mara',
    'Goblin Shark',
    'Hummingbird Hawk-Moth',
    'Yeti Crab',
    'Sri Lanka Frogmouth',
    'Long-Wattled Umbrellabird',
    'Dugong',
    'Giant Isopod',
    'Aye-Aye',
    'Gerenuk',
    'Colugo Flying Lemur',
    'Kinkajou',
    'Great Potoo',
    'Tarsier'
]