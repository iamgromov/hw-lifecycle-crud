import Note from "../interfaces/Note";

export default class Fetching {
  static async getNotes() {
    try {
      const response = await fetch('http://localhost:7070/notes', {
        headers: {
          'content-type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Fetching notes failed');
      }

      const result: Note[] = await response.json();
      return result;
    } catch (err) {
      console.log(err);      
    }
  }

  static async addNote(content: string) {
    try {
      const response = await fetch('http://localhost:7070/notes', {
        method: 'POST',
        body: JSON.stringify({
          id: 0,
          content
        }),
        headers: {
          'content-type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Fetching notes failed');
      }
      return response;
    } catch (err) {
      console.log(err);      
    }
  }

  static async deleteNote(id: number) {
    try {
      const response = await fetch('http://localhost:7070/notes/' + id, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Fetching notes failed');
      }
      return response;
    } catch (err) {
      console.log(err);      
    }
  }
}