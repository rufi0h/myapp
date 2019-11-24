/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser($owner: String!) {
  onCreateUser(owner: $owner) {
    id
    name
    bio
    picture
    videos {
      items {
        id
        createdAt
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser($owner: String!) {
  onUpdateUser(owner: $owner) {
    id
    name
    bio
    picture
    videos {
      items {
        id
        createdAt
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser($owner: String!) {
  onDeleteUser(owner: $owner) {
    id
    name
    bio
    picture
    videos {
      items {
        id
        createdAt
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const onCreateVideo = `subscription OnCreateVideo($owner: String!) {
  onCreateVideo(owner: $owner) {
    id
    tags {
      items {
        id
        name
      }
      nextToken
    }
    user {
      id
      name
      bio
      picture
      videos {
        nextToken
      }
      owner
    }
    createdAt
    owner
  }
}
`;
export const onUpdateVideo = `subscription OnUpdateVideo($owner: String!) {
  onUpdateVideo(owner: $owner) {
    id
    tags {
      items {
        id
        name
      }
      nextToken
    }
    user {
      id
      name
      bio
      picture
      videos {
        nextToken
      }
      owner
    }
    createdAt
    owner
  }
}
`;
export const onDeleteVideo = `subscription OnDeleteVideo($owner: String!) {
  onDeleteVideo(owner: $owner) {
    id
    tags {
      items {
        id
        name
      }
      nextToken
    }
    user {
      id
      name
      bio
      picture
      videos {
        nextToken
      }
      owner
    }
    createdAt
    owner
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
