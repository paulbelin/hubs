import axios from "axios";
import moment from "moment";

const qs = new URLSearchParams(location.search);
const hubId = qs.get("hub_id") || document.location.pathname.substring(1).split("/")[0];
const postUrl = `https://api.hubaktan.com/rooms/${hubId}/log`;

export default function postActivityLog(activity, data) {
  if (data === undefined) return;

  const payload = {
    activity,
    data,
    timestamp: moment.utc().valueOf()
  };

  axios
    .post(postUrl, payload)
    .then(response => {
      // console.log(response);
      return response;
    })
    .catch(error => {
      console.log("Activity Log Error:", error);
    });
}
