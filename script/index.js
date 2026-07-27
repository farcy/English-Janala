const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")//promise of response
        .then((res) => res.json())//promise of data
        .then((json) => displayLesson(json.data))//display data
}
const displayLesson = (lessons) => {
    // get the container & empty
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML="";


    // 2.get every lessons
    for(let lesson of lessons){
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML=`
        <button class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}</button>
        `;


        levelContainer.append(btnDiv);
    }


    // 3.create Element

    // 4.append int container
}

loadLessons()