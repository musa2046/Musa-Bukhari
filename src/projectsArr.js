  import netflixImg from "/src/assets/project-pics/netflix-project.png"
  import amazonImg from "/src/assets/project-pics/amazon-clone-project.png"
  import ecommercecImg from "/src/assets/project-pics/ecommerce-website-project.png"
  import todoImg from "/src/assets/project-pics/todo-list-project.png"
  import keeperImg from "/src/assets/project-pics/Keeper-App-project.png"
  import rockPaperScissorImg from "/src/assets/project-pics/rock-paper-scissor-project.png"
  
  let projectsArr =[
    {
        key: 1,
        imgURL : keeperImg,
        heading: "Keeper App",
        description : "A React-based note-taking app with a clean UI, dynamic card layout, and Material-UI integration for organizing and managing tasks efficiently"
    },
    {
        key: 2,
        imgURL : netflixImg,
        heading: "Netflix Clone",
        description : "A responsive Netflix sign-in page clone built with HTML and CSS, showcasing clean layout, pixel-perfect design, and attention to UI/UX details."
    },
    {
        key: 3,
        imgURL : rockPaperScissorImg,
        heading: "Rock Paper Scissor Game",
        description : "An interactive Rock-Paper-Scissors game built with HTML, CSS, and JavaScript featuring score tracking, autoplay mode, and fun gameplay against the computer."
    },
    {
        key: 4,
        imgURL : todoImg,
        heading: "TO-DO List",
        description : "A simple To-Do List app built with React, focusing on core React concepts, featuring task addition and deletion with minimal UI design."
    },
    {
        key: 5,
        imgURL : amazonImg,
        heading: "Amazon Clone",
        description : "An Amazon Clone built with React, featuring a shopping cart where users can add/remove products, manage quantities, and view total cost with delivery charges."
    },
    {
        key: 6,
        imgURL : ecommercecImg,
        heading: "Ecommerce Website Design",
        description : "An E-commerce website design built with HTML and CSS, closely following a Figma layout to practice pixel-perfect UI development."
    },

]
    export default projectsArr;