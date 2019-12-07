export const listCompanysGyms = `query ListCompanys(
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
        items {
            id
            name
            gymLogo
            gymImg
            location
        }
        nextToken
      }
      companyLogo
      companyImg
    }
    nextToken
  }
}
`;

export const listWallsRoutes = `query ListWalls(
  $filter: ModelWallFilterInput
  $limit: Int
  $nextToken: String
) {
  listWalls(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      routes {
        id
        active
        grade
        rating
        dateSet
        routeSetter
        videos {
            id
            file
            nextToken
        }
        nextToken
      }
      wallImg
    }
    nextToken
  }
}
`;

export const getGymsWalls = `query GetGymsWalls{
  getGym(id: "**"){
    id
    name
    location
    gymImg
    walls{
        items{
          id
          name
          wallImg
          routes (filter: {active: {eq: true}}) {
            items {
              id
            }
          }
        }
      }
  }
}`;

export const getWallsRoutes = `query ListRoutes {
  getWall(id:	"**") {
    name
    wallImg
    routes(filter: {active: {eq: true}}) {
      items {
        rating
        name
        id
        videos {
          items{
            file
            id
          }
        }
      }
    }
  }
}`;

export const getRouteVideos = `query GetRoute {
  getRoute(id:"**"){
    id
    active
    name
    grade
    rating
    videos{
      items{
        id
        file
      }
    }
  }
}`;

export const addVideo = `mutation AddVideo {
  createVideo(input: {
    routeVideosId: "**"
    file: "**"
    createdAt: "**"
  }){
    id
    file
  }
}`;