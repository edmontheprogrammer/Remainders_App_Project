import axios from "axios";
import Remainder from "../models/remainder";

class RemainderService {
    http = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/"
    }); 

    // this method gets the Remainders
    async getRemainders() {
        const response = await this.http.get<Remainder[]>('/todos'); 
        return response.data; 
    }

    // this method adds a remainder
   async addRemainder(title: string) {
      const response = await  this.http.post<Remainder>('/todos', { title })
    }

    // this method removes a reminder
   async removeReminder(id: number) {
        const response = await this.http.delete('/todos/' + id); 
        return response.data; 
    }
}

export default new RemainderService(); 