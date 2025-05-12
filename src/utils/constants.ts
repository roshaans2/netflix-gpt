export const NETFLIX_LOGO:string = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const NETFLIX_BACKGROUND:string = "https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_large.jpg"

export const DEFAULT_USER_PROFILE:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReD9V0prk-ko2sZWqZwBnBdgxanrQ4hUDUcQ&s"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
  };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780"
export const SUPPORTED_LANGUAGES = [
  {
    identifier:'en',
    name:'English'
  },
  {
    identifier: 'tamil',
    name:'Tamil',
  }, 
  {
    identifier:'hindi',
    name:'Hindi'
  }
]

export const GEMINI_API_KEY=process.env.REACT_APP_GEMINI_API_KEY