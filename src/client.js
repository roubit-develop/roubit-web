import {ApolloClient,InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri:"https://dev.roubitdev.shop/graphql",
    cache:new InMemoryCache()
});
export default client