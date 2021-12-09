import Movie from "models/Movie";
import { SearchBy } from "models/SearchBy";
import { SortBy } from "models/SortBy";
import { MoviesAction } from "store/actions/moviesAction";
import { MoviesActionType } from "store/types";

type State = {
  movies: Movie[];
  total: number;
  loading: boolean;
  searchInput: string;
  searchBy: SearchBy;
  sortBy: SortBy;
  error: string | null;
};

const initialState: State = {
  movies: [],
  total: 0,
  loading: false,
  searchInput: "",
  searchBy: SearchBy.title,
  sortBy: SortBy.rating,
  error: null,
};

export const moviesReducer = (
  state: State = initialState,
  action: MoviesAction
): State => {
  switch (action.type) {
    case MoviesActionType.FETCH_MOVIES: {
      return {
        ...state,
        loading: true,
      };
    }
    case MoviesActionType.FETCH_MOVIES_SUCCESS: {
      return {
        ...state,
        movies: action.payload.movies,
        total: action.payload.total,
        loading: false,
      };
    }
    case MoviesActionType.FETCH_MOVIES_MORE_SUCCESS: {
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
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
    case MoviesActionType.SET_SEARCH_INPUT: {
      return {
        ...state,
        searchInput: action.payload,
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
