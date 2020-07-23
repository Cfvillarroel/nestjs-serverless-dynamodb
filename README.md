<!--
title: 'AWS NestJS Serverless with DynamoDB'
description: 'This example demonstrates how to setup a simple [Nest](https://github.com/nestjs/nest) application.'
layout: Doc
framework: v1
platform: AWS
language: nodeJS
authorLink: 'https://github.com/cfvillarroel'
authorName: 'Carlos Villarroel'
-->

# Nest application example

This example demonstrates how to setup a [Nest](https://github.com/nestjs/nest) application.

## Use Cases

-   Setup & deploy a [Nest Application starter](https://github.com/nestjs/typescript-starter)

## Running the app locally

```bash
npm start
```

Which should result in:

```bash
$ sls offline start
Serverless: Compiling with Typescript...
Serverless: Using local tsconfig.json
Serverless: Typescript compiled.
Serverless: Watching typescript files...
Serverless: Starting Offline: dev/us-east-1.

Serverless: Routes for main:
Serverless: ANY /{proxy*}

Serverless: Offline listening on http://localhost:3000
```

Then browse http://localhost:3000/hello

The logs should be :

```bash
Serverless: ANY /hello (λ: main)
[Nest] 7956   - 2018-12-13 10:34:22   [NestFactory] Starting Nest application... +6933ms
[Nest] 7956   - 2018-12-13 10:34:22   [InstanceLoader] AppModule dependencies initialized +4ms
[Nest] 7956   - 2018-12-13 10:34:22   [RoutesResolver] AppController {/}: +2ms
[Nest] 7956   - 2018-12-13 10:34:22   [RouterExplorer] Mapped {/hello, GET} route +1ms
[Nest] 7956   - 2018-12-13 10:34:22   [NestApplication] Nest application successfully started +1ms
Serverless: [200] {"statusCode":200,"body":"Hello World!","headers":{"x-powered-by":"Express","content-type":"text/html; charset=utf-8","content-length":"12","etag":"W/\"c-Lve95gjOVATpfV8EL5X4nxwjKHE\"","date":"Thu, 13 Dec 2018 09:34:22 GMT","connection":"keep-alive"},"isBase64Encoded":false}
```

### Skiping cache invalidation

Skiping cache invalidation is the same behavior as a deployed function

```bash
npm start -- --skipCacheInvalidation
```

## Deploy

In order to deploy the endpoint, simply run:

```bash
sls deploy
```

The expected result should be similar to:

```bash
$ sls deploy
Serverless: Compiling with Typescript...
Serverless: Using local tsconfig.json
Serverless: Typescript compiled.
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
.....
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service .zip file to S3 (32.6 MB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
..............................
Serverless: Stack update finished...
Service Information
service: serverless-nest-example
stage: dev
region: us-east-1
stack: serverless-nest-example-dev
api keys:
  None
endpoints:
  ANY - https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/{proxy?}
functions:
  main: serverless-nest-example-dev-main
layers:
  None
```

## Usage

Send an HTTP request directly to the endpoint using a tool like curl

```bash
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/hello
```

## Tail logs

```bash
sls logs --function main --tail
```

Enable the plugin

```yaml
plugins:
    - serverless-plugin-typescript
    - serverless-plugin-optimize
    - serverless-offline
```
