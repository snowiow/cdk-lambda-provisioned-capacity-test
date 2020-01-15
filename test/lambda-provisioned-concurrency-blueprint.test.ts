import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import LambdaProvisionedConcurrencyBlueprint = require('../lib/lambda-provisioned-concurrency-blueprint-stack');

test('SQS Queue Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new LambdaProvisionedConcurrencyBlueprint.LambdaProvisionedConcurrencyBlueprintStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(haveResource("AWS::SQS::Queue",{
      VisibilityTimeout: 300
    }));
});

test('SNS Topic Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new LambdaProvisionedConcurrencyBlueprint.LambdaProvisionedConcurrencyBlueprintStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(haveResource("AWS::SNS::Topic"));
});
