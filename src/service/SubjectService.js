import axios from "axios";
import { restAPI } from "../components/_helpers/api.calls";


export default class StudentService {
    getSubjects() {
    return restAPI.get("/subjects").then((res) => res.data);
  }
}