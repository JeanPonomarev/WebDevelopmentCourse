(function () {
    var countiesArray = [
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
    console.log(getCountriesWithMaxCitiesCount(countiesArray));
    console.log();

    console.log("Countries info:")
    console.log(getCountryInfo(countiesArray));

    function getCountriesWithMaxCitiesCount(countriesArray) {
        var resultArray = [
            {
                name: "",
                cities: []
            }
        ];

        var wasInserted = false;

        try {
            countriesArray.forEach(function (country) {
                if (country.cities.length > resultArray[0].cities.length) {
                    resultArray = [];
                    resultArray.push(country);
                    wasInserted = true;
                } else if (country.cities.length === resultArray[0].cities.length) {
                    resultArray.push(country);
                }
            });
        } catch (e) {
            return null;
        }

        if (!wasInserted) {
            return null;
        }

        return resultArray;
    }

    function getCountryInfo(countriesArray) {
        var resultArray = [];

        try {
            resultArray = countriesArray.map(function (country) {
                var nextCountry = {};
                nextCountry[country.name] = country.cities.reduce(function (total, city) {
                    return total + city.population;
                }, 0);

                return nextCountry;
            });
        } catch (e) {
            return null;
        }

        return resultArray;
    }
})();