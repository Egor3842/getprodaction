import gql from "graphql-tag";

export const FlatQuery = gql`
query flatsQuery {
    flat {
        id
        title
        city
        street
        house
        room
        description
        first_name
        last_name
        middle_name
    }
}
`;