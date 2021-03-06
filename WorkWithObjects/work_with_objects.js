(function () {
    function checkArray(array) {
        if (array === undefined) {
            throw new Error("Input array is undefined");
        }

        if (!array) {
            throw new Error("Input array is null");
        }
    }

    function getCountriesWithMaxCitiesCount(countriesArray) {
        checkArray(countriesArray);

        var maxCitiesCount = countriesArray
            .reduce(function (currentMaxCitiesCount, country) {
                return Math.max(currentMaxCitiesCount, country.cities.length);
            }, 0);

        return countriesArray.filter(function (country) {
            return country.cities.length === maxCitiesCount;
        });
    }

    function getCountriesInfo(countriesArray) {
        checkArray(countriesArray);

        var countriesInfo = {};

        countriesArray.forEach(function (country) {
            countriesInfo[country.name] = country.cities.reduce(function (total, city) {
                return total + city.population;
            }, 0);
        })

        return countriesInfo;
    }

    var countriesArray = [
        {
            name: "Russia",
            cities: [
                {
                    name: "Moscow",
                    population: 12506468
                },
                {
                    name: "Saint Petersburg",
                    population: 5351935
                },
                {
                    name: "Novosibirsk",
                    population: 1473754
                },
                {
                    name: "Yekaterinburg",
                    population: 1349772
                }
            ]
        },
        {
            name: "USA",
            cities: [
                {
                    name: "New York",
                    population: 8336817
                },
                {
                    name: "Los Angeles",
                    population: 3979576
                },
                {
                    name: "Dallas",
                    population: 1197816
                }
            ]
        },
        {
            name: "Canada",
            cities: [
                {
                    name: "Toronto",
                    population: 2731571
                },
                {
                    name: "Montreal",
                    population: 1704694
                },
                {
                    name: "Vancouver",
                    population: 631486
                },
                {
                    name: "Ottawa",
                    population: 934243
                }
            ]
        }
    ]

    console.log("Countries with max cities count:")
    console.log(getCountriesWithMaxCitiesCount(countriesArray));
    console.log();

    console.log("Countries info:")
    console.log(getCountriesInfo(countriesArray));
})();