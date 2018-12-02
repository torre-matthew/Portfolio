let projDetails = {
    crystalCollector: {
        description: "The concept of this game is pretty simple but the logic necessary to pull it off really helped reinforce fundemental concepts of javascript and programming in general.", 
        projName: "Crystal Collector",
        image: "./assets/images/crystal.png",
        gitHub: "https://github.com/torre-matthew/Unit-4-Game",
        deployedUrl: "https://torre-matthew.github.io/Unit-4-Game/"
    },

    pixarTrivia: {
        description: "If you're a fan of all things Pixar, test your knowledge with this trivia game.", 
        projName: "Pixar Trivia",
        image: "./assets/images/triviagame.png",
        gitHub: "https://github.com/torre-matthew/TriviaGame",
        deployedUrl: "https://torre-matthew.github.io/TriviaGame/"
    },

    horrorMovieShowdown: {
        description: "Placeholder", 
        projName: "Horror Movie Showdown",
        image: "./assets/images/HorrorMovieShowdown.png",
        gitHub: "Placeholder",
        deployedUrl: "Placeholder"
    },

    movieCarPickupService: {
        description: "Imagine a service similar to Uber or Lyft where you were picked up iconic cars from classic movies. This app would help you keep track of the pickup schedule of this service.", 
        projName: "Movie Car Pickup Service",
        image: "./assets/images/MovieCarService.png",
        gitHub: "https://github.com/torre-matthew/Scheduler",
        deployedUrl: "https://torre-matthew.github.io/Scheduler/"
    },

    gitLit: {
        description: "If you're sitting at home craving a cocktail, Git Lit's got you covered. This app allows you to search your favorite cocktail, get a list of ingredients, and provide a video on how to create it yourself. Enjoy!!", 
        projName: "Git Lit",
        image: "./assets/images/gitlit.png",
        gitHub: "https://github.com/torre-matthew/Git-Lit",
        deployedUrl: "https://torre-matthew.github.io/Git-Lit/"
    },

    bobaMeBaby: {
        description: "If buying bubble tea was something done from the command line of a Node app, this would be that app. It's a Node CLI E-commerce Store for Purchasing Milk and Fruit Bubble Tea.", 
        projName: "Boba Me, Baby!!",
        image: "./assets/images/bobamebaby.png",
        gitHub:"https://github.com/torre-matthew/node-cli-store",
        deployedUrl: "Placeholder"
    },

    petal: {
        description: "Meet Petal. She's a node app that runs from the command line. She'll ask questions, take responses, and based on those responses deliver data to the user.", 
        projName: "Petal",
        image: "./assets/images/petalnodeapp.png",
        gitHub:"https://github.com/torre-matthew/PETAL-node-app",
        deployedUrl: "Placeholder"
    },

    potterAlterEgo: {
        description: "This app is a fun play on a personality matching app. The twist is, depending on how you answer questions to a brief survey, you'll learn what character you'd be if you existed in the Harry Potter Universe.", 
        projName: "Potter Alter-ego",
        image: "./assets/images/potteralterego.png",
        gitHub:"https://github.com/torre-matthew/PotterAlterEgo",
        deployedUrl:"https://desolate-coast-33262.herokuapp.com/home"
    },

    potterHouseSorter: {
        description: "Learn a bit about the house sorting process depicted in J.K. Rowlings' Harry Potter novels. Then sort your family and friends into the house that's best suited to their personality.", 
        projName: "Potter House Sorter",
        image: "./assets/images/potterhousesorter.png",
        gitHub: "https://github.com/torre-matthew/PotterHouseSorter",
        deployedUrl: "https://fathomless-dawn-67238.herokuapp.com/"
    },

    iDecide: {
        description: "iDecide is a lightweight interface for groups of people to make decisions together. The foudational concept for this app comes from the 'Dot Voting' technique for group collaboration.", 
        projName: "iDecide",
        image: "./assets/images/idecide.png",
        gitHub: "https://github.com/torre-matthew/TheCrimsonKnuckleRepo",
        deployedUrl: "https://desolate-hamlet-84600.herokuapp.com/"
    }
}

let allProjArr = 
[ 
    projDetails.iDecide,
    projDetails.gitLit,
    projDetails.potterAlterEgo,
    projDetails.potterHouseSorter,
    projDetails.bobaMeBaby,
    projDetails.petal,
    projDetails.pixarTrivia,
    projDetails.horrorMovieShowdown,
    projDetails.movieCarPickupService,
    projDetails.crystalCollector,
]

let clientProj = 
[ 
    projDetails.gitLit,
    projDetails.pixarTrivia,
    projDetails.movieCarPickupService,
    projDetails.horrorMovieShowdown,
    projDetails.crystalCollector,
]

let nodeProj =
[ 
    projDetails.iDecide,
    projDetails.potterAlterEgo,
    projDetails.potterHouseSorter,
    projDetails.bobaMeBaby,
    projDetails.petal,
] 

let spotlight = 
[ 
    projDetails.iDecide,
    projDetails.gitLit
]


let displayProjects = (data, displayID) => {
    let source = $("#project-card-template").text();
    let template = Handlebars.compile(source);
    let html = template({projContent: data});
    $(displayID).html(html);
}

let stickyNav = () => {
    let navPos = $("#nav-pos").offset().top;
    // console.log("navPos" + navPos);
    // console.log("pageY" + pageYOffset);
    
    if (navPos > pageYOffset) {
        $(".navbar-fixed > nav").hide();
        $(".navbar-fixed").css("height", "0");
    }
    else {
        $(".navbar-fixed > nav").fadeIn("slow");
    }
}

$(document).ready(function(){
    $('.tabs').tabs();
    $('.sidenav').sidenav();
    displayProjects(allProjArr, "#all-projects");
    displayProjects(clientProj, "#client-apps");
    displayProjects(nodeProj, "#node-apps");
    displayProjects(spotlight, "#spotlight");
    stickyNav();
});

$(document).scroll(function () {
    stickyNav();
});

 