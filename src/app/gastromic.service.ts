import { Injectable } from '@angular/core';
import { createDirectus, rest, readCollections, authentication } from '@directus/sdk';

@Injectable({
  providedIn: 'root'
})
export class GastromicService {


  // private directus;

  // constructor() {
  //   this.directus = createDirectus('http://194.164.166.181:8055')
  //     .with(authentication({
  //       staticToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImExZTI1N2NmLTlhODQtNDYxMi04ZWU5LWYzZGQ0OWFhMjI1YiIsInJvbGUiOiI1MjVhNDgxOS1lNTE2LTQyYzMtODJiYi0zMzU1OGQzZTgyxNzE4MjE3NDM3LCJpc3MiOiJkaXJlY3R1cyJ9.1Z519RQAQPfHF24sAv4Rd3KKMbjS8wj-6j6vAcZGwDY'
  //     }))
  //     .with(rest());
  // }

  // async getCollections() {
  //   try {
  //     const collections = await this.directus.collections.read();
  //     return collections;
  //   } catch (error) {
  //     console.error('Error fetching collections:', error);
  //     throw error;
  //   }
  // }

}
