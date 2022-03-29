#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CiCdAwsPipelineDemoStack } from "../lib/cdk-pipeline-stack";

const app = new cdk.App();
new CiCdAwsPipelineDemoStack(app, "CiCdAwsPipelineDemoStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
