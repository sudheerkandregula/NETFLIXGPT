export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const UserIcon ="https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const api_options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY,
    }
  };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_small.jpg';

export const SUPPORTED_LANGUAGES = [{identifier:"en",name:"English"},{identifier:"hindi",name:"Hindi"},{identifier:"spanish",name:"Spanish"}];

export const OPENAI_KEY = "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";

export const Google_api = "AIzaSyAHaUi4xBkmwNJiNEP-wTo53b_NQdS_h5g";

export const openrouter_key = process.env.REACT_APP_openrouter_key;
