import { Component, OnInit } from '@angular/core';
import { Program } from '../models/program';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  results: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  onProgramClick(): void {
    this.http.get('/api/program/sss', {responseType: 'text'}).subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data.toString();
    });
  }

  onScenarioClick(): void {
    this.http.get('/api/scenario/sss', {responseType: 'text'}).subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data.toString();
    });
  }
}
