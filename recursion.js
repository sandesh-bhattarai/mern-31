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
                                children: null
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

getPrint( )

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