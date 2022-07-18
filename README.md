# Photo Search

## This is the repo to hold AWS Lambda code for getting the curated photos from Pexel endpoint

### This lambda function uses the API provided by [Pexel](https://www.pexels.com/api/documentation/)

### In order to run this code base locally or in AWS Lambda, you would need a API key which can be created using above link

### This repo exposes two endpoints using API Gateway as mentioned below

- Get all Curated photos
  This is a `GET` endpoint - `staging/curated-photos`
  It returns all the curated photos from the Pexel Endpoint

- Get photos based on search string
  This is a `POST` endpoint - `staging/curated-photos`
  It takes request body as below -
  ```shell
  {
      "query": "Tiger"
  }
  ```
  and return list of curated photos based on above string from Pexel
