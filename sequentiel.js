
function sommeElementsDistincts(set1, set2) {
    let somme = 0; // 1. Initialiser la somme = 0[cite: 13]

   
    for (let i = 0; i < set1.length; i++) {
        let element = set1[i];
        let trouve = false;
        
        for (let j = 0; j < set2.length; j++) {
            if (set2[j] === element) {
                trouve = true;
                break;
            }
        }
        
        if (!trouve) {
            somme += element;
        }
    }

    
    for (let i = 0; i < set2.length; i++) {
        let element = set2[i];
        let trouve = false;
        
        for (let j = 0; j < set1.length; j++) {
            if (set1[j] === element) {
                trouve = true;
                break;
            }
        }
        if (!trouve) {
            somme += element;
        }
    }

    return somme;
}


let ensemble1 = [3, 1, 7, 9]; 
let ensemble2 = [2, 4, 1, 9, 3]; 

console.log("=== RÉSULTAT PROBLÈME 1 ===");
console.log("Somme des éléments distincts :", sommeElementsDistincts(ensemble1, ensemble2)); 





function dot_product(v1, v2, resultatObj) {
    resultatObj.ps = 0;
    for (let i = 0; i < v1.length; i++) {
        resultatObj.ps += v1[i] * v2[i];
    }
}


function verifierOrthogonaliteProcedure(couples) {
    console.log("\n=== RÉSULTAT PROBLÈME 2 (Procédure) ===");
    for (let i = 0; i < couples.length; i++) {
        let v1 = couples[i].v1;
        let v2 = couples[i].v2;
        let container = { ps: 0 }; // Passage par référence de la variable ps
        
        dot_product(v1, v2, container);
        
        
        if (container.ps === 0) {
            console.log(`Le couple ${i + 1} est ORTHOGONAL (produit scalaire = 0)`);
        } else {
            console.log(`Le couple ${i + 1} n'est pas orthogonal (produit scalaire = ${container.ps})`);
        }
    }
}


function dot_product_fonction(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps; 
}

function verifierOrthogonaliteFonction(couples) {
    console.log("\n=== RÉSULTAT PROBLÈME 2 (Fonction) ===");
    for (let i = 0; i < couples.length; i++) {
        let v1 = couples[i].v1;
        let v2 = couples[i].v2;
        
        let ps = dot_product_fonction(v1, v2);
        
        if (ps === 0) {
            console.log(`Le couple ${i + 1} est ORTHOGONAL (produit scalaire = 0)`);
        } else {
            console.log(`Le couple ${i + 1} n'est pas orthogonal (produit scalaire = ${ps})`);
        }
    }
}

let couplesVecteurs = [
    { v1: [1, 0], v2: [0, 1] },   // Orthogonaux
    { v1: [1, 2], v2: [3, 4] },   // Non orthogonaux
    { v1: [2, -3], v2: [3, 2] }   // Orthogonaux
];


verifierOrthogonaliteProcedure(couplesVecteurs);
verifierOrthogonaliteFonction(couplesVecteurs);