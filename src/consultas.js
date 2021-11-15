/*La función find nos permite buscar documentos en una colección. Por ejemplo: Necesito encontrar a los boxeadores que pesen 75kg */
db.boxeador.find(
    {peso:"75kg"}
)

/*El operador $eq compara documentos donde el valor de un campo es igual al valor especificado. Por ejemplo : Quiero buscar a tos los boxeadores que son ingleses.*/
db.boxeador.find ( 
    {nacionalidad: 
        {$eq: "Ingles" } 
    }
)
/*Necesio buscar a todos los menores de 40 */
db.boxeador.find(
        {edad: 
            {$eq: 40} 
        }
)

/*$lt selecciona los documentos donde el valor de field es menor que el especificado.*/
db.boxeador.find( 
    {combatetotal: 
        {$lt: 40} 
    } 
)
/*$lte selecciona los documentos donde el valor de field es menor o igual a el especificado*/
db.boxeador.find( 
    {combate: 
        {perdido:{$lte: 2} }
    } 
)

/*$gt selecciona aquellos documentos donde el valor de fieldes mayor que el especificado*/
db.boxeador.find( 
    {edad:
        {$gt: 60} 
    } 
)
/*$gte selecciona los documentos donde el valor de field es mayor o igual a un valor especificado*/
db.boxeador.find(
    {combate: 
        {ganados: {$gte: 50}} 
    } 
)
/*Quiero saber los boxeadores que debutaron entre el 2000 y 2010*/
db.boxeador.find({
    debut: 
        {$gte: new Date("2000-01-01"), $lte: new Date("2009-12-31")}
    }
)

/*El $in operador selecciona los documentos donde el valor de un campo es igual a cualquier valor en la matriz especificada.Esta consulta selecciona todos los documentos de la coleccion boxeador 
sea la nacionalidad mexicano o filipino.*/
db.boxeador.find( 
    {nacionalidad: 
        {$in: [ "Mexicano", "Filipino" ]} 
    } 
)

/*$nin selecciona los documentos donde:
        El fieldvalor no está en el especificado array o
        El field no existe.*/
db.boxeador.find( 
    {nacionalidad: 
        {$nin: [ "Mexicano", "Filipino" ]} 
    } 
)

/*$ne selecciona los documentos donde el valor de field no es igual al especificado value. Esto incluye documentos que no contienen el field.*/
db.boxeador.find( 
    {campeon: 
        {$ne: "WBO"} 
    } 
)

/* $and Realiza una lógica AND de operación en una matriz de una o más expresiones y selecciona los documentos que cumplan todas las expresiones.*/
db.boxeador.find(
    {
        $and: [
            { combatetotal: { $lte: 60 } },
            { combatetotal: { $gte: 40} }
        ]
    }
)
/*Este hace la misma función que un $and pero es implicito*/
db.boxeador.find( 
    { debut: { $gte: new Date("2007-09-25") } }, 
    { $or: [ {peso: "76kg" }, {estatura: "173cm"}] }
)


/*$or te busca los campos que cumpla una de las condiciones*/
db.boxeador.find( 
    { 
        $or: [ 
            { "nombre": { $eq: "Rocky Marciano" } }, 
            { edad: {$gte: 50} } 
        ] 
    }
)

/*$not realiza una NOT operación lógica en el especificado operador y selecciona los documentos que no coinciden con el segundo operador. Esto incluye documentos que no contienen el field.*/
db.boxeador.find( 
    {combates: 
       {perdidos: {$not: { $gt: 3 }} }
    } 
)

/*También podemos utilizar el operador $nor que acepta dos o más valores. Por ejemplo en la siguiente consulta buscamos las personas cuya edad NO sea mayor que 30 y cuyo campo 
activo NO sea true.*/
db.boxeador.find(
    {$nor:
        [{edad:{$gt:40}},
        {activo: true}]
    }
)

/*Destacar que al igual que $not, $nor devuelve también los documentos si los campos no existen. Para evitar esto, si es algo que no deseamos, 
podemos añadir el operador $exists.*/
db.boxeador.find(
    {$nor:
      [ {edad:{$gt:40}},{edad:{$exists:false}},
        {activo:true},{activo:{$exists:false}}
      ]
    }
)

/*Cuando <boolean> es verdadero, $exists coincide con los documentos que contienen el campo, incluidos los documentos en los que se encuentra el 
valor del campo*/
db.boxeador.find( 
    {activo: {$exists: true}}, 
    {añoderetiro: {$gte: new Date("2017-8-26")}}
)



/*$ regex Proporciona capacidades de expresión regular para cadenas de coincidencia de patrones en consultas.
Quiero buscar todas las divisiones que sean de peso super*/
db.boxeador.find( 
    {division: 
        {$regex: /super$/ } 
    }
)

/*El siguiente ejemplo usa la opción i, realiza una coincidencia que no distingue 
entre mayúsculas y minúsculas.Por ejemplo: Quiero saber todos los estado unidenses que hay pero no se si esta 
escrito como EEUU o eeuu*/
db.boxeador.find(
    {nacionalidad: 
        {$regex: /^EEUU/i } 
    }
)

/*El siguiente ejemplo usa la opción . para que no distinga los acentos de una palabra. Por ejemplo: Quiero encontrar los 
datos de Saúl Álvarez, pero no se si el nombre esta introducido con los acentos o esta en mayuscala o en minuscula*/
db.boxeador.find( 
    {nombre: 
        {$regex: /^Sa.l .lvarez/, $opntions: 'si'  } 
    } 
)

/*El operador $all selecciona los documentos donde el valor de un campo es una matriz que contiene todos los elementos especificados.
Por ejemplo: Quiere que me aparezca todos los boxeadores que pesen 61kg o 170cm*/
db.boxeador.find({peso:{$all: 
    ["61kg", "170cm"] 
}})
  
/*Quiero saber si hay algun  boxeador retirado que haya ganado la WBO o algun otro que no este retirado que no la haya ganado*/
db.boxeador.find( {
    $and:[
        {añoderetiro: {gte: new Date("2008-01-01")}},
        {campeon: "WBO"},
        {$or:[ 
                {activo: true}, 
                {campeon: {$ne : "WBO" }} 
            ]}
        ]
    }
)

/* $expr puede crear expresiones de consulta que comparen campos del mismo documento en una $match etapa.
Por ejemplo: Quiero que me muestre los boxeadores que ha perdido más que empatado */
db.boxeador.find( 
    {$expr: 
        {combates:
            { $gt: [ "$empatado" , "$perdido" ] } 
        }
    }
)


/* $sort ordena todos los documentos de entrada y los devuelve a la canalización en orden ordenado.
Por ejemplo: Quiero que me ordene los boxeadores por orden ascendente teniendo en cuenta los combates totales*/
db.boxeador.aggregate(
    [
      { $sort : { combatetotal : -1} }
    ]
)

 /*$unset elimina / excluye campos de los documentos. Por ejemplo: Quiero que me muestre los boxeadores sin que me aparezca las diviiones en la que pelea*/
 db.boxeador.aggregate([
        { $unset:"division"}
    ]
)

 /*$skip omite el número especificado de documentos que pasan a la etapa y pasa los documentos restantes a la siguiente 
etapa de la canalización. Por ejemplo: Quiero que muestre todos los boxeadores menos los 5 primeros*/
 db.boxeador.aggregate([
    { $skip : 5 }
])
