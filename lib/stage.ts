import { Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { ExpressDockerTestStack } from "./express-docker-test-stack";

export class MyPipelineAppStage extends Stage {
  constructor(scope: Construct, stageName: string, props?: StageProps) {
    super(scope, stageName, props);

    const stack = new ExpressDockerTestStack(
      this,
      "ExpressDockerTestStack",
      stageName
    );
  }
}
