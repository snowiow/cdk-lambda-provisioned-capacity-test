import * as cdk from '@aws-cdk/core';
import lambda = require('@aws-cdk/aws-lambda');
import apigw = require('@aws-cdk/aws-apigateway');

export class CdkLambdaProvisionedConcurrencyTestStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const version = this.node.tryGetContext("version");
    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.asset('lambda'),
      handler: 'hello.handler'
    })

    const lambdaVersion = hello.addVersion(version, undefined, undefined, 1)
    const alias = new lambda.Alias(this, 'lambdaAlias', {
      aliasName: 'prd',
      version: lambdaVersion,
    })

    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: hello
    })
  }
}
