import axios from 'axios';


class RoomAPI {
  static async fetchRooms() {
    let response;
    try {
      const url = 'http://localhost:3001/rooms';
      response = await axios.get(url);
      
      return {
        data: response.data,
      };
    } catch (e) {
      return e;
    }
  }
}

export default RoomAPI;
