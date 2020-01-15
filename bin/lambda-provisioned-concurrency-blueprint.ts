#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { LambdaProvisionedConcurrencyBlueprintStack } from '../lib/lambda-provisioned-concurrency-blueprint-stack';

const app = new cdk.App();
new LambdaProvisionedConcurrencyBlueprintStack(app, 'LambdaProvisionedConcurrencyBlueprintStack');
