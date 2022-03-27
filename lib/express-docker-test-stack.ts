import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as ecs from "aws-cdk-lib/aws-ecs";
import * as ecs_patterns from "aws-cdk-lib/aws-ecs-patterns";

export class ExpressDockerTestStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "express-docker-test-vpc");

    const cluster = new ecs.Cluster(this, "express-docker-test-cluster", {
      vpc,
      clusterName: "express-docker-test-cluster",
    });

    const expressApp = new ecs_patterns.ApplicationLoadBalancedFargateService(
      this,
      "express-docker-test-service",
      {
        cluster,
        publicLoadBalancer: true,
        // protocol: elbv2.ApplicationProtocol.HTTPS,
        // redirectHTTP: true,
        cpu: 1024,
        memoryLimitMiB: 2048,
        taskImageOptions: {
          image: ecs.ContainerImage.fromAsset("express"),
          containerPort: 3000,
        },
      }
    );
  }
}
