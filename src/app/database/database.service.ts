import { Injectable } from '@angular/core';
import { Pool } from 'pg';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private pool: Pool) {
    this.pool = new Pool({
      user: 'your_username',
      host: 'your_host',
      database: 'your_database',
      password: 'your_password',
      port: 5432 
    })
  }
}
