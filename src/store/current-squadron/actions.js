import { squadronRequest } from '../../services/api/FFGRequests';

export function getSquadron(context, data) {
  squadronRequest(data.id, data.language)
    .then((response) => {
      context.commit('updateSquadron', response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
