import Movie from "common/Movie";
import { SearchBy } from "common/SearchBy";
import { SortBy } from "common/SortBy";
import { MoviesAction } from "store/actions/moviesAction";
import { MoviesActionType } from "store/types";

type State = {
  movies: Movie[];
  loading: boolean;
  searchBy: SearchBy;
  sortBy: SortBy;
  limit: number;
  error: string;
};

const initialState: State = {
  movies: [],
  loading: false,
  limit: 5,
  searchBy: SearchBy.title,
  sortBy: SortBy.rating,
  error: "",
};

export const moviesReducer = (
  state: State = initialState,
  action: MoviesAction
): State => {
  switch (action.type) {
    case MoviesActionType.FETCH_MOVIES: {
      return {
        ...state,
        movies: [],
        loading: true,
      };
    }
    case MoviesActionType.FETCH_MOVIES_SUCCESS: {
      return {
        ...state,
        movies: [...action.payload],
        loading: false,
      };
    }
    case MoviesActionType.FETCH_MOVIES_FAIL: {
      return {
        ...state,
        movies: [],
        loading: false,
        error: action.payload,
      };
    }
    case MoviesActionType.SET_SEARCH_BY: {
      return {
        ...state,
        searchBy: action.payload,
      };
    }
    case MoviesActionType.SET_SORT_BY: {
      return {
        ...state,
        sortBy: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
