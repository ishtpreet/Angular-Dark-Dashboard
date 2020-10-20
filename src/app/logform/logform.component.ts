import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-logform',
  templateUrl: './logform.component.html',
  styleUrls: ['./logform.component.css']
})
export class LogformComponent implements OnInit {
  //readonly API_URL = "http://127.0.0.1:5000";
  constructor(private httpClient: HttpClient) {
    
    this.httpClient.post("http://localhost:5000/dashboard",
      {
        "cid": "2771",
        "logType": "wifi",
        "start_time": "2019-09-02 00:00:00",
        "end_time": "2019-09-04 23:59:59"
      })
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
        },
        error => {

          console.log("Error", error);

        }

      );
  }
  logType = '';
  cid = '';
  fromdate = '';
  todate = '';







  logtypes = [
    { id: 1, name: "wifi" },
    { id: 2, name: "read" },
    { id: 3, name: "running" },
    { id: 4, name: "awsbroker" },
    { id: 5, name: "command" },
    { id: 6, name: "feedback" },
    { id: 7, name: "presentjoulebox" },
    { id: 8, name: "customfeedbackresponse" },
    { id: 9, name: "pidoutput" },
    { id: 10, name: "error" },
  ];

  controllerids = [
    { id: 1, value: "2765" },
    { id: 2, value: "2762" },
    { id: 3, value: "2766" },
    { id: 4, value: "2776" },
    { id: 5, value: "2753" },
    { id: 6, value: "2771" },
    { id: 7, value: "2777" },
    { id: 8, value: "2769" },
    { id: 9, value: "2755" },
    { id: 10, value: "2757" }
  ];

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  posts: any;



  // getPosts() {
  //   this.posts = this.http.get(this.ROOT_URL + '/posts');
  //   console.log(this.logtype);
  // }
  buttonData(logtype, controllerid, fromdate, todate) {
    this.logType = logtype;
    this.cid = controllerid;
    this.fromdate = fromdate;
    this.todate = todate;
    var inputData =
      { "logType": this.logType, "cid": this.cid, "fromdata": this.fromdate, "todata": this.todate };
    console.log(inputData);

  }


  ngOnInit() {
  }

  logtypeControl = new FormControl('', [Validators.required]);
  controlleridControl = new FormControl('', [Validators.required]);
}
