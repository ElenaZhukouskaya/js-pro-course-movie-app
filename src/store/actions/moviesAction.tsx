import { ActionPayload } from "models/ActionPayload";
import Movie from "models/Movie";
import MoviesPayload from "models/MoviesPayload";
import { SearchBy } from "models/SearchBy";
import { SortBy } from "models/SortBy";
import { Dispatch } from "react";
import { Action } from "redux";
import { MoviesActionType } from "store/types";

type FetchMoviesAction = Action<MoviesActionType.FETCH_MOVIES>;
type FetchMoviesSuccessAction = ActionPayload<
  MoviesActionType.FETCH_MOVIES_SUCCESS,
  MoviesPayload
>;
type FetchMoreMoviesSuccessAction = ActionPayload<
  MoviesActionType.FETCH_MOVIES_MORE_SUCCESS,
  Movie[]
>;
type FetchMoviesFailAction = ActionPayload<
  MoviesActionType.FETCH_MOVIES_FAIL,
  string
>;
type SetSearchInputAction = ActionPayload<
  MoviesActionType.SET_SEARCH_INPUT,
  string
>;
type SetSearchByAction = ActionPayload<
  MoviesActionType.SET_SEARCH_BY,
  SearchBy
>;
type SetSortByAction = ActionPayload<MoviesActionType.SET_SORT_BY, SortBy>;

export type MoviesAction =
  | FetchMoviesAction
  | FetchMoviesSuccessAction
  | FetchMoreMoviesSuccessAction
  | FetchMoviesFailAction
  | SetSearchInputAction
  | SetSearchByAction
  | SetSortByAction;

export const fetchMovies = (
  sortBy: string,
  search: string,
  searchBy: string,
  offset: number
) => {
  return (dispatch: Dispatch<MoviesAction>) => {
    dispatch({ type: MoviesActionType.FETCH_MOVIES });
    fetch(
      `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&search=${search}&searchBy=${searchBy}&offset=${offset}&limit=5`
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (offset === 0) {
          const moviesPayload: MoviesPayload = {
            movies: result.data,
            total: result.total,
          };

          dispatch({
            type: MoviesActionType.FETCH_MOVIES_SUCCESS,
            payload: moviesPayload,
          });
        } else {
          dispatch({
            type: MoviesActionType.FETCH_MOVIES_MORE_SUCCESS,
            payload: result.data,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: MoviesActionType.FETCH_MOVIES_FAIL,
          payload: error,
        });
      });
  };
};

export const setSearchInput = (searchInput: string): SetSearchInputAction => ({
  type: MoviesActionType.SET_SEARCH_INPUT,
  payload: searchInput,
});

export const setSearchBy = (searchBy: SearchBy): SetSearchByAction => ({
  type: MoviesActionType.SET_SEARCH_BY,
  payload: searchBy,
});

export const setSortBy = (sortBy: SortBy): SetSortByAction => ({
  type: MoviesActionType.SET_SORT_BY,
  payload: sortBy,
});
