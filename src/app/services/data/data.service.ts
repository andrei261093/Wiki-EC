import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

export interface Post {
  userId: Number;
  title: String;
  description: String;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  serverURL = 'http://andrei261093.go.ro:8080';

  constructor(private http: HttpClient) {
  }

  getDocuments() {
    return this.http.get(this.serverURL + '/getDocuments')
  }

  //Categories Routes
  getCategories() {
    return this.http.get(this.serverURL + '/getListaCategorii', {withCredentials: true});
  }


  //Posts Routes
  getPosts(page: number, size: number) {
    return this.http.get(this.serverURL + '/getPostList', {withCredentials: true, params: {page: page + '', size: size + '', filters: []}});
  }

  getPostsFiltered(page: number, size: number, filters) {
    console.log(filters);
    return this.http.get(this.serverURL + '/getPostList', {withCredentials: true, params: {page: page + '', size: size + '', filters: JSON.stringify(filters)}});
  }

  getSearchedPost(page: number, size: number, searchText: string) {
    return this.http.get(this.serverURL + '/searchPost', {withCredentials: true, params: {page: page + '', size : size + '', searchText: searchText}});
  }

  makeAPost(title, description, categoryId, subCategories){
    let formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", categoryId);
    formData.append("subCategories", subCategories);

    console.log(subCategories);

    let headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/x-www-form-urlencoded');
    headers_object.append("Cache-Control", "no-cache");
    return this.http.post(this.serverURL + '/savePost', formData, {headers: headers_object, withCredentials: true});
  }

  makeAComment(post, comment){
    let formData = new FormData();
    formData.append("post", JSON.stringify(post));
    formData.append("comment", comment);

    let headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/x-www-form-urlencoded');
    headers_object.append("Cache-Control", "no-cache");
    return this.http.post(this.serverURL + '/addComment', formData, {headers: headers_object, withCredentials: true});
  }
}
