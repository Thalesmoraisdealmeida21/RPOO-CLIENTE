import { Data } from '@angular/router';

export interface Question {
    id: String;
    challenger: String;
    name: String;
    habilidade: String;
    createdAt: Data;
    updatedAt: Data
}