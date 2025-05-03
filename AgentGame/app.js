var adjectives = ["Bouncy", "Wiggly", "Goofy", "Zany", "Fluffy", "Silly", "Wacky", "Jumpy", "Snappy", "Loopy", "Nifty", "Peppy", "Giddy", "Grumpy", "Bubbly", "Kooky", "Spunky", "Sneezy", "Smart", "Breezy", "Witty", "Wobbly", "Snoozy", "Wonky", "Jazzy", "Swirly", "Giggly", "Chatty", "Sappy", "Flippy", "Dizzy", "Fuzzy", "Gooey", "Lively", "Mushy", "Dopey", "Happy", "Bashful", "Sleepy", "Plucky", "Snarky", "Zippy", "Cranky", "Gummy", "Zanytastic", "Zanyerific", "Zanyadoodle", "Zanyaroni", "Zanyaroo", "Zanyaloo", "Zanytacular", "Zanyzilla", "Zanynado", "Goofytastic", "Goofyerific", "Goofyadoodle", "Goofyaroni", "Goofyaroo", "Goofyaloo", "Goofytacular", "Goofyzilla", "Goofynado", "Loopytastic", "Loopyerific", "Loopyadoodle", "Loopyaroni", "Loopyaroo", "Loopyaloo", "Loopytacular", "Loopyzilla", "Loopynado", "Bubblytastic", "Bubblyerific", "Bubblyadoodle", "Bubblyaroni", "Bubblyaroo", "Bubblyaloo", "Bubblytacular", "Bubblyzilla", "Bubblynado", "Snappytastic", "Snappyerific", "Snappyadoodle", "Snappyaroni", "Snappyaroo", "Snappyaloo", "Snappytacular", "Snappyzilla", "Snappynado", "Wackytastic", "Wackyerific", "Wackyadoodle", "Wackyaroni", "Wackyaroo", "Wackyaloo", "Wackytacular", "Wackyzilla", "Wackynado", "Fluffytastic", "Fluffyerific", "Fluffyadoodle", "Fluffyaroni", "Fluffyaroo", "Fluffyaloo", "Fluffytacular", "Fluffyzilla", "Fluffynado", "Jumpytastic", "Jumpyerific", "Jumpyadoodle", "Jumpyaroni", "Jumpyaroo", "Jumpyaloo", "Jumpytacular", "Jumpyzilla", "Jumpynado", "Grumpytastic", "Grumpyerific", "Grumpyadoodle", "Grumpyaroni", "Grumpyaroo", "Grumpyaloo", "Grumpytacular", "Grumpyzilla", "Grumpynado", "Blinkybeans", "Blinkybounce", "Blinkybubbles", "Blinkycrunch", "Blinkyfizz", "Blinkygiggle", "Blinkymonster", "Blinkynugget", "Blinkysizzle", "Blinkysocks", "Blinkysprout", "Blinkytwist", "Blinkywiggle", "Breezybeans", "Breezybounce", "Breezybubbles", "Breezycrunch", "Breezyfizz", "Breezygiggle", "Breezymonster", "Breezynugget", "Breezypop", "Breezysocks", "Breezysprout", "Breezytwist", "Breezywiggle", "Frumpybounce", "Frumpybubbles", "Frumpygiggle", "Frumpymonster", "Frumpypop", "Frumpysocks", "Frumpysprout", "Frumpywiggle", "Greasybeans", "Greasybounce", "Greasybubbles", "Greasycrunch", "Greasyfizz", "Greasygiggle", "Greasynugget", "Greasypop", "Greasysizzle", "Greasysocks", "Greasysprout", "Greasytwist", "Greasywiggle", "Kookybounce", "Kookybubbles", "Kookycrunch", "Kookyfizz", "Kookymonster", "Kookynugget", "Kookysizzle", "Kookysocks", "Kookysprout", "Kookytwist", "Kookywiggle", "Puffybeans", "Puffybounce", "Puffybubbles", "Puffycrunch", "Puffyfizz", "Puffymonster", "Puffynugget", "Puffypop", "Puffysizzle", "Puffysprout", "Puffytwist", "Puffywiggle", "Scootybeans", "Scootybubbles", "Scootycrunch", "Scootygiggle", "Scootymonster", "Scootynugget", "Scootypop", "Scootysizzle", "Scootysocks", "Scootysprout", "Scootywiggle", "Slinkybeans", "Slinkybounce", "Slinkybubbles", "Slinkycrunch", "Slinkyfizz", "Slinkygiggle", "Slinkymonster", "Slinkynugget", "Slinkypop", "Slinkysizzle", "Slinkysocks", "Slinkysprout", "Slinkywiggle", "Snappybeans", "Snappybounce", "Snappyfizz", "Snappygiggle", "Snappymonster", "Snappypop", "Snappysizzle", "Snappysocks", "Snappysprout", "Snappywiggle", "Snoozybeans", "Snoozybounce", "Snoozybubbles", "Snoozycrunch", "Snoozyfizz", "Snoozygiggle", "Snoozymonster", "Snoozynugget", "Snoozysizzle", "Snoozysocks", "Snoozysprout", "Snoozytwist", "Sparkybeans", "Sparkybounce", "Sparkybubbles", "Sparkyfizz", "Sparkygiggle", "Sparkymonster", "Sparkynugget", "Sparkypop", "Sparkysizzle", "Sparkysocks", "Sparkytwist", "Sparkywiggle", "Swirlybeans", "Swirlybounce", "Swirlybubbles", "Swirlycrunch", "Swirlyfizz", "Swirlygiggle", "Swirlymonster", "Swirlynugget", "Swirlysocks", "Swirlysprout", "Swirlytwist", "Swirlywiggle", "Toastybeans", "Toastybounce", "Toastybubbles", "Toastycrunch", "Toastyfizz", "Toastygiggle", "Toastymonster", "Toastynugget", "Toastypop", "Toastysizzle", "Toastysocks", "Toastytwist", "Toastywiggle", "Zippywiggle"]

var animals = ["Aardvark", "Alpaca", "Antelope", "Armadillo", "Baboon", "Badger", "Bat", "Bear", "Beaver", "Bison", "Boar", "Buffalo", "Camel", "Capybara", "Caribou", "Cat", "Cheetah", "Chipmunk", "Coyote", "Deer", "Dog", "Elephant", "Elk", "Ferret", "Fox", "Gazelle", "Giraffe", "Goat", "Groundhog", "Guinea Pig", "Hamster", "Hare", "Hedgehog", "Hippopotamus", "Horse", "Hyena", "Jaguar", "Kangaroo", "Koala", "Leopard", "Lion", "Llama", "Lynx", "Mole", "Moose", "Mouse", "Opossum", "Otter", "Ox", "Panda", "Panther", "Pig", "Polar Bear", "Porcupine", "Puma", "Rabbit", "Raccoon", "Rat", "Reindeer", "Rhinoceros", "Sheep", "Skunk", "Sloth", "Squirrel", "Tiger", "Walrus", "Weasel", "Whale", "Wildcat", "Wolf", "Wombat", "Woodchuck", "Zebra", "Blackbird", "Blue Jay", "Canary", "Cardinal", "Chickadee", "Chicken", "Crane", "Crow", "Dove", "Duck", "Eagle", "Egret", "Falcon", "Flamingo", "Goose", "Hawk", "Hummingbird", "Jay", "Kingfisher", "Kiwi", "Magpie", "Mockingbird", "Nightingale", "Ostrich", "Owl", "Parrot", "Partridge", "Peacock", "Pelican", "Penguin", "Quail", "Raven", "Robin", "Rooster", "Sparrow", "Starling", "Swan", "Toucan", "Turkey", "Alligator", "Cobra", "Crocodile", "Frog", "Gecko", "Iguana", "Lizard", "Salamander", "Toad", "Tortoise", "Turtle", "Angelfish", "Barracuda", "Bluefish", "Carp", "Clownfish", "Cod", "Dolphin", "Flounder", "Herring", "Lobster", "Mackerel", "Manatee", "Marlin", "Mollusk", "Manta Ray", "Orca", "Perch", "Piranha", "Salmon", "Seahorse", "Seal", "Shark", "Stingray", "Trout", "Zebrafish", "Ant", "Aphid", "Bee", "Beetle", "Caterpillar", "Dragonfly", "Firefly", "Grasshopper", "Locust", "Spider", "Wasp", "Calf", "Chimpanzee", "Cub", "Fawn", "Foal", "Goldfish", "Hen", "Starfish"]

var objects = ["Art Smock", "Notebook", "Backpack", "Binder", "Calculator", "Chalk", "Circle", "Clipboard", "Colored Pencil", "Compass", "Composition Book", "Crayon", "Cube", "Cylinder", "Desk Clock", "Desk Lamp", "Diamond", "Dry Erase Board", "Envelope", "Eraser", "File Cabinet", "Flashcards", "Folder", "Glue Stick", "Hammer", "Heart", "Hexagon", "Highlighter", "Index Card", "Ladder", "Lunchbox", "Marker", "Math Book", "Notebook", "Notepad", "Octagon", "Oval", "Paintbrush", "Paper", "Paper Clip", "Paper Towel", "Pen", "Pencil", "Pencil Box", "Pentagon", "Printer", "Push Pin", "Pyramid", "Rectangle", "Rhombus", "Rubber Band", "Ruler", "Sandpaper", "Scanner", "Scissors", "Semicircle", "Shredder", "Sphere", "Square", "Stamp", "Stapler", "Star", "Sticky Note", "Tablet", "Tape", "Toolbox", "Trapezoid", "Triangle", "Wheelbarrow", "Pan", "Grill", "Chair", "Sock", "Phone", "iPad", "Car", "Truck", "Hat", "House", "Laptop", "Stairs", "Table", "Rock", "Peeble", "Grass", "Tree", "River", "Lake", "Pond", "Seesaw", "Fan", "Bag", "Lawnchair", "Shoe", "Shirt", "Pants", "Shorts", "Moon", "Sun", "Planet", "Cave", "Pluto", "Mars", "Earth", "Jupiter", "Venus", "Brush", "Puzzle", "Sweater", "Jacket", "Net", "Baseball", "Bowl", "Plate"]

var colors = ["Antiquewhite", "Aqua", "Aquamarine", "Beige", "Blue", "Blueviolet", "Brown", "Cadetblue", "Chartreuse", "Coral", "Cornflowerblue", "Cornsilk", "Cyan", "Darkblue", "Darkcyan", "Darkgreen", "Darkgrey", "Dodgerblue", "Forestgreen", "Fuchsia", "Gold", "Gray", "Green", "Greenyellow", "Honeydew", "Indigo", "Ivory", "Khaki", "Lavender", "Lightblue", "Lightcoral", "Lightcyan", "Lime", "Limegreen", "Magenta", "Maroon", "Midnightblue", "Mistyrose", "Navy", "Olive", "Orange", "Orangered", "Plum", "Powderblue", "Purple", "Red", "Royalblue", "Seagreen", "Seashell", "Silver", "Skyblue", "Springgreen", "Steelblue", "Tan", "Teal", "Turquoise", "Violet", "Wheat", "Yellow", "Yellowgreen", "Apple Green", "Army Green", "Avocado Green", "Azul", "Banana", "Bordeaux", "Bronze", "Bubblegum", "Burgundy", "Burnt Orange", "Butterscotch", "Camouflage Green", "Canary", "Carolina Blue", "Charcoal Grey", "Cherry", "Cherry Red", "Cinnamon", "Cobalt Blue", "Copper", "Denim Blue", "Electric Blue", "Electric Green", "Electric Lime", "Electric Pink", "Electric Purple", "Emerald Green", "Evergreen", "Flat Green", "Forest Green", "Ice Blue", "Indigo Blue", "Lemon Lime", "Granny Smith Apple Green", "Mac And Cheese Orange", "Jelly Bean Blue", "Stone Gray", "Light Green", "Light Purple", "Light Orange", "Light Red", "Light Blue"]

var nature = ["Twig", "Branch", "Trunk", "Canopy", "Sprout", "Mountain", "Hill", "Valley", "Cliff", "Canyon", "Plateau", "Plain", "Desert", "Dune", "Cave", "Forest", "Rainforest", "Woods", "Jungle", "Glacier", "Volcano", "Island", "Sea", "Lake", "Pond", "River", "Stream", "Waterfall", "Lagoon", "Harbor", "Spring", "Reservoir", "Iceberg", "Coral Reef", "Tidepool", "Rain", "Snow", "Mist", "Fog", "Sun", "Moon", "Star", "Lightning", "Thunder", "Storm", "Hurricane", "Tornado", "Typhoon", "Wind", "Breeze", "Planet", "Comet", "Meteor", "Moonlight", "Starlight", "Maple Tree", "Pine Tree", "Willow Tree", "Palm Tree", "Cedar Tree", "Redwood", "Moss", "Vine", "Bamboo", "Grass", "Sunflower", "Orchid", "Carnation", "Hydrangea", "Lotus", "Magnolia", "Pinecone", "Seed", "Berry", "Apple Tree", "Cherry Blossom", "Ant", "Spider", "Beetle", "Grasshopper", "Moth", "Dragonfly"]

var food = ["Apple", "Apricot", "Artichoke", "Asparagus", "Avocado", "Bacon", "Bagel", "Baguette", "Banana", "Barley", "Beef", "Beet", "Bell Pepper", "Biscuit", "Black Beans", "Blackberry", "Blueberry", "Bread", "Broccoli", "Brown Rice", "Brussels Sprouts", "Burrito", "Butter", "Buttermilk", "Cabbage", "Candy", "Candy Cane", "Cantaloupe", "Caramel", "Carrot", "Casserole", "Cauliflower", "Celery", "Cereal", "Cheesecake", "Cherry", "Chicken", "Chicken Alfredo", "Chicken Noodle Soup", "Chicken Pot Pie", "Chicken Tenders", "Chickpeas", "Chili", "Coconut", "Corn", "Cornbread", "Cranberry", "Cream", "Cream Cheese", "Croissant", "Cucumber", "Danish", "Date", "Doughnut", "Dragonfruit", "English Muffin", "Evaporated Milk", "Fajitas", "Fennel", "Fig", "Flatbread", "Flour", "Fried Chicken", "Fudge", "Gelato", "Gingersnap", "Graham Cracker", "Granola", "Grape", "Grapefruit", "Green Bean", "Grilled Cheese", "Grits", "Ground Beef", "Guava", "Hamburger", "Honey", "Honeydew", "Horseradish", "Jam", "Kale", "Kiwi", "Lamb", "Lasagna", "Lemon", "Lettuce", "Lime", "Lobster", "Mac and Cheese", "Macaron", "Mango", "Melon", "Milk", "Mints", "Muffin", "Mushroom", "Mustard Greens", "Naan", "Nectarine", "Oatmeal", "Okra", "Onion", "Orange", "Pancake", "Papaya", "Parmesan", "Parsnip", "Passionfruit", "Pasta Primavera", "Pastry", "Peach", "Peanut Butter", "Pear", "Pecan Pie", "Pepperoni Pizza", "Pie", "Pineapple", "Pita", "Pizza", "Plum", "Pomegranate", "Popcorn", "Popsicle", "Pork", "Pot Roast", "Potato", "Pretzel", "Provolone", "Pumpkin", "Quinoa", "Radish", "Ramen", "Raspberry", "Rice", "Rice Krispie Treat", "Ricotta", "Roast Beef", "Sandwich", "Scallops", "Scone", "Shallot", "Shepherd’s Pie", "Sherbet", "Snickerdoodle", "Sorbet", "Sour Cream", "Spaghetti", "Spinach", "Squash", "Starfruit", "Steak", "Stir Fry", "Strawberry", "Sweet Potato", "Swiss Cheese", "Taffy", "Tangerine", "Toffee", "Tofu", "Tomato", "Tortilla", "Trail Mix", "Truffle", "Turkey", "Turkey Sandwich", "Turnip", "Vegetable Soup", "Waffle", "Watermelon", "Whipped Cream", "Wrap", "Yam", "Yogurt", "Zebra Cake", "Ziti", "Zucchini"]

const popup = document.querySelector('.popup');
const popupText = document.getElementById('popup-text');

var popupTexts = [
    "Hey! Let's give you an agent name! Press Start to begin!",
    "Enter your first name, then press the button to get your code name!",
]

window.onload = () => {
    document.getElementById('startButton').addEventListener('click', playAudio);

};

function playAudio() {
    const audio = new Audio('TJ and AJ Theme Beat 0001.mp3');
    audio.play();
    audio.volume = 0.6;
    var startButton = document.getElementById('startButton');

    setTimeout(() => {
        const audio2 = new Audio('Press start to begin.m4a');
        popup.style.transform = 'translateY(0)';
        audio2.play();

        startButton.removeEventListener('click', playAudio);

        audio2.addEventListener('ended', () => {
            popup.style.transform = 'translateY(-100%)';
            startButton.addEventListener('click', startGame);

        });
    }, 600);


}

var nameInput = document.getElementById('name')
var agentNameButton = document.querySelector('.mainPage button')

nameInput.addEventListener('input', () => {
    if (nameInput.value.match(/[a-zA-Z]/)) {
        agentNameButton.style.display = 'block';
    } else {
        agentNameButton.style.display = 'none';
    }
});

const startButton = document.getElementById('startButton');

startButton.addEventListener('mouseenter', () => {
    document.body.style.backgroundColor = 'var(--userColor)';
});

startButton.addEventListener('mouseleave', () => {
    document.body.style.backgroundColor = 'white';
});


function openCredits() {
    var creditsDiv = document.querySelector('.creditsDiv')
    creditsDiv.style.display = 'flex';
}

function closeCredits() {
    document.querySelector('.creditsDiv').style.display = 'none';
}

function startGame() {
    document.getElementById('startButton').remove();
    document.querySelector('.startPage').remove();
    document.querySelector('.mainPage').style.display = 'flex';


    setTimeout(() => {
        const audio2 = new Audio('Enter your first name.m4a')
        audio2.play();
        popupText.innerText = popupTexts[1]
        popup.style.transform = 'translateY(0)';

        audio2.addEventListener('ended', () => {
            popup.style.transform = 'translateY(-100%)';
            document.getElementById('agentNameButton').addEventListener('click', generateAgentName)
        });

    }, 400);

}


function generateAgentName() {
    var userName = document.getElementById('name').value;
    document.getElementById('name').value = '';
    document.querySelector('.mainPage').remove();
    document.querySelector('.endPage').style.display = 'flex';

    var firstPart = adjectives[Math.floor(Math.random() * adjectives.length)]

    if (userName <= 3 || userName >= 1) {
        var secondPart = animals[Math.floor(Math.random() * animals.length)];
    } else if (userName.length >= 4 && userName.length <= 5) {
        var secondPart = objects[Math.floor(Math.random() * objects.length)];;
    } else if (userName.length >= 6 && userName.length <= 7) {
        var secondPart = colors[Math.floor(Math.random() * colors.length)];
    } else if (userName.length >= 8 && userName.length <= 9) {
        var secondPart = nature[Math.floor(Math.random() * nature.length)];
    } else if (userName.length >= 10) {
        var secondPart = food[Math.floor(Math.random() * food.length)];
    } else {
        return "Invalid Name Length";
    }

    var thirdPart = Math.floor(Math.random() * 500) + 1;

    var agentName = firstPart + secondPart + thirdPart;

    const audio = new Audio('That name is awesome.m4a');
    audio.play();

    setTimeout(() => {
        document.querySelector('.loader').remove();
        document.getElementById('agentName').innerText = agentName;
        document.getElementById('playAgain').style.display = 'block';
    }, 4100);

    audio.addEventListener('ended', () => {
        popupText.innerText = "Great, " + userName + "- I mean, " + agentName + "! Your agent name is amazing! Press Play Again to get a new one!"
        popup.style.transform = 'translateY(0)';
        setTimeout(() => {
            const audio = new Audio('New agent code name.m4a');
            audio.play();
            document.getElementById('playAgain').style.pointerEvents = 'auto';
            document.getElementById('playAgain').style.opacity = '1';
        }, 1000);
    })

}
