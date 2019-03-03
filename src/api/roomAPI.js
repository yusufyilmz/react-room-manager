/* eslint-disable no-undef */
import axios from 'axios';


class RoomAPI {
  static async filterRooms(keyword) {
    let response;
    try {
      const url = `${API_URL}/rooms?city_like=${keyword}`;
      response = await axios.get(url);

      return {
        data: response.data,
      };
    } catch (e) {
      return e;
    }
  }

  static async fetchRooms() {
    let response;
    try {
      const url = `${API_URL}/rooms`;
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
      const url = `${API_URL}/rooms/${room.id}`;
      response = await axios.put(url, room);

      return {
        data: response.data,
      };
    } catch (e) {
      return e;
    }
  }
}

export default RoomAPI;
