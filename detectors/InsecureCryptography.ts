import { SourceFile, SyntaxKind, Node, CallExpression } from "ts-morph";

import { Finding } from "../types";
import { RiskRating } from "../structures";
import { DetectorBase } from "./DetectorBase";

// Threshold for PBKDF2 iterations
const PBKDF2_ITERATION_THRESHOLD = 10000;

/**
 * Class to detect insecure cryptography usage in the source code.
 */
class InsecureCryptographyDetector extends DetectorBase {
  constructor() {
    super("InsecureCryptography", RiskRating.High);
  }

  /**
   * Runs the detector on the given source file.
   * @param {SourceFile} sourceFile - The source file to analyze.
   * @returns {Finding[]} - Array of findings with details about the detected issues.
   */
  public run(sourceFile: SourceFile): Finding[] {
    sourceFile.forEachDescendant((node: Node) => {
      if (this.isPBKDF2CallWithLowIterations(node)) {
        const callExpression = node as CallExpression;
        const iterationCount = this.getIterationCount(callExpression);
        this.addFinding(
          `Usage of PBKDF2 with low iteration count: ${iterationCount}`,
          sourceFile.getFilePath(),
          sourceFile.getLineAndColumnAtPos(node.getPos()).line
        );
      }
    });

    return this.getFindings();
  }

  /**
   * Checks if the given node is a PBKDF2 call with low iterations.
   * @param {Node} node - The node to check.
   * @returns {boolean} - True if the node is a PBKDF2 call with low iterations, false otherwise.
   */
  private isPBKDF2CallWithLowIterations(node: Node): boolean {
    if (node.getKind() !== SyntaxKind.CallExpression) {
      return false;
    }

    const callExpression = node as CallExpression;
    const functionName = callExpression.getExpression().getText().toLowerCase();

    if (!functionName.includes("pbkdf2")) {
      return false;
    }

    const args = callExpression.getArguments();
    if (args.length < 4) {
      return false;
    }

    const iterationsArg = args[2];
    if (iterationsArg.getKind() !== SyntaxKind.NumericLiteral) {
      return false;
    }

    const iterationCount = parseInt(iterationsArg.getText(), 10);
    return iterationCount < PBKDF2_ITERATION_THRESHOLD;
  }

  /**
   * Extracts the iteration count from the PBKDF2 call expression.
   * @param {CallExpression} callExpression - The PBKDF2 call expression.
   * @returns {number} - The iteration count.
   */
  private getIterationCount(callExpression: CallExpression): number {
    const iterationsArg = callExpression.getArguments()[2];
    return parseInt(iterationsArg.getText(), 10);
  }
}

export { InsecureCryptographyDetector };
