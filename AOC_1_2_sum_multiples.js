let firstColumnLocationIds =[10112,10245,10252,10333,10481,10526,10531,10846,10937,10989,11003,11205,11269,11337,11381,11389,11458,11708,11717,11800,11807,11812,11947,11985,11995,12207,12244,12273,12422,12775,12797,12882,12915,12936,12969,12985,12998,13033,13040,13062,13090,13158,13223,13295,13683,13764,13789,13853,13942,13994,14004,14007,14160,14297,14314,14331,14346,14498,14525,14528
];
let secondColumnLocationIds = [10112,10112,10112,10112,10112,10112,10112,10112,10112,10112,10112,10112,10112,10112,10112,10112,10112,10112,10112,10112,10350,10429,10487,10557,10644,10743,10767,11383,11467,11601,11620,11659,11734,11951,12203,12276,12422,12422,12422,12422,12422,12422,12422,12422,12422,12422,12422,12422,12422,12422,12422,12474,12497,12746,12960,13647,13782,13789,13789,13789
];
let sumMultiples = 0;
firstColumnLocationIds.map( (firstLocationId) => {
    let count = 0;
    secondColumnLocationIds.map( (secondLocationId) => {
        firstLocationId == secondLocationId ? count++ : count;
    });
    sumMultiples += count*firstLocationId;
});
console.log(sumMultiples)