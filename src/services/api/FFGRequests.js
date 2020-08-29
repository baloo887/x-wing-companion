import axios from 'axios';

export function squadronRequest(id, lang) {
  if (lang === undefined) {
    lang = 'en';
  }

  const opt = {
    headers: {
      'accept-language': lang,
    },
  };

  return axios.get(`https://squadbuilder.fantasyflightgames.com/api/squads/${id}`, opt);
}

export function metadataRequest() {
  return axios.get('https://squadbuilder.fantasyflightgames.com/api/app-metadata/');
}
