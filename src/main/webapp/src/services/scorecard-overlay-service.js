/**
 * @author Amila Karunathilaka
 */
import {http} from "./http-service";


export const getScorecard = (boardId) => {
    return http.get(`/v1/scorecard/${boardId}`).then(response => response.data);
}
