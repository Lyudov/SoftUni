function companyUsers(input) {

    let companyInfo = {};
    let splited = input.map(el => el.split(' -> '))

    for (let command of splited) {
        let companyName = command[0];
        let employeedId = command[1];
        if (!companyInfo.hasOwnProperty(companyName)) {
            companyInfo[companyName] = [];
        }
        companyInfo[companyName].push(employeedId);
    }
    let sortedCompany = Object.entries(companyInfo).sort((a, b) => a[0].localeCompare(b[0]));

    sortedCompany.forEach(el => {
        const companys = el[0];
        const companyIds = el[1];
        console.log(companys);
        let uniqIds = new Set(companyIds);
        for (const id of uniqIds) {
            console.log(`-- ${id}`);
        }
    })
}
companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345', 'SoftUni -> AA12345']);
