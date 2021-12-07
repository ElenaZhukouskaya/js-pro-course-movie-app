import { ActionPayload } from "common/ActionPayload";
import Movie from "common/Movie";
import { SearchBy } from "common/SearchBy";
import { SortBy } from "common/SortBy";
import { Dispatch } from "react";
import { Action } from "redux";
import { MoviesActionType } from "store/types";

type FetchMovieAction = Action<MoviesActionType.FETCH_MOVIES>;
type FetchSuccessMovieAction = ActionPayload<
  MoviesActionType.FETCH_MOVIES_SUCCESS,
  Movie[]
>;
type FetchFailMovieAction = ActionPayload<
  MoviesActionType.FETCH_MOVIES_FAIL,
  string
>;
type SetSearchByAction = ActionPayload<
  MoviesActionType.SET_SEARCH_BY,
  SearchBy
>;
type SetSortByAction = ActionPayload<MoviesActionType.SET_SORT_BY, SortBy>;

export type MoviesAction =
  | FetchMovieAction
  | FetchSuccessMovieAction
  | FetchFailMovieAction
  | SetSearchByAction
  | SetSortByAction;

export const fetchMovies = (
  sortBy: string,
  sortOrder: string,
  search: string,
  searchBy: string,
  filter: string,
  offset: number,
  limit: number
) => {
  return (dispatch: Dispatch<MoviesAction>) => {
    dispatch({ type: MoviesActionType.FETCH_MOVIES });
    fetch(
      `https://reactjs-cdp.herokuapp.com/movies?sortBy= ${sortBy}&sortOrder=${sortOrder}&search=${search}&searchBy=${searchBy}&filter=${filter}&offset=${offset}&limit=${limit}`
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        dispatch({
          type: MoviesActionType.FETCH_MOVIES_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: MoviesActionType.FETCH_MOVIES_FAIL,
          payload: error,
        });
      });
  };
};

export const setSearchBy = (searchBy: SearchBy): SetSearchByAction => ({
  type: MoviesActionType.SET_SEARCH_BY,
  payload: searchBy,
});

export const setSortBy = (sortBy: SortBy): SetSortByAction => ({
  type: MoviesActionType.SET_SORT_BY,
  payload: sortBy,
});
