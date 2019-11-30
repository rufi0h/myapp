/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVideo = `mutation CreateVideo($input: CreateVideoInput!) {
  createVideo(input: $input) {
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
export const updateVideo = `mutation UpdateVideo($input: UpdateVideoInput!) {
  updateVideo(input: $input) {
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
export const deleteVideo = `mutation DeleteVideo($input: DeleteVideoInput!) {
  deleteVideo(input: $input) {
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
export const createTag = `mutation CreateTag($input: CreateTagInput!) {
  createTag(input: $input) {
    id
    name
  }
}
`;
export const updateTag = `mutation UpdateTag($input: UpdateTagInput!) {
  updateTag(input: $input) {
    id
    name
  }
}
`;
export const deleteTag = `mutation DeleteTag($input: DeleteTagInput!) {
  deleteTag(input: $input) {
    id
    name
  }
}
`;
export const createCompany = `mutation CreateCompany($input: CreateCompanyInput!) {
  createCompany(input: $input) {
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
export const updateCompany = `mutation UpdateCompany($input: UpdateCompanyInput!) {
  updateCompany(input: $input) {
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
export const deleteCompany = `mutation DeleteCompany($input: DeleteCompanyInput!) {
  deleteCompany(input: $input) {
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
export const createGym = `mutation CreateGym($input: CreateGymInput!) {
  createGym(input: $input) {
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
export const updateGym = `mutation UpdateGym($input: UpdateGymInput!) {
  updateGym(input: $input) {
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
export const deleteGym = `mutation DeleteGym($input: DeleteGymInput!) {
  deleteGym(input: $input) {
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
export const createWall = `mutation CreateWall($input: CreateWallInput!) {
  createWall(input: $input) {
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
export const updateWall = `mutation UpdateWall($input: UpdateWallInput!) {
  updateWall(input: $input) {
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
export const deleteWall = `mutation DeleteWall($input: DeleteWallInput!) {
  deleteWall(input: $input) {
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
export const createRoute = `mutation CreateRoute($input: CreateRouteInput!) {
  createRoute(input: $input) {
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
export const updateRoute = `mutation UpdateRoute($input: UpdateRouteInput!) {
  updateRoute(input: $input) {
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
export const deleteRoute = `mutation DeleteRoute($input: DeleteRouteInput!) {
  deleteRoute(input: $input) {
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
