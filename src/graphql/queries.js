/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVideo = `query GetVideo($id: ID!) {
  getVideo(id: $id) {
    id
    tags {
      items {
        id
        name
      }
      nextToken
    }
    route {
      id
      name
      active
      grade
      rating
      dateSet
      tags {
        nextToken
      }
      routeSetter
      videos {
        nextToken
      }
    }
    file
    owner
  }
}
`;
export const listVideos = `query ListVideos(
  $filter: ModelVideoFilterInput
  $limit: Int
  $nextToken: String
) {
  listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      tags {
        nextToken
      }
      route {
        id
        name
        active
        grade
        rating
        dateSet
        routeSetter
      }
      file
      owner
    }
    nextToken
  }
}
`;
export const getTag = `query GetTag($id: ID!) {
  getTag(id: $id) {
    id
    name
  }
}
`;
export const listTags = `query ListTags($filter: ModelTagFilterInput, $limit: Int, $nextToken: String) {
  listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
    }
    nextToken
  }
}
`;
export const getCompany = `query GetCompany($id: ID!) {
  getCompany(id: $id) {
    id
    name
    location
    gyms {
      items {
        id
        name
        location
        gymImg
        gymLogo
      }
      nextToken
    }
    companyLogo
    companyImg
  }
}
`;
export const listCompanys = `query ListCompanys(
  $filter: ModelCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      location
      gyms {
        nextToken
      }
      companyLogo
      companyImg
    }
    nextToken
  }
}
`;
export const getGym = `query GetGym($id: ID!) {
  getGym(id: $id) {
    id
    name
    location
    walls {
      items {
        id
        name
        wallImg
      }
      nextToken
    }
    gymImg
    gymLogo
  }
}
`;
export const listGyms = `query ListGyms($filter: ModelGymFilterInput, $limit: Int, $nextToken: String) {
  listGyms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      location
      walls {
        nextToken
      }
      gymImg
      gymLogo
    }
    nextToken
  }
}
`;
export const getWall = `query GetWall($id: ID!) {
  getWall(id: $id) {
    id
    name
    routes {
      items {
        id
        name
        active
        grade
        rating
        dateSet
        routeSetter
      }
      nextToken
    }
    wallImg
  }
}
`;
export const listWalls = `query ListWalls(
  $filter: ModelWallFilterInput
  $limit: Int
  $nextToken: String
) {
  listWalls(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      routes {
        nextToken
      }
      wallImg
    }
    nextToken
  }
}
`;
export const getRoute = `query GetRoute($id: ID!) {
  getRoute(id: $id) {
    id
    name
    active
    grade
    rating
    dateSet
    tags {
      items {
        id
        name
      }
      nextToken
    }
    routeSetter
    videos {
      items {
        id
        file
        owner
      }
      nextToken
    }
  }
}
`;
export const listRoutes = `query ListRoutes(
  $filter: ModelRouteFilterInput
  $limit: Int
  $nextToken: String
) {
  listRoutes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      active
      grade
      rating
      dateSet
      tags {
        nextToken
      }
      routeSetter
      videos {
        nextToken
      }
    }
    nextToken
  }
}
`;
