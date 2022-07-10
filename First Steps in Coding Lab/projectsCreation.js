function projectsCreation(input) {

    let name = input[0];
    let countProjects = Number(input[1]);
    let houers = countProjects * 3;

    console.log(`The architect ${name} will need ${houers} hours to complete ${countProjects} project/s.`);

}
projectsCreation(["Sanya ", "9 "])