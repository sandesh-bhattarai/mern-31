const category = [
    {
        name: "Category 1",
        children: [
            {
                name: "Category 1.1",
                children: [
                    {
                        name: "Category 1.1.1",
                        children: null
                    },
                    {
                        name: "Category 1.1.2",
                        children: [
                            {
                                name: "Category 1.1.2.1",
                                children: null
                            }
                        ]
                    }
                ]
            },
            {
                name: "Category 1.2",
                children: [
                    {
                        name: "Category 1.2.1",
                        children: [
                            {
                                name: "Category 1.2.1.1",
                                children: null
                            }
                        ]
                    },
                    {
                        name: "Category 1.2.2",
                        children: [
                            {
                                name: "Category 1.2.2.1",
                                children: [
                                    {
                                        name: "Category 1.2.2.1.1",
                                        children: [
                                            {
                                                name: "Category 1.2.2.1.1.1",
                                                children: null
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]


const getPrint = (i = 1) => {
    console.log( i)    // Loop: 1, Loop 11

    if(i < 100) {                   // i<=10, 11<=10
        getPrint(++i)      // Loop, i++, 11
    }

}

//getPrint( )

/** 
Category 1
    Category 1.1
        Category 1.1.1
        Category 1.1.2
            Category 1.1.2.1
    Category 1.2 
        Category 1.2.1 
            Category 1.2.1.1
        Category 1.2.2
            Category 1.2.2.1
**/


// for(let cat of category) {
//     // Category 1
//     console.log(cat.name)

//     // []
//     if(cat.children) {
//         //
//         let padding1 = "    "
//         for(let catChild1 of cat.children) {
//             // Caegory 1.1
//             // Category 1.2
//             console.log(padding1+catChild1.name)

//             if(catChild1.children) {

//                 let padding2 = padding1+"    "
//                 for(let catChild2 of catChild1.children) {
//                     console.log(padding2+catChild2.name)

//                     if(catChild2.children) {
//                         let padding3 = padding2 + "    ";
//                         for(let catChild3 of catChild2.children) {
//                             console.log(padding3+catChild3.name)

//                             if(catChild3.children) {
//                                 let padding4 = padding3 + "    ";
//                                 for(let catChild4 of catChild3.children) {
//                                     console.log(padding4+catChild4.name)
//                                 }
//                             }

//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

const toPrint = (category, padding = "") => {
    if(category) {
        for(let cat of category) {
            console.log(padding + cat.name)
            if(cat.children) {
                toPrint(cat.children, padding+"    ")
            }
        }
    }
    
}

toPrint(category)


// unique 
const slug = "this-is-slug";
// uniquey 
const toGetUnique = (slug) => {
    // db query => find or not found
    if(notfound) {
        return slug 
    } else {
        // not unique
        slug += "random numb";
        toGetUnique(slug);
    }
}


