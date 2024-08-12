const articles = [`<h1>Article 1</h1>
            <hr/>
            <img src="test.png" width="50%" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eum, laborum, et perspiciatis iste excepturi commodi quisquam doloremque mollitia aliquid voluptates placeat laboriosam culpa accusamus. Facere ullam sint culpa velit!</p>
            <video poster="test.png" src="rec.mov" controls width="50%"></video>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eum, laborum, et perspiciatis iste excepturi commodi quisquam doloremque mollitia aliquid voluptates placeat laboriosam culpa accusamus. Facere ullam sint culpa velit!</p>
            <video src="rec.mov" controls autoplay loop width="50%"></video>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eum, laborum, et perspiciatis iste excepturi commodi quisquam doloremque mollitia aliquid voluptates placeat laboriosam culpa accusamus. Facere ullam sint culpa velit!</p>
        `,
        `<h1>Article 2</h1>
            <hr/>
            <img src="test.png" width="50%" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eum, laborum, et perspiciatis iste excepturi commodi quisquam doloremque mollitia aliquid voluptates placeat laboriosam culpa accusamus. Facere ullam sint culpa velit!</p>
            <video poster="test.png" src="rec.mov" controls width="50%"></video>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eum, laborum, et perspiciatis iste excepturi commodi quisquam doloremque mollitia aliquid voluptates placeat laboriosam culpa accusamus. Facere ullam sint culpa velit!</p>
            <video src="rec.mov" controls autoplay loop width="50%"></video>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eum, laborum, et perspiciatis iste excepturi commodi quisquam doloremque mollitia aliquid voluptates placeat laboriosam culpa accusamus. Facere ullam sint culpa velit!</p>
        `,
        `<h1>Article 3</h1>
            <hr/>
            <img src="test.png" width="50%" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eum, laborum, et perspiciatis iste excepturi commodi quisquam doloremque mollitia aliquid voluptates placeat laboriosam culpa accusamus. Facere ullam sint culpa velit!</p>
            <video poster="test.png" src="rec.mov" controls width="50%"></video>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eum, laborum, et perspiciatis iste excepturi commodi quisquam doloremque mollitia aliquid voluptates placeat laboriosam culpa accusamus. Facere ullam sint culpa velit!</p>
            <video src="rec.mov" controls autoplay loop width="50%"></video>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eum, laborum, et perspiciatis iste excepturi commodi quisquam doloremque mollitia aliquid voluptates placeat laboriosam culpa accusamus. Facere ullam sint culpa velit!</p>
        `,
    
    ]

document.addEventListener("DOMContentLoaded", function() {
    const articleListItems = document.querySelectorAll('.article-list');
    const mainContent = document.querySelector('.main');

    // Create content for each article
    const articlesContent = {
        id1: articles[0],
        id2: articles[1],
        id3: articles[2],
        id4: articles[Math.floor(Math.random()*3)],
        id5: articles[Math.floor(Math.random()*3)],
        id6: articles[Math.floor(Math.random()*3)],
        id7: articles[Math.floor(Math.random()*3)],
        id8: articles[Math.floor(Math.random()*3)],
        id9: articles[Math.floor(Math.random()*3)],
        id10: articles[Math.floor(Math.random()*3)],
        id11: articles[Math.floor(Math.random()*3)],
        id12: articles[Math.floor(Math.random()*3)],
        id13: articles[Math.floor(Math.random()*3)],
        id14: articles[Math.floor(Math.random()*3)],
        id15: articles[Math.floor(Math.random()*3)],
        id16: articles[Math.floor(Math.random()*3)],
        id17: articles[Math.floor(Math.random()*3)],
        id18: articles[Math.floor(Math.random()*3)]
    };

    // Add a click event listener to each article list item
    articleListItems.forEach(item => {
        item.addEventListener('click', function() {
            const articleId = this.id;
            mainContent.innerHTML = articlesContent[articleId] || "<p>Select an article to read its content.</p>";
        });
    });
});


document.addEventListener("DOMContentLoaded", ()=> {
    const hamburgerMenu = document.getElementById('ham');
    hamburgerMenu.addEventListener("click",()=>{
        const sidebarMobile = document.getElementById("sidebar-mobile");
        sidebarMobile.style.display = (sidebarMobile.style.display=='none' || sidebarMobile.style.display == ""?'flex':'none');
        
    });
    window.addEventListener('resize', ()=>{
        if (window.matchMedia("(orientation: portrait)").matches) {
        } else if (window.matchMedia("(orientation: landscape)").matches) {
        const sidebarMobile = document.getElementById("sidebar-mobile");
        sidebarMobile.style.display = "none";
        }
    });
});

