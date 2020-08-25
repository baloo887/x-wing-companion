import { metadataRequest } from '../../services/api/FFGRequests';

export function getMetadata(context) {
  metadataRequest()
    .then((response) => {
      context.commit('updateMetadata', response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
