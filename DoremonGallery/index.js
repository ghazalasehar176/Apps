const characters = {
    blue: {
        name: "Doraemon",
        img: "image/doremon.png",
        info: "Doraemon is a blue, earless robotic cat from the 22nd century created by Fujiko F. Fujio. Sent back in time to help the clumsy boy Nobita Nobi, he uses futuristic gadgets stored in his 4D pocket. He is defined by his love for dorayaki (bean jam buns), fear of mice, and, despite being a robot, his personality. ",
        color: "#00ADEF"
    },

    pink: {
        name: "Nobita Nobi",
        img: "image/nobita.png",
        info: "Nobita's characterization depicts him as a lazy underachiever, including but not limited to a lack of physical ability, predisposition to procrastination, reluctance to engage in critical thinking and exhibiting perverted behavior.",
        color: "#FFD54F"
    },
    lime: {
        name: "Shizuka Minamoto",
        img: "image/shizuka.png",
        info: "Shizuka Minamoto (Minamoto Shizuka), also known by her nickname Sue in the American and UK versions, is the tritagonist of the Doraemon franchise, being the only main female character.In the future after marrying Nobita, she is also known as Shizuka Nobi or Mrs. Nobi.",
        color: "#FF80AB"
    },

    orange: {
        name: "Suneo Honekawa",
        img: "image/suneo.png",
        info: "Suneo Honekawa (Honekawa Suneo) is the fox-faced (inherited from his mother) rich and spoiled child who loves to flaunt his material wealth before everyone, especially Nobita. A lot of the stories start with Suneo showing off some new video game, toy or pet which evokes Nobita's envy.",
        color: "#FF8A00"
    },
    teal: {
        name: "Dorami",
        img: "image/dorami.png",
        info: "Dorami is Doraemon's younger sister. Like Doraemon before he developed a fear of mice, she is yellow-skinned, and to keep Doraemon from thinking about his ears, her ears were replaced by a large red bow, her kitsune tails were replaced by a flower tail.",
        color: "#FFF200"
    },
    black: {
        name: "Takeshi Gian",
        img: "image/takeshi.png",
        info: "Gian is known for his overconfidence in his terrible singing and cooking skills, of which he constantly abuses to torture his surroundings, as he was never aware of these flaws. He is tone deaf to the horrendous singing as shown in some episodes where he sing and totally unaffected by it.",
        color: "#FF5722"
    },
    purple: {
        name: "Tamako Nobi",
        img: "image/tomako.png",
        info: "Tamako is the one who cooks and cleans the house (like a typical Japanese housewife), sometimes with the help of Doraemon. She is mainly serious managing the house's finance, such as when Nobita asks his mother to buy a computer, only to scold him as she thinks it is a waste of money.",
        color: "#8E24AA"
    },

}

document.querySelectorAll(".circle").forEach(c => {
    c.addEventListener("click", () => {
        let cls = [...c.classList].find(x => characters[x]);

        document.getElementById("char-img").src = characters[cls].img;
        document.getElementById("char-name").innerHTML = characters[cls].name;
        document.getElementById("char-info").innerHTML = characters[cls].info;

        document.querySelector(".center-box").className = "center-box " + cls;
        document.querySelector(".center-box").style.background = characters[cls].color;

    })
})