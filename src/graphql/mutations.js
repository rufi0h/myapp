/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
