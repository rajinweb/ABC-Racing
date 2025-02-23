import { gql } from '@apollo/client';

// export const GET_FEATURED_RACES = gql`
//   query GetFeaturedRaces {
//     featuredRaces {
//       id
//       name
//       date
//       location
//       status
//       imageURL
//     }
//   }
// `;

export const GET_LATEST_NEWS = gql`
  query GetLatestNews {
    latestNews {
      id
      title
      summary
      date
      imageURL
      category
    }
  }
`;

export const GET_TOP_DRIVERS = gql`
  query GetTopDrivers {
    drivers {
      id
      name
      team
      points
      position
      imageURL
    }
  }
`;

export const GET_RACES = gql`
  query GetRaces {
    races {
      id
      name
      date
      location
      imageURL
    }
  }
`;

export const GET_RACE = gql`
  query GetRace($id: ID!) {
    race(id: $id) {
      id
      name
      date
      location
      imageURL
    }
  }
`;

// export const GET_BOOKMARKS = gql`
//   query GetBookmarks {
//     bookmarks {
//       id
//       name
//       date
//       imageURL
//     }
//   }
// `;