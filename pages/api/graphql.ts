import { gql } from 'graphql-tag';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { fakeNews, fakeRaces, drivers } from './data';

const typeDefs = gql`
  type Race {
    id: ID!
    name: String!
    date: String!
    location: String!
    imageURL: String!
  }

  type News {
    id: ID!
    title: String!
    summary: String!
    date: String!
    imageURL: String!
    category: String!
  }

  type Bookmark {
    id: ID!
    name: String!
    date: String!
    imageURL: String
  }
  
  type Drivers {
    id: ID!
    name: String!
    team: String!
    points: Int
    position: Int
    imageURL: String
  }
  
  type Query {
    races: [Race]
    race(id: ID!): Race
    latestNews: [News] 
    bookmarks: [Bookmark]!
    drivers: [Drivers]
  }
`;

const resolvers = {
  Query: {
    races: () => {
      return fakeRaces || [];
    },
    race: (_: any, { id }: { id: string }) => {
      return fakeRaces.find((race) => race.id === id);
    },
    latestNews: () => {
      return fakeNews || [];
    },
    bookmarks: async () => {
      return fakeRaces || [];
    },
    drivers: async () => {
      return drivers || [];
    }
  },
};

// Updated Apollo Server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (error) => {
    console.error('GraphQL Error:', error);
    return error;
  },
});

// Updated handler with context and configuration
const handler = startServerAndCreateNextHandler(server, {
  context: async (req, res) => ({ req, res }),
});

export default handler;

export const config = {
  api: {
    bodyParser: true,
  },
};
