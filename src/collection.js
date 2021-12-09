db.boxeador.insertMany([
    {
        nombre: "Floyd Mayweather Jr", 
        nacionalidad: "EEUU",
        edad: 44, 
        estatura: "173cm", 
        peso: "68kg", 
        debut: new Date("1996-10-11"),

        division: ["peso welter", "peso ligero", "peso pluma", "peso superpluma", "peso superwelter", "peso superligero"], 
        campeon: [ "CBM", "FIB"], 
        activo: false,
        añoderetiro: new Date("2017-08-26"),
        combatetotal: 50,
        combates:[
            {ganados: 49}, 
            {perdidos: 1},
            {empatados: 0}
        ]
    },

    {nombre: "Manny Pacquio", nacionalidad: "Filipino", edad: 42, estatura: "166cm", peso: "67kg", debut: new Date("1995-01-22"), division: ["peso mosca", "peso supergallo", "peso pluma", "peso superpluma", "peso ligero", "peso superligero", "peso welter", "superwelter"], campeon: [ "CBM", "PSA", "ESPN"], activo: false, añoderetiro: new Date("2021-09-29"), combatetotal: 71, combates:[ {ganados: 62, perdidos: 8, empatados: 2 } ]}, 
    {nombre: "Saúl Álvarez", nacionalidad: "Mexicano", edad: 31, estatura: "173cm", peso: "76kg", debut: new Date("2010-05-01"), division: ["peso welter", "peso superligero", "peso medio", "peso supermediano", "peso superwelter", "peso supermediopesado"], campeon: [ "AMB", "WBO", "FIB"], activo: true, combatetotal: 60, combates:[ {ganados: 57, perdidos: 1, empatados: 2 } ]}, 
    {nombre: "Muhammad Ali", nacionalidad: "EEUU", edad: 74, estatura: "191cm", peso: "75kg", debut: new Date("1960-04-24"), division: ["pesos pesado"], campeon: [ "Campeon indiscutible"], activo: false, añoderetiro: new Date("1981-08-26"), combatetotal: 61, combates:[ {ganados: 56, perdidos: 5, empatados: 0 } ]}, 
    {nombre: "Tyson Fury", nacionalidad: "Inglés", edad: 33, estatura: "209cm", peso: "126kg", debut: new Date("2008-10-06"), division: ["pesos pesado"], campeon: [ "WBO"], activo: true, combatetotal: 32, combates:[ {ganados: 31, perdidos: 0, empatados: 1 } ]}, 
    {nombre: "Mike Tyson", nacionalidad: "EEUU", edad: 55, estatura: "178cm", peso: "100kg", debut: new Date("1985-02-15"), division: ["pesos pesado"], campeon: [ "WBA"], activo: false, añoderetiro: new Date("2005-02-15"), combatetotal: 56, combates:[ {ganados: 50, perdidos: 6, empatados: 0 } ]}, 
    {nombre: "Rocky Marciano", nacionalidad: "EEUU", edad: 46, estatura: "179cm", peso: "85kg", debut: new Date("1947-03-17"), division: ["pesos pesado"], campeon: [ "WBA"], activo: false, añoderetiro: new Date("1956-04-27"), combatetotal: 49, combates:[ {ganados: 49, perdidos: 0, empatados: 0 } ]}, 
    {nombre: "Terence Crawford", nacionalidad: "EEUU", edad: 34, estatura: "173cm", peso: "75kg", debut: new Date("2008-03-14"), division: ["peso welter", "peso ligero", "peso superligero"], campeon: [ "WBC", "IBF", "WBO", "WBA"], activo: true, combatetotal: 37, combates:[ {ganados: 37, perdidos: 0, empatados: 0 } ]}, 
    {nombre: "Roberto Durán", nacionalidad: "Panameño", edad: 70, estatura: "170cm", peso: "70kg", debut: new Date("1967-11-20"), division: ["peso ligero"], campeon: ["FIB"], activo: false, añoderetiro: new Date("2002-07-09"), combatetotal: 119, combates:[ {ganados: 103, perdidos: 16, empatados: 0 } ]}, 
    {nombre: "Anthony Joshua", nacionalidad: "Inglés", edad: 32, estatura: "198cm", peso: "109kg", debut: new Date("2007-05-07"), division: ["pesos pesado", "pesos superpesado"], campeon: [ "IBF", "WBA", "IBO", "WBO"], activo: true, combatetotal: 26, combates:[ {ganados: 24, perdidos: 2, empatados: 0 } ]}, 
    {nombre: "Vasyl Lomachenko", nacionalidad: "Ucraniano", edad: 33, estatura: "170cm", peso: "61kg", debut: new Date("2013-10-13"), division: ["peso ligero", "peso pluma", "peso superpluma"], campeon: [ "WBC", "WBO", "WBA"], activo: true, combatetotal: 16, combates:[ {ganados: 14, perdidos: 2, empatados:0 } ]}, 
    {nombre: "Bernard Hopkins", nacionalidad: "EEUU", edad: 56, estatura: "185cm", peso: "79kg", debut: new Date("1988-10-11"), division: ["peso medio", "peso supermediano", "peso mediopesado"], campeon: [ "WBC", "WBA", "IBF"], activo: false, añoderetiro: new Date("2017-12-17"), combatetotal: 67, combates:[ {ganados: 55, perdidos: 8, empatados: 2 } ]}, 
    {nombre: "Cecilia Braekhus", nacionalidad: "Noruega", edad: 40, estatura: "177cm", peso: "65kg", debut: new Date("2007-01-20"), division: ["peso welter", "peso superligero"], campeon: [ "WBC", "WBO", "WBA", "IBF"], activo: true, combatetotal: 61, combates:[ {ganados: 59, perdidos: 2,  empatados: 0 } ]}, 
    
])
