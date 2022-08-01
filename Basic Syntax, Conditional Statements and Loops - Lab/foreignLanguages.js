function foreignLanguages(language) {

    if (language === 'England' || language === 'USA') {
        console.log('English');
    } else if (language === 'Spain' || language === 'Argentina' || language === 'Mexico') {
        console.log('Spanish');
    } else {
        console.log('unknown');
    }

}
foreignLanguages('Germany');