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

  static async editRoom(room) {
    let response;
    try {
      const url = `http://localhost:3001/rooms/${room.id}`;
      response = await axios.put(url,  room );

      return {
        data: response.data,
      };
    } catch (e) {
      return e;
    }
  }
}

export default RoomAPI;
