/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVideo = `subscription OnCreateVideo {
  onCreateVideo {
    id
    tags {
      items {
        id
        name
      }
      nextToken
    }
    createdAt
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
  }
}
`;
export const onUpdateVideo = `subscription OnUpdateVideo {
  onUpdateVideo {
    id
    tags {
      items {
        id
        name
      }
      nextToken
    }
    createdAt
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
  }
}
`;
export const onDeleteVideo = `subscription OnDeleteVideo {
  onDeleteVideo {
    id
    tags {
      items {
        id
        name
      }
      nextToken
    }
    createdAt
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
  }
}
`;
export const onCreateTag = `subscription OnCreateTag {
  onCreateTag {
    id
    name
  }
}
`;
export const onUpdateTag = `subscription OnUpdateTag {
  onUpdateTag {
    id
    name
  }
}
`;
export const onDeleteTag = `subscription OnDeleteTag {
  onDeleteTag {
    id
    name
  }
}
`;
export const onCreateCompany = `subscription OnCreateCompany {
  onCreateCompany {
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
export const onUpdateCompany = `subscription OnUpdateCompany {
  onUpdateCompany {
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
export const onDeleteCompany = `subscription OnDeleteCompany {
  onDeleteCompany {
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
export const onCreateGym = `subscription OnCreateGym {
  onCreateGym {
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
export const onUpdateGym = `subscription OnUpdateGym {
  onUpdateGym {
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
export const onDeleteGym = `subscription OnDeleteGym {
  onDeleteGym {
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
export const onCreateWall = `subscription OnCreateWall {
  onCreateWall {
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
export const onUpdateWall = `subscription OnUpdateWall {
  onUpdateWall {
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
export const onDeleteWall = `subscription OnDeleteWall {
  onDeleteWall {
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
export const onCreateRoute = `subscription OnCreateRoute {
  onCreateRoute {
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
        createdAt
        file
      }
      nextToken
    }
  }
}
`;
export const onUpdateRoute = `subscription OnUpdateRoute {
  onUpdateRoute {
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
        createdAt
        file
      }
      nextToken
    }
  }
}
`;
export const onDeleteRoute = `subscription OnDeleteRoute {
  onDeleteRoute {
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
        createdAt
        file
      }
      nextToken
    }
  }
}
`;
