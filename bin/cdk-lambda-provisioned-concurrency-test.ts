#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkLambdaProvisionedConcurrencyTestStack } from '../lib/cdk-lambda-provisioned-concurrency-test-stack';

const app = new cdk.App();
new CdkLambdaProvisionedConcurrencyTestStack(app, 'CdkLambdaProvisionedConcurrencyTestStack');
