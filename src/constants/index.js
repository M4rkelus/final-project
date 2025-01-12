const HOST_DB = "http://localhost:5000";

export const URL_GET_POKEMONS = HOST_DB + "/pokemons";

export const TOTAL_POKEMONS_COUNT = 949;

export const CARD_LIST_PAGE_SETTINGS = {
  START_INDEX: 0,
  PAGE_SIZE: 8,
};

export const CARD_LIST_INITIAL_LAST_INDEX =
  CARD_LIST_PAGE_SETTINGS.START_INDEX + CARD_LIST_PAGE_SETTINGS.PAGE_SIZE;

export const COLLECTION_PAGE_SETTINGS = {
  START_INDEX: 0,
  PAGE_SIZE: 4,
};
