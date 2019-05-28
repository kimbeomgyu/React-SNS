const ADD_POST = "ADD_POST";
const ADD_DUMMY = "ADD_DUMMY";

export const initialState = {
  imagePaths: [],
  mainPosts: [
    {
      User: { id: 1, nickname: "김범규" },
      content: "첫번째 게시글",
      img: "https://cdn.stocksnap.io/img-thumbs/960w/26OLIALPKJ.jpg"
    },
    { User: { id: 1, nickname: "김범규" }, content: "두번째 게시글" }
  ]
};

const addPost = {
  type: ADD_POST
};
const addDummy = {
  type: ADD_DUMMY,
  data: {
    content: "Hello",
    UserId: 1,
    User: {
      nickname: "김범규"
    }
  }
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state
      };
    }
    case ADD_DUMMY: {
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts]
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default reducer;
