let projDetails = {
    crystalCollector: {
        description: "The concept of this game is pretty simple but the logic necessary to pull it off really helped reinforce fundemental concepts of javascript and programming in general.", 
        projName: "Crystal Collector",
        image: "./assets/images/crystal.png",
        gitHub: "test",
        deployedUrl: "test"
    },

    pixarTrivia: {
        description: "Fun trivia game that provided an opportunity to play with setInterval and setTimout javascript functions.", 
        projName: "Pixar Trivia",
        image: "./assets/images/triviagame.png",
        gitHub: "TextTrackList",
        deployedUrl: "test"
    },

    horrorMovieShowdown: {
        description: "Placeholder", 
        projName: "Horror Movie Showdown",
        image: "./assets/images/HorrorMovieShowdown.png",
        gitHub: "Placeholder",
        deployedUrl: "Placeholder"
    },

    movieCarPickupService: {
        description: "Placeholder", 
        projName: "Movie Car Pickup Service",
        image: "./assets/images/MovieCarService.png",
        gitHub: "PlaceHolder",
        deployedUrl: "Placeholder"
    },

    gitLit: {
        description: "Placeholder", 
        projName: "Git Lit",
        image: "./assets/images/gitlit.png",
        gitHub: "https://github.com/torre-matthew/Git-Lit",
        deployedUrl: "Placeholder"
    },

    bobaMeBaby: {
        description: "Placeholder", 
        projName: "Boba Me, Baby!!",
        image: "./assets/images/bobamebaby.png",
        gitHub: "PlaceHolder",
        deployedUrl: "Placeholder"
    },

    petal: {
        description: "Placeholder", 
        projName: "Petal",
        image: "./assets/images/petalnodeapp.png",
        gitHub: "PlaceHolder",
        deployedUrl: "Placeholder"
    },

    potterAlterEgo: {
        description: "Placeholder", 
        projName: "Potter Alter-ego",
        image: "./assets/images/potteralterego.png",
        gitHub: "PlaceHolder",
        deployedUrl: "Placeholder"
    },

    potterHouseSorter: {
        description: "Placeholder", 
        projName: "Potter House Sorter",
        image: "./assets/images/potterhousesorter.png",
        gitHub: "PlaceHolder",
        deployedUrl: "Placeholder"
    },

    iDecide: {
        description: "Placeholder", 
        projName: "iDecide",
        image: "./assets/images/idecide.png",
        gitHub: "PlaceHolder",
        deployedUrl: "Placeholder"
    }
}

let allProjArr = 
[ 
    projDetails.crystalCollector,
    projDetails.pixarTrivia,
    projDetails.horrorMovieShowdown,
    projDetails.movieCarPickupService,
    projDetails.gitLit,
    projDetails.bobaMeBaby,
    projDetails.petal,
    projDetails.potterAlterEgo,
    projDetails.potterHouseSorter,
    projDetails.iDecide,
]

let clientProj = 
[ 
    projDetails.crystalCollector,
    projDetails.pixarTrivia,
    projDetails.horrorMovieShowdown,
    projDetails.movieCarPickupService,
    projDetails.gitLit
]

let nodeProj =
[ 
    projDetails.bobaMeBaby,
    projDetails.petal,
] 

let fullStack = 
[ 
    projDetails.potterAlterEgo,
    projDetails.potterHouseSorter,
    projDetails.iDecide,
]


let displayProjects = (data, displayID) => {
    let source = $("#project-card-template").text();
    let template = Handlebars.compile(source);
    let html = template({projContent: data});
    $(displayID).html(html);
}

let stickyNav = () => {
    let navPos = $("#nav-pos").offset().top;
    console.log(navPos);
    console.log(pageYOffset);
    
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
    displayProjects(allProjArr, "#all-projects");
    displayProjects(clientProj, "#client-apps");
    displayProjects(nodeProj, "#node-apps");
    displayProjects(fullStack, "#fs-apps");
    stickyNav();
});

$(document).scroll(function () {
    stickyNav();
});

 