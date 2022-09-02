import { Posts } from './../common/classes/posts';
import { Follower } from './../common/classes/follower';
import { Order } from './../common/classes/order';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { delay, Observable, of } from 'rxjs';

@Injectable()
export class FakeBackendHttpInterceptor implements HttpInterceptor{

  constructor(private http:HttpClient){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return this.handleRequests(req,next);
    }

    handleRequests(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
      //Token taken from JWT.io
      let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMjA3MjgwMTkiLCJuYW1lIjoiQmVhdHJpeiBSb2phcyIsImVtYWlsIjoiYnJvamFzQG9wdGltYWZhbWlseXNlcnZpY2VzLmNvbSIsInJvbGUiOiJzZWN1cml0eS1hZG1pbiIsImlhdCI6MTUxNjIzOTAyMn0.F7M32WeqPTpo0FGXWPoAHGkaiDsusk8zuUObvamZ8kY';
      //The mock data for the orders, followers and posts
      const orders:Order[]=[
          { id: 12, name: 'Dr. Nice' },
          { id: 13, name: 'Bombasto' },
          { id: 14, name: 'Celeritas' },
          { id: 15, name: 'Magneta' },
          { id: 16, name: 'RubberMan' },
          { id: 17, name: 'Dynama' },
          { id: 18, name: 'Dr. IQ' },
          { id: 19, name: 'Magma' },
          { id: 20, name: 'Tornado' }
      ];
      const followers:Follower[]=[
        {
          login: "henriquebastos",
          id: 12066,
          node_id: "MDQ6VXNlcjEyMDY2",
          avatar_url: "https://avatars.githubusercontent.com/u/12066?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/henriquebastos",
          html_url: "https://github.com/henriquebastos",
          followers_url: "https://api.github.com/users/henriquebastos/followers",
          following_url: "https://api.github.com/users/henriquebastos/following{/other_user}",
          gists_url: "https://api.github.com/users/henriquebastos/gists{/gist_id}",
          starred_url: "https://api.github.com/users/henriquebastos/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/henriquebastos/subscriptions",
          organizations_url: "https://api.github.com/users/henriquebastos/orgs",
          repos_url: "https://api.github.com/users/henriquebastos/repos",
          events_url: "https://api.github.com/users/henriquebastos/events{/privacy}",
          received_events_url: "https://api.github.com/users/henriquebastos/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "marka2g",
          id: 12756,
          node_id: "MDQ6VXNlcjEyNzU2",
          avatar_url: "https://avatars.githubusercontent.com/u/12756?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/marka2g",
          html_url: "https://github.com/marka2g",
          followers_url: "https://api.github.com/users/marka2g/followers",
          following_url: "https://api.github.com/users/marka2g/following{/other_user}",
          gists_url: "https://api.github.com/users/marka2g/gists{/gist_id}",
          starred_url: "https://api.github.com/users/marka2g/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/marka2g/subscriptions",
          organizations_url: "https://api.github.com/users/marka2g/orgs",
          repos_url: "https://api.github.com/users/marka2g/repos",
          events_url: "https://api.github.com/users/marka2g/events{/privacy}",
          received_events_url: "https://api.github.com/users/marka2g/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "greglamb",
          id: 23214,
          node_id: "MDQ6VXNlcjIzMjE0",
          avatar_url: "https://avatars.githubusercontent.com/u/23214?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/greglamb",
          html_url: "https://github.com/greglamb",
          followers_url: "https://api.github.com/users/greglamb/followers",
          following_url: "https://api.github.com/users/greglamb/following{/other_user}",
          gists_url: "https://api.github.com/users/greglamb/gists{/gist_id}",
          starred_url: "https://api.github.com/users/greglamb/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/greglamb/subscriptions",
          organizations_url: "https://api.github.com/users/greglamb/orgs",
          repos_url: "https://api.github.com/users/greglamb/repos",
          events_url: "https://api.github.com/users/greglamb/events{/privacy}",
          received_events_url: "https://api.github.com/users/greglamb/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "davidsheardown",
          id: 50805,
          node_id: "MDQ6VXNlcjUwODA1",
          avatar_url: "https://avatars.githubusercontent.com/u/50805?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/davidsheardown",
          html_url: "https://github.com/davidsheardown",
          followers_url: "https://api.github.com/users/davidsheardown/followers",
          following_url: "https://api.github.com/users/davidsheardown/following{/other_user}",
          gists_url: "https://api.github.com/users/davidsheardown/gists{/gist_id}",
          starred_url: "https://api.github.com/users/davidsheardown/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/davidsheardown/subscriptions",
          organizations_url: "https://api.github.com/users/davidsheardown/orgs",
          repos_url: "https://api.github.com/users/davidsheardown/repos",
          events_url: "https://api.github.com/users/davidsheardown/events{/privacy}",
          received_events_url: "https://api.github.com/users/davidsheardown/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "flojon",
          id: 52005,
          node_id: "MDQ6VXNlcjUyMDA1",
          avatar_url: "https://avatars.githubusercontent.com/u/52005?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/flojon",
          html_url: "https://github.com/flojon",
          followers_url: "https://api.github.com/users/flojon/followers",
          following_url: "https://api.github.com/users/flojon/following{/other_user}",
          gists_url: "https://api.github.com/users/flojon/gists{/gist_id}",
          starred_url: "https://api.github.com/users/flojon/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/flojon/subscriptions",
          organizations_url: "https://api.github.com/users/flojon/orgs",
          repos_url: "https://api.github.com/users/flojon/repos",
          events_url: "https://api.github.com/users/flojon/events{/privacy}",
          received_events_url: "https://api.github.com/users/flojon/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "lbarinstein",
          id: 53396,
          node_id: "MDQ6VXNlcjUzMzk2",
          avatar_url: "https://avatars.githubusercontent.com/u/53396?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/lbarinstein",
          html_url: "https://github.com/lbarinstein",
          followers_url: "https://api.github.com/users/lbarinstein/followers",
          following_url: "https://api.github.com/users/lbarinstein/following{/other_user}",
          gists_url: "https://api.github.com/users/lbarinstein/gists{/gist_id}",
          starred_url: "https://api.github.com/users/lbarinstein/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/lbarinstein/subscriptions",
          organizations_url: "https://api.github.com/users/lbarinstein/orgs",
          repos_url: "https://api.github.com/users/lbarinstein/repos",
          events_url: "https://api.github.com/users/lbarinstein/events{/privacy}",
          received_events_url: "https://api.github.com/users/lbarinstein/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "fclebio",
          id: 67190,
          node_id: "MDQ6VXNlcjY3MTkw",
          avatar_url: "https://avatars.githubusercontent.com/u/67190?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/fclebio",
          html_url: "https://github.com/fclebio",
          followers_url: "https://api.github.com/users/fclebio/followers",
          following_url: "https://api.github.com/users/fclebio/following{/other_user}",
          gists_url: "https://api.github.com/users/fclebio/gists{/gist_id}",
          starred_url: "https://api.github.com/users/fclebio/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/fclebio/subscriptions",
          organizations_url: "https://api.github.com/users/fclebio/orgs",
          repos_url: "https://api.github.com/users/fclebio/repos",
          events_url: "https://api.github.com/users/fclebio/events{/privacy}",
          received_events_url: "https://api.github.com/users/fclebio/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "esin",
          id: 69767,
          node_id: "MDQ6VXNlcjY5NzY3",
          avatar_url: "https://avatars.githubusercontent.com/u/69767?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/esin",
          html_url: "https://github.com/esin",
          followers_url: "https://api.github.com/users/esin/followers",
          following_url: "https://api.github.com/users/esin/following{/other_user}",
          gists_url: "https://api.github.com/users/esin/gists{/gist_id}",
          starred_url: "https://api.github.com/users/esin/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/esin/subscriptions",
          organizations_url: "https://api.github.com/users/esin/orgs",
          repos_url: "https://api.github.com/users/esin/repos",
          events_url: "https://api.github.com/users/esin/events{/privacy}",
          received_events_url: "https://api.github.com/users/esin/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "josoroma",
          id: 69951,
          node_id: "MDQ6VXNlcjY5OTUx",
          avatar_url: "https://avatars.githubusercontent.com/u/69951?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/josoroma",
          html_url: "https://github.com/josoroma",
          followers_url: "https://api.github.com/users/josoroma/followers",
          following_url: "https://api.github.com/users/josoroma/following{/other_user}",
          gists_url: "https://api.github.com/users/josoroma/gists{/gist_id}",
          starred_url: "https://api.github.com/users/josoroma/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/josoroma/subscriptions",
          organizations_url: "https://api.github.com/users/josoroma/orgs",
          repos_url: "https://api.github.com/users/josoroma/repos",
          events_url: "https://api.github.com/users/josoroma/events{/privacy}",
          received_events_url: "https://api.github.com/users/josoroma/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "cjwang",
          id: 72622,
          node_id: "MDQ6VXNlcjcyNjIy",
          avatar_url: "https://avatars.githubusercontent.com/u/72622?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/cjwang",
          html_url: "https://github.com/cjwang",
          followers_url: "https://api.github.com/users/cjwang/followers",
          following_url: "https://api.github.com/users/cjwang/following{/other_user}",
          gists_url: "https://api.github.com/users/cjwang/gists{/gist_id}",
          starred_url: "https://api.github.com/users/cjwang/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/cjwang/subscriptions",
          organizations_url: "https://api.github.com/users/cjwang/orgs",
          repos_url: "https://api.github.com/users/cjwang/repos",
          events_url: "https://api.github.com/users/cjwang/events{/privacy}",
          received_events_url: "https://api.github.com/users/cjwang/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "FrancescoBorzi",
          id: 75517,
          node_id: "MDQ6VXNlcjc1NTE3",
          avatar_url: "https://avatars.githubusercontent.com/u/75517?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/FrancescoBorzi",
          html_url: "https://github.com/FrancescoBorzi",
          followers_url: "https://api.github.com/users/FrancescoBorzi/followers",
          following_url: "https://api.github.com/users/FrancescoBorzi/following{/other_user}",
          gists_url: "https://api.github.com/users/FrancescoBorzi/gists{/gist_id}",
          starred_url: "https://api.github.com/users/FrancescoBorzi/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/FrancescoBorzi/subscriptions",
          organizations_url: "https://api.github.com/users/FrancescoBorzi/orgs",
          repos_url: "https://api.github.com/users/FrancescoBorzi/repos",
          events_url: "https://api.github.com/users/FrancescoBorzi/events{/privacy}",
          received_events_url: "https://api.github.com/users/FrancescoBorzi/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "lkruscic",
          id: 77401,
          node_id: "MDQ6VXNlcjc3NDAx",
          avatar_url: "https://avatars.githubusercontent.com/u/77401?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/lkruscic",
          html_url: "https://github.com/lkruscic",
          followers_url: "https://api.github.com/users/lkruscic/followers",
          following_url: "https://api.github.com/users/lkruscic/following{/other_user}",
          gists_url: "https://api.github.com/users/lkruscic/gists{/gist_id}",
          starred_url: "https://api.github.com/users/lkruscic/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/lkruscic/subscriptions",
          organizations_url: "https://api.github.com/users/lkruscic/orgs",
          repos_url: "https://api.github.com/users/lkruscic/repos",
          events_url: "https://api.github.com/users/lkruscic/events{/privacy}",
          received_events_url: "https://api.github.com/users/lkruscic/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "mahdimp",
          id: 106799,
          node_id: "MDQ6VXNlcjEwNjc5OQ==",
          avatar_url: "https://avatars.githubusercontent.com/u/106799?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/mahdimp",
          html_url: "https://github.com/mahdimp",
          followers_url: "https://api.github.com/users/mahdimp/followers",
          following_url: "https://api.github.com/users/mahdimp/following{/other_user}",
          gists_url: "https://api.github.com/users/mahdimp/gists{/gist_id}",
          starred_url: "https://api.github.com/users/mahdimp/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/mahdimp/subscriptions",
          organizations_url: "https://api.github.com/users/mahdimp/orgs",
          repos_url: "https://api.github.com/users/mahdimp/repos",
          events_url: "https://api.github.com/users/mahdimp/events{/privacy}",
          received_events_url: "https://api.github.com/users/mahdimp/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "qtrung1305",
          id: 110528,
          node_id: "MDQ6VXNlcjExMDUyOA==",
          avatar_url: "https://avatars.githubusercontent.com/u/110528?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/qtrung1305",
          html_url: "https://github.com/qtrung1305",
          followers_url: "https://api.github.com/users/qtrung1305/followers",
          following_url: "https://api.github.com/users/qtrung1305/following{/other_user}",
          gists_url: "https://api.github.com/users/qtrung1305/gists{/gist_id}",
          starred_url: "https://api.github.com/users/qtrung1305/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/qtrung1305/subscriptions",
          organizations_url: "https://api.github.com/users/qtrung1305/orgs",
          repos_url: "https://api.github.com/users/qtrung1305/repos",
          events_url: "https://api.github.com/users/qtrung1305/events{/privacy}",
          received_events_url: "https://api.github.com/users/qtrung1305/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "ganeshan",
          id: 115037,
          node_id: "MDQ6VXNlcjExNTAzNw==",
          avatar_url: "https://avatars.githubusercontent.com/u/115037?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/ganeshan",
          html_url: "https://github.com/ganeshan",
          followers_url: "https://api.github.com/users/ganeshan/followers",
          following_url: "https://api.github.com/users/ganeshan/following{/other_user}",
          gists_url: "https://api.github.com/users/ganeshan/gists{/gist_id}",
          starred_url: "https://api.github.com/users/ganeshan/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/ganeshan/subscriptions",
          organizations_url: "https://api.github.com/users/ganeshan/orgs",
          repos_url: "https://api.github.com/users/ganeshan/repos",
          events_url: "https://api.github.com/users/ganeshan/events{/privacy}",
          received_events_url: "https://api.github.com/users/ganeshan/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "Seefer",
          id: 129484,
          node_id: "MDQ6VXNlcjEyOTQ4NA==",
          avatar_url: "https://avatars.githubusercontent.com/u/129484?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Seefer",
          html_url: "https://github.com/Seefer",
          followers_url: "https://api.github.com/users/Seefer/followers",
          following_url: "https://api.github.com/users/Seefer/following{/other_user}",
          gists_url: "https://api.github.com/users/Seefer/gists{/gist_id}",
          starred_url: "https://api.github.com/users/Seefer/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/Seefer/subscriptions",
          organizations_url: "https://api.github.com/users/Seefer/orgs",
          repos_url: "https://api.github.com/users/Seefer/repos",
          events_url: "https://api.github.com/users/Seefer/events{/privacy}",
          received_events_url: "https://api.github.com/users/Seefer/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "freeleons",
          id: 135930,
          node_id: "MDQ6VXNlcjEzNTkzMA==",
          avatar_url: "https://avatars.githubusercontent.com/u/135930?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/freeleons",
          html_url: "https://github.com/freeleons",
          followers_url: "https://api.github.com/users/freeleons/followers",
          following_url: "https://api.github.com/users/freeleons/following{/other_user}",
          gists_url: "https://api.github.com/users/freeleons/gists{/gist_id}",
          starred_url: "https://api.github.com/users/freeleons/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/freeleons/subscriptions",
          organizations_url: "https://api.github.com/users/freeleons/orgs",
          repos_url: "https://api.github.com/users/freeleons/repos",
          events_url: "https://api.github.com/users/freeleons/events{/privacy}",
          received_events_url: "https://api.github.com/users/freeleons/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "pooyar",
          id: 138364,
          node_id: "MDQ6VXNlcjEzODM2NA==",
          avatar_url: "https://avatars.githubusercontent.com/u/138364?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/pooyar",
          html_url: "https://github.com/pooyar",
          followers_url: "https://api.github.com/users/pooyar/followers",
          following_url: "https://api.github.com/users/pooyar/following{/other_user}",
          gists_url: "https://api.github.com/users/pooyar/gists{/gist_id}",
          starred_url: "https://api.github.com/users/pooyar/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/pooyar/subscriptions",
          organizations_url: "https://api.github.com/users/pooyar/orgs",
          repos_url: "https://api.github.com/users/pooyar/repos",
          events_url: "https://api.github.com/users/pooyar/events{/privacy}",
          received_events_url: "https://api.github.com/users/pooyar/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "etangreal",
          id: 144399,
          node_id: "MDQ6VXNlcjE0NDM5OQ==",
          avatar_url: "https://avatars.githubusercontent.com/u/144399?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/etangreal",
          html_url: "https://github.com/etangreal",
          followers_url: "https://api.github.com/users/etangreal/followers",
          following_url: "https://api.github.com/users/etangreal/following{/other_user}",
          gists_url: "https://api.github.com/users/etangreal/gists{/gist_id}",
          starred_url: "https://api.github.com/users/etangreal/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/etangreal/subscriptions",
          organizations_url: "https://api.github.com/users/etangreal/orgs",
          repos_url: "https://api.github.com/users/etangreal/repos",
          events_url: "https://api.github.com/users/etangreal/events{/privacy}",
          received_events_url: "https://api.github.com/users/etangreal/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "asiermarques",
          id: 149459,
          node_id: "MDQ6VXNlcjE0OTQ1OQ==",
          avatar_url: "https://avatars.githubusercontent.com/u/149459?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/asiermarques",
          html_url: "https://github.com/asiermarques",
          followers_url: "https://api.github.com/users/asiermarques/followers",
          following_url: "https://api.github.com/users/asiermarques/following{/other_user}",
          gists_url: "https://api.github.com/users/asiermarques/gists{/gist_id}",
          starred_url: "https://api.github.com/users/asiermarques/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/asiermarques/subscriptions",
          organizations_url: "https://api.github.com/users/asiermarques/orgs",
          repos_url: "https://api.github.com/users/asiermarques/repos",
          events_url: "https://api.github.com/users/asiermarques/events{/privacy}",
          received_events_url: "https://api.github.com/users/asiermarques/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "ududsha",
          id: 160325,
          node_id: "MDQ6VXNlcjE2MDMyNQ==",
          avatar_url: "https://avatars.githubusercontent.com/u/160325?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/ududsha",
          html_url: "https://github.com/ududsha",
          followers_url: "https://api.github.com/users/ududsha/followers",
          following_url: "https://api.github.com/users/ududsha/following{/other_user}",
          gists_url: "https://api.github.com/users/ududsha/gists{/gist_id}",
          starred_url: "https://api.github.com/users/ududsha/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/ududsha/subscriptions",
          organizations_url: "https://api.github.com/users/ududsha/orgs",
          repos_url: "https://api.github.com/users/ududsha/repos",
          events_url: "https://api.github.com/users/ududsha/events{/privacy}",
          received_events_url: "https://api.github.com/users/ududsha/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "ebnovaes",
          id: 168989,
          node_id: "MDQ6VXNlcjE2ODk4OQ==",
          avatar_url: "https://avatars.githubusercontent.com/u/168989?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/ebnovaes",
          html_url: "https://github.com/ebnovaes",
          followers_url: "https://api.github.com/users/ebnovaes/followers",
          following_url: "https://api.github.com/users/ebnovaes/following{/other_user}",
          gists_url: "https://api.github.com/users/ebnovaes/gists{/gist_id}",
          starred_url: "https://api.github.com/users/ebnovaes/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/ebnovaes/subscriptions",
          organizations_url: "https://api.github.com/users/ebnovaes/orgs",
          repos_url: "https://api.github.com/users/ebnovaes/repos",
          events_url: "https://api.github.com/users/ebnovaes/events{/privacy}",
          received_events_url: "https://api.github.com/users/ebnovaes/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "calendarw",
          id: 169761,
          node_id: "MDQ6VXNlcjE2OTc2MQ==",
          avatar_url: "https://avatars.githubusercontent.com/u/169761?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/calendarw",
          html_url: "https://github.com/calendarw",
          followers_url: "https://api.github.com/users/calendarw/followers",
          following_url: "https://api.github.com/users/calendarw/following{/other_user}",
          gists_url: "https://api.github.com/users/calendarw/gists{/gist_id}",
          starred_url: "https://api.github.com/users/calendarw/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/calendarw/subscriptions",
          organizations_url: "https://api.github.com/users/calendarw/orgs",
          repos_url: "https://api.github.com/users/calendarw/repos",
          events_url: "https://api.github.com/users/calendarw/events{/privacy}",
          received_events_url: "https://api.github.com/users/calendarw/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "philpalmieri",
          id: 170333,
          node_id: "MDQ6VXNlcjE3MDMzMw==",
          avatar_url: "https://avatars.githubusercontent.com/u/170333?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/philpalmieri",
          html_url: "https://github.com/philpalmieri",
          followers_url: "https://api.github.com/users/philpalmieri/followers",
          following_url: "https://api.github.com/users/philpalmieri/following{/other_user}",
          gists_url: "https://api.github.com/users/philpalmieri/gists{/gist_id}",
          starred_url: "https://api.github.com/users/philpalmieri/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/philpalmieri/subscriptions",
          organizations_url: "https://api.github.com/users/philpalmieri/orgs",
          repos_url: "https://api.github.com/users/philpalmieri/repos",
          events_url: "https://api.github.com/users/philpalmieri/events{/privacy}",
          received_events_url: "https://api.github.com/users/philpalmieri/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "hepaestus",
          id: 175176,
          node_id: "MDQ6VXNlcjE3NTE3Ng==",
          avatar_url: "https://avatars.githubusercontent.com/u/175176?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/hepaestus",
          html_url: "https://github.com/hepaestus",
          followers_url: "https://api.github.com/users/hepaestus/followers",
          following_url: "https://api.github.com/users/hepaestus/following{/other_user}",
          gists_url: "https://api.github.com/users/hepaestus/gists{/gist_id}",
          starred_url: "https://api.github.com/users/hepaestus/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/hepaestus/subscriptions",
          organizations_url: "https://api.github.com/users/hepaestus/orgs",
          repos_url: "https://api.github.com/users/hepaestus/repos",
          events_url: "https://api.github.com/users/hepaestus/events{/privacy}",
          received_events_url: "https://api.github.com/users/hepaestus/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "ksurma",
          id: 175821,
          node_id: "MDQ6VXNlcjE3NTgyMQ==",
          avatar_url: "https://avatars.githubusercontent.com/u/175821?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/ksurma",
          html_url: "https://github.com/ksurma",
          followers_url: "https://api.github.com/users/ksurma/followers",
          following_url: "https://api.github.com/users/ksurma/following{/other_user}",
          gists_url: "https://api.github.com/users/ksurma/gists{/gist_id}",
          starred_url: "https://api.github.com/users/ksurma/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/ksurma/subscriptions",
          organizations_url: "https://api.github.com/users/ksurma/orgs",
          repos_url: "https://api.github.com/users/ksurma/repos",
          events_url: "https://api.github.com/users/ksurma/events{/privacy}",
          received_events_url: "https://api.github.com/users/ksurma/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "sadeghhp",
          id: 195273,
          node_id: "MDQ6VXNlcjE5NTI3Mw==",
          avatar_url: "https://avatars.githubusercontent.com/u/195273?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/sadeghhp",
          html_url: "https://github.com/sadeghhp",
          followers_url: "https://api.github.com/users/sadeghhp/followers",
          following_url: "https://api.github.com/users/sadeghhp/following{/other_user}",
          gists_url: "https://api.github.com/users/sadeghhp/gists{/gist_id}",
          starred_url: "https://api.github.com/users/sadeghhp/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/sadeghhp/subscriptions",
          organizations_url: "https://api.github.com/users/sadeghhp/orgs",
          repos_url: "https://api.github.com/users/sadeghhp/repos",
          events_url: "https://api.github.com/users/sadeghhp/events{/privacy}",
          received_events_url: "https://api.github.com/users/sadeghhp/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "shaynemeyer",
          id: 199832,
          node_id: "MDQ6VXNlcjE5OTgzMg==",
          avatar_url: "https://avatars.githubusercontent.com/u/199832?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/shaynemeyer",
          html_url: "https://github.com/shaynemeyer",
          followers_url: "https://api.github.com/users/shaynemeyer/followers",
          following_url: "https://api.github.com/users/shaynemeyer/following{/other_user}",
          gists_url: "https://api.github.com/users/shaynemeyer/gists{/gist_id}",
          starred_url: "https://api.github.com/users/shaynemeyer/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/shaynemeyer/subscriptions",
          organizations_url: "https://api.github.com/users/shaynemeyer/orgs",
          repos_url: "https://api.github.com/users/shaynemeyer/repos",
          events_url: "https://api.github.com/users/shaynemeyer/events{/privacy}",
          received_events_url: "https://api.github.com/users/shaynemeyer/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "BennySkogberg",
          id: 200863,
          node_id: "MDQ6VXNlcjIwMDg2Mw==",
          avatar_url: "https://avatars.githubusercontent.com/u/200863?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/BennySkogberg",
          html_url: "https://github.com/BennySkogberg",
          followers_url: "https://api.github.com/users/BennySkogberg/followers",
          following_url: "https://api.github.com/users/BennySkogberg/following{/other_user}",
          gists_url: "https://api.github.com/users/BennySkogberg/gists{/gist_id}",
          starred_url: "https://api.github.com/users/BennySkogberg/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/BennySkogberg/subscriptions",
          organizations_url: "https://api.github.com/users/BennySkogberg/orgs",
          repos_url: "https://api.github.com/users/BennySkogberg/repos",
          events_url: "https://api.github.com/users/BennySkogberg/events{/privacy}",
          received_events_url: "https://api.github.com/users/BennySkogberg/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "AnmSaiful",
          id: 204376,
          node_id: "MDQ6VXNlcjIwNDM3Ng==",
          avatar_url: "https://avatars.githubusercontent.com/u/204376?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/AnmSaiful",
          html_url: "https://github.com/AnmSaiful",
          followers_url: "https://api.github.com/users/AnmSaiful/followers",
          following_url: "https://api.github.com/users/AnmSaiful/following{/other_user}",
          gists_url: "https://api.github.com/users/AnmSaiful/gists{/gist_id}",
          starred_url: "https://api.github.com/users/AnmSaiful/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/AnmSaiful/subscriptions",
          organizations_url: "https://api.github.com/users/AnmSaiful/orgs",
          repos_url: "https://api.github.com/users/AnmSaiful/repos",
          events_url: "https://api.github.com/users/AnmSaiful/events{/privacy}",
          received_events_url: "https://api.github.com/users/AnmSaiful/received_events",
          type: "User",
          site_admin: false
        }
      ];
      const posts:Posts[]=[
        {
           userId:  1,
           id:  1,
           title:  "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
           body:  "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
           userId:  1,
           id:  2,
           title:  "qui est esse",
           body:  "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
           userId:  1,
           id:  3,
           title:  "ea molestias quasi exercitationem repellat qui ipsa sit aut",
           body:  "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
           userId:  1,
           id:  4,
           title:  "eum et est occaecati",
           body:  "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
           userId:  1,
           id:  5,
           title:  "nesciunt quas odio",
           body:  "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
        {
           userId:  1,
           id:  6,
           title:  "dolorem eum magni eos aperiam quia",
           body:  "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
        },
        {
           userId:  1,
           id:  7,
           title:  "magnam facilis autem",
           body:  "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
        },
        {
           userId:  1,
           id:  8,
           title:  "dolorem dolore est ipsam",
           body:  "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
        },
        {
           userId:  1,
           id:  9,
           title:  "nesciunt iure omnis dolorem tempora et accusantium",
           body:  "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
        },
        {
           userId:  1,
           id:  10,
           title:  "optio molestias id quia eum",
           body:  "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
        },
        {
           userId:  2,
           id:  11,
           title:  "et ea vero quia laudantium autem",
           body:  "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
        },
        {
           userId:  2,
           id:  12,
           title:  "in quibusdam tempore odit est dolorem",
           body:  "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
        },
        {
           userId:  2,
           id:  13,
           title:  "dolorum ut in voluptas mollitia et saepe quo animi",
           body:  "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
        },
        {
           userId:  2,
           id:  14,
           title:  "voluptatem eligendi optio",
           body:  "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
        },
        {
           userId:  2,
           id:  15,
           title:  "eveniet quod temporibus",
           body:  "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
        },
        {
           userId:  2,
           id:  16,
           title:  "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
           body:  "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
        },
        {
           userId:  2,
           id:  17,
           title:  "fugit voluptas sed molestias voluptatem provident",
           body:  "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
        },
        {
           userId:  2,
           id:  18,
           title:  "voluptate et itaque vero tempora molestiae",
           body:  "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
        },
        {
           userId:  2,
           id:  19,
           title:  "adipisci placeat illum aut reiciendis qui",
           body:  "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
        },
        {
           userId:  2,
           id:  20,
           title:  "doloribus ad provident suscipit at",
           body:  "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
        },
        {
           userId:  3,
           id:  21,
           title:  "asperiores ea ipsam voluptatibus modi minima quia sint",
           body:  "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
        },
        {
           userId:  3,
           id:  22,
           title:  "dolor sint quo a velit explicabo quia nam",
           body:  "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
        },
        {
           userId:  3,
           id:  23,
           title:  "maxime id vitae nihil numquam",
           body:  "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
        },
        {
           userId:  3,
           id:  24,
           title:  "autem hic labore sunt dolores incidunt",
           body:  "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt"
        },
        {
           userId:  3,
           id:  25,
           title:  "rem alias distinctio quo quis",
           body:  "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio"
        },
        {
           userId:  3,
           id:  26,
           title:  "est et quae odit qui non",
           body:  "similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero"
        },
        {
           userId:  3,
           id:  27,
           title:  "quasi id et eos tenetur aut quo autem",
           body:  "eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur"
        },
        {
           userId:  3,
           id:  28,
           title:  "delectus ullam et corporis nulla voluptas sequi",
           body:  "non et quaerat ex quae ad maiores\nmaiores recusandae totam aut blanditiis mollitia quas illo\nut voluptatibus voluptatem\nsimilique nostrum eum"
        },
        {
           userId:  3,
           id:  29,
           title:  "iusto eius quod necessitatibus culpa ea",
           body:  "odit magnam ut saepe sed non qui\ntempora atque nihil\naccusamus illum doloribus illo dolor\neligendi repudiandae odit magni similique sed cum maiores"
        },
        {
           userId:  3,
           id:  30,
           title:  "a quo magni similique perferendis",
           body:  "alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia"
        },
        {
           userId:  4,
           id:  31,
           title:  "ullam ut quidem id aut vel consequuntur",
           body:  "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae"
        },
        {
           userId:  4,
           id:  32,
           title:  "doloremque illum aliquid sunt",
           body:  "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime"
        },
        {
           userId:  4,
           id:  33,
           title:  "qui explicabo molestiae dolorem",
           body:  "rerum ut et numquam laborum odit est sit\nid qui sint in\nquasi tenetur tempore aperiam et quaerat qui in\nrerum officiis sequi cumque quod"
        },
        {
           userId:  4,
           id:  34,
           title:  "magnam ut rerum iure",
           body:  "ea velit perferendis earum ut voluptatem voluptate itaque iusto\ntotam pariatur in\nnemo voluptatem voluptatem autem magni tempora minima in\nest distinctio qui assumenda accusamus dignissimos officia nesciunt nobis"
        },
        {
           userId:  4,
           id:  35,
           title:  "id nihil consequatur molestias animi provident",
           body:  "nisi error delectus possimus ut eligendi vitae\nplaceat eos harum cupiditate facilis reprehenderit voluptatem beatae\nmodi ducimus quo illum voluptas eligendi\net nobis quia fugit"
        },
        {
           userId:  4,
           id:  36,
           title:  "fuga nam accusamus voluptas reiciendis itaque",
           body:  "ad mollitia et omnis minus architecto odit\nvoluptas doloremque maxime aut non ipsa qui alias veniam\nblanditiis culpa aut quia nihil cumque facere et occaecati\nqui aspernatur quia eaque ut aperiam inventore"
        },
        {
           userId:  4,
           id:  37,
           title:  "provident vel ut sit ratione est",
           body:  "debitis et eaque non officia sed nesciunt pariatur vel\nvoluptatem iste vero et ea\nnumquam aut expedita ipsum nulla in\nvoluptates omnis consequatur aut enim officiis in quam qui"
        },
        {
           userId:  4,
           id:  38,
           title:  "explicabo et eos deleniti nostrum ab id repellendus",
           body:  "animi esse sit aut sit nesciunt assumenda eum voluptas\nquia voluptatibus provident quia necessitatibus ea\nrerum repudiandae quia voluptatem delectus fugit aut id quia\nratione optio eos iusto veniam iure"
        },
        {
           userId:  4,
           id:  39,
           title:  "eos dolorem iste accusantium est eaque quam",
           body:  "corporis rerum ducimus vel eum accusantium\nmaxime aspernatur a porro possimus iste omnis\nest in deleniti asperiores fuga aut\nvoluptas sapiente vel dolore minus voluptatem incidunt ex"
        },
        {
           userId:  4,
           id:  40,
           title:  "enim quo cumque",
           body:  "ut voluptatum aliquid illo tenetur nemo sequi quo facilis\nipsum rem optio mollitia quas\nvoluptatem eum voluptas qui\nunde omnis voluptatem iure quasi maxime voluptas nam"
        },
        {
           userId:  5,
           id:  41,
           title:  "non est facere",
           body:  "molestias id nostrum\nexcepturi molestiae dolore omnis repellendus quaerat saepe\nconsectetur iste quaerat tenetur asperiores accusamus ex ut\nnam quidem est ducimus sunt debitis saepe"
        },
        {
           userId:  5,
           id:  42,
           title:  "commodi ullam sint et excepturi error explicabo praesentium voluptas",
           body:  "odio fugit voluptatum ducimus earum autem est incidunt voluptatem\nodit reiciendis aliquam sunt sequi nulla dolorem\nnon facere repellendus voluptates quia\nratione harum vitae ut"
        },
        {
           userId:  5,
           id:  43,
           title:  "eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis",
           body:  "similique fugit est\nillum et dolorum harum et voluptate eaque quidem\nexercitationem quos nam commodi possimus cum odio nihil nulla\ndolorum exercitationem magnam ex et a et distinctio debitis"
        },
        {
           userId:  5,
           id:  44,
           title:  "optio dolor molestias sit",
           body:  "temporibus est consectetur dolore\net libero debitis vel velit laboriosam quia\nipsum quibusdam qui itaque fuga rem aut\nea et iure quam sed maxime ut distinctio quae"
        },
        {
           userId:  5,
           id:  45,
           title:  "ut numquam possimus omnis eius suscipit laudantium iure",
           body:  "est natus reiciendis nihil possimus aut provident\nex et dolor\nrepellat pariatur est\nnobis rerum repellendus dolorem autem"
        },
        {
           userId:  5,
           id:  46,
           title:  "aut quo modi neque nostrum ducimus",
           body:  "voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid"
        },
        {
           userId:  5,
           id:  47,
           title:  "quibusdam cumque rem aut deserunt",
           body:  "voluptatem assumenda ut qui ut cupiditate aut impedit veniam\noccaecati nemo illum voluptatem laudantium\nmolestiae beatae rerum ea iure soluta nostrum\neligendi et voluptate"
        },
        {
           userId:  5,
           id:  48,
           title:  "ut voluptatem illum ea doloribus itaque eos",
           body:  "voluptates quo voluptatem facilis iure occaecati\nvel assumenda rerum officia et\nillum perspiciatis ab deleniti\nlaudantium repellat ad ut et autem reprehenderit"
        },
        {
           userId:  5,
           id:  49,
           title:  "laborum non sunt aut ut assumenda perspiciatis voluptas",
           body:  "inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut"
        },
        {
           userId:  5,
           id:  50,
           title:  "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem",
           body:  "error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur"
        },
        {
           userId:  6,
           id:  51,
           title:  "soluta aliquam aperiam consequatur illo quis voluptas",
           body:  "sunt dolores aut doloribus\ndolore doloribus voluptates tempora et\ndoloremque et quo\ncum asperiores sit consectetur dolorem"
        },
        {
           userId:  6,
           id:  52,
           title:  "qui enim et consequuntur quia animi quis voluptate quibusdam",
           body:  "iusto est quibusdam fuga quas quaerat molestias\na enim ut sit accusamus enim\ntemporibus iusto accusantium provident architecto\nsoluta esse reprehenderit qui laborum"
        },
        {
           userId:  6,
           id:  53,
           title:  "ut quo aut ducimus alias",
           body:  "minima harum praesentium eum rerum illo dolore\nquasi exercitationem rerum nam\nporro quis neque quo\nconsequatur minus dolor quidem veritatis sunt non explicabo similique"
        },
        {
           userId:  6,
           id:  54,
           title:  "sit asperiores ipsam eveniet odio non quia",
           body:  "totam corporis dignissimos\nvitae dolorem ut occaecati accusamus\nex velit deserunt\net exercitationem vero incidunt corrupti mollitia"
        },
        {
           userId:  6,
           id:  55,
           title:  "sit vel voluptatem et non libero",
           body:  "debitis excepturi ea perferendis harum libero optio\neos accusamus cum fuga ut sapiente repudiandae\net ut incidunt omnis molestiae\nnihil ut eum odit"
        },
        {
           userId:  6,
           id:  56,
           title:  "qui et at rerum necessitatibus",
           body:  "aut est omnis dolores\nneque rerum quod ea rerum velit pariatur beatae excepturi\net provident voluptas corrupti\ncorporis harum reprehenderit dolores eligendi"
        },
        {
           userId:  6,
           id:  57,
           title:  "sed ab est est",
           body:  "at pariatur consequuntur earum quidem\nquo est laudantium soluta voluptatem\nqui ullam et est\net cum voluptas voluptatum repellat est"
        },
        {
           userId:  6,
           id:  58,
           title:  "voluptatum itaque dolores nisi et quasi",
           body:  "veniam voluptatum quae adipisci id\net id quia eos ad et dolorem\naliquam quo nisi sunt eos impedit error\nad similique veniam"
        },
        {
           userId:  6,
           id:  59,
           title:  "qui commodi dolor at maiores et quis id accusantium",
           body:  "perspiciatis et quam ea autem temporibus non voluptatibus qui\nbeatae a earum officia nesciunt dolores suscipit voluptas et\nanimi doloribus cum rerum quas et magni\net hic ut ut commodi expedita sunt"
        },
        {
           userId:  6,
           id:  60,
           title:  "consequatur placeat omnis quisquam quia reprehenderit fugit veritatis facere",
           body:  "asperiores sunt ab assumenda cumque modi velit\nqui esse omnis\nvoluptate et fuga perferendis voluptas\nillo ratione amet aut et omnis"
        },
        {
           userId:  7,
           id:  61,
           title:  "voluptatem doloribus consectetur est ut ducimus",
           body:  "ab nemo optio odio\ndelectus tenetur corporis similique nobis repellendus rerum omnis facilis\nvero blanditiis debitis in nesciunt doloribus dicta dolores\nmagnam minus velit"
        },
        {
           userId:  7,
           id:  62,
           title:  "beatae enim quia vel",
           body:  "enim aspernatur illo distinctio quae praesentium\nbeatae alias amet delectus qui voluptate distinctio\nodit sint accusantium autem omnis\nquo molestiae omnis ea eveniet optio"
        },
        {
           userId:  7,
           id:  63,
           title:  "voluptas blanditiis repellendus animi ducimus error sapiente et suscipit",
           body:  "enim adipisci aspernatur nemo\nnumquam omnis facere dolorem dolor ex quis temporibus incidunt\nab delectus culpa quo reprehenderit blanditiis asperiores\naccusantium ut quam in voluptatibus voluptas ipsam dicta"
        },
        {
           userId:  7,
           id:  64,
           title:  "et fugit quas eum in in aperiam quod",
           body:  "id velit blanditiis\neum ea voluptatem\nmolestiae sint occaecati est eos perspiciatis\nincidunt a error provident eaque aut aut qui"
        },
        {
           userId:  7,
           id:  65,
           title:  "consequatur id enim sunt et et",
           body:  "voluptatibus ex esse\nsint explicabo est aliquid cumque adipisci fuga repellat labore\nmolestiae corrupti ex saepe at asperiores et perferendis\nnatus id esse incidunt pariatur"
        },
        {
           userId:  7,
           id:  66,
           title:  "repudiandae ea animi iusto",
           body:  "officia veritatis tenetur vero qui itaque\nsint non ratione\nsed et ut asperiores iusto eos molestiae nostrum\nveritatis quibusdam et nemo iusto saepe"
        },
        {
           userId:  7,
           id:  67,
           title:  "aliquid eos sed fuga est maxime repellendus",
           body:  "reprehenderit id nostrum\nvoluptas doloremque pariatur sint et accusantium quia quod aspernatur\net fugiat amet\nnon sapiente et consequatur necessitatibus molestiae"
        },
        {
           userId:  7,
           id:  68,
           title:  "odio quis facere architecto reiciendis optio",
           body:  "magnam molestiae perferendis quisquam\nqui cum reiciendis\nquaerat animi amet hic inventore\nea quia deleniti quidem saepe porro velit"
        },
        {
           userId:  7,
           id:  69,
           title:  "fugiat quod pariatur odit minima",
           body:  "officiis error culpa consequatur modi asperiores et\ndolorum assumenda voluptas et vel qui aut vel rerum\nvoluptatum quisquam perspiciatis quia rerum consequatur totam quas\nsequi commodi repudiandae asperiores et saepe a"
        },
        {
           userId:  7,
           id:  70,
           title:  "voluptatem laborum magni",
           body:  "sunt repellendus quae\nest asperiores aut deleniti esse accusamus repellendus quia aut\nquia dolorem unde\neum tempora esse dolore"
        },
        {
           userId:  8,
           id:  71,
           title:  "et iusto veniam et illum aut fuga",
           body:  "occaecati a doloribus\niste saepe consectetur placeat eum voluptate dolorem et\nqui quo quia voluptas\nrerum ut id enim velit est perferendis"
        },
        {
           userId:  8,
           id:  72,
           title:  "sint hic doloribus consequatur eos non id",
           body:  "quam occaecati qui deleniti consectetur\nconsequatur aut facere quas exercitationem aliquam hic voluptas\nneque id sunt ut aut accusamus\nsunt consectetur expedita inventore velit"
        },
        {
           userId:  8,
           id:  73,
           title:  "consequuntur deleniti eos quia temporibus ab aliquid at",
           body:  "voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabo\naut eum minima consequatur\ntempore cumque quae est et\net in consequuntur voluptatem voluptates aut"
        },
        {
           userId:  8,
           id:  74,
           title:  "enim unde ratione doloribus quas enim ut sit sapiente",
           body:  "odit qui et et necessitatibus sint veniam\nmollitia amet doloremque molestiae commodi similique magnam et quam\nblanditiis est itaque\nquo et tenetur ratione occaecati molestiae tempora"
        },
        {
           userId:  8,
           id:  75,
           title:  "dignissimos eum dolor ut enim et delectus in",
           body:  "commodi non non omnis et voluptas sit\nautem aut nobis magnam et sapiente voluptatem\net laborum repellat qui delectus facilis temporibus\nrerum amet et nemo voluptate expedita adipisci error dolorem"
        },
        {
           userId:  8,
           id:  76,
           title:  "doloremque officiis ad et non perferendis",
           body:  "ut animi facere\ntotam iusto tempore\nmolestiae eum aut et dolorem aperiam\nquaerat recusandae totam odio"
        },
        {
           userId:  8,
           id:  77,
           title:  "necessitatibus quasi exercitationem odio",
           body:  "modi ut in nulla repudiandae dolorum nostrum eos\naut consequatur omnis\nut incidunt est omnis iste et quam\nvoluptates sapiente aliquam asperiores nobis amet corrupti repudiandae provident"
        },
        {
           userId:  8,
           id:  78,
           title:  "quam voluptatibus rerum veritatis",
           body:  "nobis facilis odit tempore cupiditate quia\nassumenda doloribus rerum qui ea\nillum et qui totam\naut veniam repellendus"
        },
        {
           userId:  8,
           id:  79,
           title:  "pariatur consequatur quia magnam autem omnis non amet",
           body:  "libero accusantium et et facere incidunt sit dolorem\nnon excepturi qui quia sed laudantium\nquisquam molestiae ducimus est\nofficiis esse molestiae iste et quos"
        },
        {
           userId:  8,
           id:  80,
           title:  "labore in ex et explicabo corporis aut quas",
           body:  "ex quod dolorem ea eum iure qui provident amet\nquia qui facere excepturi et repudiandae\nasperiores molestias provident\nminus incidunt vero fugit rerum sint sunt excepturi provident"
        },
        {
           userId:  9,
           id:  81,
           title:  "tempora rem veritatis voluptas quo dolores vero",
           body:  "facere qui nesciunt est voluptatum voluptatem nisi\nsequi eligendi necessitatibus ea at rerum itaque\nharum non ratione velit laboriosam quis consequuntur\nex officiis minima doloremque voluptas ut aut"
        },
        {
           userId:  9,
           id:  82,
           title:  "laudantium voluptate suscipit sunt enim enim",
           body:  "ut libero sit aut totam inventore sunt\nporro sint qui sunt molestiae\nconsequatur cupiditate qui iste ducimus adipisci\ndolor enim assumenda soluta laboriosam amet iste delectus hic"
        },
        {
           userId:  9,
           id:  83,
           title:  "odit et voluptates doloribus alias odio et",
           body:  "est molestiae facilis quis tempora numquam nihil qui\nvoluptate sapiente consequatur est qui\nnecessitatibus autem aut ipsa aperiam modi dolore numquam\nreprehenderit eius rem quibusdam"
        },
        {
           userId:  9,
           id:  84,
           title:  "optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut",
           body:  "sint molestiae magni a et quos\neaque et quasi\nut rerum debitis similique veniam\nrecusandae dignissimos dolor incidunt consequatur odio"
        },
        {
           userId:  9,
           id:  85,
           title:  "dolore veritatis porro provident adipisci blanditiis et sunt",
           body:  "similique sed nisi voluptas iusto omnis\nmollitia et quo\nassumenda suscipit officia magnam sint sed tempora\nenim provident pariatur praesentium atque animi amet ratione"
        },
        {
           userId:  9,
           id:  86,
           title:  "placeat quia et porro iste",
           body:  "quasi excepturi consequatur iste autem temporibus sed molestiae beatae\net quaerat et esse ut\nvoluptatem occaecati et vel explicabo autem\nasperiores pariatur deserunt optio"
        },
        {
           userId:  9,
           id:  87,
           title:  "nostrum quis quasi placeat",
           body:  "eos et molestiae\nnesciunt ut a\ndolores perspiciatis repellendus repellat aliquid\nmagnam sint rem ipsum est"
        },
        {
           userId:  9,
           id:  88,
           title:  "sapiente omnis fugit eos",
           body:  "consequatur omnis est praesentium\nducimus non iste\nneque hic deserunt\nvoluptatibus veniam cum et rerum sed"
        },
        {
           userId:  9,
           id:  89,
           title:  "sint soluta et vel magnam aut ut sed qui",
           body:  "repellat aut aperiam totam temporibus autem et\narchitecto magnam ut\nconsequatur qui cupiditate rerum quia soluta dignissimos nihil iure\ntempore quas est"
        },
        {
           userId:  9,
           id:  90,
           title:  "ad iusto omnis odit dolor voluptatibus",
           body:  "minus omnis soluta quia\nqui sed adipisci voluptates illum ipsam voluptatem\neligendi officia ut in\neos soluta similique molestias praesentium blanditiis"
        },
        {
           userId:  10,
           id:  91,
           title:  "aut amet sed",
           body:  "libero voluptate eveniet aperiam sed\nsunt placeat suscipit molestias\nsimilique fugit nam natus\nexpedita consequatur consequatur dolores quia eos et placeat"
        },
        {
           userId:  10,
           id:  92,
           title:  "ratione ex tenetur perferendis",
           body:  "aut et excepturi dicta laudantium sint rerum nihil\nlaudantium et at\na neque minima officia et similique libero et\ncommodi voluptate qui"
        },
        {
           userId:  10,
           id:  93,
           title:  "beatae soluta recusandae",
           body:  "dolorem quibusdam ducimus consequuntur dicta aut quo laboriosam\nvoluptatem quis enim recusandae ut sed sunt\nnostrum est odit totam\nsit error sed sunt eveniet provident qui nulla"
        },
        {
           userId:  10,
           id:  94,
           title:  "qui qui voluptates illo iste minima",
           body:  "aspernatur expedita soluta quo ab ut similique\nexpedita dolores amet\nsed temporibus distinctio magnam saepe deleniti\nomnis facilis nam ipsum natus sint similique omnis"
        },
        {
           userId:  10,
           id:  95,
           title:  "id minus libero illum nam ad officiis",
           body:  "earum voluptatem facere provident blanditiis velit laboriosam\npariatur accusamus odio saepe\ncumque dolor qui a dicta ab doloribus consequatur omnis\ncorporis cupiditate eaque assumenda ad nesciunt"
        },
        {
           userId:  10,
           id:  96,
           title:  "quaerat velit veniam amet cupiditate aut numquam ut sequi",
           body:  "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut"
        },
        {
           userId:  10,
           id:  97,
           title:  "quas fugiat ut perspiciatis vero provident",
           body:  "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam"
        },
        {
           userId:  10,
           id:  98,
           title:  "laboriosam dolor voluptates",
           body:  "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores"
        },
        {
           userId:  10,
           id:  99,
           title:  "temporibus sit alias delectus eligendi possimus magni",
           body:  "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia"
        },
        {
           userId:  10,
           id:  100,
           title:  "at nam consequatur ea labore ea harum",
           body:  "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
        }
      ];
    const {url,method} = req;

      //
      // Fake implementation of /api/authenticate
      //
      if (url.endsWith('/api/authenticate') &&
        method === 'POST') {
        let body = req.body;

        if (body.email === 'brojas@optimafamilyservices.com' && body.password === 'Optima2604!') {
          return of(new HttpResponse({
            status: 200,
            body: token
          })).pipe(delay(500));
        } else {
          return of(new HttpResponse({
            status: 400
          })).pipe(delay(500));
        }
      }

      // 
      // Fake implementation of /api/orders
      //
      if (url.endsWith('/api/orders') && 
          method === 'GET') {
        if (req.headers.get('Authorization') === 'Bearer ' + token) {
            return of(new HttpResponse({
              status:200,
              body: orders
            })).pipe(delay(500));
          } else {
            return of(new HttpResponse({
              status: 401
            })).pipe(delay(500));
        }
      }

      //
      // Fake implementation of https://jsonplaceholder.typicode.com/posts
      //
      if (url.endsWith('/posts') &&
        method === 'GET') {
        let body = req.body;
        return of(new HttpResponse({
          status: 200,
          body:  posts 
        })).pipe(delay(500));
      }

      //
      // Fake implementation of https://api.github.com/users/mosh-hamedani/followers
      //
      if (url.endsWith('/mosh-hamedani/followers') &&
        method === 'GET') {
        let body = req.body;
        return of(new HttpResponse({
          status: 200,
          body: followers
        })).pipe(delay(500));
      }

      return next.handle(req).pipe(delay(500));
    }
}

/**
* Mock backend provider definition for app.module.ts provider.
*/
export let fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendHttpInterceptor,
  multi:true,
};