const { GraphQLObjectType,
    GraphQLString,
    GraphQLList
} = require('graphql');

const flats = [
    {
        type: 'flat',
        id: ` 1`,
        title: "3-х комнатная на Минской",
        city: "Tyumen",
        street: "Минская",
        house: "3a",
        room: 123,
        description: "3-комнатная квартира-студия в новом кирпичном доме 2018 года постройки. Дом расположен в 5 минутах ходьбы от станции метро Октябрьская. Есть индивидуальное парковочное место для машины и кладовая.",
        first_name: "Василий",
        last_name: "Дроздов",
        middle_name: "Михайлович",
        phone: '1111111111',
        area: '32',
        cost: '20000$'
    },
    {
        type: 'flat',
        id: `2`,
        title: "1 комнатная на Барабаинской",
        city: "Tyumen",
        street: "Барабинская",
        house: 12,
        room: 45,
        description: "3-комнатная квартира-студия в новом кирпичном доме 2018 года постройки. Дом расположен в 5 минутах ходьбы от станции метро Октябрьская. Есть индивидуальное парковочное место для машины и кладовая.",
        first_name: "Михаил",
        last_name: "Иванов",
        middle_name: "Демидович",
        phone: '1111111111',
        area: '32',
        cost: '20000$'
    },
    {
        type: 'flat',
        id: `3`,
        title: "Квартира Ленина",
        city: "Tyumen",
        street: "Ленина",
        house: 134,
        room: 24,
        description: "3-комнатная квартира-студия в новом кирпичном доме 2018 года постройки. Дом расположен в 5 минутах ходьбы от станции метро Октябрьская. Есть индивидуальное парковочное место для машины и кладовая.",
        first_name: "Степан",
        last_name: "Карачаев",
        middle_name: "Иванович",
        phone: '1111111111',
        area: '32',
        cost: '20000$'
    }
]
const FlatType = new GraphQLObjectType({
    name: 'Flat',
    fields: () => ({
        type: { type: GraphQLString },
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        city: { type: GraphQLString },
        street: { type: GraphQLString },
        house: { type: GraphQLString },
        room: { type: GraphQLString },
        description: { type: GraphQLString },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        middle_name: { type: GraphQLString }
    })
})

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        flat: {
            type: new GraphQLList(FlatType),
            resolve() {
                return flats
            }
        }
    }
});

exports.queryType = queryType;