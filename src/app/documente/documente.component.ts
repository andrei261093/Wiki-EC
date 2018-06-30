import { Component, OnInit } from '@angular/core';
import { DataService} from "../data.service";

@Component({
  selector: 'app-documente',
  templateUrl: './documente.component.html',
  styleUrls: ['./documente.component.scss']
})
export class DocumenteComponent implements OnInit {

  documente: Object

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getDocuments().subscribe(
      data => this.documente = data
    )
  }

}
