const removeSharp = (sentence) => {
    if (sentence.search('#') != -1) {
        const voyelle = ['a', 'e', 'i', 'o', 'u', 'y', 'à', 'é'];
        const ref = sentence.indexOf('#');
        if (voyelle.indexOf(sentence.charAt(ref+2)) != -1) {
            sentence = sentence.replace('# ', '\'');
        } else {
            sentence = sentence.replace('#', 'e');
        }
    }
    return sentence;
}

const generateSentence = () => {
    let sentence = "";
    for (let i=1 ; i<10 ; i++) {
        sentence = sentence + " " + document.getElementById('list'+i).value;
    }
    sentence = removeSharp(sentence);
    document.getElementById('sentencePrint').innerHTML = sentence;
}

const setValueTab = (tabVal, idTab) => {
    let codeGenerated = "";
    for (let i in tabVal) {
        codeGenerated += "<option value = \"" + tabVal[i] + "\">" + tabVal[i] + "</option>";
    }
    document.getElementById(idTab).innerHTML = codeGenerated;
}

const setValueInSelectBox = (theme) => {
    

    const tabs = {
    };

    switch (theme) {
        case 'Scolaire':
            tabs.tabValue1 = ['Considérant', 'Tant que durera', 'Avec', 'Analysant', 'Malgré'];
            tabs.tabValue2 = ['la récréation', 'ce probleme', 'la pause déjeuné', 'la nouvelle réforme', 'la dificulté'];
            tabs.tabValue3 = ['le proviseur', 'la classe', 'le professeur', 'le CPE', 'l\'élève'];
            tabs.tabValue4 = ['parle de', 'fait','pense à', 'réfléchi à', 'n\'a pas vue'];
            tabs.tabValue5 = ['la leçon', 'l\'évaluation', 'la responsabilité', 'la popularité', 'la réussite'];
            tabs.tabValue6 = ['du personnel', 'des adolescant', 'de l\'établissement', 'du conseil de classe', 'du délégué'];
            tabs.tabValue7 = ['ainsi qu#', 'bien qu#', 'alors qu#', 'malgré qu#', 'et pas uniquement qu#'];
            tabs.tabValue8 = ['une pédagogie pour', 'un apprentissage pour', 'il est possible de', 'on pourrait', 'une progression pour'];
            tabs.tabValue9 = ['réussir.', 'se concerter.', 'travailler ensemble.', 'surmonter l\'echec.', 'trouver des solutions.'];
            break;
        default:
            tabs.tabValue1 = ['Avec', 'Considérant', 'Vu', 'Malgré', 'Tant que durera'];
            tabs.tabValue2 = ['la crise', 'cette rigueur', 'la situation', 'la politique', 'complexité'];
            tabs.tabValue3 = ['actuel', 'induite', 'contextuelle', 'observé', 'conjoncturelle'];
            tabs.tabValue4 = ['il convient d#', 'il est préférable d#','il est nécessaire d#', 'il serait bon d#', 'je recommande d#'];
            tabs.tabValue5 = ['prendre en compte', 'uniformiser', 'avoir à l\'esprit', 'considérer', 'se remémorer'];
            tabs.tabValue6 = ['certaine', 'la simultanéité des', 'la majorité des', 'la globalité des', 'les principales'];
            tabs.tabValue7 = ['actions', 'améliorations', 'options', 'modalités', 'hypothèses'];
            tabs.tabValue8 = ['s\'offrant à nous', 'de bon sens', 'envisageables', 'réalisable', 'déclinable'];
            tabs.tabValue9 = ['depuis longtemps.', 'rapidement.', 'pour le future.', 'à l\'avenir.', 'trés attentivement.'];
    }

    let i = 1;
    for (const tab in tabs) {
        setValueTab(tabs[tab], 'list'+i);
        i++;
    }
    
    document.getElementById('listT').classList.replace('hide-table', 'show-table');

    document.getElementById('sentencePrint').innerHTML = "Cliquez sur le bouton pour une composition automatique, ou composez manuellement votre phrase en choisissant dans les listes ci-dessous."
}

const selectRandom = (nbr, tab) => {
    let numberRandom = Math.floor(Math.random() * nbr);
    document.getElementById(tab).selectedIndex = numberRandom;
}

const generateRandom = () => {
    if (document.getElementById('list1').options.length == 0 ||
    !document.getElementById('btn-generale').classList.contains('theme-active') &&
    !document.getElementById('btn-scolaire').classList.contains('theme-active'))
    {
        document.getElementById('sentencePrint').innerHTML = "Veuillez selectionner un theme avant de générer une phrase aléatoirement.";
        return 0;
    }

    let multiSentence = "";
    const nbrSentence = document.getElementById('nbr-sentence').value;
    let nbrElementList = "";
    for (let i=0 ; i<nbrSentence ; i++) {
        for (let j=1; j<10; j++) {
            nbrElementList = document.getElementById('list'+j)
            selectRandom(nbrElementList.length, 'list'+j);
        }

        generateSentence();
        multiSentence += document.getElementById('sentencePrint').innerHTML + "<BR/>";
    }

    document.getElementById('sentencePrint').innerHTML = multiSentence;
}

const themeActive = (thActive, thDesactive) => {
    const firstBtn = document.getElementById(thActive);
    const secBtn = document.getElementById(thDesactive)

    if (firstBtn.classList.toggle('theme-active')) {
        if (secBtn.classList.contains('theme-active')) {
            secBtn.classList.remove('theme-active')
        }
    } else {
        document.getElementById('listT').classList.replace('show-table', 'hide-table');
        document.getElementById('sentencePrint').innerHTML = "Veuillez selectionner un theme.";
    }
}

onload = function showModal () {
    let modalBtn = document.getElementById('contact-btn');
    let modalClose = document.querySelector('.modal-close');
    let modalBg = document.querySelector('.modal-bg');
    modalBtn.addEventListener("click", function (){
        modalBg.classList.add('bg-active');
    });
    modalClose.addEventListener("click", function(){
        modalBg.classList.remove('bg-active');
    });
}