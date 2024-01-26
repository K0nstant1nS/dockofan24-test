import { checkResponse } from "../utils"

export default class Api {
  private static baseUrl = 'https://fakerapi.it/api/v1'
  
  static async getPosts(amount?: number) {
    const res = await fetch(`${this.baseUrl}/texts?_quantity=${amount || 100}&_characters=3000`)
    return await checkResponse(res)
  } 
}
